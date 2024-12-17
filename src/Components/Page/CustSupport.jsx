import React from "react";
import styles from "./CustSupport.module.css";
import { Helmet } from "react-helmet";
const CustSupport = () => {
  return (
    <>
      <Helmet>
        <title>Customer Support | Affworld Policies</title>
        <meta
          name="description"
          content="Get expert assistance with AffWorld.io's Customer Support. Our dedicated team is here to help you with any inquiries, troubleshooting, or technical issues you may have."
        />
        <meta
          name="keywords"
          content="AffWorld.io customer support, tech support, customer service, help center, technical assistance, support team, troubleshooting, customer inquiries, Affworld, Affworld customer support"
        />
      </Helmet>
      <div className={styles.supportContent}>
        <h2>WE'RE HERE TO HELP</h2>
        <p>
          At Affworld Technology, we value our customers and are here to assist
          you with any questions, concerns, or feedback. Please feel free to
          reach out to us through any of the following methods:
        </p>
        <h3>Customer Support:</h3>
        <p>
          Email: <a href="mailto:support@affworld.io">support@affworld.io</a>
          <br />
          Phone: <a href="tel:+971542997582">+971542997582</a>
          <br />
          Live Chat: Available on our website{" "}
          <a
            href="https://affworld.io/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.affworld.io
          </a>
        </p>
        <h3>Business Inquiries:</h3>
        <p>
          Email: <a href="mailto:business@affworld.io">business@affworld.io</a>
        </p>
        <h3>Media Inquiries:</h3>
        <p>
          Email: <a href="mailto:media@affworld.io">media@affworld.io</a>
        </p>
        <h3>Office Locations:</h3>

        <h3>Dubai Office:</h3>
        <p>
          Affworld Fz llc 226 Iridium building , Near Mall of emirates Dubai,
          UAE Office Location
        </p>
        <h3>India Office:</h3>
        <p>
          <a
            href="https://maps.app.goo.gl/rwTYWuaD8C9StUMZA"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://maps.app.goo.gl/rwTYWuaD8C9StUMZA
          </a>{" "}
          Technology Bhamashah technhub 5 th Floor, RAJASTHAN INTERNATIONAL
          CENTRE, Jaipur, Rajasthan 302020, India Office Location
        </p>
        <h3>Office Hours:</h3>
        <p>
          <strong>
            Monday to Friday: 9:00 AM - 6:00 PM (Local Time)
            <br />
            Saturday: 10:00 AM - 4:00 PM (Local Time)
            <br />
            Sunday: Closed
          </strong>
          <h3>Follow Us on Social Media:</h3>
          Facebook:{" "}
          <a
            href="https://facebook.com/people/Affworld-Technologies/61556653426093/"
            target="_blank"
            rel="noopener noreferrer"
          >
            facebook.com/people/Affworld-Technologies/61556653426093/
          </a>
          <br />
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/company/affworld-technologies"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/company/affworld-technologies
          </a>
          <br />
          Instagram:{" "}
          <a
            href="https://instagram.com/Affworld.IO"
            target="_blank"
            rel="noopener noreferrer"
          >
            instagram.com/Affworld.IO
          </a>
          <br />
          We look forward to hearing from you and assisting you with your needs.
          Your satisfaction is our top priority.
        </p>
      </div>
    </>
  );
};

export default CustSupport;
