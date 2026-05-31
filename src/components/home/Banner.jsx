// src/components/Banner.jsx
import React from 'react';
import '../../assets/css/style.css';

const Banner = () => {
  return (
    <div className="rtl-banner-section">
      <div className="rtl-banner-container">
        <a 
          href="/pro/" 
          className="rtl-banner-link"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img
            src="//media.rtlcdn.com/2025/12/171a719282c96c4f0b4d744601e95d571af1c4713c9e76.gif"
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