
// src/components/hero/HeroSection.jsx
import React from "react";
import "../../assets/css/style.css"; 

const HeroGhaleb = () => {
  return (
    <div className="container">
      <div className="hero-wrapper">
        {/* ==================== محتوی متن ==================== */}
        <div className="hero-wrapper__content">
          <div className="hero__slogan">تخفیف واقعی و نامحدود</div>

          <div className="hero__title">
            راست چین پرو <span className="hero__title-badge">Pro</span>
          </div>

          {/* متن برای دسکتاپ */}
          <div className="hero__sub-title hero__sub-title--desktop">
            دسترسی به دستیار ویرایش و تولید محتوا و منابع پریمیوم
          </div>

          {/* دکمه خرید برای دسکتاپ */}
          <div className="hero__action hero__action--desktop">
            <a className="button button--large button--dark-green" href="#Plans">
              خرید اشتراک
            </a>
          </div>
        </div>

        {/* ==================== بنر (تصاویر) ==================== */}
        <div className="hero__banner">
          {/* تصویر بزرگ برای نمایشگرهای بزرگ */}
          <img
            className="hero__banner-main hero__banner-main--lg"
            src="https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/Pro/dist/Active/media/html/hero-img-2.png"
            alt="hero"
            style={{
              transform: "translate(-1.29978px, 2.57075px) rotate(-2.59956deg)"
            }}
          />

          {/* تصویر کوچک برای نمایشگرهای موبایل */}
          <img
            className="hero__banner-main hero__banner-main--sm"
            src="https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/Pro/dist/Active/media/html/hero-img.png"
            alt="hero"
            style={{
              transform: "translate(-1.29978px, 2.57075px) rotate(-2.59956deg)"
            }}
          />

          {/* آیکون‌های تزیینی */}
          <div
            className="hero__banner-img-1"
            style={{
              transform: "translate(-6.49889px, 5.14151px) rotate(6.85535deg)"
            }}
          >
            <img
              src="https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/Pro/dist/Active/media/html/rtl-ai-img.png"
              alt="icon"
            />
          </div>

          <div
            className="hero__banner-img-2"
            style={{
              transform: "translate(7.79867px, -7.71226px) rotate(7.79867deg)"
            }}
          >
            <img
              src="https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/Pro/dist/Active/media/html/rtl-ai-img-2.png"
              alt="icon"
            />
          </div>
        </div>

        {/* ==================== متن/دکمه برای موبایل ==================== */}
        <div className="hero__sub-title hero__sub-title--mobile">
          دسترسی به دستیار ویرایش و تولید محتوا <br /> و منابع پریمیوم
        </div>

        <div className="hero__action hero__action--mobile">
          <a className="button button--large button--dark-green" href="#Plans">
            خرید اشتراک
          </a>
        </div>
      </div>
    </div>
    
  );
};

export default HeroGhaleb;