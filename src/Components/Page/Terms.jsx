import React from "react";
import styles from "./Terms.module.css";
import { Helmet } from "react-helmet";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | Affworld Policies</title>
        <meta
          name="description"
          content="Review AffWorld.io's Terms and Conditions to understand the rules and guidelines governing our services. Ensure a clear and fair understanding of our terms."
        />
        <meta
          name="keywords"
          content="AffWorld.io terms and conditions, service terms, user agreement, legal terms, company policies, usage guidelines, terms of service, service rules, Affworld, Affworld terms and conditions"
        />
      </Helmet>
      <div className={styles.termsContent}>
        <h2>TERMS AND CONDITIONS</h2>
        <h3>Introduction</h3>
        <p>
          These Terms and Conditions ("Terms") govern your use of the Affworld
          Technology website and services. By accessing or using our website or
          services, you agree to be bound by these Terms. Use of Our Services
        </p>
        <h3>Eligibility:</h3>
        <p>You must be at least 18 years old to use our services.</p>
        <h3>Account Registration:</h3>
        <p>
          You may be required to create an account to access certain services.
          You agree to provide accurate and complete information and keep your
          account information updated.
        </p>
        <h3>Prohibited Activities:</h3>
        <p>
          You agree not to engage in any unlawful or prohibited activities,
          including but not limited to:
          <ul>
            <li>Violating any applicable laws or regulations</li>
            <li>Infringing on the rights of others</li>
            <li>Using our services to distribute spam or malware</li>
            <li>Attempting to gain unauthorized access to our systems</li>
            <li>Intellectual Property</li>
          </ul>
          All content on our website, including text, graphics, logos, and
          software, is the property of Affworld Technology or its licensors and
          is protected by copyright and other intellectual property laws. You
          agree not to reproduce, distribute, or create derivative works from
          any content without our prior written consent.
        </p>
        <h3>
          Disclaimers
          <br />
          Service Availability:
        </h3>
        <p>
          We strive to ensure our services are available at all times, but we do
          not guarantee uninterrupted access.
        </p>
        <h3>Accuracy of Information:</h3>
        <p>
          We make reasonable efforts to provide accurate information on our
          website, but we do not warrant the accuracy, completeness, or
          reliability of any information.
        </p>
        <h3>Third-Party Links:</h3>
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for the content or practices of these websites.
          <h3>Limitation of Liability</h3>
          To the fullest extent permitted by law, Affworld Technology shall not
          be liable for any indirect, incidental, special, or consequential
          damages arising out of or in connection with your use of our services.
        </p>
        <p>
          <h3>Indemnification</h3> You agree to indemnify and hold Affworld
          Technology harmless from any claims, damages, losses, liabilities, and
          expenses arising out of or in connection with your use of our services
          or violation of these Terms. <h3>Governing Law</h3> These Terms shall
          be governed by and construed in accordance with the laws of [Your
          Jurisdiction]. Any disputes arising out of or in connection with these
          Terms shall be subject to the exclusive jurisdiction of the courts of
          [Your Jurisdiction]. <h3>Changes to These Terms</h3> We may update
          these Terms from time to time. We will notify you of any changes by
          posting the new Terms on this page. Your continued use of our services
          after any changes constitutes your acceptance of the new Terms.{" "}
          <h3>Effective Date:</h3>
          These Terms are effective as of 01/08/2024. <h3>Contact Us</h3> If you
          have any questions about these Terms, please contact us at{" "}
          <a href="mailto:support@affworld.io">support@affworld.io</a>
          or call our customer service hotline at{" "}
          <a href="tel:+971542997582">+971542997582</a>.
        </p>
      </div>
    </>
  );
};

export default Terms;
