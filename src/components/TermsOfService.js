import React from 'react';
import '../TermsOfService.css'; // Import CSS file for styling

function TermsOfService() {
  return (
    <div className="terms-of-service-container">
      <div className="terms-of-service-content">
        <h1 className="terms-of-service-title">Terms of Service</h1>
        <p className="terms-of-service-text">{`Welcome to Sign Wave! These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our website or services.`}</p>
        <p className="terms-of-service-text">{`1. Description of Service

Sign Wave provides a platform that utilizes the camera of your device to convert sign language into audio in real time. Our service aims to make communication more accessible for individuals who are deaf or hard of hearing.`}</p>
        <p className="terms-of-service-text">{`2. User Conduct

You agree to use our website and services only for lawful purposes and in a manner consistent with these Terms and any applicable laws and regulations. You further agree not to:
- Use our services for any illegal or unauthorized purpose.
- Interfere with or disrupt the operation of our website or services.
- Attempt to gain unauthorized access to any part of our website or services.
- Transmit any viruses, worms, or harmful code.`}</p>
        <p className="terms-of-service-text">{`3. Privacy

We respect your privacy and are committed to protecting your personal information. Please review our Privacy Policy to understand how we collect, use, and disclose your data.`}</p>
        <p className="terms-of-service-text">{`4. Intellectual Property

All content and materials provided on our website, including text, graphics, logos, and images, are owned by Sign Wave or its licensors and are protected by intellectual property laws. You may not use, reproduce, or distribute any content from our website without our prior written consent.`}</p>
        <p className="terms-of-service-text">{`5. Disclaimer of Warranty

Our website and services are provided on an "as is" and "as available" basis, without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, error-free, or free of viruses or other harmful components.`}</p>
        <p className="terms-of-service-text">{`6. Limitation of Liability

In no event shall Sign Wave or its affiliates, partners, or licensors be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our website or services.`}</p>
        <p className="terms-of-service-text">{`7. Modifications to Terms

We reserve the right to update or modify these Terms at any time without prior notice. By continuing to use our website or services after any such changes, you agree to be bound by the revised Terms.`}</p>
        <p className="terms-of-service-text">{`8. Governing Law

These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.`}</p>
        <p className="terms-of-service-text">{`9. Contact Us

If you have any questions about these Terms, please contact us at signwave@gmail.com.`}</p>
      </div>
    </div>
  );
}

export default TermsOfService;
