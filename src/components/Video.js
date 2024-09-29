import React, { useRef, useState, useEffect } from 'react';


const CameraComponent = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [streaming, setStreaming] = useState(false);
  const [recording, setRecording] = useState(false);
  const intervalId = useRef(null);

  useEffect(() => {
    startVideoStream();
    return () => {
      stopVideoStream();
      stopRecording();
    };
  }, []);

  const startVideoStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setStreaming(true);
      console.log("Video stream started");
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const stopVideoStream = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((track) => {
        track.stop();
      });
    }
    setStreaming(false);
  };

  const startRecording = () => {
    console.log("Recording started");
    setRecording(true);

    intervalId.current = setInterval(() => {
      console.log("Attempting to send frame...");
      sendFrameToBackend();
    }, 500); // Sending frames every 500ms
  };

  const stopRecording = () => {
    console.log("Recording stopped");
    setRecording(false);

    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  };

  const sendFrameToBackend = async () => {
    if (recording) {
      console.log("Sending frame to backend...");
      const context = canvasRef.current.getContext('2d');
      context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
      const imageData = canvasRef.current.toDataURL('image/jpeg');

      try {
        const response = await fetch('http://localhost:5000/convert', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ imageData }),
        });
        const result = await response.json();
        console.log("Received prediction:", result.output);
      } catch (error) {
        console.error('Error sending data to backend:', error);
      }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Camera Component</h2>
      <div style={{ position: 'relative', width: '100%', maxWidth: '500px' }}>
        <video ref={videoRef} autoPlay style={{ width: '100%', borderRadius: '8px' }} />
        <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, display: 'none' }} width="300" height="300" />
      </div>
      <div style={{ marginTop: '16px' }}>
        <button onClick={startRecording} style={{ marginRight: '8px', padding: '8px 16px', borderRadius: '4px', backgroundColor: '#28a745', color: '#fff', border: 'none', cursor: 'pointer' }} disabled={!streaming || recording}>
          Start Recording
        </button>
        <button onClick={stopRecording} style={{ padding: '8px 16px', borderRadius: '4px', backgroundColor: '#dc3545', color: '#fff', border: 'none', cursor: 'pointer' }} disabled={!recording}>
          Stop Recording
        </button>
      </div>
    </div>
  );
};

export default CameraComponent;
