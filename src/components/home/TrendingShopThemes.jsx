// import React, { useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import '../../assets/css/style.css';

// const TrendingShopThemes = () => {
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
//       id: 45758,
//       title: "قالب وودمارت (قالب Woodmart)، همراه با اپلیکیشن اندروید و 73 دمو",
//       image: "https://media.rtlcdn.com/2025/12/9913a9909808654c6ad3a26901df0a78175423e2b874b6-337x171.png",
//       category: "قالب فروشگاهی وردپرس",
//       sales: "37,433",
//       satisfaction: "90%",
//       support: "A",
//       price: "1,499,000",
//       link: "https://www.rtl-theme.com/woodmart/",
//       previewLink: "https://rtlr.ir/45758"
//     },
//     {
//       id: 247699,
//       title: "قالب پارس کالا، پوسته فروشگاهی parskala",
//       image: "https://media.rtlcdn.com/2025/11/62e00d648c788643e0949715fa664574a844c985250f48-337x171.jpg",
//       category: "قالب فروشگاهی وردپرس",
//       sales: "5,215",
//       satisfaction: "81%",
//       support: "A",
//       price: "2,598,000",
//       link: "https://www.rtl-theme.com/parskala-wordpress-theme/",
//       previewLink: "https://rtlr.ir/247699"
//     },
//     {
//       id: 296933,
//       title: "بوم، قالب فروشگاهی با تکنولوژی Headless SPA",
//       image: "https://media.rtlcdn.com/2026/01/a1e19b79e4132b71b5812ae07669c6e7416979e4507822-337x171.png",
//       category: "قالب فروشگاهی وردپرس",
//       sales: "240",
//       satisfaction: "91%",
//       support: "A+",
//       price: "2,148,000",
//       link: "https://www.rtl-theme.com/boom-wordpress-theme/",
//       previewLink: "https://rtlr.ir/296933"
//     },
//     {
//       id: 284339,
//       title: "قالب چند منظوره جیاواز، Jiawaz",
//       image: "https://media.rtlcdn.com/2025/10/d0002779e35b7f47cffe8a20e6b60feaa61819939972c4-337x171.png",
//       category: "قالب چند منظوره",
//       sales: "602",
//       satisfaction: "90%",
//       support: "A",
//       price: "1,348,000",
//       link: "https://www.rtl-theme.com/jiawaz-wordpress-theme/",
//       previewLink: "https://rtlr.ir/284339"
//     },
//     {
//       id: 231616,
//       title: "قالب فروشگاهی لومان، Luman",
//       image: "https://media.rtlcdn.com/2025/09/50d08a440734b813f9da02757574011196c069fbf1f320-337x171.jpg",
//       category: "قالب فروشگاهی وردپرس",
//       sales: "1,391",
//       satisfaction: "90%",
//       support: "A",
//       price: "897,000",
//       link: "https://www.rtl-theme.com/luman-wordpress-theme/",
//       previewLink: "https://rtlr.ir/231616"
//     },
//     {
//       id: 279139,
//       title: "قالب فروشگاهی آی شاپ، iShop",
//       image: "https://media.rtlcdn.com/2025/08/4f31661ab1886500377c6648416f4403d81d7f1334d5c1-337x171.jpg",
//       category: "قالب فروشگاهی وردپرس",
//       sales: "954",
//       satisfaction: "86%",
//       support: "A",
//       price: "2,248,000",
//       link: "https://www.rtl-theme.com/ishop-wordpress-theme/",
//       previewLink: "https://rtlr.ir/279139"
//     },
//     {
//       id: 299606,
//       title: "لباسینو، قالب فروشگاهی پوشاک و لباس",
//       image: "https://media.rtlcdn.com/2025/11/93901c7ee3072504616163f2dc3b5778f720c67df633f8-337x171.jpg",
//       category: "قالب فروشگاهی وردپرس",
//       sales: "142",
//       satisfaction: "78%",
//       support: "A",
//       price: "1,348,000",
//       link: "https://www.rtl-theme.com/lebasino-wordpress-theme/",
//       previewLink: "https://rtlr.ir/299606"
//     },
//     {
//       id: 256159,
//       title: "قالب فروشگاهی کاوه، پوسته ووکامرس حرفه ای",
//       image: "https://media.rtlcdn.com/2025/12/6627ac5e5e4c493b7734875a0d6386a02a10f4cd346d74-337x171.jpg",
//       category: "قالب فروشگاهی وردپرس",
//       sales: "3,056",
//       satisfaction: "90%",
//       support: "A+",
//       price: "1,798,000",
//       link: "https://www.rtl-theme.com/kaveh-wordpress-theme/",
//       previewLink: "https://rtlr.ir/256159"
//     }
//   ];

//   const getSupportClass = (support) => {
//     if (support === 'A+') return 'trending-support-Aplus';
//     if (support === 'A') return 'trending-support-A';
//     return 'trending-support-B';
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
//     <section className="trending-section">
//       <div className="trending-container">
//         {/* هدر با ترتیب درست */}
//         <header className="trending-header">
//           {/* سمت راست - آیکون و عنوان */}
//           <div className="trending-title-wrapper">
//             <span className="trending-icon">🔥</span>
//             <h3 className="trending-title">قالب‌های ترند فروشگاهی</h3>
//           </div>

//           {/* سمت چپ - دکمه‌ها */}
//           <div className="trending-header-actions">
//             <div className="trending-navigation">
//               <button 
//                 onClick={handlePrev}
//                 className="trending-nav-button"
//                 aria-label="قبلی"
//               >
//                 ←
//               </button>
//               <button 
//                 onClick={handleNext}
//                 className="trending-nav-button"
//                 aria-label="بعدی"
//               >
//                 →
//               </button>
//             </div>
//             <a 
//               href="https://www.rtl-theme.com/category/wp-themes/woocommerce-shop/?order=DESC&orderBy=saleCountMonthly&style=grid" 
//               className="trending-view-all"
//             >
//               مشاهده همه
//             </a>
//           </div>
//         </header>

//         {/* اسلایدر */}
//         <div className="trending-swiper-container">
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
//                 <div className="trending-slide">
//                   <article className="trending-card">
//                     {/* تصویر */}
//                     <div className="trending-image-container">
//                       <a 
//                         href={product.link} 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className="trending-card-link"
//                       >
//                         <img 
//                           src={product.image} 
//                           alt={product.title}
//                           className="trending-image"
//                         />
//                       </a>
//                     </div>

//                     {/* محتوا */}
//                     <div className="trending-card-body">
//                       <h4 className="trending-card-title">
//                         <a 
//                           href={product.link} 
//                           target="_blank" 
//                           rel="noopener noreferrer"
//                           className="trending-card-link"
//                         >
//                           {product.title}
//                         </a>
//                       </h4>

//                       <div className="trending-category">
//                         <span className="trending-category-icon">📊</span>
//                         <span>{product.category}</span>
//                       </div>

//                       {/* آمار */}
//                       <div className="trending-stats-container">
//                         <div className="trending-stats-group">
//                           <div className="trending-stat-item">
//                             <div className="trending-stat-value">{product.sales}</div>
//                             <div className="trending-stat-label">فروش</div>
//                           </div>
//                           <div className="trending-stat-item">
//                             <div className="trending-stat-value">{product.satisfaction}</div>
//                             <div className="trending-stat-label">رضایت</div>
//                           </div>
//                           <div className="trending-stat-item">
//                             <div className={getSupportClass(product.support)}>{product.support}</div>
//                             <div className="trending-stat-label">پشتیبانی</div>
//                           </div>
//                         </div>

//                         <div className="trending-price">
//                           {product.price} 
//                           <span className="trending-currency">تومان</span>
//                         </div>
//                       </div>

//                       {/* دکمه‌ها */}
//                       <div className="trending-actions">
//                         <button 
//                           className="trending-buy-button"
//                           onClick={() => window.open(product.link, '_blank')}
//                         >
//                           خرید و دانلود
//                         </button>
//                         <button 
//                           className="trending-preview-button"
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

// export default TrendingShopThemes;
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../assets/css/style.css';

const TrendingShopThemes = () => {
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
      id: 45758,
      title: "قالب وودمارت (قالب Woodmart)، همراه با اپلیکیشن اندروید و 73 دمو",
      image: "https://media.rtlcdn.com/2025/12/9913a9909808654c6ad3a26901df0a78175423e2b874b6-337x171.png",
      category: "قالب فروشگاهی وردپرس",
      sales: "37,433",
      satisfaction: "90%",
      support: "A",
      price: "1,499,000",
      link: "",
      previewLink: ""
    },
    {
      id: 247699,
      title: "قالب پارس کالا، پوسته فروشگاهی parskala",
      image: "https://media.rtlcdn.com/2025/11/62e00d648c788643e0949715fa664574a844c985250f48-337x171.jpg",
      category: "قالب فروشگاهی وردپرس",
      sales: "5,215",
      satisfaction: "81%",
      support: "A",
      price: "2,598,000",
      link: "",
      previewLink: ""
    },
    {
      id: 296933,
      title: "بوم، قالب فروشگاهی با تکنولوژی Headless SPA",
      image: "https://media.rtlcdn.com/2026/01/a1e19b79e4132b71b5812ae07669c6e7416979e4507822-337x171.png",
      category: "قالب فروشگاهی وردپرس",
      sales: "240",
      satisfaction: "91%",
      support: "A+",
      price: "2,148,000",
      link: "",
      previewLink: ""
    },
    {
      id: 284339,
      title: "قالب چند منظوره جیاواز، Jiawaz",
      image: "https://media.rtlcdn.com/2025/10/d0002779e35b7f47cffe8a20e6b60feaa61819939972c4-337x171.png",
      category: "قالب چند منظوره",
      sales: "602",
      satisfaction: "90%",
      support: "A",
      price: "1,348,000",
      link: "",
      previewLink: ""
    },
    {
      id: 231616,
      title: "قالب فروشگاهی لومان، Luman",
      image: "https://media.rtlcdn.com/2025/09/50d08a440734b813f9da02757574011196c069fbf1f320-337x171.jpg",
      category: "قالب فروشگاهی وردپرس",
      sales: "1,391",
      satisfaction: "90%",
      support: "A",
      price: "897,000",
      link: "",
      previewLink: ""
    },
    {
      id: 279139,
      title: "قالب فروشگاهی آی شاپ، iShop",
      image: "https://media.rtlcdn.com/2025/08/4f31661ab1886500377c6648416f4403d81d7f1334d5c1-337x171.jpg",
      category: "قالب فروشگاهی وردپرس",
      sales: "954",
      satisfaction: "86%",
      support: "A",
      price: "2,248,000",
      link: "",
      previewLink: ""
    },
    {
      id: 299606,
      title: "لباسینو، قالب فروشگاهی پوشاک و لباس",
      image: "https://media.rtlcdn.com/2025/11/93901c7ee3072504616163f2dc3b5778f720c67df633f8-337x171.jpg",
      category: "قالب فروشگاهی وردپرس",
      sales: "142",
      satisfaction: "78%",
      support: "A",
      price: "1,348,000",
      link: "",
      previewLink: ""
    },
    {
      id: 256159,
      title: "قالب فروشگاهی کاوه، پوسته ووکامرس حرفه ای",
      image: "https://media.rtlcdn.com/2025/12/6627ac5e5e4c493b7734875a0d6386a02a10f4cd346d74-337x171.jpg",
      category: "قالب فروشگاهی وردپرس",
      sales: "3,056",
      satisfaction: "90%",
      support: "A+",
      price: "1,798,000",
      link: "",
      previewLink: ""
    }
  ];

  const getSupportClass = (support) => {
    if (support === 'A+') return 'trending-support-Aplus';
    if (support === 'A') return 'trending-support-A';
    return 'trending-support-B';
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
    <section className="trending-section">
      <div className="trending-container">
        {/* هدر با ترتیب درست */}
        <header className="trending-header">
          {/* سمت راست - آیکون و عنوان */}
          <div className="trending-title-wrapper">
            <span className="trending-icon">🔥</span>
            <h3 className="trending-title">قالب‌های ترند فروشگاهی</h3>
          </div>

          {/* سمت چپ - دکمه‌ها */}
          <div className="trending-header-actions">
            <div className="trending-navigation">
              <button 
                onClick={handlePrev}
                className="trending-nav-button"
                aria-label="قبلی"
              >
                ←
              </button>
              <button 
                onClick={handleNext}
                className="trending-nav-button"
                aria-label="بعدی"
              >
                →
              </button>
            </div>
            <a 
              href="https://www.rtl-theme.com/category/wp-themes/woocommerce-shop/?order=DESC&orderBy=saleCountMonthly&style=grid" 
              className="trending-view-all"
            >
              مشاهده همه
            </a>
          </div>
        </header>

        {/* اسلایدر */}
        <div className="trending-swiper-container">
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
                <div className="trending-slide">
                  <article className="trending-card">
                    {/* تصویر */}
                    <div className="trending-image-container">
                      <a 
                        href={product.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="trending-card-link"
                      >
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="trending-image"
                        />
                      </a>
                    </div>

                    {/* محتوا */}
                    <div className="trending-card-body">
                      <h4 className="trending-card-title">
                        <a 
                          href={product.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="trending-card-link"
                        >
                          {product.title}
                        </a>
                      </h4>

                      <div className="trending-category">
                        <span className="trending-category-icon">📊</span>
                        <span>{product.category}</span>
                      </div>

                      {/* آمار */}
                      <div className="trending-stats-container">
                        <div className="trending-stats-group">
                          <div className="trending-stat-item">
                            <div className="trending-stat-value">{product.sales}</div>
                            <div className="trending-stat-label">فروش</div>
                          </div>
                          <div className="trending-stat-item">
                            <div className="trending-stat-value">{product.satisfaction}</div>
                            <div className="trending-stat-label">رضایت</div>
                          </div>
                          <div className="trending-stat-item">
                            <div className={getSupportClass(product.support)}>{product.support}</div>
                            <div className="trending-stat-label">پشتیبانی</div>
                          </div>
                        </div>

                        <div className="trending-price">
                          {product.price} 
                          <span className="trending-currency">تومان</span>
                        </div>
                      </div>

                      {/* دکمه‌ها */}
                      <div className="trending-actions">
                        <button 
                          className="trending-buy-button"
                          onClick={() => window.open(product.link, '_blank')}
                        >
                          خرید و دانلود
                        </button>
                        <button 
                          className="trending-preview-button"
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

export default TrendingShopThemes;