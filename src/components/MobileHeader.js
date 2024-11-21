import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const MobileHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <>
           <style>
  {`
    /* Top Bar */
    .top-bar {
      display: flex !important;
      justify-content: space-between !important;
      align-items: center !important;
      background-color: #f8f9fa !important;
      padding: 10px 15px !important;
      border-bottom: 1px solid #ddd !important;
    }

    .top-bar .phone-icon {
      display: flex !important;
      align-items: center !important;
      font-size: 14px !important;
      color: #333 !important;
    }

    .top-bar .phone-icon a {
      text-decoration: none !important;
      color: #333 !important;
      margin-left: 5px !important;
      font-weight: 500 !important;
    }

    .top-bar .auth-buttons {
      display: flex !important;
      gap: 10px !important;
    }

    .top-bar .auth-buttons a {
      text-decoration: none !important;
      font-size: 14px !important;
      color: #6a11cb !important;
      font-weight: bold !important;
      border: 1px solid #6a11cb !important;
      border-radius: 4px !important;
      padding: 5px 10px !important;
      transition: all 0.3s ease !important;
    }

    .top-bar .auth-buttons a:hover {
      background-color: #6a11cb !important;
      color: #fff !important;
    }

    /* Mobile Header Bar */
    .mobile-header-bar {
      display: flex !important;
      justify-content: space-between !important;
      align-items: center !important;
      background: #FFF !important;
      padding: 15px 20px !important;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1) !important;
    }

    .mobile-header-bar .logo img {
      max-width: 200px !important;
      margin-top: 5px !important;
      cursor: pointer !important;
    }

    .mobile-header-bar .menu-icon {
      font-size: 24px !important;
      cursor: pointer !important;
      color: #000 !important;
    }

    /* Mobile Menu */
    .popup-mobile-menu {
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      width: 300px !important;
      height: 100vh !important;
      background: #fff !important; /* Arka plan BEYAZ */
      box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2) !important;
      transform: translateX(-100%) !important;
      transition: transform 0.3s ease !important;
      z-index: 1000 !important;
      padding: 20px !important;
    }

    .popup-mobile-menu.active {
      transform: translateX(0) !important;
    }

    .mobile-header-info {
      text-align: center !important;
      margin-bottom: 20px !important;
    }

    .mobile-header-info img {
      margin: 10px auto !important;
      max-width: 180px !important;
    }

    .header-description {
      font-size: 14px !important;
      color: #333 !important;
      line-height: 1.6 !important;
      margin-bottom: 15px !important;
      text-align: left !important;
    }

    .mobile-header-info p {
      display: flex !important;
      align-items: center !important;
      font-size: 14px !important;
      color: #000 !important;
      margin-bottom: 10px !important;
      text-align: left !important;
    }

    .mobile-header-info a {
      color: #000 !important;
      text-decoration: none !important;
      font-weight: 500 !important;
    }

    .mainmenu > li {
      margin-bottom: 15px !important;
    }

    .mainmenu > li > a {
      font-size: 15px !important;
      font-weight: 600 !important;
      color: #333 !important;
      text-decoration: none !important;
      transition: color 0.3s ease !important;
      text-align: left !important;
      display: block !important;
    }

    .mainmenu > li > a:hover {
      color: #6a11cb !important;
    }

    .submenu {
      list-style: none !important;
      padding: 0 !important;
      margin: 0 !important;
      display: ${dropdownOpen ? "block" : "none"} !important;
      padding-left: 15px !important;
    }

    .submenu > li > a {
      font-size: 14px !important;
      color: #333 !important;
      text-decoration: none !important;
      padding: 5px 0 !important;
      display: block !important;
      transition: color 0.3s ease !important;
    }

    .submenu > li > a:hover {
      color: #6a11cb !important;
    }

    .social-icons {
      display: flex !important;
      justify-content: center !important;
      gap: 15px !important;
      margin-top: 20px !important;
    }

    .social-icons a {
      color: #6a11cb !important;
      font-size: 20px !important;
      text-decoration: none !important;
      transition: color 0.3s ease, transform 0.2s ease !important;
    }

    .social-icons a:hover {
      color: #2575fc !important;
      transform: scale(1.2) !important;
    }

    .mobile-login-button {
      display: block !important;
      padding: 14px 22px !important;
      font-size: 17px !important;
      font-weight: bold !important;
      background: linear-gradient(to right, #6a11cb, #2575fc) !important;
      color: #fff !important;
      border-radius: 25px !important;
      text-align: center !important;
      text-decoration: none !important;
      margin-top: 20px !important;
      transition: background 0.3s ease !important;
    }

    .mobile-login-button:hover {
      background: linear-gradient(to right, #2575fc, #6a11cb) !important;
    }
  `}
</style>

            {/* Top Bar */}
            <div className="top-bar">
                <div className="phone-icon">
                    <FaPhone />
                    <a href="tel:+905530279146">0553 027 9146</a>
                </div>
                <div className="auth-buttons">
                    <Link to="/login">Giriş Yap</Link>
                    <Link to="/register">Kayıt Ol</Link>
                </div>
            </div>

            {/* Mobile Header */}
            <div className="mobile-header-bar">
                <Link to="/" className="logo">
                    <img src="assets/images/logo/logo.png" alt="Logo" />
                </Link>
                <div className="menu-icon" onClick={toggleMenu}>
                    ☰
                </div>
            </div>

            {menuOpen && (
                <div className="popup-mobile-menu active">
                    <div className="mobile-header-info">
                        <img src="assets/images/logo/logo.png" alt="Logo" />
                        <p className="header-description">
                            YDS, YÖKDİL, ALES, DGS sınavlarına en etkili hazırlık platformu. <br />
                            Online eğitimlerimizle hedeflerinize emin adımlarla ilerleyin.
                        </p>
                    </div>
                    <button className="close-button" onClick={toggleMenu}>
                        ✖
                    </button>
                    <nav className="mainmenu-nav">
                        <ul className="mainmenu">
                            <li>
                                <Link to="/" onClick={closeMenu}>Anasayfa</Link>
                            </li>
                            <li>
                                <Link to="/firma-profili" onClick={closeMenu}>Firma Profili</Link>
                            </li>
                            <li className="has-dropdown">
                                <a onClick={toggleDropdown}>
                                    Kurslarımız
                                </a>
                                <ul className="submenu">
                                    <li>
                                        <Link to="/online-yds-kursu" onClick={closeMenu}>Online YDS Kursu</Link>
                                    </li>
                                   
                                </ul>
                            </li>
                            <li>
                                <Link to="/tanitim-videolari" onClick={closeMenu}>Tanıtım Videoları</Link>
                            </li>
                            <li>
                                <Link to="/iletisim" onClick={closeMenu}>İletişim</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="social-icons">
                        <a href="https://facebook.com">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            )}
        </>
    );
};

export default MobileHeader;
