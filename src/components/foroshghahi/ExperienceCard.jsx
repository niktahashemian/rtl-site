// import React, { useRef } from "react";

// const ExperienceCard = () => {
//   const videoRef = useRef(null);

//   const handlePlay = () => {
//     if (videoRef.current) {
//       videoRef.current.play();
//     }
//   };

//   return (
//     <div className="experience__card">
      
//       {/* Video Section */}
//       <div className="experience__cardVideo">
//         <video
//           ref={videoRef}
//           tabIndex="0"
//           preload="metadata"
//           className="experience__cardVideoInner"
//           poster="https://content-marketing.rtlcdn.com/image/2025/07/f43e941f-7f75-483e-88bc-d80436d68c44.png"
//         >
//           <source
//             src="https://content-marketing.rtlcdn.com/video/2025/07/5c237cd2-feb5-4351-8852-6ceb8d6511d5.mp4"
//             type="video/mp4"
//           />
//         </video>

//         <div
//           className="experience__cardVideoButton"
//           onClick={handlePlay}
//           style={{ cursor: "pointer" }}
//         >
//           <img
//             src="https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/BecomeSeller/dist/Active/media/html/hero-video-button.svg"
//             alt="play"
//           />
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="experience__cardContent">
        
//         <div className="experience__cardInfo">
//           <div className="experience__cardName">معین خلیلی</div>
//           <div className="experience__cardTemplate">قالب فروشگاهی کاوه</div>
//         </div>

//         <div className="experience__cardSale">
          
//           <div className="experience__cardSaleInfo">
//             <div className="experience__cardSaleIcon">
//               <img
//                 src="https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/BecomeSeller/dist/Active/media/html/income-icon-1.svg"
//                 alt="icon"
//               />
//             </div>
//             <div className="experience__cardSaleInfoText">
//               تعداد کل فروش
//               <span className="experience__cardDetailText"> 3,455 </span>
//             </div>
//           </div>

//           <div className="experience__cardSaleInfo">
//             <div className="experience__cardSaleIcon">
//               <img
//                 src="https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/BecomeSeller/dist/Active/media/html/income-icon-2.svg"
//                 alt="icon"
//               />
//             </div>
//             <div className="experience__cardSaleInfoText">
//               درآمد کل
//               <span className="experience__cardDetailText"> 2 میلیارد تومان </span>
//             </div>
//           </div>

//           <div className="experience__cardSaleInfo">
//             <div className="experience__cardSaleIcon">
//               <img
//                 src="https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/BecomeSeller/dist/Active/media/html/income-icon-3.svg"
//                 alt="icon"
//               />
//             </div>
//             <div className="experience__cardSaleInfoText">
//               درآمد ماهیانه
//               <span className="experience__cardDetailText"> 150 میلیون تومان </span>
//             </div>
//           </div>

//         </div>

//         <div className="experience__cardButton">
//           <a
//             className="button button--green"
//             href="https://www.rtl-theme.com/author/moein757/products/"
//           >
//             مشاهده محصولات
//           </a>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ExperienceCard;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const HeroSlider = () => {
  const slides = [
    { title: "معین خلیلی",subtitle: "قالب فروشگاه کاوه",   image: "https://content-marketing.rtlcdn.com/image/2025/07/f43e941f-7f75-483e-88bc-d80436d68c44.png" },
    { title: "حسین اسمائیلیان",subtitle: "قالب فروشگاه پارس کالا", image: "https://content-marketing.rtlcdn.com/image/2025/07/f43e941f-7f75-483e-88bc-d80436d68c44.png" },
    { title: "محمد یزدانی",subtitle: "قالب فروشگاه وودمارت پلاس", image: "/images/3.png" },
  ];

  return (
    <div className="heroSlider">

      <Swiper
        modules={[EffectCoverflow, Pagination, Autoplay]}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={1.5}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2,
          slideShadows: false,
        }}
      >
        {slides.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="greenSlide">

              <div className="slideText">
                <h2>{item.title}</h2>
                <p>{item.subtitle}</p>
                
              </div>

              <div className="slideImage">
                <img src={item.image} alt="" />
              </div>

            </div>
          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  );
};

export default HeroSlider;