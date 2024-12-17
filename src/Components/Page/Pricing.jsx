import React from "react";
import styles from "./Pricing.module.css";
import { Helmet } from "react-helmet";

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing Details | Affworld Policies</title>
        <meta
          name="description"
          content="Explore AffWorld.io's transparent pricing details for our IT services. Find affordable solutions tailored to your business needs with clear and competitive pricing."
        />
        <meta
          name="keywords"
          content="AffWorld.io pricing details, IT service pricing, affordable solutions, transparent pricing, cost-effective IT services, pricing plans, service costs, Affworld, Affworld pricing details"
        />
      </Helmet>
      <div className={styles.pricingContent}>
        <h2>PRICING DETAILS</h2>
        <p>
          At Affworld Technology, we believe in transparent and straightforward
          pricing. Our fixed-fee structure ensures that you know exactly what
          you’re paying for, with no hidden costs. Below are the pricing details
          for our influencer services, ad space, and other offerings.
        </p>
        <h3>Influencer Services</h3>
        <h3>Influencer Hiring:</h3>
        <p>
          <ul>
            <li>Basic Package: $500 per campaign</li>
            <li>Ideal for small-scale promotions.</li>
            <li>Includes selection and management of one influencer.</li>
            <li>Campaign duration: Up to 1 week.</li>
            <li>Standard Package: $1,500 per campaign</li>
            <br />

            <li>Suitable for medium-scale promotions.</li>
            <li>
              Includes selection and management of up to three influencers.
            </li>
            <li>Campaign duration: Up to 2 weeks.</li>
            <li>Premium Package: $3,000 per campaign</li>
            <br />

            <li>Perfect for large-scale promotions.</li>
            <li>
              Includes selection and management of up to five influencers.
            </li>
            <li>Campaign duration: Up to 1 month.</li>
          </ul>
        </p>
        <h3>Influencer Agent Services:</h3>
        <p>
          <ul>
            <li>Monthly Subscription: $1,000 per month</li>
            <li>Ongoing influencer management and contract negotiations.</li>
            <li>Continuous support and performance tracking.</li>
            <li>Annual Subscription: $10,000 per year</li>
            <li>
              All benefits of the monthly subscription with a discounted rate.
            </li>
            <li>Priority support and exclusive insights.</li>
            <li>Ad Space Purchase</li>
          </ul>
        </p>
        <h3>Fixed Ad Space Fees:</h3>
        <p>
          <ul>
            <li>Local Ad Space: $200 per week</li>
            <br />

            <li>Target a specific city or region.</li>
            <li>Suitable for localized campaigns.</li>
            <li>National Ad Space: $1,000 per week</li>
            <li>Reach audiences across the country.</li>
            <li>Ideal for national promotions.</li>
            <li>International Ad Space: $5,000 per week</li>
            <li>Global reach to multiple countries.</li>
            <li>Perfect for international campaigns.</li>
          </ul>
        </p>
        <h3>Custom Ad Space Packages:</h3>
        <p>
          Contact us at{" "}
          <a href="mailto:adspace@affworld.com">adspace@affworld.com</a> for
          tailored packages to suit your specific needs and goals.
        </p>
        <h3>Other Services</h3>
        <h3>Consulting Services:</h3>
        <p>
          <ul>
            <li>Basic Consultation: $250 per hour</li>
            <li>Marketing strategy sessions.</li>
            <li>Campaign planning and advice.</li>
            <li>Comprehensive Consultation: $2,000 per month</li>
            <li>Includes up to 10 hours of consultation.</li>
            <li>Detailed campaign analysis and ongoing support.</li>
          </ul>
        </p>
        <h3>Custom Solutions:</h3>
        <p>
          We also offer custom solutions tailored to your unique requirements.
          Please contact our sales team at{" "}
          <a href="mailto:sales@affworld.com">sales@affworld.com</a> to discuss
          your needs and get a personalized quote.
        </p>
        <h3>Agreements and Terms</h3>
        <h3>Fixed Fees:</h3>
        <p>
          All our services are provided at fixed fees, ensuring transparency and
          predictability.
          <h3>Agreements:</h3>
          We have agreements in place on both sides (clients and
          influencers/advertisers) to ensure clarity and mutual understanding of
          terms.
        </p>
        <p>
          <h3>Payment Terms:</h3>
          <ul>
            <li>Payment is required upfront for all fixed-fee services.</li>
            <li>
              For subscription services, payment is due at the beginning of each
              billing cycle.
            </li>
          </ul>
          <h3>Refund Policy:</h3>
          Please refer to our Cancellation and Refund Policy for details on
          refund eligibility and procedures.
          <h3>Contact Us</h3> For more information about our pricing or to
          request a custom quote, please contact us at{" "}
          <a href="mailto:pricing@affworld.io">pricing@affworld.io</a> or call
          <a href="tel:+971542997582">+971542997582</a>.
        </p>
      </div>
    </>
  );
};

export default Pricing;
