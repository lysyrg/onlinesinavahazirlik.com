import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Stil dosyanız

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="rbt-header rbt-header-10">
        <div className="rbt-sticky-placeholder"></div>
        <div className="rbt-header-wrapper header-space-betwween header-transparent header-sticky">
          <div className="container-fluid">
            <div className="mainbar-row rbt-navigation-start align-items-center">
              <div className="header-left rbt-header-content">
                <div className="header-info">
                  <div className="logo">
                    <Link to="/">
                      <img src="assets/images/logo/logo.png" alt="Online Sınava Hazırlık" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rbt-main-navigation d-none d-xl-block">
                <nav className="mainmenu-nav">
                  <ul className="mainmenu">
                    <li><Link to="/">Anasayfa</Link></li>
                    <li><Link to="/firma-profili">Firma Profili</Link></li>
                    <li className="has-dropdown">
                      <Link to="#">Kurslarımız <i className="feather-chevron-down"></i></Link>
                      <ul className="submenu">
                        <li><Link to="/online-kpss-kursu">Online KPSS Kursu</Link></li>
                        <li><Link to="/online-dgs-kursu">Online DGS Kursu</Link></li>
                        <li><Link to="/online-ales-kursu">Online ALES Kursu</Link></li>
                        <li><Link to="/online-yds-kursu">Online YDS Kursu</Link></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <Link to="#">KPSS, DGS, ALES Dersleri <i className="feather-chevron-down"></i></Link>
                      <ul className="submenu">
                        <li><Link to="/online-kpss-matematik-kursu">Online KPSS Matematik Kursu</Link></li>
                        <li><Link to="/online-kpss-tarih-kursu">Online KPSS Tarih Kursu</Link></li>
                        <li><Link to="/online-kpss-turkce-kursu">Online KPSS Türkçe Kursu</Link></li>
                      </ul>
                    </li>
                    <li><Link to="/tanitim-videolari">Tanıtım Videolarımız</Link></li>
                    <li><Link to="/iletisim">İletişim</Link></li>
                  </ul>
                </nav>
              </div>
              <div className="header-right">
                <div className="rbt-btn-wrapper d-none d-xl-block">
                  <Link className="rbt-btn rbt-marquee-btn" to="/login">
                    <span data-text="Online Kursa Giriş">Online Kursa Giriş</span>
                  </Link>
                </div>
                <div className="mobile-menu-bar d-block d-xl-none">
                  <div className="hamberger">
                    <button className="hamberger-button rbt-round-btn" onClick={toggleMenu}>
                      <i className="feather-menu"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="popup-mobile-menu active">
          <div className="inner-wrapper">
            <div className="inner-top">
              <div className="content">
                <div className="logo">
                  <Link to="/" onClick={toggleMenu}>
                    <img src="assets/images/logo/logo.png" alt="Online Sınava Hazırlık" />
                  </Link>
                </div>
                <div className="rbt-btn-close">
                  <button className="close-button rbt-round-btn" onClick={toggleMenu}>
                    <i className="feather-x"></i>
                  </button>
                </div>
              </div>
              <p className="description">KPSS, DGS, ALES ve YDS sınavlarına en etkili hazırlık platformu. Online eğitimlerimizle hedeflerinize emin adımlarla ilerleyin.</p>
              <ul className="navbar-top-left rbt-information-list justify-content-start">
                <li>
                  <a href="mailto:onlinesinavahazirlik@gmail.com"><i className="feather-mail"></i> onlinesinavahazirlik@gmail.com</a>
                </li>
                <li>
                  <a href="tel:+905530279146"><i className="feather-phone"></i> 0553 027 9146</a>
                </li>
              </ul>
            </div>

            <nav className="mainmenu-nav">
              <ul className="mainmenu">
                <li><Link to="/" onClick={toggleMenu}>Anasayfa</Link></li>
                <li><Link to="/firma-profili" onClick={toggleMenu}>Firma Profili</Link></li>
                <li className="has-dropdown">
                  <Link to="#" onClick={toggleMenu}>Kurslarımız <i className="feather-chevron-down"></i></Link>
                  <ul className="submenu">
                    <li><Link to="/online-kpss-kursu" onClick={toggleMenu}>Online KPSS Kursu</Link></li>
                    <li><Link to="/online-dgs-kursu" onClick={toggleMenu}>Online DGS Kursu</Link></li>
                    <li><Link to="/online-ales-kursu" onClick={toggleMenu}>Online ALES Kursu</Link></li>
                    <li><Link to="/online-yds-kursu" onClick={toggleMenu}>Online YDS Kursu</Link></li>
                  </ul>
                </li>
                <li><Link to="/tanitim-videolari" onClick={toggleMenu}>Tanıtım Videolarımız</Link></li>
                <li><Link to="/iletisim" onClick={toggleMenu}>İletişim</Link></li>
              </ul>
            </nav>

            <div className="mobile-menu-bottom">
              <Link className="rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 text-center" to="/login" onClick={toggleMenu}>
              Online Kursa Giriş
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp ve Telefon Butonları */}
      <div className="fixed-action-buttons">
        <a href="tel:+905530279146" className="phone-button" title="Bizi Ara">
          <img src="assets/images/tel.png" alt="Telefon İkonu" />
        </a>
        <a href="https://wa.me/905530279146" className="whatsapp-button" target="_blank" rel="noopener noreferrer" title="WhatsApp'tan Ulaşın">
          <img src="assets/images/whatsapp.png" alt="WhatsApp İkonu" />
        </a>
      </div>
    </>
  );
};

export default Header;
