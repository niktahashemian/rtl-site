
import React, { useState, useEffect } from 'react';
import { Menu, Search, ChevronDown, X, LogIn, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../../assets/css/style.css';

const CartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="21" r="1"></circle>
        <circle cx="19" cy="21" r="1"></circle>
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
    </svg>
);

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [_isTablet, _setIsTablet] = useState(window.innerWidth <= 991);
    const [_isMediumTablet, _setIsMediumTablet] = useState(window.innerWidth <= 1100);
    const [activeMenu, setActiveMenu] = useState(null);
    const [isCartOpen, setIsCartOpen] = useState(false);
    
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

    const handleMenuEnter = (menuId) => {
        setActiveMenu(menuId);
    };

    const handleMenuLeave = () => {
        setActiveMenu(null);
    };

    const menuItems = [
        {
            id: 'wp-themes',
            title: 'قالب وردپرس',
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
            title: 'افزونه وردپرس',
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
        {
            id: 'html',
            title: 'قالب HTML',
            type: 'mega',
            icon: '🌐',
            columns: [
                {
                    title: 'قالب HTML',
                    icon: '🌐',
                    items: [
                        { name: 'قالب HTML فروشگاهی', count: 156, link: '#', icon: '🛍️' },
                        { name: 'قالب HTML شرکتی', count: 134, link: '#', icon: '🏢' },
                        { name: 'قالب HTML فرود', count: 112, link: '#', icon: '✈️' },
                        { name: 'قالب HTML شخصی', count: 98, link: '#', icon: '👤' },
                        { name: 'قالب HTML وب‌اپلیکیشن', count: 87, link: '#', icon: '📱' },
                        { name: 'قالب HTML مدیریتی', count: 76, link: '#', icon: '⚙️' }
                    ]
                }
            ]
        },
        {
            id: 'script',
            title: 'قالب اسکریپت',
            type: 'mega',
            icon: '📜',
            columns: [
                {
                    title: 'اسکریپت‌های کاربردی',
                    icon: '📜',
                    items: [
                        { name: 'اسکریپت فروشگاهی', count: 98, link: '#', icon: '🛍️' },
                        { name: 'اسکریپت مدیریتی', count: 87, link: '#', icon: '⚙️' },
                        { name: 'اسکریپت چت', count: 76, link: '#', icon: '💬' },
                        { name: 'اسکریپت انجمن', count: 65, link: '#', icon: '👥' },
                        { name: 'اسکریپت آموزشی', count: 54, link: '#', icon: '📚' },
                        { name: 'اسکریپت خبری', count: 43, link: '#', icon: '📰' }
                    ]
                }
            ]
        },
        {
            id: 'other',
            title: 'سایر محصولات',
            type: 'mega',
            icon: '📦',
            columns: [
                {
                    title: 'دموهای قالب',
                    icon: '🎯',
                    items: [
                        { name: 'دموهای قالب فروشگاهی', count: 156, link: '#', icon: '🛍️' },
                        { name: 'دموهای قالب شخصی', count: 134, link: '#', icon: '👤' },
                        { name: 'دموهای قالب پزشکی', count: 112, link: '#', icon: '🏥' },
                        { name: 'دموهای قالب چند منظوره', count: 98, link: '#', icon: '🌟' },
                        { name: 'دموهای قالب نمونه کار', count: 87, link: '#', icon: '🎨' },
                        { name: 'دموهای قالب آموزشی', count: 76, link: '#', icon: '📚' }
                    ]
                },
                {
                    title: 'پکیج‌های ویژه',
                    icon: '🎁',
                    items: [
                        { name: 'پکیج طراحی سایت', count: 45, link: '#', icon: '💻' },
                        { name: 'پکیج سئو', count: 34, link: '#', icon: '🔍' },
                        { name: 'پکیج امنیت', count: 23, link: '#', icon: '🔒' }
                    ]
                }
            ]
        }
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
                            </div>
                        </div>

                        {!isMobile && (
                            <div className="ras-col-auto">
                                <div className="ras-search-container">
                                    <div className="ras-search-wrapper">
                                        <input
                                            type="text"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            placeholder="جستجو در محصولات..."
                                            className="ras-search-input"
                                        />
                                        <Search className="ras-search-icon" />
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="ras-col-responsive">
                            <nav className="ras-nav">
                                <a href="#" className="ras-vendor-button">
                                    <span>فروشنده شوید</span>
                                    <span>💰</span>
                                </a>

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

                                <Link to="/account" className="ras-login-button">
                                    <LogIn size={isMobile ? 18 : 20} />
                                    <span className="ras-login-text">ورود / ثبت نام</span>
                                    <span className="ras-login-short-text">ورود</span>
                                </Link>

                                {isMobile && (
                                    <div className="ras-mobile-search-container">
                                        {!isSearchOpen ? (
                                            <button 
                                                className="ras-search-toggle-icon"
                                                onClick={() => setIsSearchOpen(true)}
                                                aria-label="جستجو"
                                            >
                                                <Search size={20} />
                                            </button>
                                        ) : (
                                            <div className="ras-search-active-wrapper">
                                                <input
                                                    type="text"
                                                    value={searchTerm}
                                                    onChange={(e) => setSearchTerm(e.target.value)}
                                                    placeholder="جستجو..."
                                                    autoFocus
                                                    className="ras-mobile-search-input"
                                                />
                                                <button 
                                                    className="ras-search-close-icon"
                                                    onClick={() => {
                                                        setIsSearchOpen(false);
                                                        setSearchTerm('');
                                                    }}
                                                    aria-label="بستن جستجو"
                                                >
                                                    <X size={20} />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="ras-main-nav">
                <div className="ras-container">
                    <ul className="ras-menu-list">
                        <li className="ras-menu-item ras-home-item">
                            <Link to="/" className="ras-menu-link ras-home-link">
                                <Home size={18} />
                                <span>خانه</span>
                            </Link>
                        </li>

                        {menuItems.map((item) => (
                            <li
                                key={item.id}
                                className="ras-menu-item"
                                onMouseEnter={() => handleMenuEnter(item.id)}
                                onMouseLeave={handleMenuLeave}
                            >
                                <button
                                    className={`ras-menu-link ${activeMenu === item.id ? 'active' : ''}`}
                                >
                                    {item.icon && <span>{item.icon}</span>}
                                    <span>{item.title}</span>
                                    <ChevronDown size={14} />
                                </button>

                                {activeMenu === item.id && item.type === 'mega' && (
                                    <div className="mega-menu ras-mega-menu">
                                        {item.columns.map((column, idx) => (
                                            <div key={idx} className="ras-menu-column">
                                                <div className="ras-menu-category">
                                                    {column.icon && <span>{column.icon}</span>}
                                                    {column.title}
                                                </div>
                                                <ul className="ras-submenu-list">
                                                    {column.items.map((subItem, subIdx) => (
                                                        <li key={subIdx} className="ras-submenu-item">
                                                            <a href={subItem.link} className="ras-submenu-link">
                                                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                                    {subItem.icon && <span>{subItem.icon}</span>}
                                                                    <span>{subItem.name}</span>
                                                                </span>
                                                                <span className="ras-product-count">{subItem.count}</span>
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}

                                        {/* بنر تبلیغاتی منو */}
                                        {item.showBanner && (
                                            <div className="ras-menu-banner">
                                                <span style={{ fontWeight: 600 }}>🚀 تخفیف ویژه تا ۴۰٪ برای محصولات جدید</span>
                                                <a href="#" className="ras-banner-link">
                                                    مشاهده همه
                                                    <span>←</span>
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

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
                                        {item.icon && <span style={{ marginLeft: '8px' }}>{item.icon}</span>}
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