import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { CiMemoPad } from "react-icons/ci";
import { TbUserShield } from "react-icons/tb";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdRoundaboutRight } from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";
import { FaBars } from 'react-icons/fa';
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

function Sidebar({ isOpen, toggleSidebar, isDarkMode, toggleTheme }) {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
      <button className={styles.toggleButton} onClick={toggleSidebar}>
        <FaBars />
      </button>

      <ul> 
        <Link to={"/"}><li><MdOutlineDashboardCustomize className={styles.SideIcon} /> {isOpen && 'Overview'}</li></Link>
        <Link to={"terms-and-conditions"}><li><CiMemoPad className={styles.SideIcon} /> {isOpen && 'Terms and Conditions'}</li></Link>
        <Link to={"privacy-policy"}><li><TbUserShield className={styles.SideIcon} /> {isOpen && 'Privacy Policy'}</li></Link>
        <Link to={"cancellation-and-refund-policy"}><li><HiOutlineReceiptRefund  className={styles.SideIcon}/> {isOpen && 'Cancellation and Refund'}</li></Link>
        <Link to={"customer-support"}><li><RiCustomerService2Line  className={styles.SideIcon}/> {isOpen && 'Customer Support'}</li></Link>
        <Link to={"about-us"}><li><MdRoundaboutRight  className={styles.SideIcon}/> {isOpen && 'About Us'}</li></Link>
        <Link to={"pricing-details"}><li><IoPricetagOutline  className={styles.SideIcon}/> {isOpen && 'Pricing Details'}</li></Link>



        {/* <li className={styles.themeToggle} onClick={toggleTheme}>
          {isDarkMode ? <FaRegSun className={styles.SideIcon} /> : <FaRegMoon className={styles.SideIcon} />}&nbsp; {isOpen && (isDarkMode ? 'Light Mode' : 'Dark Mode')}
        </li> */}
      </ul>
    </div>
  );
}

export default Sidebar;
