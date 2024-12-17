import React from "react";
import styles from "./Privacy.module.css";
import { Helmet } from "react-helmet";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Affworld Policies</title>
        <meta
          name="description"
          content="Read AffWorld.io's Privacy Policy to understand how we collect, use, and protect your personal information. Your privacy and data security are our top priorities."
        />
        <meta
          name="keywords"
          content="AffWorld.io privacy policy, data protection, personal information, privacy practices, information security, data collection, user privacy, data privacy policy, Affworld, Affworld privacy policy"
        />
      </Helmet>
      <div className={styles.privacyContent}>
        <h2>PRIVACY POLICY</h2>
        <h3>Introduction</h3>
        <p>
          Affworld Technology ("we," "our," or "us") is committed to protecting
          your privacy. This Privacy Policy outlines how we collect, use,
          disclose, and safeguard your information when you visit our website or
          use our services.
        </p>
        <h3>
          Information We Collect
          <br />
          Personal Information:
        </h3>
        <p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Contact numter</li>
            <li>Billing information</li>
            <li>Any other information you voluntarily provide</li>
          </ul>
        </p>
        <h3>Non-Personal Information:</h3>
        <p>
          <ul>
            <li>IP address</li>
            <li>Browser type</li>
            <li>Operating system</li>
            <li>Browsing behavior</li>
            <li>Cookies and similar tracking technologies</li>
            <li>How We Use Your Information</li>
          </ul>
        </p>
        <h3>Personal Information:</h3>
        <p>
          <ul>
            <li>To provide and manage our services</li>
            <li>To process transactions</li>
            <li>To communicate with you</li>
            <li>To personalize your experience</li>
            <li>
              To send promotional materials and updates (with your consent)
            </li>
            <li>To respond to inquiries and provide customer support</li>
          </ul>
        </p>
        <h3>Non-Personal Information:</h3>
        <p>
          <ul>
            <li>To improve our website and services</li>
            <li>To analyze usage patterns</li>
            <li>To administer our website</li>
            <li>How We Share Your Information</li>
          </ul>
        </p>
        <h3>Third-Party Service Providers:</h3>
        <p>
          We may share your information with third-party service providers to
          facilitate our services (e.g., payment processors, email services).
        </p>
        <h3>Legal Requirements:</h3>
        <p>
          We may disclose your information if required by law or in response to
          legal processes.
        </p>
        <h3>Business Transfers:</h3>
        <p>
          In the event of a merger, acquisition, or sale of assets, your
          information may be transferred to the new owner. Security of Your
          Information We use administrative, technical, and physical security
          measures to protect your personal information. However, no method of
          transmission over the Internet or electronic storage is completely
          secure, and we cannot guarantee its absolute security.
          <h3>
            Your Choices
            <br />
            Opt-Out:
          </h3>
          You may opt-out of receiving promotional emails by following the
          unsubscribe link in the emails.
        </p>
        <p>
          <h3>Access and Correction:</h3> You may request access to or
          correction of your personal information by contacting us at{" "}
          <a href="mailto:privacy@affworld.io">privacy@affworld.io</a> .{" "}
          <h3>Cookies:</h3>You can set your browser to refuse cookies or alert
          you when cookies are being sent. However, some features of our website
          may not function properly without cookies.
          <h3>Changes to This Privacy Policy</h3>We may update this Privacy
          Policy from time to time. We will notify you of any changes by posting
          the new Privacy Policy on this page. You are advised to review this
          Privacy Policy periodically for any changes.
          <h3>Contact Us</h3> If you have any questions about these Terms,
          please contact us at{" "}
          <a href="mailto:privacy@affworld.io">privacy@affworld.io</a>
          or call our customer service hotline at{" "}
          <a href="tel:+971542997582">+971542997582</a>.
        </p>
      </div>
    </>
  );
};

export default Privacy;
