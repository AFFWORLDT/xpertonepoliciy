import { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

function Navbar({ isDarkMode, toggleTheme }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Toggle function for opening/closing the menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Function to handle link clicks and close the mobile menu
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`${styles.navbar} ${isDarkMode ? styles.dark : styles.light}`}>
      <Link to={"/"} onClick={handleLinkClick}><div>
        <span  className={styles.brand}>Affworld</span> <span style={{color:"var(--text-color)"}}>Policies</span>
      </div></Link>

      <div className={styles.navLinks}>
        <Link to="/" className={styles.navLink}>Overview</Link>
        <a href="https://affworld.io/login" target="_blank" rel="noopener noreferrer" className={styles.navLink}>About</a>
        <a href="https://affworld.io/login" target="_blank" rel="noopener noreferrer" className={styles.navLink}>Contact</a>
        <input type="text" placeholder="Search documentation..." className={styles.search} />
        
      </div>
      <div className={styles.themeToggle} onClick={toggleTheme}>
              {isDarkMode ? <FaRegSun className={styles.SideIcon} /> : <FaRegMoon className={styles.SideIcon} />}
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </div>
      <button className={styles.toggleButton} onClick={toggleMenu}>
        &#9776;
      </button>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileMenuLinks}>
            
            <Link to="/" onClick={handleLinkClick}><li>Overview</li></Link>
            <a href="https://affworld.io/login" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}><li>About</li></a>
            <a href="https://affworld.io/login" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}><li>Contact</li></a>
            <Link to="terms-and-conditions" onClick={handleLinkClick}><li>Terms and Conditions</li></Link>
            <Link to="privacy-policy" onClick={handleLinkClick}><li>Privacy Policy</li></Link>
            <Link to="cancellation-and-refund-policy" onClick={handleLinkClick}><li>Cancellation and Refund</li></Link>
            <Link to="customer-support" onClick={handleLinkClick}><li>Customer Support</li></Link>
            <Link to="about-us" onClick={handleLinkClick}><li>About Us</li></Link>
            <Link to="pricing-details" onClick={handleLinkClick}><li>Pricing Details</li></Link>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
