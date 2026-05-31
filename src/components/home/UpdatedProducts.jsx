// import React, { useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import '../../assets/css/style.css';

// const UpdatedProducts = () => {
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
//       id: 54947,
//       title: "افزونه Bookly Pro، افزونه نوبت دهی بوکلی پرو",
//       image: "https://media.rtlcdn.com/2022/02/8bb49d66b259c0a1a0e71a80013d6b183b578694314c16-337x171.jpg",
//       category: "افزونه نوبت دهی",
//       sales: "4,878",
//       satisfaction: "86%",
//       support: "A+",
//       price: "1,398,000",
//       link: "https://www.rtl-theme.com/bookly-wordpress-plugin/",
//       previewLink: "https://rtlr.ir/54947"
//     },
//     {
//       id: 302594,
//       title: "مگنت آکادمی | پلتفرم آموزشی وردپرسی و فروش دوره حرفه‌ای",
//       image: "https://media.rtlcdn.com/2025/12/9b974f9d6c326670b46d447a54ba1c1c376f661e9a823b-337x171.jpg",
//       category: "قالب آموزشی",
//       sales: "21",
//       satisfaction: "96%",
//       support: "A+",
//       price: "2,098,000",
//       link: "https://www.rtl-theme.com/magnet-wordpress-theme/",
//       previewLink: "https://rtlr.ir/302594"
//     },
//     {
//       id: 172838,
//       title: "افزونه Hide My Wp Ghost، افزونه مخفی سازی وردپرس",
//       image: "https://media.rtlcdn.com/2021/06/4410d6e1d2a9de857ebee6e2209639a50a0ae58ff54067-337x171.jpg",
//       category: "افزونه مخفی سازی سایت های وردپرسی",
//       sales: "491",
//       satisfaction: "94%",
//       support: "A+",
//       price: "698,000",
//       link: "https://www.rtl-theme.com/hide-my-wp-ghost-wordpress-plugin/",
//       previewLink: "https://rtlr.ir/172838"
//     },
//     {
//       id: 250904,
//       title: "قالب شرکتی آرنیکا، Arnika",
//       image: "https://media.rtlcdn.com/2022/12/6d55d62c10923d04b0a1661b99b9ddbd77eb7454678431-337x171.jpg",
//       category: "قالب شرکتی",
//       sales: "161",
//       satisfaction: "60%",
//       support: "A+",
//       price: "1,198,000",
//       link: "https://www.rtl-theme.com/arnika-wordpress-theme/",
//       previewLink: "https://rtlr.ir/250904"
//     },
//     {
//       id: 181161,
//       title: "قالب خبری بامداد",
//       image: "https://media.rtlcdn.com/2022/01/d49c5262a67634c5b1d03063600e70bf38510a246522a7-337x171.png",
//       category: "قالب خبری",
//       sales: "370",
//       satisfaction: "91%",
//       support: "A+",
//       price: "1,098,000",
//       link: "https://www.rtl-theme.com/bamdad-wordpress-theme/",
//       previewLink: "https://rtlr.ir/181161"
//     },
//     {
//       id: 300179,
//       title: "کاربرچی، افزونه ساخت پنل کاربری در وردپرس",
//       image: "https://media.rtlcdn.com/2025/12/b4197874699feeb55a7900de75479b091f618f308678a2-337x171.jpg",
//       category: "پنل کاربری حرفه ای وردپرس",
//       sales: "71",
//       satisfaction: "86%",
//       support: "A+",
//       price: "1,274,000",
//       link: "https://www.rtl-theme.com/karbarchi-wordpress-plugin/",
//       previewLink: "https://rtlr.ir/300179"
//     },
//     {
//       id: 177875,
//       title: "افزونه بوکنتیک، پلاگین Booknetic",
//       image: "https://media.rtlcdn.com/2022/12/6cd34849d170228e02b3ecd16474106d1260155658c26e-337x171.png",
//       category: "افزونه نوبت دهی وردپرس بوکنتیک",
//       sales: "2,218",
//       satisfaction: "88%",
//       support: "A",
//       price: "1,098,000",
//       link: "https://www.rtl-theme.com/booknetic-wordpress-plugin/",
//       previewLink: "https://rtlr.ir/177875"
//     },
//     {
//       id: 107142,
//       title: "افزونه WP Optimize Premium؛ بهینه ساز حرفه ای وردپرس",
//       image: "https://media.rtlcdn.com/2022/03/6011456bf8617836a02437942359864942fd79826d2d7a-337x171.jpg",
//       category: "بهینه ساز حرفه ای وردپرس",
//       sales: "590",
//       satisfaction: "84%",
//       support: "A",
//       price: "597,000",
//       link: "https://www.rtl-theme.com/wp-optimize-premium-wordpress-plugin/",
//       previewLink: "https://rtlr.ir/107142"
//     }
//   ];

//   const getSupportClass = (support) => {
//     if (support === 'A+') return 'updated-products-support-Aplus';
//     if (support === 'A') return 'updated-products-support-A';
//     return 'updated-products-support-B';
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
//     <section className="updated-products-section">
//       <div className="updated-products-container">
//         {/* هدر با ترتیب درست */}
//         <header className="updated-products-header">
//           {/* سمت راست - آیکون و عنوان */}
//           <div className="updated-products-title-wrapper">
//             <span className="updated-products-icon">🔄</span>
//             <h3 className="updated-products-title">به‌روزترین محصولات</h3>
//           </div>

//           {/* سمت چپ - دکمه‌ها */}
//           <div className="updated-products-header-actions">
//             <div className="updated-products-navigation">
//               <button 
//                 onClick={handlePrev}
//                 className="updated-products-nav-button"
//                 aria-label="قبلی"
//               >
//                 ←
//               </button>
//               <button 
//                 onClick={handleNext}
//                 className="updated-products-nav-button"
//                 aria-label="بعدی"
//               >
//                 →
//               </button>
//             </div>
//             <a 
//               href="https://www.rtl-theme.com/products/?order=DESC&orderBy=updateDate&style=grid" 
//               className="updated-products-view-all"
//             >
//               مشاهده همه
//             </a>
//           </div>
//         </header>

//         {/* اسلایدر */}
//         <div className="updated-products-swiper-container">
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
//                 <div className="updated-products-slide">
//                   <article className="updated-products-card">
//                     {/* تصویر */}
//                     <div className="updated-products-image-container">
//                       <a 
//                         href={product.link} 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className="updated-products-card-link"
//                       >
//                         <img 
//                           src={product.image} 
//                           alt={product.title}
//                           className="updated-products-image"
//                         />
//                       </a>
//                     </div>

//                     {/* محتوا */}
//                     <div className="updated-products-card-body">
//                       <h4 className="updated-products-card-title">
//                         <a 
//                           href={product.link} 
//                           target="_blank" 
//                           rel="noopener noreferrer"
//                           className="updated-products-card-link"
//                         >
//                           {product.title}
//                         </a>
//                       </h4>

//                       <div className="updated-products-category">
//                         <span className="updated-products-category-icon">📊</span>
//                         <span>{product.category}</span>
//                       </div>

//                       {/* آمار */}
//                       <div className="updated-products-stats-container">
//                         <div className="updated-products-stats-group">
//                           <div className="updated-products-stat-item">
//                             <div className="updated-products-stat-value">{product.sales}</div>
//                             <div className="updated-products-stat-label">فروش</div>
//                           </div>
//                           <div className="updated-products-stat-item">
//                             <div className="updated-products-stat-value">{product.satisfaction}</div>
//                             <div className="updated-products-stat-label">رضایت</div>
//                           </div>
//                           <div className="updated-products-stat-item">
//                             <div className={getSupportClass(product.support)}>{product.support}</div>
//                             <div className="updated-products-stat-label">پشتیبانی</div>
//                           </div>
//                         </div>

//                         <div className="updated-products-price">
//                           {product.price} 
//                           <span className="updated-products-currency">تومان</span>
//                         </div>
//                       </div>

//                       {/* دکمه‌ها */}
//                       <div className="updated-products-actions">
//                         <button 
//                           className="updated-products-buy-button"
//                           onClick={() => window.open(product.link, '_blank')}
//                         >
//                           خرید و دانلود
//                         </button>
//                         <button 
//                           className="updated-products-preview-button"
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

// export default UpdatedProducts;
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../assets/css/style.css';

const UpdatedProducts = () => {
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
      id: 54947,
      title: "افزونه Bookly Pro، افزونه نوبت دهی بوکلی پرو",
      image: "https://media.rtlcdn.com/2022/02/8bb49d66b259c0a1a0e71a80013d6b183b578694314c16-337x171.jpg",
      category: "افزونه نوبت دهی",
      sales: "4,878",
      satisfaction: "86%",
      support: "A+",
      price: "1,398,000",
      link: "",
      previewLink: ""
    },
    {
      id: 302594,
      title: "مگنت آکادمی | پلتفرم آموزشی وردپرسی و فروش دوره حرفه‌ای",
      image: "https://media.rtlcdn.com/2025/12/9b974f9d6c326670b46d447a54ba1c1c376f661e9a823b-337x171.jpg",
      category: "قالب آموزشی",
      sales: "21",
      satisfaction: "96%",
      support: "A+",
      price: "2,098,000",
      link: "",
      previewLink: ""
    },
    {
      id: 172838,
      title: "افزونه Hide My Wp Ghost، افزونه مخفی سازی وردپرس",
      image: "https://media.rtlcdn.com/2021/06/4410d6e1d2a9de857ebee6e2209639a50a0ae58ff54067-337x171.jpg",
      category: "افزونه مخفی سازی سایت های وردپرسی",
      sales: "491",
      satisfaction: "94%",
      support: "A+",
      price: "698,000",
      link: "",
      previewLink: ""
    },
    {
      id: 250904,
      title: "قالب شرکتی آرنیکا، Arnika",
      image: "https://media.rtlcdn.com/2022/12/6d55d62c10923d04b0a1661b99b9ddbd77eb7454678431-337x171.jpg",
      category: "قالب شرکتی",
      sales: "161",
      satisfaction: "60%",
      support: "A+",
      price: "1,198,000",
      link: "",
      previewLink: ""
    },
    {
      id: 181161,
      title: "قالب خبری بامداد",
      image: "https://media.rtlcdn.com/2022/01/d49c5262a67634c5b1d03063600e70bf38510a246522a7-337x171.png",
      category: "قالب خبری",
      sales: "370",
      satisfaction: "91%",
      support: "A+",
      price: "1,098,000",
      link: "",
      previewLink: ""
    },
    {
      id: 300179,
      title: "کاربرچی، افزونه ساخت پنل کاربری در وردپرس",
      image: "https://media.rtlcdn.com/2025/12/b4197874699feeb55a7900de75479b091f618f308678a2-337x171.jpg",
      category: "پنل کاربری حرفه ای وردپرس",
      sales: "71",
      satisfaction: "86%",
      support: "A+",
      price: "1,274,000",
      link: "",
      previewLink: ""
    },
    {
      id: 177875,
      title: "افزونه بوکنتیک، پلاگین Booknetic",
      image: "https://media.rtlcdn.com/2022/12/6cd34849d170228e02b3ecd16474106d1260155658c26e-337x171.png",
      category: "افزونه نوبت دهی وردپرس بوکنتیک",
      sales: "2,218",
      satisfaction: "88%",
      support: "A",
      price: "1,098,000",
      link: "",
      previewLink: ""
    },
    {
      id: 107142,
      title: "افزونه WP Optimize Premium؛ بهینه ساز حرفه ای وردپرس",
      image: "https://media.rtlcdn.com/2022/03/6011456bf8617836a02437942359864942fd79826d2d7a-337x171.jpg",
      category: "بهینه ساز حرفه ای وردپرس",
      sales: "590",
      satisfaction: "84%",
      support: "A",
      price: "597,000",
      link: "",
      previewLink: ""
    }
  ];

  const getSupportClass = (support) => {
    if (support === 'A+') return 'updated-products-support-Aplus';
    if (support === 'A') return 'updated-products-support-A';
    return 'updated-products-support-B';
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
    <section className="updated-products-section">
      <div className="updated-products-container">
        {/* هدر با ترتیب درست */}
        <header className="updated-products-header">
          {/* سمت راست - آیکون و عنوان */}
          <div className="updated-products-title-wrapper">
            <span className="updated-products-icon">🔄</span>
            <h3 className="updated-products-title">به‌روزترین محصولات</h3>
          </div>

          {/* سمت چپ - دکمه‌ها */}
          <div className="updated-products-header-actions">
            <div className="updated-products-navigation">
              <button 
                onClick={handlePrev}
                className="updated-products-nav-button"
                aria-label="قبلی"
              >
                ←
              </button>
              <button 
                onClick={handleNext}
                className="updated-products-nav-button"
                aria-label="بعدی"
              >
                →
              </button>
            </div>
            <a 
              href="https://www.rtl-theme.com/products/?order=DESC&orderBy=updateDate&style=grid" 
              className="updated-products-view-all"
            >
              مشاهده همه
            </a>
          </div>
        </header>

        {/* اسلایدر */}
        <div className="updated-products-swiper-container">
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
                <div className="updated-products-slide">
                  <article className="updated-products-card">
                    {/* تصویر */}
                    <div className="updated-products-image-container">
                      <a 
                        href={product.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="updated-products-card-link"
                      >
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="updated-products-image"
                        />
                      </a>
                    </div>

                    {/* محتوا */}
                    <div className="updated-products-card-body">
                      <h4 className="updated-products-card-title">
                        <a 
                          href={product.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="updated-products-card-link"
                        >
                          {product.title}
                        </a>
                      </h4>

                      <div className="updated-products-category">
                        <span className="updated-products-category-icon">📊</span>
                        <span>{product.category}</span>
                      </div>

                      {/* آمار */}
                      <div className="updated-products-stats-container">
                        <div className="updated-products-stats-group">
                          <div className="updated-products-stat-item">
                            <div className="updated-products-stat-value">{product.sales}</div>
                            <div className="updated-products-stat-label">فروش</div>
                          </div>
                          <div className="updated-products-stat-item">
                            <div className="updated-products-stat-value">{product.satisfaction}</div>
                            <div className="updated-products-stat-label">رضایت</div>
                          </div>
                          <div className="updated-products-stat-item">
                            <div className={getSupportClass(product.support)}>{product.support}</div>
                            <div className="updated-products-stat-label">پشتیبانی</div>
                          </div>
                        </div>

                        <div className="updated-products-price">
                          {product.price} 
                          <span className="updated-products-currency">تومان</span>
                        </div>
                      </div>

                      {/* دکمه‌ها */}
                      <div className="updated-products-actions">
                        <button 
                          className="updated-products-buy-button"
                          onClick={() => window.open(product.link, '_blank')}
                        >
                          خرید و دانلود
                        </button>
                        <button 
                          className="updated-products-preview-button"
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

export default UpdatedProducts;