import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <style>
  {`
    /* Mobil Menü Ana Stilleri */
    .popup-mobile-menu {
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      width: 300px !important;
      height: 100vh !important;
      background: #fff !important;
      box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2) !important;
      transform: translateX(-100%) !important;
      transition: transform 0.3s ease !important;
      z-index: 1000 !important;
      padding: 20px !important;
    }

    .popup-mobile-menu.active {
      transform: translateX(0) !important;
    }

    /* Header Bilgileri (Logo ve İletişim) */
    .mobile-header-info {
      padding: 15px !important;
      text-align: center !important;
      border-bottom: 1px solid #e5e5e5 !important;
      margin-bottom: 20px !important;
    }

    .mobile-header-info img {
      display: block !important;
      margin: 0 auto 15px !important;
      max-width: 160px !important;
    }

    .mobile-header-info .header-description {
      font-size: 14px !important;
      color: #555 !important;
      margin-bottom: 15px !important;
      line-height: 1.6 !important;
      text-align: center !important;
    }

    .mobile-header-info p {
      margin: 10px 0 !important;
      font-size: 14px !important;
      color: #333 !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }

    .mobile-header-info p svg {
      margin-right: 8px !important;
      color: #6a11cb !important;
    }

    .mobile-header-info a {
      color: #333 !important;
      text-decoration: none !important;
      font-weight: 500 !important;
      font-size: 14px !important;
      transition: color 0.3s ease !important;
    }

    .mobile-header-info a:hover {
      color: #6a11cb !important;
    }

    /* Menü Elemanları */
    .mainmenu {
      list-style: none !important;
      padding: 0 !important;
      margin: 0 !important;
    }

    .mainmenu > li {
      text-align: left !important;
      margin-bottom: 15px !important;
    }

    .mainmenu > li > a {
      display: block !important;
      padding: 6px 0 !important;
      font-size: 15px !important;
      font-weight: 600 !important;
      color: #333 !important;
      text-decoration: none !important;
      transition: color 0.3s ease, transform 0.2s ease !important;
    }

    .mainmenu > li > a:hover {
      color: #6a11cb !important;
    }

    /* Alt Menü */
    .has-dropdown .submenu {
      display: none !important;
      padding-left: 15px !important;
    }

    .has-dropdown.open .submenu {
      display: block !important;
    }

    .submenu li a {
      font-size: 14px !important;
      color: #333 !important;
      text-decoration: none !important;
    }

    .submenu li a:hover {
      color: #6a11cb !important;
    }

    /* Buton Stilleri */
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

    /* Sosyal Medya İkonları */
    .social-icons {
      margin-top: 20px !important;
      display: flex !important;
      justify-content: center !important;
      gap: 15px !important;
    }

    .social-icons a {
      color: #6a11cb !important;
      font-size: 24px !important;
      text-decoration: none !important;
      transition: color 0.3s ease, transform 0.2s ease !important;
    }

    .social-icons a:hover {
      color: #2575fc !important;
      transform: scale(1.2) !important;
    }

    /* Menü Kapatma Butonu */
    .close-button {
      background: none !important;
      border: none !important;
      font-size: 20px !important;
      font-weight: bold !important;
      color: #333 !important;
      cursor: pointer !important;
      margin-bottom: 20px !important;
      transition: color 0.3s ease !important;
    }

    .close-button:hover {
      color: #6a11cb !important;
    }

    /* Sadece Mobil Görünüm İçin */
    @media (min-width: 1200px) {
      .popup-mobile-menu {
        display: none !important;
      }
    }
  `}
</style>

{/* Header */}
<header className="rbt-header">
        <div className="container-fluid">
          <div className="mainbar-row">
            {/* Logo */}
            <div className="header-left">
              <div className="logo">
                <Link to="/">
                  <img src="assets/images/logo/logo.png" alt="Logo" />
                </Link>
              </div>
            </div>

            {/* Masaüstü Menü */}
            <div className="rbt-main-navigation d-none d-xl-block">
              <nav className="mainmenu-nav">
                <ul className="mainmenu">
                  <li><Link to="/">Anasayfa</Link></li>
                  <li><Link to="/firma-profili">Firma Profili</Link></li>
                  <li className="has-dropdown">
                    <Link to="#" onClick={(e) => e.preventDefault() || e.target.closest('li').classList.toggle('open')}>
                      Kurslarımız
                    </Link>
                    <ul className="submenu">
                      <li><Link to="/online-yds-kursu">Online YDS Kursu</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/tanitim-videolari">Tanıtım Videolarımız</Link></li>
                  <li><Link to="/iletisim">İletişim</Link></li>
                </ul>
              </nav>
            </div>

            {/* Masaüstü Buton */}
            <div className="header-right">
              <div className="rbt-btn-wrapper d-none d-xl-block">
                <Link className="rbt-btn" to="/login">Online Kursa Giriş</Link>
              </div>
              {/* Mobil Menü Butonu */}
              <div className="mobile-menu-bar d-block d-xl-none">
                <button className="hamberger-button" onClick={toggleMenu}>
                  ☰
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobil Menü */}
      {menuOpen && (
        <div className="popup-mobile-menu active">
          {/* Mobil Logo ve Bilgiler */}
          <div className="mobile-header-info">
            <img src="assets/images/logo/logo.png" alt="Logo" />
            <p className="header-description">
              YDS, YÖKDİL sınavlarına en etkili hazırlık platformu. <br />
              Online eğitimlerimizle hedeflerinize emin adımlarla ilerleyin.
            </p>
            <p>
              <FaEnvelope />
              <a href="mailto:onlinesinavahazirlik@gmail.com">onlinesinavahazirlik@gmail.com</a>
            </p>
            <p>
              <FaPhone />
              <a href="tel:+905530279146">0553 027 9146</a>
            </p>
          </div>

          {/* Mobil Menü Kapatma Butonu */}
          <button className="close-button" onClick={toggleMenu}>✖</button>

          {/* Mobil Menü Linkleri */}
          <nav className="mainmenu-nav">
            <ul className="mainmenu">
              <li><Link to="/" onClick={toggleMenu}>Anasayfa</Link></li>
              <li><Link to="/firma-profili" onClick={toggleMenu}>Firma Profili</Link></li>
              <li className="has-dropdown">
                <Link to="#" onClick={(e) => e.preventDefault() || e.target.closest('li').classList.toggle('open')}>
                  Kurslarımız
                </Link>
                <ul className="submenu">
                  <li><Link to="/online-yds-kursu" onClick={toggleMenu}>Online YDS Kursu</Link></li>
                </ul>
              </li>
              <li><Link to="/tanitim-videolari" onClick={toggleMenu}>Tanıtım Videolarımız</Link></li>
              <li><Link to="/iletisim" onClick={toggleMenu}>İletişim</Link></li>
            </ul>
          </nav>

          {/* Mobil Buton */}
          <div className="mobile-menu-bottom">
            <Link to="/login" onClick={toggleMenu} className="mobile-login-button">Online Kursa Giriş</Link>
          </div>

          {/* Sosyal Medya İkonları */}
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
