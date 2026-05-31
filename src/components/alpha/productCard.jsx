// components/ProductCard.jsx
import React from 'react';
import '../../assets/css/style.css';

const ProductCard = ({ product }) => {
  const {
    id,
    title,
    subtitle,
    imageUrl,
    mentorName,
    mentorAvatar,
    price,
    originalPrice,
    discountPercent,
    timeLeft,
    link
  } = product;

  // تبدیل قیمت به فرمت تومان
  const formatPrice = (price) => {
    if (price >= 1000000) {
      return `${(price / 1000000).toFixed(0)} میلیون تومان`;
    }
    return `${price.toLocaleString()} تومان`;
  };

  return (
    <div className="new-product-card">
      <div className="new-product-inner">
        <a href={link} className="new-product-link">
          {/* تصویر محصول */}
          <img 
            src={imageUrl} 
            alt={title}
            className="new-product-image"
            loading="lazy"
          />
          
          {/* عنوان و زیرنویس */}
          <div className="new-product-title-wrap">
            <h3 className="new-product-title line-clamp-2">{title}</h3>
            {subtitle && (
              <span className="new-product-subtitle">{subtitle}</span>
            )}
          </div>
          
          {/* اطلاعات مدرس و زمان */}
          <div className="new-product-meta">
            <div className="new-product-mentor">
              <img 
                src={mentorAvatar} 
                alt={mentorName}
                className="new-mentor-avatar"
              />
              <span className="new-mentor-name line-clamp-1">{mentorName}</span>
            </div>
            
            <div className="new-product-time" title={timeLeft?.fullDate}>
              <time className="new-time-value">{timeLeft?.display || 'نامشخص'}</time>
              <i className="new-icon-time">🕐</i>
            </div>
          </div>
        </a>
        
        {/* بخش پایین کارت */}
        <div className="new-product-footer">
          {/* قیمت */}
          <div className={`new-product-price ${discountPercent ? 'on-sale' : ''}`}>
            {discountPercent ? (
              <>
                <del className="new-price-old">
                  {formatPrice(originalPrice)}
                </del>
                <ins className="new-price-sale">
                  {formatPrice(price)}
                </ins>
                <span className="new-discount-badge">%{discountPercent}</span>
              </>
            ) : (
              <span className="new-price">{formatPrice(price)}</span>
            )}
          </div>
          
          {/* دکمه جزئیات */}
          <a href={link} className="new-product-button">
            <span className="new-button-text">جزئیات دوره</span>
            <i className="new-button-icon">←</i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;