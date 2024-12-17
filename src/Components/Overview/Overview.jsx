import styles from "./Overview.module.css";
import { CiMemoPad } from "react-icons/ci";
import { TbUserShield } from "react-icons/tb";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { MdRoundaboutRight } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoPricetagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Overview() {
  return (
    <>
      <Helmet>
        <title>Overview | Affworld Policies</title>
        <meta
          name="description"
          content="Explore Affworld's policy overview, including Terms and Conditions, Privacy Policy, Cancellation and Refund Policy, Customer Support, and Pricing Details."
        />
        <meta
          name="keywords"
          content="Affworld, policies, terms and conditions, privacy policy, refund policy, cancellation policy, customer support, pricing details"
        />
      </Helmet>
      <div className={styles.content}>
        <h3>Overview</h3>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <Link
              to={"terms-and-conditions"}
              style={{ color: "var(--text-color)" }}
            >
              <CiMemoPad className={styles.oLogo} />
              Terms and Conditions
            </Link>
          </div>
          <div className={styles.card}>
            <Link to={"privacy-policy"} style={{ color: "var(--text-color)" }}>
              <TbUserShield className={styles.oLogo} />
              Privacy Policy
            </Link>
          </div>
          <div className={styles.card}>
            <Link
              to={"cancellation-and-refund-policy"}
              style={{ color: "var(--text-color)" }}
            >
              <HiOutlineReceiptRefund className={styles.oLogo} />
              Cancellation and Refund
            </Link>
          </div>
          <div className={styles.card}>
            <Link
              to={"customer-support"}
              style={{ color: "var(--text-color)" }}
            >
              <RiCustomerService2Line className={styles.oLogo} />
              Customer Support
            </Link>
          </div>
          <div className={styles.card}>
            <Link to={"about-us"} style={{ color: "var(--text-color)" }}>
              <MdRoundaboutRight className={styles.oLogo} />
              About Us
            </Link>
          </div>
          <div className={styles.card}>
            <Link to={"pricing-details"} style={{ color: "var(--text-color)" }}>
              <IoPricetagOutline className={styles.oLogo} />
              Pricing Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
