// src/components/home/SpecialProductsSection.jsx
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../assets/css/style.css';

const SpecialProductsSection = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [swiperInstance, setSwiperInstance] = useState(null);
    
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // مقداردهی اولیه ناوبری Swiper بعد از رندر
    useEffect(() => {
        if (swiperInstance && !swiperInstance.destroyed) {
            swiperInstance.params.navigation.prevEl = prevRef.current;
            swiperInstance.params.navigation.nextEl = nextRef.current;
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperInstance]);

    // نمونه داده محصولات
    const productsData = useMemo(() => [
        {
            id: 303842,
            title: "ناجی | افزایش سرعت سایت با اینترنت ملی",
            usage: " افزونه نجات کسب و کار در محدودیت اینترنت ",
            price: 1198000,
            originalPrice: null,
            discount: null,
            image: "https://media.rtlcdn.com/2026/04/1f6571067724a5e7c276800147d5dd2b1a27f6837f3c14-1050x520.jpg",
            sales: 84,
            satisfaction: 100,
            support: "-",
            category: "افزونه وردپرس",
            link: "https://www.rtl-theme.com/rahkar-wordpress-plugin/",
            previewLink: "https://rtlr.ir/303842",
        },
        {
            id: 303707,
            title: 'آلفا پرس | قالب آموزشی و فروش دوره',
            usage: 'قالب آموزشی',
            price: 1498000,
            originalPrice: null,
            discount: null,
            image: 'https://media.rtlcdn.com/2026/01/986675c571af18178dff5f4341f21660914a7ee83c6120-337x171.jpg',
            sales: 51,
            satisfaction: 86,
            support: 'A+',
            category: 'قالب وردپرس',
            link: 'https://www.rtl-theme.com/alfapress-wordpress-theme/',
            previewLink: 'https://rtlr.ir/303707'
        },
        {
            id: 303039,
            title: 'پُرس‌ یار – افزونه چت‌ بات هوش مصنوعی',
            usage: 'افزونه چت چندزبانه با هوش مصنوعی',
            price: 848000,
            originalPrice: null,
            discount: null,
            image: 'https://media.rtlcdn.com/2026/01/d632487c388c1705ed6d1f5046873690850d47d6f45e07-337x171.jpg',
            sales: 60,
            satisfaction: 98,
            support: 'A',
            category: 'افزونه وردپرس',
            link: 'https://www.rtl-theme.com/porsyar-wordpress-plugin/',
            previewLink: 'https://rtlr.ir/303039'
        },
        {
            id: 302687,
            title: 'آی ترب | افزونه اتصال وردپرس به سایت ترب',
            usage: 'افزونه اتصال به ترب',
            price: 848000,
            originalPrice: null,
            discount: null,
            image: 'https://media.rtlcdn.com/2025/12/210f6c067797370b47eebd2c2991011979104f29585e65-337x171.jpg',
            sales: 93,
            satisfaction: 88,
            support: 'A+',
            category: 'افزونه وردپرس',
            link: 'https://www.rtl-theme.com/itorob-wordpress-plugin/',
            previewLink: 'https://rtlr.ir/302687'
        },
        {
            id: 301420,
            title: 'فرا پنل، افزونه پنل کاربری مدرن و حرفه‌ ای',
            usage: 'پنل کاربری حرفه‌ای همراه باشگاه مشتریان',
            price: 1198000,
            originalPrice: null,
            discount: null,
            image: 'https://media.rtlcdn.com/2025/12/71f95d03105850129744d04b252541dd1a8c799726746e-337x171.jpg',
            sales: 71,
            satisfaction: 96,
            support: 'A+',
            category: 'افزونه وردپرس',
            link: 'https://www.rtl-theme.com/fara-panel-wordpress-plugin/',
            previewLink: 'https://rtlr.ir/301420'
        },
        {
            id: 301175,
            title: 'لمکده، قالب فروشگاهی مبلمان و دکوراسیون',
            usage: 'قالب معماری و دکوراسیون داخلی',
            price: 750500,
            originalPrice: 998000,
            discount: 24,
            image: 'https://media.rtlcdn.com/2025/12/734c0655124bf8a06c11c946fb6876fdf47bfd45335f3f-337x171.jpg',
            sales: 48,
            satisfaction: 100,
            support: 'A+',
            category: 'قالب وردپرس',
            link: 'https://www.rtl-theme.com/lamkadeh-wordpress-theme/',
            previewLink: 'https://rtlr.ir/301175'
        },
        {
            id: 302201,
            title: 'اکانتک، قالب فروش اکانت',
            usage: 'قالب فروشگاهی وردپرس',
            price: 1048000,
            originalPrice: null,
            discount: null,
            image: 'https://media.rtlcdn.com/2025/12/d1548510b37f8c671e7325d51bda88a2e676492c542283-337x171.jpg',
            sales: 33,
            satisfaction: 70,
            support: 'A',
            category: 'قالب وردپرس',
            link: 'https://www.rtl-theme.com/accountech-wordpress-theme/',
            previewLink: 'https://rtlr.ir/302201'
        },
        {
            id: 301470,
            title: 'آنالیز یار، افزونه رصد رفتار کاربران در سایت',
            usage: 'افزونه مارکتینگ',
            price: 598000,
            originalPrice: null,
            discount: null,
            image: 'https://media.rtlcdn.com/2025/12/1d00cad1af99b811f615847dd5cff0a589343f6a93d786-337x171.jpg',
            sales: 33,
            satisfaction: 100,
            support: 'A',
            category: 'افزونه وردپرس',
            link: 'https://www.rtl-theme.com/analizyar-wordpress-plugin/',
            previewLink: 'https://rtlr.ir/301470'
        }
    ], []);

    const formatPrice = useCallback((price) => {
        if (!price) return '۰';
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }, []);

    const handleAddToCart = useCallback((productId, event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log('Add to cart:', productId);
        alert('محصول به سبد خرید اضافه شد');
    }, []);

    const handlePreview = useCallback((previewLink, event) => {
        event.preventDefault();
        event.stopPropagation();
        window.open(previewLink, '_blank');
    }, []);

    // تابع تعیین مسیر محصول بر اساس ID
    const getProductLink = useCallback((productId) => {
        // همه محصولات به صفحه محصول با ID بروند
        return `/product/${productId}`;
    }, []);

    // تنظیمات Swiper - بدون دسترسی به ref.current
    const swiperConfig = useMemo(() => ({
        modules: [Navigation, Autoplay],
        spaceBetween: 30,
        slidesPerView: 1,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
        },
        // navigation رو اینجا مقداردهی نمی‌کنیم
        navigation: false,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            480: {
                slidesPerView: 1.2,
                spaceBetween: 20
            },
            600: {
                slidesPerView: 1.5,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 25
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 25
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    }), []);

    return (
        <section className="special-products-section">
            {/* هدر با دکمه‌های ناوبری */}
            <div className="special-header">
                <div className="special-header-right">
                    <span className="special-header-icon">🔥</span>
                    <h3 className="special-header-title">محصولات ویژه</h3>
                </div>

                <div className="special-header-left">
                    <Link 
                        to="/products/special" 
                        className="special-view-all-btn"
                    >
                        مشاهده همه
                    </Link>
                    
                    <div className="special-nav-buttons">
                        <button 
                            ref={prevRef}
                            className={`special-nav-btn special-nav-prev ${!isMobile ? 'visible' : ''}`}
                            aria-label="قبلی"
                        >
                            ‹
                        </button>
                        
                        <button 
                            ref={nextRef}
                            className={`special-nav-btn special-nav-next ${!isMobile ? 'visible' : ''}`}
                            aria-label="بعدی"
                        >
                            ›
                        </button>
                    </div>
                </div>
            </div>

            {/* اسلایدر محصولات */}
            <div className="special-slider-container">
                <Swiper
                    {...swiperConfig}
                    dir="rtl"
                    className="special-products-swiper"
                    onSwiper={setSwiperInstance}
                    onInit={(swiper) => {
                        // مقداردهی ناوبری بعد از ایجاد Swiper
                        if (swiper.params.navigation) {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }
                    }}
                >
                    {productsData.map((product) => (
                        <SwiperSlide key={product.id}>
                            <article className="special-product-card">
                                {/* تصویر محصول - لینک به صفحه محصول */}
                                <Link to={getProductLink(product.id)} className="special-product-image-link">
                                    <img 
                                        src={product.image} 
                                        alt={product.title}
                                        className="special-product-image"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/337x171?text=No+Image';
                                        }}
                                    />
                                    {product.discount && (
                                        <span className="special-image-discount">
                                            {product.discount}% تخفیف
                                        </span>
                                    )}
                                </Link>
                                
                                {/* بدنه کارت */}
                                <div className="special-product-body">
                                    {/* عنوان محصول - لینک به صفحه محصول */}
                                    <Link 
                                        to={getProductLink(product.id)}
                                        className="special-product-title"
                                    >
                                        {product.title}
                                    </Link>
                                    
                                    <div className="special-product-usage">
                                        <span className="special-usage-icon">📊</span>
                                        <span>{product.usage}</span>
                                    </div>
                                    
                                    {/* جزئیات محصول */}
                                    <div className="special-product-details">
                                        <div className="special-detail-item">
                                            <span className="special-detail-count">{product.sales}</span>
                                            <span className="special-detail-title">فروش</span>
                                        </div>
                                        <div className="special-detail-item">
                                            <span className="special-detail-count">
                                                {product.satisfaction}%
                                            </span>
                                            <span className="special-detail-title">رضایت</span>
                                        </div>
                                        <div className="special-detail-item">
                                            <span className="special-detail-count">
                                                {product.support}
                                            </span>
                                            <span className="special-detail-title">پشتیبانی</span>
                                        </div>
                                    </div>
                                    
                                    {/* قیمت */}
                                    <div className="special-product-price">
                                        {product.discount && product.originalPrice && (
                                            <div className="special-price-info">
                                                <span className="special-discount-badge">
                                                    {product.discount}% تخفیف
                                                </span>
                                                <span className="special-original-price">
                                                    {formatPrice(product.originalPrice)} تومان
                                                </span>
                                            </div>
                                        )}
                                        <div className="special-sale-price">
                                            {formatPrice(product.price)} 
                                            <span className="special-currency">تومان</span>
                                        </div>
                                    </div>
                                    
                                    {/* دکمه‌ها */}
                                    <div className="special-product-actions">
                                        <button
                                            className="special-buy-btn"
                                            onClick={(e) => handleAddToCart(product.id, e)}
                                            data-id={product.id}
                                        >
                                            خرید و دانلود
                                        </button>
                                        <button
                                            className="special-preview-btn"
                                            onClick={(e) => handlePreview(product.previewLink, e)}
                                        >
                                            <span className="preview-icon">🖥️</span>
                                            پیشنمایش
                                        </button>
                                    </div>
                                </div>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default SpecialProductsSection;