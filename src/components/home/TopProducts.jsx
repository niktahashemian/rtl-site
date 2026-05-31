// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import '../../assets/css/style.css';

// const TopProducts = () => {
//   const [, setSwiperInstance] = useState(null);

//   const products = [
//     {
//       id: 261053,
//       title: "قالب آموزشی و فروش دوره پارسا",
//       image: "https://media.rtlcdn.com/2026/01/71e9f7645198a4986719938382fcda2b7184c1a8ff3918-590x300.jpg",
//       sales: "1,437",
//       satisfaction: "90%",
//       support: "A+",
//       price: "1,348,000",
//       link: "https://www.rtl-theme.com/parsa-wordpress-theme/",
//       previewLink: "https://rtlr.ir/261053"
//     },
//     {
//       id: 275691,
//       title: "قالب شرکتی ادویسل، Advisol",
//       image: "https://media.rtlcdn.com/2024/04/3721b39aa1b143b9416a5f856f191dbd7094d4fc1c2be0-590x300.png",
//       sales: "131",
//       satisfaction: "86%",
//       support: "A+",
//       price: "597,000",
//       link: "https://www.rtl-theme.com/advisol-wordpress-theme/",
//       previewLink: "https://rtlr.ir/275691"
//     },
//     {
//       id: 280188,
//       title: "اسکریپت منو کافه رستوران منوموون",
//       image: "https://media.rtlcdn.com/2024/08/007950a56189e643c61527b677d17f7ce63223e28f8340-590x300.jpg",
//       sales: "119",
//       satisfaction: "96%",
//       support: "A+",
//       price: "2,048,000",
//       link: "https://www.rtl-theme.com/menumoon-script/",
//       previewLink: "https://rtlr.ir/280188"
//     },
//     {
//       id: 285656,
//       title: "افزونه فاکتور حرفه ای ووکامرس ⚡ فاکتوریار",
//       image: "https://media.rtlcdn.com/2024/12/7966361435d877a1513d068b7ebaa3cb37fd8c50061847-590x300.jpg",
//       sales: "1,297",
//       satisfaction: "94%",
//       support: "A+",
//       price: "748,000",
//       link: "https://www.rtl-theme.com/faktoryar-wordpress-plugin/",
//       previewLink: "https://rtlr.ir/285656"
//     },
//     {
//       id: 296540,
//       title: "اپکس، افزونه باگ یاب هوشمند",
//       image: "https://media.rtlcdn.com/2025/09/281b48710237f7258621659c39a80c3c1a9554c1b2bb72-590x300.jpg",
//       sales: "52",
//       satisfaction: "84%",
//       support: "-",
//       price: "748,000",
//       link: "https://www.rtl-theme.com/apex-wordpress-plugin/",
//       previewLink: "https://rtlr.ir/296540"
//     },
//     {
//       id: 104665,
//       title: "افزونه بانک ملت (به پرداخت) برای وردپرس با درگاه پرداخت بانک ملت سازگار با ووکامرس 💰",
//       image: "https://media.rtlcdn.com/2022/02/19d675e97598804c1974b676d0e0b2b680208496497155-590x300.jpg",
//       sales: "4,792",
//       satisfaction: "88%",
//       support: "A+",
//       price: "748,000",
//       link: "https://www.rtl-theme.com/behpardakht-woocommerce-plugin/",
//       previewLink: "https://rtlr.ir/104665"
//     },
//     {
//       id: 62517,
//       title: "قالب اکسترا، پرفروش‌ترین قالب چندمنظوره",
//       image: "https://media.rtlcdn.com/2025/12/f477845c66531057a30814f9b57abe19d513e179222410-590x300.jpg",
//       sales: "30,678",
//       satisfaction: "94%",
//       support: "A+",
//       price: "1,697,000",
//       link: "https://www.rtl-theme.com/xtra-corporate-woocommerce-theme/",
//       previewLink: "https://rtlr.ir/62517"
//     },
//     {
//       id: 66285,
//       title: "افزونه المنتور پرو ⚡ (دانلود صفحه ساز Elementor)",
//       image: "https://media.rtlcdn.com/2022/12/121d1211710701a217e40b6847ec76aa7d1d717c073a30-590x300.webp",
//       sales: "34,512",
//       satisfaction: "91%",
//       support: "A",
//       price: "598,000",
//       link: "https://www.rtl-theme.com/elementor-pro/",
//       previewLink: "https://rtlr.ir/66285"
//     }
//   ];

//   const getSupportClass = (support) => {
//     if (support === 'A+') return 'top-products-support-Aplus';
//     if (support === 'A') return 'top-products-support-A';
//     return 'top-products-support-B';
//   };

//   return (
//     <section className="top-products-section" dir="rtl">
//       <div className="top-products-container">
//         {/* هدر */}
//         <header className="top-products-header">
//           <div className="top-products-title-wrapper">
//             <span className="top-products-icon">⭐</span>
//             <h3 className="top-products-title">برترین‌های راست چین</h3>
//           </div>
//           <a 
//             href="https://www.rtl-theme.com/category/wp-themes/?order=DESC&orderBy=saleCount&style=grid" 
//             className="top-products-view-all"
//           >
//             مشاهده همه
//           </a>
//         </header>

//         {/* اسلایدر */}
//         <div className="top-products-swiper-container">
//           <Swiper
//             modules={[Navigation, Autoplay]}
//             spaceBetween={20}
//             slidesPerView={1}
//             onSwiper={setSwiperInstance}
//             navigation={true}
//             loop={true}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: true,
//               pauseOnMouseEnter: true
//             }}
//             breakpoints={{
//               320: {
//                 slidesPerView: 1,
//                 centeredSlides: false,
//                 spaceBetween: 15
//               },
//               768: {
//                 slidesPerView: 1.5,
//                 centeredSlides: true,
//                 spaceBetween: 20
//               },
//               990: {
//                 slidesPerView: 1.5,
//                 centeredSlides: true,
//                 spaceBetween: 20
//               },
//               1200: {
//                 slidesPerView: 2.5,
//                 centeredSlides: true,
//                 spaceBetween: 20
//               }
//             }}
//             dir="rtl"
//           >
//             {products.map((product) => (
//               <SwiperSlide key={product.id}>
//                 <div>
//                   <article className="top-products-card">
//                     {/* تصویر */}
//                     <div className="top-products-image-container">
//                       <a href={product.link} target="_blank" rel="noopener noreferrer">
//                         <img 
//                           src={product.image} 
//                           alt={product.title}
//                           className="top-products-image"
//                           loading="lazy"
//                         />
//                       </a>
//                     </div>

//                     {/* محتوا */}
//                     <div className="top-products-content">
//                       <a 
//                         href={product.link} 
//                         className="top-products-title-link"
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                       >
//                         {product.title}
//                       </a>

//                       <div className="top-products-footer">
//                         {/* دکمه‌ها */}
//                         <div className="top-products-buttons">
//                           <button 
//                             className="top-products-buy-button"
//                             onClick={() => window.open(product.link, '_blank')}
//                           >
//                             خرید و دانلود
//                           </button>
//                           <button 
//                             className="top-products-preview-button"
//                             onClick={() => window.open(product.previewLink, '_blank')}
//                           >
//                             <span>🖥️</span>
//                             پیشنمایش
//                           </button>
//                         </div>

//                         {/* آمار و قیمت */}
//                         <div className="top-products-left-section">
//                           <div className="top-products-stats">
//                             <div className="top-products-stat-item">
//                               <div className="top-products-stat-value">{product.sales}</div>
//                               <div className="top-products-stat-label">فروش</div>
//                             </div>
//                             <div className="top-products-stat-item">
//                               <div className="top-products-stat-value">{product.satisfaction}</div>
//                               <div className="top-products-stat-label">رضایت</div>
//                             </div>
//                             <div className="top-products-stat-item">
//                               <div className={getSupportClass(product.support)}>{product.support}</div>
//                               <div className="top-products-stat-label">پشتیبانی</div>
//                             </div>
//                           </div>
//                           <div className="top-products-price">
//                             {product.price} 
//                             <span className="top-products-currency">تومان</span>
//                           </div>
//                         </div>
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

// export default TopProducts;
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../assets/css/style.css';

const TopProducts = () => {
  const [, setSwiperInstance] = useState(null);

  const products = [
    {
      id: 261053,
      title: "قالب آموزشی و فروش دوره پارسا",
      image: "https://media.rtlcdn.com/2026/01/71e9f7645198a4986719938382fcda2b7184c1a8ff3918-590x300.jpg",
      sales: "1,437",
      satisfaction: "90%",
      support: "A+",
      price: "1,348,000",
      link: "",
      previewLink: ""
    },
    {
      id: 275691,
      title: "قالب شرکتی ادویسل، Advisol",
      image: "https://media.rtlcdn.com/2024/04/3721b39aa1b143b9416a5f856f191dbd7094d4fc1c2be0-590x300.png",
      sales: "131",
      satisfaction: "86%",
      support: "A+",
      price: "597,000",
      link: "",
      previewLink: ""
    },
    {
      id: 280188,
      title: "اسکریپت منو کافه رستوران منوموون",
      image: "https://media.rtlcdn.com/2024/08/007950a56189e643c61527b677d17f7ce63223e28f8340-590x300.jpg",
      sales: "119",
      satisfaction: "96%",
      support: "A+",
      price: "2,048,000",
      link: "",
      previewLink: ""
    },
    {
      id: 285656,
      title: "افزونه فاکتور حرفه ای ووکامرس ⚡ فاکتوریار",
      image: "https://media.rtlcdn.com/2024/12/7966361435d877a1513d068b7ebaa3cb37fd8c50061847-590x300.jpg",
      sales: "1,297",
      satisfaction: "94%",
      support: "A+",
      price: "748,000",
      link: "",
      previewLink: ""
    },
    {
      id: 296540,
      title: "اپکس، افزونه باگ یاب هوشمند",
      image: "https://media.rtlcdn.com/2025/09/281b48710237f7258621659c39a80c3c1a9554c1b2bb72-590x300.jpg",
      sales: "52",
      satisfaction: "84%",
      support: "-",
      price: "748,000",
      link: "",
      previewLink: ""
    },
    {
      id: 104665,
      title: "افزونه بانک ملت (به پرداخت) برای وردپرس با درگاه پرداخت بانک ملت سازگار با ووکامرس 💰",
      image: "https://media.rtlcdn.com/2022/02/19d675e97598804c1974b676d0e0b2b680208496497155-590x300.jpg",
      sales: "4,792",
      satisfaction: "88%",
      support: "A+",
      price: "748,000",
      link: "",
      previewLink: ""
    },
    {
      id: 62517,
      title: "قالب اکسترا، پرفروش‌ترین قالب چندمنظوره",
      image: "https://media.rtlcdn.com/2025/12/f477845c66531057a30814f9b57abe19d513e179222410-590x300.jpg",
      sales: "30,678",
      satisfaction: "94%",
      support: "A+",
      price: "1,697,000",
      link: "",
      previewLink: ""
    },
    {
      id: 66285,
      title: "افزونه المنتور پرو ⚡ (دانلود صفحه ساز Elementor)",
      image: "https://media.rtlcdn.com/2022/12/121d1211710701a217e40b6847ec76aa7d1d717c073a30-590x300.webp",
      sales: "34,512",
      satisfaction: "91%",
      support: "A",
      price: "598,000",
      link: "",
      previewLink: ""
    }
  ];

  const getSupportClass = (support) => {
    if (support === 'A+') return 'top-products-support-Aplus';
    if (support === 'A') return 'top-products-support-A';
    return 'top-products-support-B';
  };

  return (
    <section className="top-products-section" dir="rtl">
      <div className="top-products-container">
        {/* هدر */}
        <header className="top-products-header">
          <div className="top-products-title-wrapper">
            <span className="top-products-icon">⭐</span>
            <h3 className="top-products-title">برترین‌های راست چین</h3>
          </div>
          <a 
            href="https://www.rtl-theme.com/category/wp-themes/?order=DESC&orderBy=saleCount&style=grid" 
            className="top-products-view-all"
          >
            مشاهده همه
          </a>
        </header>

        {/* اسلایدر */}
        <div className="top-products-swiper-container">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            onSwiper={setSwiperInstance}
            navigation={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                centeredSlides: false,
                spaceBetween: 15
              },
              768: {
                slidesPerView: 1.5,
                centeredSlides: true,
                spaceBetween: 20
              },
              990: {
                slidesPerView: 1.5,
                centeredSlides: true,
                spaceBetween: 20
              },
              1200: {
                slidesPerView: 2.5,
                centeredSlides: true,
                spaceBetween: 20
              }
            }}
            dir="rtl"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div>
                  <article className="top-products-card">
                    {/* تصویر */}
                    <div className="top-products-image-container">
                      <a href={product.link} target="_blank" rel="noopener noreferrer">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="top-products-image"
                          loading="lazy"
                        />
                      </a>
                    </div>

                    {/* محتوا */}
                    <div className="top-products-content">
                      <a 
                        href={product.link} 
                        className="top-products-title-link"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {product.title}
                      </a>

                      <div className="top-products-footer">
                        {/* دکمه‌ها */}
                        <div className="top-products-buttons">
                          <button 
                            className="top-products-buy-button"
                            onClick={() => window.open(product.link, '_blank')}
                          >
                            خرید و دانلود
                          </button>
                          <button 
                            className="top-products-preview-button"
                            onClick={() => window.open(product.previewLink, '_blank')}
                          >
                            <span>🖥️</span>
                            پیشنمایش
                          </button>
                        </div>

                        {/* آمار و قیمت */}
                        <div className="top-products-left-section">
                          <div className="top-products-stats">
                            <div className="top-products-stat-item">
                              <div className="top-products-stat-value">{product.sales}</div>
                              <div className="top-products-stat-label">فروش</div>
                            </div>
                            <div className="top-products-stat-item">
                              <div className="top-products-stat-value">{product.satisfaction}</div>
                              <div className="top-products-stat-label">رضایت</div>
                            </div>
                            <div className="top-products-stat-item">
                              <div className={getSupportClass(product.support)}>{product.support}</div>
                              <div className="top-products-stat-label">پشتیبانی</div>
                            </div>
                          </div>
                          <div className="top-products-price">
                            {product.price} 
                            <span className="top-products-currency">تومان</span>
                          </div>
                        </div>
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

export default TopProducts;