// src/components/Banner.jsx
import React from 'react';
import '../../assets/css/style.css';

const Banner = () => {
  return (
    <div className="rtl-banner__image">
      <div className="banner__image">
        <a 
          href="/pro/" 
          className="rtl-banner-link"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img
            src="https://content-marketing.rtlcdn.com/image/2024/08/95ef83a6-e4d1-4707-b684-619f21b2cffc.png"
            alt="بنر تبلیغاتی - راست چین"
            className="rtl-banner-image"
            width="1440"
            height="170"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  );
};

export default Banner;