// export default ServicesSlider;
import React, { useRef } from 'react';
import '../../assets/css/style.css';

const ServicesSlider = () => {
    const scrollContainerRef = useRef(null);

    const services = [
        { id: 1, title: "خدمات 360 درجه", category: "360-services", description: "ارائه خدمات جامع و کامل در تمامی زمینه‌ها", icon: "🔄" },
        { id: 2, title: "طراحی سایت", category: "WebsiteDesign", description: "طراحی مدرن و واکنش‌گرای وبسایت", icon: "💻" },
        { id: 3, title: "بهینه‌سازی و امنیت", category: "WebsiteSecurity", description: "ارتقا امنیت و سرعت سایت", icon: "🔒" },
        { id: 4, title: "بررسی سایت", category: "WebsiteAnalyze", description: "تحلیل و بررسی کامل عملکرد سایت", icon: "🔍" },
        { id: 5, title: "خدمات سایت", category: "WebsiteService", description: "ارائه خدمات پشتیبانی و نگهداری", icon: "⚙️" },
        { id: 6, title: "پشتیبانی سایت", category: "Support", description: "پشتیبانی 24/7 و رفع مشکلات", icon: "📞" },
        { id: 7, title: "نصب و پیکربندی", category: "Installation-services", description: "نصب و تنظیمات تخصصی", icon: "🔧" },
        { id: 8, title: "خدمات گرافیک", category: "Graphic", description: "طراحی گرافیک و رابط کاربری", icon: "🎨" },
        { id: 9, title: "خدمات سئو", category: "Seo", description: "بهینه‌سازی موتورهای جستجو", icon: "📈" },
        { id: 10, title: "میزبانی وب", category: "Hosting", description: "هاستینگ امن و پرسرعت", icon: "☁️" },
        { id: 11, title: "تولید محتوا", category: "Content", description: "تولید محتوای تخصصی", icon: "✍️" }
    ];

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const handleWheel = (e) => {
        if (scrollContainerRef.current) {
            e.preventDefault();
            scrollContainerRef.current.scrollBy({
                left: e.deltaY,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="services-slider-container">
            <div className='product-section-head__content'>
                <div className='product-section-head__content-img'>
                    <img src="	https://www.rtl-theme.com/wp-content/themes/rtl-th…PService/dist/Active/media/html/services-head.png" alt="" />
                </div>
                <div className='product-section-head__content-title'>" ثبت درخواست"
                    <span className='color-color'> سرویس</span>
                    <span className='color'> | </span>
                    <div className='product-section-head__content-sub'></div>
                </div>
                <div className='product-section-head__content-sub'> آغاز یک همکاری ارزشمند </div>
            </div>
            {/* کانتینر اسکرول */}
            <div
                className="services-scroll-container"
                ref={scrollContainerRef}
                onWheel={handleWheel}
            >
                <div className="services-grid">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="service-card"
                            data-category={service.category}
                        >
                            <div className="service-card-border">
                                <div className="service-icon">{service.icon}</div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p> 
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* دکمه‌ها خارج از کانتینر اسکرول قرار می‌گیرند تا ثابت بمانند */}
            <button
                className="scroll-btn scroll-left fixed-btn"
                onClick={scrollLeft}
                aria-label="اسکرول به چپ"
            >
                ←
            </button>
            <button
                className="scroll-btn scroll-right fixed-btn"
                onClick={scrollRight}
                aria-label="اسکرول به راست"
            >
                →
            </button>

            <div className="scroll-indicator">
                <span className="indicator-dot active"></span>
                <span className="indicator-dot"></span>
                <span className="indicator-dot"></span>
            </div>
        </div>
    );
};

export default ServicesSlider;
