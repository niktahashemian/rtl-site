// ImageGrid.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/style.css';

const images = [
  {
    id: 1,
    title: "مدیریت هوشمند راست چین",
    subtitle: "بروزرسانی خودکار",
    hoverText: "با مدیریت هوشمند، سایت خود را خودکار بروزرسانی کنید",
    img: "https://media.rtlcdn.com/2025/09/87940a8d512a846283f9309e35de52acb88b218991479a.jpg",
    link: "/ghaleb",
  },
  {
    id: 2,
    title: "افزونه‌های حرفه‌ای",
    subtitle: "سئو، امنیت و بهینه‌سازی",
    hoverText: "بهترین افزونه‌ها برای سئو و امنیت سایت شما",
    img: "https://media.rtlcdn.com/2024/08/e8132911084f6435a2873b289e70f00977410f6ce7e469.jpg",
    link: "/tagsos",
  },
  {
    id: 3,
    title: "قالب شرکتی",
    subtitle: "مناسب استارتاپ و کسب‌وکار",
    hoverText: "قالب‌های حرفه‌ای و مدرن برای شرکت‌ها",
    img: "https://media.rtlcdn.com/2025/11/458bf6764e7919e9d8745150509c923a582da513564b24.jpg",
    link: "/riazy",
  },
  {
    id: 4,
    title: "پشتیبانی حرفه‌ای",
    subtitle: "۲۴ ساعته، ۷ روز هفته",
    hoverText: "پشتیبانی سریع و تخصصی برای سایت شما",
    img: "https://media.rtlcdn.com/2025/05/c990139621d2f912247c5c68351846700cf89f77fc6ac8.jpg",
    link: "/poshtibani",
  },
  {
    id: 5,
    title: "قالب فروشگاهی",
    subtitle: "مناسب فروشگاه اینترنتی",
    hoverText: "قالب حرفه‌ای برای فروشگاه‌های اینترنتی",
    img: "https://media.rtlcdn.com/2025/03/daac1bb36f7453b9e528785847677d013240b04a2a03b1.png",
    link: "/foroshghahi",
  },
];

function ImageGrid() {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // اسکرول به راست (حرکت به کارت بعدی)
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 320;
      const maxScroll = (images.length - 1) * cardWidth;
      const newScrollLeft = Math.min(scrollContainerRef.current.scrollLeft + cardWidth, maxScroll);

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // اسکرول به چپ (حرکت به کارت قبلی)
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 320;
      const newScrollLeft = Math.max(scrollContainerRef.current.scrollLeft - cardWidth, 0);

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // آپدیت ایندکس هنگام اسکرول
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = 320;
      const newIndex = Math.round(scrollLeft / cardWidth);
      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < images.length) {
        setCurrentIndex(newIndex);
      }
    }
  };

  // تابع مدیریت کلیک روی کارت‌ها
  const handleCardClick = (link) => {
    if (link.startsWith('http')) {
      // لینک خارجی
      window.open(link, '_blank', 'noopener noreferrer');
    } else {
      // لینک داخلی
      navigate(link);
    }
  };

  const isMobile = windowWidth <= 768;

  return (
    <section className="image-grid-section" dir="rtl">
      <div className="image-grid-container">

        {/* عنوان سکشن و دکمه‌های اسکرول */}
        <div className="title-section">
          <div className="title-right">
            <span className="title-icon">🖼️</span>
            <h2 className="title">گالری تصاویر</h2>
          </div>

          {/* دکمه‌های اسکرول برای موبایل */}
          {isMobile && (
            <div className="scroll-buttons">
              <button
                className={`scroll-button ${currentIndex === 0 ? 'disabled' : ''}`}
                onClick={scrollLeft}
                disabled={currentIndex === 0}
                aria-label="اسکرول به راست"
              >
                ←
              </button>
              <button
                className={`scroll-button ${currentIndex === images.length - 1 ? 'disabled' : ''}`}
                onClick={scrollRight}
                disabled={currentIndex === images.length - 1}
                aria-label="اسکرول به چپ"
              >
                →
              </button>
            </div>
          )}
        </div>

        {/* کانتینر اسکرول */}
        <div
          ref={scrollContainerRef}
          className="scroll-container"
          onScroll={handleScroll}
        >
          {/* گرید تصاویر */}
          <div className="image-grid">
            {images.map((item) => (
              <div
                key={item.id}
                className="image-card"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleCardClick(item.link)}
                style={{ cursor: 'pointer' }}
              >
                <div className="image-wrapper">
                  <img
                    src={item.img}
                    alt={item.title}
                    className={`card-image ${hoveredId === item.id ? 'hovered' : ''}`}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/800x450?text=راست+چین';
                    }}
                    loading="lazy"
                  />
                </div>

                {/* نوشته اول - بالا سمت راست (همیشه) */}
                <div className="top-right-text">
                  <span className="star-icon">⭐</span>
                  <span className="top-title">{item.title}</span>
                </div>

                {/* نوشته دوم - پایین (فقط در هاور) */}
                <div className={`bottom-box ${hoveredId === item.id ? 'visible' : ''}`}>
                  <span className="bottom-title">{item.title}</span>
                  <span className="bottom-subtitle">{item.subtitle}</span>
                  <span className="bottom-hover-text">{item.hoverText}</span>

                  {/* دکمه مشاهده بیشتر */}
                  <button
                    className="view-more-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(item.link);
                    }}
                  >
                    مشاهده بیشتر
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* نشانگر صفحه برای موبایل */}
        {isMobile && (
          <div className="mobile-indicator">
            {images.map((_, index) => (
              <div
                key={index}
                className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollTo({
                      left: index * 320,
                      behavior: 'smooth'
                    });
                    setCurrentIndex(index);
                  }
                }}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default ImageGrid;