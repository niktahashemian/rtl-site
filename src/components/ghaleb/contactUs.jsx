// src/components/ContactUs/ContactUs.jsx
import React from "react";
import '../../assets/css/style.css';

/**
 * اگر می‌خواهید مسیر تصویرها را از بیرون (props) بدهید،
 * می‌توانید این کامپوننت را به صورت زیر تغییر دهید:
 *
 * const ContactUs = ({ desktopImg, mobileImg }) => ( ... )
 *
 * در این مثال مسیرها ثابت هستند (همان‌طور که در HTML اصلی بود).
 */
const ContactUs = () => {
  return (
    <section className="contact-us" id="ContactUs">
      <div className="container">

        {/* تصویر برای نمایشگرهای بزرگ (دسکتاپ) */}
        <div className="contact-us__banner contact-us__banner--desktop">
          <img
            src="https://content-marketing.rtlcdn.com/image/2025/11/bfd075f2-8589-4f92-b3cf-2b3158f07f57.webp"
            alt="contact us"
          />
        </div>

        {/* تصویر برای نمایشگرهای کوچک (موبایل) */}
        <div className="contact-us__banner contact-us__banner--mobile">
          <img
            src="https://content-marketing.rtlcdn.com/image/2025/11/1ebfc526-0451-47c3-b7c9-74176c73bc62.png"
            alt="contact us"
          />
        </div>

      </div>
    </section>
  );
};

export default ContactUs;
