import React from 'react';
import Swiper from 'react-id-swiper';
import "swiper/swiper-bundle.min.css"; // مسیر جدید برای CSS
import '../../assets/css/style.css';

const products = [
  {
    id: 19413,
    title: "افزونه راکت 🚀 (WP Rocket)، بهترین افزونه افزایش سرعت",
    imgSrc: "https://media.rtlcdn.com/2025/12/5b9602970224688d51a51cff8300aa1f5986910a6824c-590x300.png",
    price: "697,000 تومان",
    sales: "27,548",
    satisfaction: "91%",
    support: "B+",
    previewLink: "https://rtlr.ir/19413",
    purchaseLink: "https://www.rtl-theme.com/wp-rocket-cache-plugin/"
  },
  {
    id: 26451,
    title: "افزونه WP Smush Pro، فشرده ساز تصاویر",
    imgSrc: "https://media.rtlcdn.com/2022/04/0a7136872c81138ec90e73e592557337f4a6844333f8b5-590x300.jpg",
    price: "697,000 تومان",
    sales: "5,334",
    satisfaction: "81%",
    support: "A",
    previewLink: "https://rtlr.ir/26451",
    purchaseLink: "https://www.rtl-theme.com/wp-smush-pro/"
  },
  // Additional products can be added here
];

const PRoductCard = ({ product }) => {
  return (
    <div className="swiper-slide" style={{ width: '345px' }} role="group">
      <div className="post">
        <article className="card card-product">
          <div className="card-header">
            <div className="inner">
              <a href={product.purchaseLink} data-type="ProductView">
                <figure className="thumbnail">
                  <img src={product.imgSrc} alt={product.title} />
                </figure>
              </a>
            </div>
          </div>

          <div className="card-body">
            <span className="title">
              <a href={product.purchaseLink} data-type="ProductView">
                {product.title}
              </a>
            </span>
            <div className="usage">
              <i className="rip rip-l-grid-2"></i>
              <span>بهینه سازی و افزایش سرعت وردپرس</span>
            </div>
          </div>

          <div className="card-footer">
            <div className="product-details">
              <div className="detail-item rate">
                <span className="count">{product.sales}</span>
                <span className="title">فروش</span>
              </div>
              <div className="detail-item rate">
                <span className="count">{product.satisfaction}</span>
                <span className="title">رضایت</span>
              </div>
              <div className="detail-item rate">
                <span className="count">{product.support}</span>
                <span className="title">پشتیبانی</span>
              </div>
            </div>
            <div className="rtl-price">
              <ins className="sale">{product.price}</ins>
            </div>
          </div>

          <div className="card-hover product-actions">
            <span className="btn btn-primary add-to-cart" data-id={product.id}>
              خرید و دانلود
            </span>
            <button data-id={product.id} className="preview btn">
              <i className="rip rip-l-desktop"></i>
              پیش نمایش
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

const ProductCard = () => {
  const params = {
    // Swiper configuration settings
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: true,
  };

  return (
    <Swiper {...params}>
      {products.map(product => (
        <PRoductCard key={product.id} product={product} />
      ))}
    </Swiper>
  );
};

export default ProductCard;
