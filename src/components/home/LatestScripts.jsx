// import React, { useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import '../../assets/css/style.css';

// const LatestScripts = () => {
//   const [swiperInstance, setSwiperInstance] = useState(null);
//   const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const products = [
//     {
//       id: 304335,
//       title: "خیریه آسمان شهر | اسکریپت دریافت کمک های مردمی و اجتماعی",
//       image: "https://media.rtlcdn.com/2026/02/fa53e2628d8d7e8f2150c5512b2b005fc93270321bd0d-337x171.jpg",
//       category: "اسکریپت سامانه جامع",
//       sales: "6",
//       isNew: true,
//       support: "-",
//       discount: "35%",
//       originalPrice: "495,000",
//       price: "321,750",
//       link: "https://www.rtl-theme.com/asman-shahr-charity-script/",
//       previewLink: "https://rtlr.ir/304335"
//     },
//     {
//       id: 304159,
//       title: "ساختمان من | اسکریپت ارائه خدمات و مدیریت ساختمان",
//       image: "https://media.rtlcdn.com/2026/01/fdc86709279bc6f97827eb892667be65ff16e5f18dd090-337x171.jpg",
//       category: "اسکریپت سامانه جامع",
//       sales: "1",
//       isNew: true,
//       support: "-",
//       discount: "35%",
//       originalPrice: "7,847,000",
//       price: "5,100,550",
//       link: "https://www.rtl-theme.com/sakhteman-script/",
//       previewLink: "https://rtlr.ir/304159"
//     },
//     {
//       id: 303042,
//       title: "فاکتورپی | اسکریپت صدور فاکتور الکترونیکی و ارسال به سامانه مودیان",
//       image: "https://media.rtlcdn.com/2025/12/9b682d44661a7095921879a627753c815d8180bf1c811-337x171.png",
//       category: "اسکریپت لاراول",
//       sales: "0",
//       isNew: true,
//       support: "A+",
//       price: "31,647,000",
//       link: "https://www.rtl-theme.com/factorpay-script/",
//       previewLink: "https://rtlr.ir/303042"
//     },
//     {
//       id: 302808,
//       title: "پیکسو، اسکریپت سایت شخصی",
//       image: "https://media.rtlcdn.com/2025/12/79777c2913466b39a91d5087b2f7a57d08e4270116c4d5-337x171.png",
//       category: "سایر موارد",
//       sales: "5",
//       satisfaction: "100%",
//       support: "-",
//       price: "1,148,000",
//       link: "https://www.rtl-theme.com/pixo-script/",
//       previewLink: "https://rtlr.ir/302808"
//     },
//     {
//       id: 299266,
//       title: "گلدآرا، اسکریپت فروشگاه‌ ساز طلا و جواهرات",
//       image: "https://media.rtlcdn.com/2026/01/2f82db8084c96201f05d8a571e9a2ce5c6431fe6a6289e-337x171.jpg",
//       category: "اسکریپت طلا",
//       sales: "0",
//       isNew: true,
//       support: "-",
//       price: "20,000,000",
//       link: "https://www.rtl-theme.com/goldara-script/",
//       previewLink: "https://rtlr.ir/299266"
//     },
//     {
//       id: 301208,
//       title: "اسکریپت مجازی شو | پنل فروش خدمات شبکه‌های اجتماعی (SMM)",
//       image: "https://media.rtlcdn.com/2025/12/7e87a4d478a67daed63346d754267c70c1948485d9156-337x171.jpg",
//       category: "اسکریپت شبکه اجتماعی",
//       sales: "1",
//       isNew: true,
//       support: "-",
//       price: "11,197,000",
//       link: "https://www.rtl-theme.com/majazisho-script/",
//       previewLink: "https://rtlr.ir/301208"
//     },
//     {
//       id: 302322,
//       title: "طلوع نو، اسکریپت فروشگاهی (مشابه دیجی‌ کالا و با‌سلام)",
//       image: "https://media.rtlcdn.com/2025/12/c2d6869323a29143f93d3edee4e27472266305c7071839-337x171.jpg",
//       category: "اسکریپت فروشگاهی",
//       sales: "6",
//       isNew: true,
//       support: "-",
//       price: "6,247,000",
//       link: "https://www.rtl-theme.com/toloo-e-no-script/",
//       previewLink: "https://rtlr.ir/302322"
//     },
//     {
//       id: 302857,
//       title: "پرسونا؛ اسکریپت شخصی لاراول",
//       image: "https://media.rtlcdn.com/2025/12/2d7b54d656995011e78dfb5b953648fc4349a664210643-337x171.png",
//       category: "اسکریپت لاراول",
//       sales: "0",
//       isNew: true,
//       support: "A+",
//       price: "1,448,000",
//       link: "https://www.rtl-theme.com/persona-script/",
//       previewLink: "https://rtlr.ir/302857"
//     }
//   ];

//   const getSupportClass = (support) => {
//     if (support === 'A+') return 'latest-scripts-support-Aplus';
//     if (support === 'A') return 'latest-scripts-support-A';
//     return 'latest-scripts-support-B';
//   };

//   const handlePrev = () => {
//     if (swiperInstance) {
//       swiperInstance.slidePrev();
//     }
//   };

//   const handleNext = () => {
//     if (swiperInstance) {
//       swiperInstance.slideNext();
//     }
//   };

//   return (
//     <section className="latest-scripts-section">
//       <div className="latest-scripts-container">
//         {/* هدر با ترتیب درست */}
//         <header className="latest-scripts-header">
//           {/* سمت راست - آیکون و عنوان */}
//           <div className="latest-scripts-title-wrapper">
//             <span className="latest-scripts-icon">💻</span>
//             <h3 className="latest-scripts-title">جدیدترین اسکریپت‌ها</h3>
//           </div>

//           {/* سمت چپ - دکمه‌ها */}
//           <div className="latest-scripts-header-actions">
//             <div className="latest-scripts-navigation">
//               <button 
//                 onClick={handlePrev}
//                 className="latest-scripts-nav-button"
//                 aria-label="قبلی"
//               >
//                 ←
//               </button>
//               <button 
//                 onClick={handleNext}
//                 className="latest-scripts-nav-button"
//                 aria-label="بعدی"
//               >
//                 →
//               </button>
//             </div>
//             <a 
//               href="https://www.rtl-theme.com/category/script/?order=DESC&orderBy=date&style=grid" 
//               className="latest-scripts-view-all"
//             >
//               مشاهده همه
//             </a>
//           </div>
//         </header>

//         {/* اسلایدر */}
//         <div className="latest-scripts-swiper-container">
//           <Swiper
//             modules={[Navigation, Autoplay]}
//             spaceBetween={windowWidth <= 576 ? 8 : 16}
//             slidesPerView={1}
//             onSwiper={setSwiperInstance}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: true,
//               pauseOnMouseEnter: true
//             }}
//             breakpoints={{
//               320: {
//                 slidesPerView: 1,
//                 centeredSlides: false,
//                 spaceBetween: 8
//               },
//               480: {
//                 slidesPerView: 1.2,
//                 centeredSlides: false,
//                 spaceBetween: 10
//               },
//               600: {
//                 slidesPerView: 1.5,
//                 centeredSlides: false,
//                 spaceBetween: 12
//               },
//               768: {
//                 slidesPerView: 2.1,
//                 centeredSlides: false,
//                 spaceBetween: 14
//               },
//               992: {
//                 slidesPerView: 3,
//                 centeredSlides: false,
//                 spaceBetween: 16
//               },
//               1200: {
//                 slidesPerView: 4,
//                 centeredSlides: false,
//                 spaceBetween: 16
//               }
//             }}
//             dir="rtl"
//           >
//             {products.map((product) => (
//               <SwiperSlide key={product.id}>
//                 <div className="latest-scripts-slide">
//                   <article className="latest-scripts-card">
//                     {/* تصویر */}
//                     <div className="latest-scripts-image-container">
//                       <a 
//                         href={product.link} 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className="latest-scripts-card-link"
//                       >
//                         <img 
//                           src={product.image} 
//                           alt={product.title}
//                           className="latest-scripts-image"
//                         />
//                       </a>
//                     </div>

//                     {/* محتوا */}
//                     <div className="latest-scripts-card-body">
//                       <h4 className="latest-scripts-card-title">
//                         <a 
//                           href={product.link} 
//                           target="_blank" 
//                           rel="noopener noreferrer"
//                           className="latest-scripts-card-link"
//                         >
//                           {product.title}
//                         </a>
//                       </h4>

//                       <div className="latest-scripts-category">
//                         <span className="latest-scripts-category-icon">📊</span>
//                         <span>{product.category}</span>
//                       </div>

//                       {/* آمار */}
//                       <div className="latest-scripts-stats-container">
//                         <div className="latest-scripts-stats-group">
//                           <div className="latest-scripts-stat-item">
//                             <div className="latest-scripts-stat-value">{product.sales}</div>
//                             <div className="latest-scripts-stat-label">فروش</div>
//                           </div>
//                           <div className="latest-scripts-stat-item">
//                             {product.satisfaction ? (
//                               <>
//                                 <div className="latest-scripts-stat-value">{product.satisfaction}</div>
//                                 <div className="latest-scripts-stat-label">رضایت</div>
//                               </>
//                             ) : (
//                               <>
//                                 <div className="latest-scripts-stat-value">جديد</div>
//                                 <div className="latest-scripts-new-product">
//                                   <span>محصول</span>
//                                   <span>جـدیــد</span>
//                                 </div>
//                               </>
//                             )}
//                           </div>
//                           <div className="latest-scripts-stat-item">
//                             <div className={getSupportClass(product.support)}>{product.support}</div>
//                             <div className="latest-scripts-stat-label">پشتیبانی</div>
//                           </div>
//                         </div>

//                         <div className="latest-scripts-price">
//                           {product.discount && (
//                             <div className="latest-scripts-price-info">
//                               <span className="latest-scripts-discount-badge">{product.discount}</span>
//                               <span className="latest-scripts-original-price">{product.originalPrice}</span>
//                             </div>
//                           )}
//                           <div>
//                             {product.price} 
//                             <span className="latest-scripts-currency">تومان</span>
//                           </div>
//                         </div>
//                       </div>

//                       {/* دکمه‌ها */}
//                       <div className="latest-scripts-actions">
//                         <button 
//                           className="latest-scripts-buy-button"
//                           onClick={() => window.open(product.link, '_blank')}
//                         >
//                           خرید و دانلود
//                         </button>
//                         <button 
//                           className="latest-scripts-preview-button"
//                           onClick={() => window.open(product.previewLink, '_blank')}
//                         >
//                           <span>🖥️</span>
//                           پیشنمایش
//                         </button>
//                       </div>
//                     </div>
//                   </article>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LatestScripts;
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../assets/css/style.css';

const LatestScripts = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const products = [
    {
      id: 304335,
      title: "خیریه آسمان شهر | اسکریپت دریافت کمک های مردمی و اجتماعی",
      image: "https://media.rtlcdn.com/2026/02/fa53e2628d8d7e8f2150c5512b2b005fc93270321bd0d-337x171.jpg",
      category: "اسکریپت سامانه جامع",
      sales: "6",
      isNew: true,
      support: "-",
      discount: "35%",
      originalPrice: "495,000",
      price: "321,750",
      link: "",
      previewLink: ""
    },
    {
      id: 304159,
      title: "ساختمان من | اسکریپت ارائه خدمات و مدیریت ساختمان",
      image: "https://media.rtlcdn.com/2026/01/fdc86709279bc6f97827eb892667be65ff16e5f18dd090-337x171.jpg",
      category: "اسکریپت سامانه جامع",
      sales: "1",
      isNew: true,
      support: "-",
      discount: "35%",
      originalPrice: "7,847,000",
      price: "5,100,550",
      link: "",
      previewLink: ""
    },
    {
      id: 303042,
      title: "فاکتورپی | اسکریپت صدور فاکتور الکترونیکی و ارسال به سامانه مودیان",
      image: "https://media.rtlcdn.com/2025/12/9b682d44661a7095921879a627753c815d8180bf1c811-337x171.png",
      category: "اسکریپت لاراول",
      sales: "0",
      isNew: true,
      support: "A+",
      price: "31,647,000",
      link: "",
      previewLink: ""
    },
    {
      id: 302808,
      title: "پیکسو، اسکریپت سایت شخصی",
      image: "https://media.rtlcdn.com/2025/12/79777c2913466b39a91d5087b2f7a57d08e4270116c4d5-337x171.png",
      category: "سایر موارد",
      sales: "5",
      satisfaction: "100%",
      support: "-",
      price: "1,148,000",
      link: "",
      previewLink: ""
    },
    {
      id: 299266,
      title: "گلدآرا، اسکریپت فروشگاه‌ ساز طلا و جواهرات",
      image: "https://media.rtlcdn.com/2026/01/2f82db8084c96201f05d8a571e9a2ce5c6431fe6a6289e-337x171.jpg",
      category: "اسکریپت طلا",
      sales: "0",
      isNew: true,
      support: "-",
      price: "20,000,000",
      link: "",
      previewLink: ""
    },
    {
      id: 301208,
      title: "اسکریپت مجازی شو | پنل فروش خدمات شبکه‌های اجتماعی (SMM)",
      image: "https://media.rtlcdn.com/2025/12/7e87a4d478a67daed63346d754267c70c1948485d9156-337x171.jpg",
      category: "اسکریپت شبکه اجتماعی",
      sales: "1",
      isNew: true,
      support: "-",
      price: "11,197,000",
      link: "",
      previewLink: ""
    },
    {
      id: 302322,
      title: "طلوع نو، اسکریپت فروشگاهی (مشابه دیجی‌ کالا و با‌سلام)",
      image: "https://media.rtlcdn.com/2025/12/c2d6869323a29143f93d3edee4e27472266305c7071839-337x171.jpg",
      category: "اسکریپت فروشگاهی",
      sales: "6",
      isNew: true,
      support: "-",
      price: "6,247,000",
      link: "",
      previewLink: ""
    },
    {
      id: 302857,
      title: "پرسونا؛ اسکریپت شخصی لاراول",
      image: "https://media.rtlcdn.com/2025/12/2d7b54d656995011e78dfb5b953648fc4349a664210643-337x171.png",
      category: "اسکریپت لاراول",
      sales: "0",
      isNew: true,
      support: "A+",
      price: "1,448,000",
      link: "",
      previewLink: ""
    }
  ];

  const getSupportClass = (support) => {
    if (support === 'A+') return 'latest-scripts-support-Aplus';
    if (support === 'A') return 'latest-scripts-support-A';
    return 'latest-scripts-support-B';
  };

  const handlePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  return (
    <section className="latest-scripts-section">
      <div className="latest-scripts-container">
        {/* هدر با ترتیب درست */}
        <header className="latest-scripts-header">
          {/* سمت راست - آیکون و عنوان */}
          <div className="latest-scripts-title-wrapper">
            <span className="latest-scripts-icon">💻</span>
            <h3 className="latest-scripts-title">جدیدترین اسکریپت‌ها</h3>
          </div>

          {/* سمت چپ - دکمه‌ها */}
          <div className="latest-scripts-header-actions">
            <div className="latest-scripts-navigation">
              <button 
                onClick={handlePrev}
                className="latest-scripts-nav-button"
                aria-label="قبلی"
              >
                ←
              </button>
              <button 
                onClick={handleNext}
                className="latest-scripts-nav-button"
                aria-label="بعدی"
              >
                →
              </button>
            </div>
            <a 
              href="https://www.rtl-theme.com/category/script/?order=DESC&orderBy=date&style=grid" 
              className="latest-scripts-view-all"
            >
              مشاهده همه
            </a>
          </div>
        </header>

        {/* اسلایدر */}
        <div className="latest-scripts-swiper-container">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={windowWidth <= 576 ? 8 : 16}
            slidesPerView={1}
            onSwiper={setSwiperInstance}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                centeredSlides: false,
                spaceBetween: 8
              },
              480: {
                slidesPerView: 1.2,
                centeredSlides: false,
                spaceBetween: 10
              },
              600: {
                slidesPerView: 1.5,
                centeredSlides: false,
                spaceBetween: 12
              },
              768: {
                slidesPerView: 2.1,
                centeredSlides: false,
                spaceBetween: 14
              },
              992: {
                slidesPerView: 3,
                centeredSlides: false,
                spaceBetween: 16
              },
              1200: {
                slidesPerView: 4,
                centeredSlides: false,
                spaceBetween: 16
              }
            }}
            dir="rtl"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="latest-scripts-slide">
                  <article className="latest-scripts-card">
                    {/* تصویر */}
                    <div className="latest-scripts-image-container">
                      <a 
                        href={product.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="latest-scripts-card-link"
                      >
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="latest-scripts-image"
                        />
                      </a>
                    </div>

                    {/* محتوا */}
                    <div className="latest-scripts-card-body">
                      <h4 className="latest-scripts-card-title">
                        <a 
                          href={product.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="latest-scripts-card-link"
                        >
                          {product.title}
                        </a>
                      </h4>

                      <div className="latest-scripts-category">
                        <span className="latest-scripts-category-icon">📊</span>
                        <span>{product.category}</span>
                      </div>

                      {/* آمار */}
                      <div className="latest-scripts-stats-container">
                        <div className="latest-scripts-stats-group">
                          <div className="latest-scripts-stat-item">
                            <div className="latest-scripts-stat-value">{product.sales}</div>
                            <div className="latest-scripts-stat-label">فروش</div>
                          </div>
                          <div className="latest-scripts-stat-item">
                            {product.satisfaction ? (
                              <>
                                <div className="latest-scripts-stat-value">{product.satisfaction}</div>
                                <div className="latest-scripts-stat-label">رضایت</div>
                              </>
                            ) : (
                              <>
                                <div className="latest-scripts-stat-value">جديد</div>
                                <div className="latest-scripts-new-product">
                                  <span>محصول</span>
                                  <span>جـدیــد</span>
                                </div>
                              </>
                            )}
                          </div>
                          <div className="latest-scripts-stat-item">
                            <div className={getSupportClass(product.support)}>{product.support}</div>
                            <div className="latest-scripts-stat-label">پشتیبانی</div>
                          </div>
                        </div>

                        <div className="latest-scripts-price">
                          {product.discount && (
                            <div className="latest-scripts-price-info">
                              <span className="latest-scripts-discount-badge">{product.discount}</span>
                              <span className="latest-scripts-original-price">{product.originalPrice}</span>
                            </div>
                          )}
                          <div>
                            {product.price} 
                            <span className="latest-scripts-currency">تومان</span>
                          </div>
                        </div>
                      </div>

                      {/* دکمه‌ها */}
                      <div className="latest-scripts-actions">
                        <button 
                          className="latest-scripts-buy-button"
                          onClick={() => window.open(product.link, '_blank')}
                        >
                          خرید و دانلود
                        </button>
                        <button 
                          className="latest-scripts-preview-button"
                          onClick={() => window.open(product.previewLink, '_blank')}
                        >
                          <span>🖥️</span>
                          پیشنمایش
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default LatestScripts;