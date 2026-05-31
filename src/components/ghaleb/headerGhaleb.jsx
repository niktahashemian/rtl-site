
// HeaderNavbar.jsx
import React, { useState } from "react";
import '../../assets/css/style.css';
const HeaderGhaleb = () => {
  // حالت باز/بسته بودن منو در حالت موبایل
  const [menuOpen, setMenuOpen] = useState(false);

  // تعویض وضعیت منو
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="header-navbar navbar-expand-lg scrolled">
      {/* بخش لوگو + آیکون همبرگر */}
      <div className="header-navbar__align navbar-toggler header-navbar__toggle">
        <a
          className="header-navbar__logo-back"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.rtl-theme.com/"
        >
        </a>

        {/* آیکون همبرگر */}
        <div
          className={`header-navbar__hamburger ${
            menuOpen ? "is-active" : ""
          }`}
          onClick={toggleMenu}
          aria-label="منو"
        >
          <div className="header-navbar__hamburger-one"></div>
          <div className="header-navbar__hamburger-two"></div>
          <div className="header-navbar__hamburger-three"></div>
        </div>
      </div>

      {/* لوگوی بزرگ (روی دسکتاپ) */}
      <a
        className="header-logo"
        target="_blank"
        rel="noopener noreferrer"
        href="http://localhost:5175/"
      >
        <img
          src="https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/Pro/dist/Active/media/html/logo.png"
          alt="لوگو"
        />
      </a>

      {/* منوی اصلی */}
      <div
        className={`header-navbar__collapse d-lg-block header-navbar__menu-hidden ${
          menuOpen ? "show" : ""
        }`}
      >
        <ul className="navbar-nav header-navbar__list me-auto pe-lg-2">
          
          <li className="header-navbar__list-item">
            <a className="header-navbar__list-link d-lg-block" href="http://localhost:5173/">
              خانه
            </a>
          </li>
          <li className="header-navbar__list-item">
            <a className="header-navbar__list-link d-lg-block" href="#ComparisonPlans">
              مقایسه پلن‌ها
            </a>
          </li>
          <li className="header-navbar__list-item">
            <a className="header-navbar__list-link d-lg-block" href="#Plans">
              پلن‌های پرو
            </a>
          </li>
          <li className="header-navbar__list-item">
            <a className="header-navbar__list-link d-lg-block" href="#Video">
              راست‌چین AI
            </a>
          </li>
          <li className="header-navbar__list-item">
            <a className="header-navbar__list-link d-lg-block" href="#Features">
              ویژگی‌های پرو
            </a>
          </li>
          <li className="header-navbar__list-item">
            <a className="header-navbar__list-link d-lg-block" href="#ContactUs">
              مشاوره خرید
            </a>
          </li>
        </ul>

        <div className="text-center header-navbar__btn">
          <a className="button button--large button--dark-green" href="#Plans">
            خرید اشتراک
          </a>
        </div>
      </div>
    </nav>
  );
};

export default HeaderGhaleb;