// components/ProductsGrid.jsx
import React, { useState, useEffect, useRef } from 'react';
import ProductCard from './productCard';
import '../../assets/css/style.css';

const ProductsGrid = ({ products, title, viewAllLink, columns = 4 }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };
    
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const getSlidesPerView = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return columns;
  };

  const slidesPerView = getSlidesPerView();
  const totalSlides = Math.ceil(products.length / slidesPerView);
  const maxIndex = Math.max(0, totalSlides - 1);

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // حالت گرید برای دسکتاپ
  if (!isMobile && !isTablet) {
    return (
      <div className="new-products-section">
        <div className="new-products-header">
          <h2 className="new-products-title">
            <a href={viewAllLink}>{title}</a>
          </h2>
          <a href={viewAllLink} className="new-view-all-btn">
            همه دوره‌ها
            <i className="new-btn-icon">←</i>
          </a>
        </div>
        
        <div className={`new-products-grid cols-${columns}`}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }

  // حالت اسلایدر برای موبایل و تبلت
  const visibleProducts = products.slice(
    currentIndex * slidesPerView,
    (currentIndex + 1) * slidesPerView
  );

  return (
    <div className="new-products-section">
      <div className="new-products-header">
        <h2 className="new-products-title">
          <a href={viewAllLink}>{title}</a>
        </h2>
        <div className="new-slider-nav">
          <button 
            className={`new-slider-btn new-slider-prev ${currentIndex === 0 ? 'disabled' : ''}`}
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            →
          </button>
          <button 
            className={`new-slider-btn new-slider-next ${currentIndex === maxIndex ? 'disabled' : ''}`}
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
          >
            ←
          </button>
        </div>
      </div>
      
      <div className="new-slider-container" ref={sliderRef}>
        <div 
          className="new-slider-track"
          style={{ transform: `translateX(${currentIndex * -100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <div key={idx} className="new-slide">
              {products.slice(idx * slidesPerView, (idx + 1) * slidesPerView).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <div className="new-slider-dots">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            className={`new-dot ${currentIndex === idx ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;