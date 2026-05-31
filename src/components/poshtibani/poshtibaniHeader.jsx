// src/components/home/SimpleHeader.jsx
import React, { useState, useEffect } from 'react';
import { Menu, Search, ChevronDown, X, LogIn, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../../assets/css/style.css';

// تعریف کامپوننت CartIcon در خارج از کامپوننت اصلی
const CartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="21" r="1"></circle>
    <circle cx="19" cy="21" r="1"></circle>
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [_isTablet, _setIsTablet] = useState(window.innerWidth <= 991);
  const [_isMediumTablet, _setIsMediumTablet] = useState(window.innerWidth <= 1100);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // داده‌های سبد خرید
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'قالب وودمارت - چندمنظوره فروشگاهی',
      price: 890000,
      quantity: 1,
      image: 'https://media.rtlcdn.com/2025/12/9913a9909808654c6ad3a26901df0a78175423e2b874b6-337x171.png'
    },
    {
      id: 2,
      title: 'افزونه رنک مث - سئو پیشرفته',
      price: 650000,
      quantity: 2,
      image: 'https://media.rtlcdn.com/2025/03/8d372fd1078b1d1a732d3f24fe76e33e4374d83190863.png'
    }
  ]);

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

  const updateQuantity = (id, change) => {
    setCartItems(prev => prev.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' تومان';
  };





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
    <header className="ras-header">
      <div className="ras-header-top">
        <div className="ras-container">
          <div className="ras-row">
            {/* لوگو */}
            <div className="ras-col-auto">
              <div className="ras-logo">
                <button
                  className="ras-menu-button"
                  onClick={() => setIsMenuOpen(true)}
                  aria-label="منو"
                >
                  <Menu size={isMobile ? 18 : 20} />
                </button>

                <Link to="/">
                  <img
                    src="https://media.rtlcdn.com/2025/03/8d372fd1078b1d1a732d3f24fe76e33e4374d83190863.png"
                    className="ras-logo-image"
                    alt="راست چین"
                  />
                </Link>
                <nav className="poshtibani-main-nav">
                  <div className="ras-container">
                    <ul className="ras-menu-list">
                      {/* گزینه خانه - اضافه شده */}
                      <li className="ras-menu-item ras-home-item">
                        <Link to="/" className="ras-menu-link ras-home-link">
                          <Home size={18} />
                          <span>خانه</span>
                        </Link>
                      </li>
                      <li className="ras-menu-item ras-home-item">
                        <span> سرویس‌ها</span>
                      </li>
                      <li className="ras-menu-item ras-home-item">
                        <span> راهبردها</span>
                      </li>
                      <li className="ras-menu-item ras-home-item">

                        <span> نمونه کارها </span>

                      </li>


                    </ul>
                  </div>
                </nav>
              </div>

            </div>

            {/* دکمه‌های راست */}
            <div className="ras-col-responsive">
              <nav className="ras-nav">
                <input className='poshtibani-input' type="button" value="درخواست مشاوره" />
                <input className='poshtibani-input2' type="button" value="ثبت سفارش" />

                {/* سبد خرید */}
                <div className="ras-position-relative">
                  <button
                    className="ras-cart-button"
                    onClick={() => setIsCartOpen(!isCartOpen)}
                    onMouseEnter={() => setIsCartOpen(true)}
                    aria-label="سبد خرید"
                  >
                    <CartIcon />
                    <span className="ras-cart-badge">{cartItems.length}</span>
                  </button>

                  {isCartOpen && (
                    <div
                      className="cart-dropdown ras-cart-dropdown"
                      onMouseLeave={() => setIsCartOpen(false)}
                    >
                      <div className="ras-cart-header">
                        <span className="ras-cart-title">
                          <CartIcon />
                          سبد خرید ({cartItems.length})
                        </span>
                        <button
                          className="ras-mobile-close"
                          onClick={() => setIsCartOpen(false)}
                          aria-label="بستن"
                        >
                          <X size={16} />
                        </button>
                      </div>

                      <div className="ras-cart-items">
                        {cartItems.map(item => (
                          <div key={item.id} className="ras-cart-item">
                            <img src={item.image} alt={item.title} className="ras-cart-item-image" />
                            <div className="ras-cart-item-details">
                              <a href="#" className="ras-cart-item-title">
                                {item.title}
                              </a>
                              <div className="ras-cart-item-price">
                                {formatPrice(item.price)}
                              </div>
                              <div className="ras-cart-item-quantity">
                                <button
                                  className="ras-quantity-btn"
                                  onClick={() => updateQuantity(item.id, -1)}
                                  aria-label="کاهش"
                                >
                                  -
                                </button>
                                <span className="ras-quantity-value">{item.quantity}</span>
                                <button
                                  className="ras-quantity-btn"
                                  onClick={() => updateQuantity(item.id, 1)}
                                  aria-label="افزایش"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            <button
                              className="ras-remove-item"
                              onClick={() => removeItem(item.id)}
                              aria-label="حذف"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        ))}
                      </div>

                      <div className="ras-cart-footer">
                        <div className="ras-cart-total">
                          <span>جمع کل:</span>
                          <span style={{ color: '#8ed557' }}>{formatPrice(totalPrice)}</span>
                        </div>
                        <div className="ras-cart-buttons">
                          <a href="#" className="ras-cart-button-primary">
                            ثبت سفارش
                          </a>
                          <a href="#" className="ras-cart-button-secondary">
                            مشاهده سبد خرید
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* لینک ورود/ثبت‌نام */}
                <Link to="/account" className="ras-login-button">
                  <LogIn size={isMobile ? 18 : 20} />
                  <span className="ras-login-text">ورود / ثبت نام</span>
                  <span className="ras-login-short-text">ورود</span>
                </Link>
              </nav>
            </div>
          </div>

          {/* جستجوی موبایل */}
          {isMobile && (
            <div style={{ marginTop: '10px' }}>
              <div className="ras-search-container">
                <div className="ras-search-wrapper">
                  <input
                    type="text"
                    placeholder="جستجو در محصولات..."
                    className="ras-search-input"
                  />
                  <Search className="ras-search-icon" />
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
          className={`menu-overlay ras-mobile-overlay ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="ras-mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="ras-mobile-header">
              <span className="ras-mobile-title">منوی سایت</span>
              <button
                className="ras-mobile-close"
                onClick={() => setIsMenuOpen(false)}
                aria-label="بستن منو"
              >
                <X size={24} />
              </button>
            </div>
            <div className="ras-mobile-content">
              {/* گزینه خانه در منوی موبایل */}
              <div className="ras-mobile-menu-item">
                <Link to="/" className="ras-mobile-menu-link" onClick={() => setIsMenuOpen(false)}>
                  <Home size={18} style={{ marginLeft: '8px' }} />
                  <span>خانه</span>
                </Link>
              </div>

              {/* آیتم‌های منوی موبایل */}
              {menuItems.map((item) => (
                <div key={item.id} className="ras-mobile-menu-item">
                  <a href="#" className="ras-mobile-menu-link">
                    §                                        {item.icon && <span style={{ marginLeft: '8px' }}>{item.icon}</span>}
                    {item.title}
                  </a>
                </div>
              ))}

              {/* بخش پایانی منوی موبایل */}
              <div style={{ marginTop: '20px', padding: '15px', borderTop: '1px solid #eaeaea' }}>
                <Link to="/account" className="ras-mobile-menu-link" style={{ color: '#ffb726' }} onClick={() => setIsMenuOpen(false)}>
                  <LogIn size={18} style={{ marginLeft: '8px' }} />
                  ورود / ثبت نام
                </Link>
                <a href="#" className="ras-mobile-menu-link" style={{ color: '#ffb726', marginTop: '10px' }}>
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

export default Header;