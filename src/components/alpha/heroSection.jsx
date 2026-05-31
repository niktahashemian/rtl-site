// components/HeroSection.jsx
import React from 'react';
import '../../assets/css/style.css';

const HeroSection = () => {
  return (
    <section className="new-hero">
      <div className="new-hero-container">
        {/* ستون محتوای متنی */}
        <div className="new-hero-content">
          <h2 className="new-hero-title">
            <span className="new-hero-title-blue">آلفاپرس؛</span>
            {' '}
            مسیر حرفه‌ای برای تبدیل شدن به یک 
            {' '}
            <span className="new-hero-title-pink">رهبر واقعی</span>
          </h2>
          
          <p className="new-hero-description">
            ساختن یک کسب‌وکار موفق به چیزی فراتر از دانش نیاز دارد؛ باید با ذهنیت رهبری، 
            مسیر درست و ابزارهای حرفه‌ای پیش بروی. آلفاپرس به تو کمک می‌کند یاد بگیری، 
            تصمیم بگیری و قدم‌به‌قدم در مسیر رشد واقعی حرکت کنی. اگر می‌خواهی در بازار 
            دیده شوی و تأثیر بگذاری، همین امروز شروع کن.
          </p>
          
          <div className="new-hero-buttons">
            <a href="#" className="new-btn new-btn-outline">
              بیشتر بدانید
            </a>
            <a href="#" className="new-btn new-btn-primary">
              ورود به دنیای کسب و کار
              <span className="new-btn-icon">←</span>
            </a>
          </div>
        </div>
        
        {/* ستون تصویر */}
        <div className="new-hero-image">
          <img 
            src="https://mjkhajeh.ir/alfapress/wp-content/uploads/2025/12/hero-img.png"
            alt="Hero Image"
            width="722"
            height="755"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;