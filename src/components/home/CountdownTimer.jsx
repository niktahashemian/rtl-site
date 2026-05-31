import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import '../../assets/css/style.css';

// کامپوننت شمارش معکوس
const CountdownTimer = ({ endDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const targetDate = new Date(endDate).getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: days.toString().padStart(2, '0'),
          hours: hours.toString().padStart(2, '0'),
          minutes: minutes.toString().padStart(2, '0'),
          seconds: seconds.toString().padStart(2, '0')
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className="timer-container">
      {['روز', 'ساعت', 'دقیقه', 'ثانیه'].map((label, index) => (
        <div key={label} className="timer-item">
          <span className="timer-number">
            {index === 0 ? timeLeft.days :
             index === 1 ? timeLeft.hours :
             index === 2 ? timeLeft.minutes : timeLeft.seconds}
          </span>
          <span className="timer-label">{label}</span>
        </div>
      ))}
    </div>
  );
};

// داده‌های محصولات با عکس‌های واقعی
const products = [
  {
    id: 40793,
    title: "افزونه All in One SEO Pack، بسته سئو وردپرس",
    category: "افزونه سئو",
    categoryLink: "https://www.rtl-theme.com/category/wordpress-plugin/seo-optimization/",
    image: "https://media.rtlcdn.com/2022/06/c8d40b56324c9f58c43c6455a942d9c7175619cb472856-590x300.png",
    thumbnail: "https://media.rtlcdn.com/2022/06/2daa396fb593bfa2dfde6266cb513f5ae3140e555d9865-160x160.png",
    sales: 988,
    satisfaction: 78,
    support: "B",
    regularPrice: 497000,
    salePrice: 347900,
    discount: 30,
    link: "https://www.rtl-theme.com/plugin-all-in-one-seo-pack-pro/",
    previewLink: "https://rtlr.ir/40793"
  },
  {
    id: 121647,
    title: "افزونه Essential Addons for Elementor Pro",
    category: "افزودنی های المنتور",
    categoryLink: "https://www.rtl-theme.com/category/wordpress-plugin/elementor-addon-plugin/",
    image: "https://media.rtlcdn.com/2019/11/4f637686284005d8360704411eb176f9995a24e5d9b796-590x300.jpg",
    thumbnail: "https://media.rtlcdn.com/2019/11/8dcc34629b260cc498189660e8b9986d43f944869c9147-160x160.png",
    sales: 1186,
    satisfaction: 86,
    support: "B",
    regularPrice: 497000,
    salePrice: 347900,
    discount: 30,
    link: "https://www.rtl-theme.com/essential-addons-for-elementor-wordpress-plugin/",
    previewLink: "https://rtlr.ir/121647"
  },
  {
    id: 132850,
    title: "افزونه UpdraftPlus، بکاپ گیری خودکار وردپرس",
    category: "افزونه بکاپ وردپرس",
    categoryLink: "https://www.rtl-theme.com/category/wordpress-plugin/backup-plugin/",
    image: "https://media.rtlcdn.com/2021/06/904d8f06e4d1532a451286a8ab5ead889b06238bedc373-590x300.jpg",
    thumbnail: "https://media.rtlcdn.com/2021/06/174bffb98164a79fd30a446d1562f3222130981584396e-160x160.png",
    sales: 2060,
    satisfaction: 91,
    support: "B",
    regularPrice: 598000,
    salePrice: 418600,
    discount: 30,
    link: "https://www.rtl-theme.com/updraftplus-wordpress-plugin/",
    previewLink: "https://rtlr.ir/132850"
  },
  {
    id: 46734,
    title: "افزونه Rankie، پلاگین ردیابی رتبه در گوگل",
    category: "افزونه سئو",
    categoryLink: "https://www.rtl-theme.com/category/wordpress-plugin/seo-optimization/",
    image: "https://media.rtlcdn.com/2021/11/fef641493da93b85a476cf53ba22a67ca2834e841377ca-590x300.png",
    thumbnail: "https://media.rtlcdn.com/2021/11/a656b54d165708b4294846f1ea5f3b89a215b9c84b4332-160x160.png",
    sales: 2803,
    satisfaction: 88,
    support: "B",
    regularPrice: 498000,
    salePrice: 348600,
    discount: 30,
    link: "https://www.rtl-theme.com/rankie-wordpress-plugin/",
    previewLink: "https://rtlr.ir/46734"
  },
  {
    id: 28343,
    title: "افزونه WPML، چند زبانه کردن سایت",
    category: "افزونه کاربردی",
    categoryLink: "https://www.rtl-theme.com/category/wordpress-plugin/utilities-plugin/",
    image: "https://media.rtlcdn.com/2025/12/31c5867399d62ba0611f854918e199473b72a78c28cb49-590x300.png",
    thumbnail: "https://media.rtlcdn.com/2022/03/865f89452d62e56e70770d79d6537185213f2684790154-160x160.png",
    sales: 10872,
    satisfaction: 84,
    support: "B",
    regularPrice: 597000,
    salePrice: 417900,
    discount: 30,
    link: "https://www.rtl-theme.com/wpml-plugin/",
    previewLink: "https://rtlr.ir/28343"
  }
];

// کامپوننت کارت محصول
const ProductCard = ({ product, endDate, formatPrice }) => {
  return (
    <div className="product-card">
      {/* سمت راست - تصویر */}
      <div className="product-image-section">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <div className="product-badge">ویژه</div>
      </div>

      {/* سمت چپ - محتوا */}
      <div className="product-content">
        {/* عنوان و تایمر */}
        <div className="product-header">
          <div>
            <h3 className="product-title">
              <a href={product.link}>
                {product.title}
              </a>
            </h3>
            <div className="product-category">
              <span className="category-dot"></span>
              <span>دسته‌بندی:</span>
              <a href={product.categoryLink} className="category-link">
                {product.category}
              </a>
            </div>
          </div>
          <CountdownTimer endDate={endDate} />
        </div>

        {/* بخش Pro */}
        <div className="pro-section">
          <span className="pro-badge">Pro</span>
          <span>
            با <a href="https://www.rtl-theme.com/pro/" className="pro-link">
              راست‌چین پرو
            </a>
            {' '}۱۰۰ هزار تومان ارزان‌تر
          </span>
        </div>

        {/* دکمه‌ها */}
        <div className="button-container">
          <button className="buy-button">
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            خرید و دانلود
          </button>
          <button className="preview-button">
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            پیش‌نمایش
          </button>
        </div>

        {/* آمار و قیمت */}
        <div className="product-stats">
          <div className="stats-group">
            <div className="stat-item">
              <div className="stat-value">{formatPrice(product.sales)}</div>
              <div className="stat-label">
                <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                فروش
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-value satisfaction">{product.satisfaction}%</div>
              <div className="stat-label">
                <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                رضایت
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-value support">{product.support}</div>
              <div className="stat-label">
                <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                پشتیبانی
              </div>
            </div>
          </div>
          
          <div className="price-box">
            <div className="discount-row">
              <span className="regular-price">{formatPrice(product.regularPrice)}</span>
              <span className="discount-badge">{product.discount}%</span>
            </div>
            <div>
              <span className="sale-price">{formatPrice(product.salePrice)}</span>
              <span className="currency">تومان</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// کامپوننت اصلی
const AmazingSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const endDate = "2026-02-17 23:59:59";

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="amazing-slider-container">
      <div className="slider-wrapper">
        {/* اسلایدر اصلی */}
        <div className="main-slider">
          <Swiper
            modules={[Thumbs, Autoplay, Navigation]}
            thumbs={{ swiper: thumbsSwiper }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={0}
            navigation={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} endDate={endDate} formatPrice={formatPrice} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* thumbnail اسلایدر */}
        <div className="thumbnail-container">
          <Swiper
            onSwiper={setThumbsSwiper}
            modules={[Thumbs, Navigation]}
            slidesPerView={1}
            spaceBetween={10}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            loop={true}
            watchSlidesProgress
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 }
            }}
            style={{ padding: '10px 0' }}
          >
            {products.map((product, index) => (
              <SwiperSlide key={product.id}>
                {({ isActive }) => (
                  <div className={`thumbnail-item ${isActive || index === activeIndex ? 'active' : ''}`}>
                    <img 
                      src={product.thumbnail} 
                      alt={product.title}
                      className="thumbnail-image"
                    />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* دکمه‌های ناوبری */}
          <button className="custom-nav-button custom-prev">
            ←
          </button>
          <button className="custom-nav-button custom-next">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmazingSlider;