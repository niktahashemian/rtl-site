// src/components/TopDemos.jsx
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Monitor } from 'lucide-react';
import '../../assets/css/style.css';

const TopDemos = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth <= 991;

  const tabs = [
    { id: 'all', label: 'همه' },
    { id: 'shop', label: 'قالب فروشگاهی وردپرس' },
    { id: 'multipurpose', label: 'قالب چند منظوره' },
    { id: 'corporate', label: 'قالب شرکتی' },
    { id: 'educational', label: 'قالب آموزشی' },
  ];

  const demos = [
    {
      id: 303919,
      title: "آلفا پرس | قالب آموزشی و فروش دوره",
      category: "آموزشی",
      sales: 53,
      satisfaction: 86,
      support: "A+",
      price: 1048600,
      originalPrice: 1498000,
      discount: 30,
      demoLink: "/alpha",
      productLink: "https://www.rtl-theme.com/alfapress-wordpress-theme/",
      image: "https://media.rtlcdn.com/2026/01/04ecc69e5efcc084315f93044716210420c73408f4779f-scaled.webp"
    },
    {
      id: 303874,
      title: "تشریفات ، دیزاین و خدمات لوکس",
      category: "چند منظوره",
      sales: 743,
      satisfaction: 90,
      support: "A+",
      price: 1348000,
      demoLink: "https://rtlr.ir/303874",
      productLink: "https://www.rtl-theme.com/shamim-wordpress-theme/",
      image: "https://media.rtlcdn.com/2026/01/63b0fd7015f7073e8749d62268653361846a82f16179a5-scaled.webp"
    },
    {
      id: 302884,
      title: "سایت فروش دوره",
      category: "آموزشی",
      sales: 15,
      satisfaction: 100,
      support: "A+",
      price: 1598000,
      demoLink: "https://rtlr.ir/302884",
      productLink: "https://www.rtl-theme.com/gerdoo-wordpress-theme/",
      image: "https://media.rtlcdn.com/2025/12/6f6a8174843b72f21817c8479065589f161a98c56f8da6.webp"
    },
    {
      id: 302638,
      title: "فروشگاه بازی و اکانت",
      category: "فروشگاهی",
      sales: 236,
      satisfaction: 91,
      support: "A+",
      price: 2148000,
      demoLink: "https://rtlr.ir/302638",
      productLink: "https://www.rtl-theme.com/boom-wordpress-theme/",
      image: "https://media.rtlcdn.com/2025/12/c8391c0737cc3407f36e7949e60c33b17b26125d155480.webp"
    },
    {
      id: 300928,
      title: "صفحه شخصی و رزومه‌ای هلدینگ",
      category: "شرکتی",
      sales: 396,
      satisfaction: 88,
      support: "A+",
      price: 1198000,
      demoLink: "https://rtlr.ir/300928",
      productLink: "https://www.rtl-theme.com/holding-wordpress-theme/",
      image: "https://media.rtlcdn.com/2025/11/5cf9774d5135154ecba0954d22e0062414f16a92054425.webp"
    },
    {
      id: 300827,
      title: "آنلاین شاپ بلاگر اینستاگرام",
      category: "شرکتی",
      sales: 36,
      satisfaction: 88,
      support: "A+",
      price: 1198000,
      demoLink: "https://rtlr.ir/300827",
      productLink: "https://www.rtl-theme.com/view-wordpress-theme/",
      image: "https://media.rtlcdn.com/2025/11/f9df19e2788a41a423290941bba3ad437f8042792de3e6-scaled.webp"
    },
    {
      id: 297003,
      title: "مجموعه آموزشی",
      category: "آموزشی",
      sales: 82,
      satisfaction: 91,
      support: "A+",
      price: 1097000,
      demoLink: "https://rtlr.ir/297003",
      productLink: "https://www.rtl-theme.com/masterlife-wordpress-theme/",
      image: "https://media.rtlcdn.com/2025/08/359b200195a55a5e11410f013529d7a08d3f871e56b5fc-scaled.webp"
    },
    {
      id: 295334,
      title: "شرکت خدمات هوش مصنوعی",
      category: "شرکتی",
      sales: 358,
      satisfaction: 84,
      support: "A+",
      price: 696500,
      originalPrice: 995000,
      discount: 30,
      demoLink: "https://rtlr.ir/295334",
      productLink: "https://www.rtl-theme.com/startnext-corporate-wordpress-theme/",
      image: "https://media.rtlcdn.com/2025/07/80160ae335f936813c74c332e342177807ed69b28c3d94-scaled.webp"
    },
    {
      id: 295077,
      title: "مشاوره حقوقی",
      category: "چند منظوره",
      sales: 743,
      satisfaction: 90,
      support: "A+",
      price: 1348000,
      demoLink: "https://rtlr.ir/295077",
      productLink: "https://www.rtl-theme.com/shamim-wordpress-theme/",
      image: "https://media.rtlcdn.com/2025/07/186b03709b79b37c867725310f409fa617d58fdb74d123.webp"
    },
    {
      id: 292424,
      title: "فروشگاه لوازم خانه و دیجیتال مدرن",
      category: "فروشگاهی",
      sales: 283,
      satisfaction: 81,
      support: "A",
      price: 1348000,
      demoLink: "https://rtlr.ir/292424",
      productLink: "https://www.rtl-theme.com/digiplus-wordpress-theme/",
      image: "https://media.rtlcdn.com/2025/04/0e8058deb375763257c9ec43246d37e10583d84174515c-scaled.webp"
    },
    {
      id: 290117,
      title: "لوازم دیجیتال پویا و جذاب",
      category: "فروشگاهی",
      sales: 727,
      satisfaction: 90,
      support: "A+",
      price: 1348000,
      demoLink: "https://rtlr.ir/290117",
      productLink: "https://www.rtl-theme.com/mehrnoosh-wordpress-theme/",
      image: "https://media.rtlcdn.com/2025/09/f9e222bdc7502133d4d1a37f574270239ac98441c888d2-scaled.webp"
    },
    {
      id: 288125,
      title: "آرایشگاه زنانه و مردانه",
      category: "چند منظوره",
      sales: 456,
      satisfaction: 90,
      support: "A+",
      price: 1198000,
      demoLink: "https://rtlr.ir/288125",
      productLink: "https://www.rtl-theme.com/karen-wordpress-theme/",
      image: "https://media.rtlcdn.com/2025/02/427fc0840f045352a1031002e58ef8071b872984b76734.webp"
    },
    {
      id: 287922,
      title: "فروش دوره آموزشی",
      category: "آموزشی",
      sales: 170,
      satisfaction: 84,
      support: "A",
      price: 1198000,
      demoLink: "https://rtlr.ir/287922",
      productLink: "https://www.rtl-theme.com/blogina-wordpress-theme/",
      image: "https://media.rtlcdn.com/2025/09/4b779579d70925a966a430fcb467bd7ddad41163c375f7-scaled.webp"
    },
    {
      id: 285238,
      title: "فروشگاه چند منظوره",
      category: "فروشگاهی",
      sales: 383,
      satisfaction: 91,
      support: "A+",
      price: 1348000,
      demoLink: "https://rtlr.ir/285238",
      productLink: "https://www.rtl-theme.com/bijan-wordpress-theme/",
      image: "https://media.rtlcdn.com/2024/12/cf3074143f3814104735548e33804c28788cab5c93171a-scaled.webp"
    },
    {
      id: 275250,
      title: "فروش دوره های برنامه نویسی",
      category: "آموزشی",
      sales: 1434,
      satisfaction: 90,
      support: "A+",
      price: 1348000,
      demoLink: "https://rtlr.ir/275250",
      productLink: "https://www.rtl-theme.com/parsa-wordpress-theme/",
      image: "https://media.rtlcdn.com/2024/03/2435167eaceb0541f9042c2a9a7566927729bc80a2c0f4.webp"
    }
  ];

  // فیلتر دموها بر اساس تب فعال
  const filteredDemos = activeTab === 'all' 
    ? demos 
    : demos.filter(demo => {
        if (activeTab === 'shop') return demo.category === 'فروشگاهی';
        if (activeTab === 'multipurpose') return demo.category === 'چند منظوره';
        if (activeTab === 'corporate') return demo.category === 'شرکتی';
        if (activeTab === 'educational') return demo.category === 'آموزشی';
        return true;
      });

  // محاسبه تعداد اسلایدها بر اساس سایز صفحه
  const getSlidesPerView = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 4;
  };

  const slidesPerView = getSlidesPerView();
  const maxIndex = Math.max(0, filteredDemos.length - slidesPerView);

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  // محاسبه عرض اسلاید بر اساس تعداد در هر ویو
  const getSlideWidth = () => {
    if (isMobile) return '100%';
    const gapTotal = 15 * (slidesPerView - 1);
    return `calc(${100 / slidesPerView}% - ${gapTotal / slidesPerView}px)`;
  };

  return (
    <section className="rtl-top-demos-section">
      <div className="rtl-top-demos-container">
        
        {/* هدر سکشن */}
        <div className="rtl-top-demos-header">
          <div className="rtl-top-demos-header-right">
            <div className="rtl-top-demos-header-icon">
              <Monitor size={24} />
            </div>
            <div className="rtl-top-demos-header-title-wrapper">
              <h2 className="rtl-top-demos-header-title">برترین دموها در یک نگاه</h2>
              <div className="rtl-top-demos-tabs">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    className={`rtl-top-demos-tab ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setCurrentIndex(0);
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="rtl-top-demos-header-left">
            <div className="rtl-top-demos-nav-buttons">
              <button
                className="rtl-top-demos-nav-button"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                aria-label="قبلی"
              >
                <ChevronRight size={20} />
              </button>
              <button
                className="rtl-top-demos-nav-button"
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                aria-label="بعدی"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
            <a
              href="https://www.rtl-theme.com/category/wp-themes/?onlyInDemos=true"
              className="rtl-top-demos-view-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              مشاهده همه
            </a>
          </div>
        </div>

        {/* اسلایدر دموها */}
        <div className="rtl-top-demos-slider-container">
          <div 
            className="rtl-top-demos-slider"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`
            }}
          >
            {filteredDemos.map((demo) => (
              <div 
                key={demo.id} 
                className="rtl-top-demos-slide"
                style={{ flex: `0 0 ${getSlideWidth()}` }}
              >
                <div className="rtl-top-demos-card">
                  <div className="rtl-top-demos-image">
                    <a href={demo.demoLink} target="_blank" rel="noopener noreferrer">
                      <img
                        src={demo.image}
                        alt={demo.title}
                        loading="lazy"
                      />
                    </a>
                  </div>
                  <div className="rtl-top-demos-body">
                    <div className="rtl-top-demos-title">
                      <a href={demo.demoLink} target="_blank" rel="noopener noreferrer">
                        {demo.title}
                      </a>
                    </div>
                    <div className="rtl-top-demos-category">
                      محصول : <a href={demo.productLink} target="_blank" rel="noopener noreferrer">
                        {demo.title}
                      </a>
                    </div>

                    <div className="rtl-top-demos-footer">
                      <div className="rtl-top-demos-details">
                        <div className="rtl-top-demos-detail">
                          <span className="rtl-top-demos-detail-count">{demo.sales}</span>
                          <span className="rtl-top-demos-detail-label">فروش</span>
                        </div>
                        <div className="rtl-top-demos-detail">
                          <span className="rtl-top-demos-detail-count">{demo.satisfaction}%</span>
                          <span className="rtl-top-demos-detail-label">رضایت</span>
                        </div>
                        <div className="rtl-top-demos-detail">
                          <span className="rtl-top-demos-detail-count">{demo.support}</span>
                          <span className="rtl-top-demos-detail-label">پشتیبانی</span>
                        </div>
                      </div>
                      <div className="rtl-top-demos-price">
                        {demo.discount && (
                          <div className="rtl-top-demos-price-original">
                            <span className="rtl-top-demos-discount">{demo.discount}%</span>
                            <span className="rtl-top-demos-price-old">
                              {demo.originalPrice?.toLocaleString('fa-IR')}
                            </span>
                          </div>
                        )}
                        <div className="rtl-top-demos-price-sale">
                          {demo.price.toLocaleString('fa-IR')}
                          <span className="rtl-top-demos-price-sym">تومان</span>
                        </div>
                      </div>
                    </div>

                    <div className="rtl-top-demos-actions">
                      <button
                        className="rtl-top-demos-preview-btn"
                        data-id={demo.id}
                        data-type="ProductPreview"
                        data-target={demo.demoLink}
                        onClick={() => window.open(demo.demoLink, '_blank')}
                      >
                        پیشنمایش
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* نشانگر صفحه برای موبایل */}
        {isMobile && (
          <div className="rtl-top-demos-mobile-indicator">
            {filteredDemos.map((_, index) => (
              <div
                key={index}
                className={`rtl-top-demos-indicator-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                role="button"
                tabIndex={0}
                aria-label={`رفتن به اسلاید ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* اسکلتون لودینگ - مخفی */}
        <div className="rtl-top-demos-skeleton" id="specialDemosSkeleton">
          {/* محتوای اسکلتون - در صورت نیاز می‌توان فعال کرد */}
        </div>

      </div>
    </section>
  );
};

export default TopDemos;
// // src/components/TopDemos.jsx
// import React, { useState, useEffect } from 'react';
// import { ChevronRight, ChevronLeft, Monitor } from 'lucide-react';
// import '../../assets/css/style.css';

// const TopDemos = () => {
//   const [activeTab, setActiveTab] = useState('all');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const isMobile = windowWidth <= 768;
//   const isTablet = windowWidth <= 991;

//   const tabs = [
//     { id: 'all', label: 'همه' },
//     { id: 'shop', label: 'قالب فروشگاهی وردپرس' },
//     { id: 'multipurpose', label: 'قالب چند منظوره' },
//     { id: 'corporate', label: 'قالب شرکتی' },
//     { id: 'educational', label: 'قالب آموزشی' },
//   ];

//   const demos = [
//     {
//       id: 303919,
//       title: "آلفا پرس | قالب آموزشی و فروش دوره",
//       category: "آموزشی",
//       sales: 53,
//       satisfaction: 86,
//       support: "A+",
//       price: 1048600,
//       originalPrice: 1498000,
//       discount: 30,
//       demoLink: "",
//       productLink: "",
//       image: "https://media.rtlcdn.com/2026/01/04ecc69e5efcc084315f93044716210420c73408f4779f-scaled.webp"
//     },
//     {
//       id: 303874,
//       title: "تشریفات ، دیزاین و خدمات لوکس",
//       category: "چند منظوره",
//       sales: 743,
//       satisfaction: 90,
//       support: "A+",
//       price: 1348000,
//       demoLink: "",
//       productLink: "",
//       image: "https://media.rtlcdn.com/2026/01/63b0fd7015f7073e8749d62268653361846a82f16179a5-scaled.webp"
//     },
//     {
//       id: 302884,
//       title: "سایت فروش دوره",
//       category: "آموزشی",
//       sales: 15,
//       satisfaction: 100,
//       support: "A+",
//       price: 1598000,
//       demoLink: "",
//       productLink: "",
//       image: "https://media.rtlcdn.com/2025/12/6f6a8174843b72f21817c8479065589f161a98c56f8da6.webp"
//     },
//     {
//       id: 302638,
//       title: "فروشگاه بازی و اکانت",
//       category: "فروشگاهی",
//       sales: 236,
//       satisfaction: 91,
//       support: "A+",
//       price: 2148000,
//       demoLink: "",
//       productLink: "",
//       image: "https://media.rtlcdn.com/2025/12/c8391c0737cc3407f36e7949e60c33b17b26125d155480.webp"
//     },
//     {
//       id: 300928,
//       title: "صفحه شخصی و رزومه‌ای هلدینگ",
//       category: "شرکتی",
//       sales: 396,
//       satisfaction: 88,
//       support: "A+",
//       price: 1198000,
//       demoLink: "",
//       productLink: "",
//       image: "https://media.rtlcdn.com/2025/11/5cf9774d5135154ecba0954d22e0062414f16a92054425.webp"
//     },
//     {
//       id: 300827,
//       title: "آنلاین شاپ بلاگر اینستاگرام",
//       category: "شرکتی",
//       sales: 36,
//       satisfaction: 88,
//       support: "A+",
//       price: 1198000,
//       demoLink: "",
//       productLink: "",
//       image: "https://media.rtlcdn.com/2025/11/f9df19e2788a41a423290941bba3ad437f8042792de3e6-scaled.webp"
//     },
//     {
//       id: 297003,
//       title: "مجموعه آموزشی",
//       category: "آموزشی",
//       sales: 82,
//       satisfaction: 91,
//       support: "A+",
//       price: 1097000,
//       demoLink: "",
//       productLink: "",
//       image: "https://media.rtlcdn.com/2025/08/359b200195a55a5e11410f013529d7a08d3f871e56b5fc-scaled.webp"
//     },
//     {
//       id: 295334,
//       title: "شرکت خدمات هوش مصنوعی",
//       category: "شرکتی",
//       sales: 358,
//       satisfaction: 84,
//       support: "A+",
//       price: 696500,
//       originalPrice: 995000,
//       discount: 30,
//       demoLink: "",
//       productLink: "",
//       image: "https://media.rtlcdn.com/2025/07/80160ae335f936813c74c332e342177807ed69b28c3d94-scaled.webp"
//     },
//     {
//       id: 295077,
//       title: "مشاوره حقوقی",
//       category: "چند منظوره",
//       sales: 743,
//       satisfaction: 90,
//       support: "A+",
//       price: 1348000,
//       demoLink: "",
//       productLink: "",
//       image: "https://media.rtlcdn.com/2025/07/186b03709b79b37c867725310f409fa617d58fdb74d123.webp"
//     },
//     {
//       id: 292424,
//       title: "فروشگاه لوازم خانه و دیجیتال مدرن",
//       category: "فروشگاهی",
//       sales: 283,
//       satisfaction: 81,
//       support: "A",
//       price: 1348000,
//       demoLink: "",
//       productLink: "",
//       image: "https://media.rtlcdn.com/2025/04/0e8058deb375763257c9ec43246d37e10583d84174515c-scaled.webp"
//     },
//     {
//       id: 290117,
//       title: "لوازم دیجیتال پویا و جذاب",
//       category: "فروشگاهی",
//       sales: 727,
//       satisfaction: 90,
//       support: "A+",
//       price: 1348000,
//       demoLink: "",
//       productLink: "",
//       image: "https://media.rtlcdn.com/2025/09/f9e222bdc7502133d4d1a37f574270239ac98441c888d2-scaled.webp"
//     },
//     {
//       id: 288125,
//       title: "آرایشگاه زنانه و مردانه",
//       category: "چند منظوره",
//       sales: 456,
//       satisfaction: 90,
//       support: "A+",
//       price: 1198000,
//       demoLink: "",
//       productLink: "",
//       image: "https://media.rtlcdn.com/2025/02/427fc0840f045352a1031002e58ef8071b872984b76734.webp"
//     },
//     {
//       id: 287922,
//       title: "فروش دوره آموزشی",
//       category: "آموزشی",
//       sales: 170,
//       satisfaction: 84,
//       support: "A",
//       price: 1198000,
//       demoLink: "",
//       productLink: "",
//       image: "https://media.rtlcdn.com/2025/09/4b779579d70925a966a430fcb467bd7ddad41163c375f7-scaled.webp"
//     },
//     {
//       id: 285238,
//       title: "فروشگاه چند منظوره",
//       category: "فروشگاهی",
//       sales: 383,
//       satisfaction: 91,
//       support: "A+",
//       price: 1348000,
//       demoLink: "",
//       productLink: "",
//       image: "https://media.rtlcdn.com/2024/12/cf3074143f3814104735548e33804c28788cab5c93171a-scaled.webp"
//     },
//     {
//       id: 275250,
//       title: "فروش دوره های برنامه نویسی",
//       category: "آموزشی",
//       sales: 1434,
//       satisfaction: 90,
//       support: "A+",
//       price: 1348000,
//       demoLink: "",
//       productLink: "",
//       image: "https://media.rtlcdn.com/2024/03/2435167eaceb0541f9042c2a9a7566927729bc80a2c0f4.webp"
//     }
//   ];

//   // فیلتر دموها بر اساس تب فعال
//   const filteredDemos = activeTab === 'all' 
//     ? demos 
//     : demos.filter(demo => {
//         if (activeTab === 'shop') return demo.category === 'فروشگاهی';
//         if (activeTab === 'multipurpose') return demo.category === 'چند منظوره';
//         if (activeTab === 'corporate') return demo.category === 'شرکتی';
//         if (activeTab === 'educational') return demo.category === 'آموزشی';
//         return true;
//       });

//   // محاسبه تعداد اسلایدها بر اساس سایز صفحه
//   const getSlidesPerView = () => {
//     if (isMobile) return 1;
//     if (isTablet) return 2;
//     return 4;
//   };

//   const slidesPerView = getSlidesPerView();
//   const maxIndex = Math.max(0, filteredDemos.length - slidesPerView);

//   const handlePrev = () => {
//     setCurrentIndex(prev => Math.max(0, prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
//   };

//   // محاسبه عرض اسلاید بر اساس تعداد در هر ویو
//   const getSlideWidth = () => {
//     if (isMobile) return '100%';
//     const gapTotal = 15 * (slidesPerView - 1);
//     return `calc(${100 / slidesPerView}% - ${gapTotal / slidesPerView}px)`;
//   };

//   return (
//     <section className="rtl-top-demos-section">
//       <div className="rtl-top-demos-container">
        
//         {/* هدر سکشن */}
//         <div className="rtl-top-demos-header">
//           <div className="rtl-top-demos-header-right">
//             <div className="rtl-top-demos-header-icon">
//               <Monitor size={24} />
//             </div>
//             <div className="rtl-top-demos-header-title-wrapper">
//               <h2 className="rtl-top-demos-header-title">برترین دموها در یک نگاه</h2>
//               <div className="rtl-top-demos-tabs">
//                 {tabs.map(tab => (
//                   <button
//                     key={tab.id}
//                     className={`rtl-top-demos-tab ${activeTab === tab.id ? 'active' : ''}`}
//                     onClick={() => {
//                       setActiveTab(tab.id);
//                       setCurrentIndex(0);
//                     }}
//                   >
//                     {tab.label}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="rtl-top-demos-header-left">
//             <div className="rtl-top-demos-nav-buttons">
//               <button
//                 className="rtl-top-demos-nav-button"
//                 onClick={handlePrev}
//                 disabled={currentIndex === 0}
//                 aria-label="قبلی"
//               >
//                 <ChevronRight size={20} />
//               </button>
//               <button
//                 className="rtl-top-demos-nav-button"
//                 onClick={handleNext}
//                 disabled={currentIndex >= maxIndex}
//                 aria-label="بعدی"
//               >
//                 <ChevronLeft size={20} />
//               </button>
//             </div>
//             <a
//               href="https://www.rtl-theme.com/category/wp-themes/?onlyInDemos=true"
//               className="rtl-top-demos-view-all"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               مشاهده همه
//             </a>
//           </div>
//         </div>

//         {/* اسلایدر دموها */}
//         <div className="rtl-top-demos-slider-container">
//           <div 
//             className="rtl-top-demos-slider"
//             style={{
//               transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`
//             }}
//           >
//             {filteredDemos.map((demo) => (
//               <div 
//                 key={demo.id} 
//                 className="rtl-top-demos-slide"
//                 style={{ flex: `0 0 ${getSlideWidth()}` }}
//               >
//                 <div className="rtl-top-demos-card">
//                   <div className="rtl-top-demos-image">
//                     <a href={demo.demoLink} target="_blank" rel="noopener noreferrer">
//                       <img
//                         src={demo.image}
//                         alt={demo.title}
//                         loading="lazy"
//                       />
//                     </a>
//                   </div>
//                   <div className="rtl-top-demos-body">
//                     <div className="rtl-top-demos-title">
//                       <a href={demo.demoLink} target="_blank" rel="noopener noreferrer">
//                         {demo.title}
//                       </a>
//                     </div>
//                     <div className="rtl-top-demos-category">
//                       محصول : <a href={demo.productLink} target="_blank" rel="noopener noreferrer">
//                         {demo.title}
//                       </a>
//                     </div>

//                     <div className="rtl-top-demos-footer">
//                       <div className="rtl-top-demos-details">
//                         <div className="rtl-top-demos-detail">
//                           <span className="rtl-top-demos-detail-count">{demo.sales}</span>
//                           <span className="rtl-top-demos-detail-label">فروش</span>
//                         </div>
//                         <div className="rtl-top-demos-detail">
//                           <span className="rtl-top-demos-detail-count">{demo.satisfaction}%</span>
//                           <span className="rtl-top-demos-detail-label">رضایت</span>
//                         </div>
//                         <div className="rtl-top-demos-detail">
//                           <span className="rtl-top-demos-detail-count">{demo.support}</span>
//                           <span className="rtl-top-demos-detail-label">پشتیبانی</span>
//                         </div>
//                       </div>
//                       <div className="rtl-top-demos-price">
//                         {demo.discount && (
//                           <div className="rtl-top-demos-price-original">
//                             <span className="rtl-top-demos-discount">{demo.discount}%</span>
//                             <span className="rtl-top-demos-price-old">
//                               {demo.originalPrice?.toLocaleString('fa-IR')}
//                             </span>
//                           </div>
//                         )}
//                         <div className="rtl-top-demos-price-sale">
//                           {demo.price.toLocaleString('fa-IR')}
//                           <span className="rtl-top-demos-price-sym">تومان</span>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="rtl-top-demos-actions">
//                       <button
//                         className="rtl-top-demos-preview-btn"
//                         data-id={demo.id}
//                         data-type="ProductPreview"
//                         data-target={demo.demoLink}
//                         onClick={() => window.open(demo.demoLink, '_blank')}
//                       >
//                         پیشنمایش
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* نشانگر صفحه برای موبایل */}
//         {isMobile && (
//           <div className="rtl-top-demos-mobile-indicator">
//             {filteredDemos.map((_, index) => (
//               <div
//                 key={index}
//                 className={`rtl-top-demos-indicator-dot ${index === currentIndex ? 'active' : ''}`}
//                 onClick={() => setCurrentIndex(index)}
//                 role="button"
//                 tabIndex={0}
//                 aria-label={`رفتن به اسلاید ${index + 1}`}
//               />
//             ))}
//           </div>
//         )}

//         {/* اسکلتون لودینگ - مخفی */}
//         <div className="rtl-top-demos-skeleton" id="specialDemosSkeleton">
//           {/* محتوای اسکلتون - در صورت نیاز می‌توان فعال کرد */}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default TopDemos;