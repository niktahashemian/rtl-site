import React from 'react';
import '../../assets/css/style.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero__texts">
            <h1 className="hero__title">
              با راست چین میلیاردر شو!
            </h1>
            <p className="hero__desc">
              با طراحی یا فارسی‌سازی قالب و افزونه وردپرس و انتشار در راست چین، تا ۶۰۰ میلیون تومان درآمد ماهانه رو تجربه کن!
            </p>
          </div>
          
          <div className="hero__video">
            <div className="hero__video-content">
              <video 
                className="hero__video-inner" 
                poster="https://content-marketing.rtlcdn.com/image/2026/01/2fba9e66-67c8-42dc-affd-ff086aa1c441.jpg"
                preload="metadata"
                controls
              >
                <source 
                  src="https://content-marketing.rtlcdn.com/video/2025/05/92c526e6-16c3-4073-8f70-7809072f0e74.mp4" 
                  type="video/mp4" 
                />
                مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
              </video>
              
              <div className="hero__videoButton">
                <img 
                  src="https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/BecomeSeller/dist/Active/media/html/hero-video-button.svg" 
                  alt="علامت play" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
