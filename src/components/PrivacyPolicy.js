import React from 'react';
import '../PrivacyPolicy.css'; // Import CSS file for styling

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-content">
        <h1 className="privacy-policy-title">Privacy Policy</h1>
        <p className="privacy-policy-text">
          <strong>Privacy Policy</strong><br />
          This Privacy Policy describes how Sign Wave ("we", "us", or "our") collects, uses, and discloses your personal information when you use our website and services.
          <br /><br />
          <strong>1. Information We Collect</strong><br />
          We may collect the following types of personal information from you:
          <br />
          <strong>Camera Access:</strong> We may access your device's camera to capture video input for the purpose of converting sign language into audio. We do not store or transmit any video footage.<br />
          <strong>Usage Data:</strong> We may collect information about how you interact with our website and services, such as your IP address, browser type, pages visited, and timestamps.
          <br /><br />
          <strong>2. How We Use Your Information</strong><br />
          We may use your personal information for the following purposes:
          <br />
          <strong>Providing Services:</strong> To provide you with our services, including real-time conversion of sign language into audio.<br />
          <strong>Improving User Experience:</strong> To analyze usage patterns and trends to improve the functionality and user experience of our website and services.
          <br /><br />
          <strong>3. Information Sharing and Disclosure</strong><br />
          We may share your personal information in the following circumstances:
          <br />
          <strong>With Your Consent:</strong> We may share your information with third parties if you have given us consent to do so.<br />
          <strong>Service Providers:</strong> We may share your information with third-party service providers who assist us in operating our website and providing our services.
          <br /><br />
          <strong>4. Data Retention</strong><br />
          We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
          <br /><br />
          <strong>5. Security</strong><br />
          We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
          <br /><br />
          <strong>6. Your Choices</strong><br />
          You may choose not to provide certain personal information to us, but this may limit your ability to use certain features of our website and services.
          <br /><br />
          <strong>7. Changes to This Privacy Policy</strong><br />
          We may update or modify this Privacy Policy from time to time. We will notify you of any changes by posting the updated Privacy Policy on our website.
          <br /><br />
          <strong>8. Contact Us</strong><br />
          If you have any questions or concerns about this Privacy Policy, please contact us at signwave@gmail.com.
        </p>
        {/* Add more content as needed */}
      </div>
    </div>
  );
}

export default PrivacyPolicy;
