// components/Header.jsx
import { useState } from 'react';
import '../../assets/css/style.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);
  const [activeAuthTab, setActiveAuthTab] = useState('login');
  const [loginMethod, setLoginMethod] = useState('mobile');
  const [isCartEmpty] = useState(true);
  const [cartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [,] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpCode, setOtpCode] = useState(['', '', '', '']);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [otpTimer, setOtpTimer] = useState(60);

  const menuItems = [
    {
      title: 'آلفاپرس',
      href: '/',
      icon: '🎓',
      submenu: [
        { title: 'دوره‌ها', href: '/shop' },
        { title: 'اساتید آلفاپرس', href: '/mentors' },
        { title: 'رویدادهای آلفاپرس', href: '/events' },
        { title: 'صفحه 404', href: '/404' }
      ]
    },
    { title: 'درخواست مشاوره رایگان', href: '/free-consult', icon: '🎁' },
    { title: 'مقالات', href: '/blog', icon: '📰' },
    { title: 'درباره', href: '/about-us', icon: 'ℹ️' },
    {
      title: 'ارتباط با ما',
      href: '/contact-us',
      icon: '📞',
      submenu: [
        { title: 'تماس با ما', href: '/contact-us' },
        { title: 'خرید آلفاپرس', href: 'https://www.rtl-theme.com/alfapress-wordpress-theme/' }
      ]
    }
  ];

  const handleMobileSubmit = () => {
    if (mobileNumber.length === 11) {
      setShowOtpForm(true);
      let timer = 60;
      const interval = setInterval(() => {
        timer--;
        setOtpTimer(timer);
        if (timer <= 0) clearInterval(interval);
      }, 1000);
    }
  };

  const handleOtpChange = (index, value) => {
    const newOtp = [...otpCode];
    newOtp[index] = value;
    setOtpCode(newOtp);
    if (value && index < 3) {
      const nextInput = document.getElementById(`new-otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  return (
    <header className="new-header">
      {/* Desktop Header */}
      <div className="new-header-desktop">
        <div className="new-header-container">
          {/* Logo */}
          <a href="/" className="new-logo">
            <img
              src="https://mjkhajeh.ir/alfapress/wp-content/themes/alfapress/assets/img/logo.svg"
              alt="آلفاپرس"
            />
          </a>

          {/* Navigation */}
          <nav className="new-nav">
            {menuItems.map((item, idx) => (
              <div key={idx} className="new-nav-item">
                <a href={item.href} className="new-nav-link">
                  <span className="new-nav-icon">{item.icon}</span>
                  <span>{item.title}</span>
                </a>
                {item.submenu && (
                  <div className="new-submenu">
                    {item.submenu.map((sub, subIdx) => (
                      <a key={subIdx} href={sub.href} className="new-submenu-item">
                        {sub.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="new-actions">
            {/* Search */}
            <div className="new-search">
              <input
                type="search"
                placeholder="جستجو..."
                className="new-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="new-search-icon">🔍</span>
            </div>

            {/* Account Button */}
            <div className="new-account-wrapper">
              <button
                className="new-account-btn"
                onClick={() => setIsAuthPopupOpen(!isAuthPopupOpen)}
              >
                <span>👤</span>
                <span>حساب کاربری</span>
              </button>

              {/* Auth Popup */}
              {isAuthPopupOpen && (
                <>
                  <div className="new-auth-overlay" onClick={() => setIsAuthPopupOpen(false)} />
                  <div className="new-auth-popup">
                    <div className="new-auth-tabs">
                      <button
                        className={`new-auth-tab ${activeAuthTab === 'login' ? 'active' : ''}`}
                        onClick={() => setActiveAuthTab('login')}
                      >
                        ورود
                      </button>
                      <button
                        className={`new-auth-tab ${activeAuthTab === 'register' ? 'active' : ''}`}
                        onClick={() => setActiveAuthTab('register')}
                      >
                        عضویت
                      </button>
                    </div>

                    {/* Login Form */}
                    {activeAuthTab === 'login' && (
                      <div className="new-auth-content">
                        {loginMethod === 'mobile' && !showOtpForm ? (
                          <>
                            <div className="new-auth-group">
                              <label className="new-auth-label">شماره موبایل</label>
                              <input
                                type="tel"
                                placeholder="09123456789"
                                className="new-auth-input input-ltr"
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)}
                              />
                            </div>
                            <button
                              className="new-auth-button"
                              onClick={handleMobileSubmit}
                              disabled={mobileNumber.length !== 11}
                            >
                              تایید
                            </button>
                            <button
                              className="new-auth-link"
                              onClick={() => setLoginMethod('username')}
                            >
                              ورود با ایمیل یا نام کاربری
                            </button>
                          </>
                        ) : loginMethod === 'mobile' && showOtpForm ? (
                          <>
                            <div className="new-auth-message">
                              کد تائید به شماره <span>{mobileNumber}</span> ارسال شد.
                            </div>
                            <div className="new-otp-container">
                              {otpCode.map((digit, idx) => (
                                <input
                                  key={idx}
                                  id={`new-otp-${idx}`}
                                  type="text"
                                  maxLength={1}
                                  className="new-otp-input"
                                  value={digit}
                                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                                />
                              ))}
                            </div>
                            <div className="new-otp-timer">
                              {Math.floor(otpTimer / 60)}:{String(otpTimer % 60).padStart(2, '0')}
                            </div>
                            <button className="new-auth-link">ارسال مجدد کد</button>
                            <button className="new-auth-button">تایید</button>
                            <button
                              className="new-auth-link"
                              onClick={() => {
                                setShowOtpForm(false);
                                setMobileNumber('');
                              }}
                            >
                              ویرایش شماره
                            </button>
                          </>
                        ) : (
                          <>
                            <div className="new-auth-group">
                              <label className="new-auth-label">ایمیل یا نام کاربری</label>
                              <input
                                type="text"
                                className="new-auth-input input-ltr"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                              />
                            </div>
                            <div className="new-auth-group">
                              <label className="new-auth-label">رمز عبور</label>
                              <div className="new-password-wrapper">
                                <input
                                  type={showPassword ? 'text' : 'password'}
                                  className="new-auth-input input-ltr"
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                  className="new-password-toggle"
                                  onClick={() => setShowPassword(!showPassword)}
                                >
                                  {showPassword ? '👁️' : '👁️‍🗨️'}
                                </button>
                              </div>
                            </div>
                            <button className="new-auth-link">رمز عبور خود را فراموش کردید؟</button>
                            <button className="new-auth-button">ورود</button>
                            <button
                              className="new-auth-link"
                              onClick={() => setLoginMethod('mobile')}
                            >
                              ورود با موبایل
                            </button>
                          </>
                        )}
                      </div>
                    )}

                    {/* Register Form */}
                    {activeAuthTab === 'register' && (
                      <div className="new-auth-content">
                        <div className="new-auth-group">
                          <label className="new-auth-label">نام کاربری</label>
                          <input type="text" className="new-auth-input input-ltr" />
                        </div>
                        <div className="new-auth-group">
                          <label className="new-auth-label">ایمیل</label>
                          <input type="email" className="new-auth-input input-ltr" />
                        </div>
                        <div className="new-auth-group">
                          <label className="new-auth-label">شماره موبایل</label>
                          <input type="tel" placeholder="09123456789" className="new-auth-input input-ltr" />
                        </div>
                        <div className="new-auth-group">
                          <label className="new-auth-label">رمز عبور</label>
                          <div className="new-password-wrapper">
                            <input type="password" className="new-auth-input input-ltr" />
                          </div>
                        </div>
                        <button className="new-auth-button">ساخت حساب کاربری</button>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Cart Button */}
            <a href="/cart" className="new-cart-btn">
              <span>🛒</span>
              {!isCartEmpty && (
                <span className="new-cart-count">{cartCount}</span>
              )}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="new-header-mobile">
        <button
          className="new-mobile-trigger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        <a href="/" className="new-mobile-logo">
          <img
            src="https://mjkhajeh.ir/alfapress/wp-content/themes/alfapress/assets/img/logo.svg"
            alt="آلفاپرس"
          />
        </a>

        <div className="new-mobile-actions">
          <button
            className="new-mobile-action"
            onClick={() => setIsAuthPopupOpen(!isAuthPopupOpen)}
          >
            👤
          </button>
          <a href="/cart" className="new-mobile-action">
            🛒
          </a>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <>
          <div className="new-drawer-overlay" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="new-drawer">
            <div className="new-drawer-header">
              <span className="new-drawer-title">آلفاپرس</span>
              <button className="new-drawer-close" onClick={() => setIsMobileMenuOpen(false)}>
                ✕
              </button>
            </div>
            <div className="new-drawer-content">
              <div className="new-drawer-search">
                <input
                  type="search"
                  placeholder="جستجو..."
                  className="new-drawer-search-input"
                />
                <span className="new-drawer-search-icon">🔍</span>
              </div>
              <nav className="new-drawer-nav">
                {menuItems.map((item, idx) => (
                  <div key={idx}>
                    <a href={item.href} className="new-drawer-nav-item">
                      <span>{item.icon}</span>
                      <span>{item.title}</span>
                    </a>
                    {item.submenu && (
                      <div className="new-drawer-submenu">
                        {item.submenu.map((sub, subIdx) => (
                          <a key={subIdx} href={sub.href} className="new-drawer-submenu-item">
                            {sub.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;