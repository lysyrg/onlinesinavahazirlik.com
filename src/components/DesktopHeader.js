import React from "react";
import { Link } from "react-router-dom";

const DesktopHeader = () => {
  return (
    <>
      <style>
        {`
          .desktop-header {
            background: #f1f4ff;
            padding: 10px 20px;
            border-bottom: 1px solid #e5e5e5;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .desktop-header .desktop-logo img {
            max-width: 150px;
          }

          .desktop-header .desktop-menu {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .desktop-header .desktop-menu > li {
            margin: 0 15px;
            position: relative;
          }

          .desktop-header .desktop-menu > li > a {
            color: #333;
            font-size: 16px;
            text-decoration: none;
            font-weight: 600;
            transition: color 0.3s ease;
          }

          .desktop-header .desktop-menu > li > a:hover {
            color: #6a11cb;
          }

          .desktop-header .desktop-menu > li.has-dropdown:hover .desktop-submenu {
            display: block;
          }

          .desktop-header .desktop-submenu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            background: #fff;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            list-style: none;
            padding: 10px 0;
            z-index: 999;
            border: 1px solid #e5e5e5;
          }

          .desktop-header .desktop-submenu li {
            padding: 0;
            margin: 0;
          }

          .desktop-header .desktop-submenu li a {
            display: block;
            padding: 8px 20px;
            font-size: 14px;
            font-weight: 500;
            color: #333;
            text-decoration: none;
            transition: background 0.3s ease, color 0.3s ease;
          }

          .desktop-header .desktop-submenu li a:hover {
            background: #f9f9f9;
            color: #6a11cb;
          }

          .desktop-header .desktop-auth-buttons {
            display: flex;
            gap: 10px;
          }

          .desktop-header .desktop-auth-buttons a {
            text-decoration: none;
            font-size: 14px;
            color: #6a11cb;
            font-weight: bold;
            border: 2px solid #6a11cb;
            border-radius: 25px;
            padding: 5px 20px;
            transition: all 0.3s ease;
          }

          .desktop-header .desktop-auth-buttons a:hover {
            background-color: #6a11cb;
            color: #fff;
          }
        `}
      </style>

      <header className="desktop-header">
        <div className="container-fluid">
          <div className="mainbar-row">
            {/* Logo */}
            <div className="desktop-logo">
              <Link to="/">
                <img src="assets/images/logo/logo.png" alt="Logo" />
              </Link>
            </div>

            {/* Menü */}
            <nav className="desktop-menu-nav">
              <ul className="desktop-menu">
                <li>
                  <Link to="/">Anasayfa</Link>
                </li>
                <li>
                  <Link to="/firma-profili">Firma Profili</Link>
                </li>
                <li className="has-dropdown">
                  <Link to="#">Kurslarımız</Link>
                  <ul className="desktop-submenu">
                    <li>
                      <Link to="/online-yds-kursu">Online YDS Kursu</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/tanitim-videolari">Tanıtım Videolarımız</Link>
                </li>
                <li>
                  <Link to="/iletisim">İletişim</Link>
                </li>
              </ul>
            </nav>

            {/* Giriş Yap ve Kayıt Ol Butonları */}
            <div className="desktop-auth-buttons">
              <Link to="/login">Giriş Yap</Link>
              <Link to="/register">Kayıt Ol</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default DesktopHeader;
