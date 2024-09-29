import React from 'react';
import '../Accordion.css'
export default function Accordion() {
  return (
    <div className="container">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            About
          </button>
        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <p>Sign language is a vital mode of communication used by the Deaf and hard-of-hearing communities. It involves using hand gestures, facial expressions, and body language to convey meaning, bypassing the need for spoken words. Sign language is not universal—different countries and regions have their own versions, such as American Sign Language (ASL), British Sign Language (BSL), and Indian Sign Language (ISL). In the Sign-wave , sign language learning is made interactive and accessible, aiming to bridge communication gaps and foster inclusivity.</p>
          </div>
        </div>


          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Educational Resources
          </button>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <p>Explore various educational resources to learn sign language:</p>
            <ul>
              <li>Start ASL</li>
              <li>ASL University</li>
              <li>Lifeprint</li>
              <li>SignSchool</li>
              <li>Handspeak</li>
              <li>YouTube Channels</li>
              <li>Mobile Apps</li>
              <li>Offline Resources</li>
            </ul>
            <p>By utilizing these resources, you can embark on a rewarding journey of learning and understanding sign language.</p>
          </div>
        </div>

          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Offline Resources
          </button>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <p>Explore various educational resources to learn sign language:</p>
            <ol type="1">
              <li>Deaf community center</li>
              <li>libraries</li>
              <li>Tutorials</li>
            </ol>
            <p>By utilizing these resources, you can embark on a rewarding journey of learning and understanding sign language.</p>
          </div>
        </div>

          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
            How it works
          </button>
        <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <p><strong>How It Works:</strong></p>
            <ul>
              <li><em>Sign Input:</em> Users can input their ASL signs through various methods, such as webcam or video upload.</li>
              <li><em>Conversion Process:</em> Advanced machine learning algorithms, including Convolutional Neural Networks (CNNs), analyze the input and translate the ASL signs into corresponding spoken words.</li>
              <li><em>Audio Output:</em> The converted speech is played back to the user or others nearby, facilitating communication and understanding.</li>
            </ul>
          </div>
        </div>
      </div>
  );
}
