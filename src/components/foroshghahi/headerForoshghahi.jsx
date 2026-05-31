// src/components/home/SimpleHeader.jsx
import React, { useState, useEffect } from 'react';
import { Menu, Search, ChevronDown, X, LogIn, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../../assets/css/style.css';

// تعریف کامپوننت CartIcon در خارج از کامپوننت اصلی


const HeaderForoshghahi = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [_isTablet, _setIsTablet] = useState(window.innerWidth <= 991);
  const [_isMediumTablet, _setIsMediumTablet] = useState(window.innerWidth <= 1100);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // داده‌های سبد خرید
  

  // بررسی سایز صفحه
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      _setIsTablet(window.innerWidth <= 991);
      _setIsMediumTablet(window.innerWidth <= 1100);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  

  

  





  // داده‌های منو با آیکون
  const menuItems = [
    {
      id: 'best',
      title: ' سرویس‌ها',
      type: 'mega',
      icon: '🔥',
      showBanner: true,
      columns: [

      ]
    },
    {
      id: 'wp-themes',
      title: ' راهبردها',
      type: 'mega',
      icon: '🎨',
      columns: [
        {
          title: 'قالب وردپرس',
          icon: '🎨',
          items: [
            { name: 'قالب فروشگاهی', count: 245, link: '#', icon: '🛍️' },
            { name: 'قالب شرکتی', count: 189, link: '#', icon: '🏢' },
            { name: 'قالب خبری', count: 156, link: '#', icon: '📰' },
            { name: 'قالب آموزشی', count: 134, link: '#', icon: '📚' },
            { name: 'قالب پزشکی', count: 98, link: '#', icon: '🏥' },
            { name: 'قالب املاک', count: 87, link: '#', icon: '🏠' }
          ]
        },
        {
          title: 'قالب‌های ویژه',
          icon: '✨',
          items: [
            { name: 'قالب چندمنظوره', count: 156, link: '#', icon: '🌟' },
            { name: 'قالب مینیمال', count: 134, link: '#', icon: '⚪' },
            { name: 'قالب ریسپانسیو', count: 112, link: '#', icon: '📱' },
            { name: 'قالب سئو شده', count: 98, link: '#', icon: '🔍' }
          ]
        }
      ]
    },
    {
      id: 'plugins',
      title: ' نمونه کارها',
      type: 'mega',
      icon: '🔌',
      columns: [
        {
          title: 'افزونه وردپرس',
          icon: '🔌',
          items: [
            { name: 'افزونه سئو', count: 98, link: '#', icon: '📈' },
            { name: 'افزونه فروشگاهی', count: 87, link: '#', icon: '🛒' },
            { name: 'افزونه فرم ساز', count: 76, link: '#', icon: '📝' },
            { name: 'افزونه امنیتی', count: 65, link: '#', icon: '🔒' },
            { name: 'افزونه بهینه‌سازی', count: 54, link: '#', icon: '⚡' },
            { name: 'افزونه عضویت', count: 43, link: '#', icon: '👥' }
          ]
        }
      ]
    },



  ];

  return (
    <header className="foroshghahi-header">
      <div className="foroshghahi-header-top">
        <div className="foroshghahi-container">
          <div className="foroshghahi-row">
            {/* لوگو */}
            <div className="foroshghahi-col-auto">
              <div className="foroshghahi-logo">
                <button
                  className="foroshghahi-menu-button"
                  onClick={() => setIsMenuOpen(true)}
                  aria-label="منو"
                >
                  <Menu size={isMobile ? 18 : 20} />
                </button>

                <Link to="/">
                  <img
                    src="https://media.rtlcdn.com/2025/03/8d372fd1078b1d1a732d3f24fe76e33e4374d83190863.png"
                    className="foroshghahi-logo-image"
                    alt="راست چین"
                  />
                </Link>
                <nav className="foroshghahi-main-nav">
                  <div className="foroshghahi-container">
                    <ul className="foroshghahi-menu-list">
                      {/* گزینه خانه - اضافه شده */}
                      <li className="foroshghahi-menu-item foroshghahi-home-item">
                        <Link to="/" className="foroshghahi-menu-link foroshghahi-home-link">
                          <Home size={18} />
                          <span>خانه</span>
                        </Link>
                      </li>
                      <li className="foroshghahi-menu-item foroshghahi-home-item">
                        <span> سرویس‌ها</span>
                      </li>
                      <li className="foroshghahi-menu-item foroshghahi-home-item">
                        <span> راهبردها</span>
                      </li>
                      <li className="foroshghahi-menu-item foroshghahi-home-item">

                        <span> نمونه کارها </span>

                      </li>


                    </ul>
                  </div>
                </nav>
              </div>

            </div>

            {/* دکمه‌های راست */}
            <div className="foroshghahi-col-responsive">
              <nav className="foroshghahi-nav">
                <input className='poshtibani-input' type="button" value="مشاوره رایگان" />
                <input className='poshtibani-input2' type="button" value="ثبت سفارش" />

                {/* سبد خرید */}
                <div className="foroshghahi-position-relative">
                  {isCartOpen && (
                    <div
                      className="foroshghahi-dropdown foroshghahi-cart-dropdown"
                      onMouseLeave={() => setIsCartOpen(false)}
                    >
                      <div className="foroshghahi-cart-header">
                        
                        <button
                          className="foroshghahi-mobile-close"
                          onClick={() => setIsCartOpen(false)}
                          aria-label="بستن"
                        >
                          <X size={16} />
                        </button>
                      </div>

                      

                      <div className="foroshghahi-cart-footer">
                        <div className="foroshghahi-cart-total">
                          <span>جمع کل:</span>
                        </div>
                        <div className="foroshghahi-cart-buttons">
                          <a href="#" className="foroshghahi-cart-button-primary">
                            ثبت سفارش
                          </a>
                          <a href="#" className="foroshghahi-cart-button-secondary">
                            مشاهده سبد خرید
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

            
              </nav>
            </div>
          </div>

          {/* جستجوی موبایل */}
          {isMobile && (
            <div style={{ marginTop: '10px' }}>
              <div className="foroshghahi-search-container">
                <div className="foroshghahi-search-wrapper">
                  <input
                    type="text"
                    placeholder="جستجو در محصولات..."
                    className="foroshghahi-search-input"
                  />
                  <Search className="foroshghahi-search-icon" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* منوی اصلی با مگا منوی پویا + گزینه خانه */}


      {/* منوی موبایل */}
      {isMenuOpen && (
        <div
          className={`menu-overlay foroshghahi-mobile-overlay ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="foroshghahi-mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="foroshghahi-mobile-header">
              <span className="foroshghahi-mobile-title">منوی سایت</span>
              <button
                className="foroshghahi-mobile-close"
                onClick={() => setIsMenuOpen(false)}
                aria-label="بستن منو"
              >
                <X size={24} />
              </button>
            </div>
            <div className="foroshghahi-mobile-content">
              {/* گزینه خانه در منوی موبایل */}
              <div className="foroshghahi-mobile-menu-item">
                <Link to="/" className="foroshghahi-mobile-menu-link" onClick={() => setIsMenuOpen(false)}>
                  <Home size={18} style={{ marginLeft: '8px' }} />
                  <span>خانه</span>
                </Link>
              </div>

              {/* آیتم‌های منوی موبایل */}
              {menuItems.map((item) => (
                <div key={item.id} className="foroshghahi-mobile-menu-item">
                  <a href="#" className="foroshghahi-mobile-menu-link">
                    §                                        {item.icon && <span style={{ marginLeft: '8px' }}>{item.icon}</span>}
                    {item.title}
                  </a>
                </div>
              ))}

              {/* بخش پایانی منوی موبایل */}
              <div style={{ marginTop: '20px', padding: '15px', borderTop: '1px solid #eaeaea' }}>
                <Link to="/account" className="foroshghahi-mobile-menu-link" style={{ color: '#ffb726' }} onClick={() => setIsMenuOpen(false)}>
                  <LogIn size={18} style={{ marginLeft: '8px' }} />
                  ورود / ثبت نام
                </Link>
                <a href="#" className="foroshghahi-mobile-menu-link" style={{ color: '#ffb726', marginTop: '10px' }}>
                  <span>💰</span>
                  فروشنده شوید
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderForoshghahi;