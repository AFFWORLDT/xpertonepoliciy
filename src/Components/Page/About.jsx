import React from "react";
import styles from "./About.module.css";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Affworld Policies</title>
        <meta
          name="description"
          content="Learn about AffWorld.io, an innovative IT company delivering cutting-edge solutions. Meet our expert team and explore our mission to empower businesses globally."
        />
        <meta
          name="keywords"
          content="AffWorld.io, technology experts, digital transformation, About us, Affworld, Affworld About Us"
        />
      </Helmet>
      <div className={styles.aboutContent}>
        <h2>ABOUT US</h2>
        <h3>Our Mission</h3>
        <p>
          At Affworld Technology, our mission is to revolutionize the digital
          advertising and influencer marketing landscape. We aim to empower
          businesses and influencers by providing innovative, efficient, and
          effective solutions that drive growth and success.
        </p>

        <h3>Who We Are</h3>
        <p>
          Affworld Technology is a leading technology company specializing in
          digital advertising and influencer marketing solutions. Founded in
          [Year], we have grown to become a trusted partner for businesses and
          influencers worldwide. Our team of experts is dedicated to developing
          cutting-edge technologies that make advertising and influencer
          collaborations seamless and impactful.
        </p>
        <h3>What We Do</h3>
        <p>
          Digital Advertising Solutions: We offer a comprehensive platform for
          businesses to purchase ad space globally, ensuring their messages
          reach the right audience at the right time.
        </p>
        <h3>Influencer Marketing:</h3>
        <p>
          Our platform connects brands with influencers who can authentically
          promote their products and services, driving engagement and
          conversions.
        </p>
        <h3>Influencer Agents:</h3>
        <p>
          We provide influencer agents to manage and negotiate influencer
          partnerships, ensuring that both brands and influencers achieve their
          goals.
        </p>

        <h3>Ad Space Buying:</h3>
        <p>
          With our global reach, businesses can buy ad space in various formats
          and locations, maximizing their visibility and impact. Our Values
        </p>
        <h3>Innovation:</h3>
        <p>
          We are committed to continuous innovation, developing new technologies
          and solutions that meet the evolving needs of our clients.
        </p>
        <h3>Integrity:</h3>
        <p>
          We operate with the highest standards of integrity, ensuring
          transparency and honesty in all our dealings.
          <h3>Customer-Centricity:</h3>
          Our customers are at the heart of everything we do. We strive to
          understand their needs and exceed their expectations.
        </p>
        <p>
          <h3>Collaboration:</h3>
          We believe in the power of collaboration, working closely with our
          clients and partners to achieve mutual success.
          <h3>Meet Our Team</h3>Our team is composed of industry experts,
          technologists, and creative minds who are passionate about
          transforming the digital advertising and influencer marketing
          landscape. We bring diverse perspectives and experiences to the table,
          fostering a culture of innovation and excellence.
          <h3>Our Vision</h3>
          Our vision is to be the leading technology partner for businesses and
          influencers, driving unparalleled growth and success through
          innovative digital solutions.
          <h3>Join Us on Our Journey:</h3>
          We invite you to join us on our journey to revolutionize the digital
          advertising and influencer marketing industry. Whether you are a
          business looking to expand your reach or an influencer seeking
          meaningful collaborations, Affworld Technology is here to support you.
          For more information about our services and how we can help you
          achieve your goals, please visit our website
          <a
            href="https://affworld.io/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            www.affworld.com
          </a>{" "}
          or contact us at{" "}
          <a href="mailto:support@affworld.io">support@affworld.io</a>.
        </p>
        <h3>Do visit:</h3>
        <p className={styles.borderV}>
          Bhamashah technhub 5 th Floor, RAJASTHAN INTERNATIONAL CENTRE, Jhalana
          Doongri, Jaipur, Rajasthan 302020
        </p>
      </div>
    </>
  );
};

export default About;
