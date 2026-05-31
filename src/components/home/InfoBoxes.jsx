// import React from 'react';
// import '../../assets/css/style.css';

// const InfoBoxes = () => {
//   const boxes = [
//     {
//       id: 1,
//       title: "وبلاگ راست‌ چین",
//       desc: "جدیدترین آموزش‌های حرفه‌ای راست چین",
//       icon: "📝",
//       bgColor: "blue",
//       link: "https://www.rtl-theme.com/blog",
//       rel: ""
//     },
//     {
//       id: 2,
//       title: "فرصت‌های شغلی",
//       desc: "مزایای استخدام در راست چین را مشاهده کنید",
//       icon: "💼",
//       bgColor: "orange",
//       link: "https://careers.rtl-theme.com",
//       rel: "nofollow"
//     },
//     {
//       id: 3,
//       title: "فروشنده شوید",
//       desc: "درآمد میلیونی داشته باشید",
//       icon: "💰",
//       bgColor: "green",
//       link: "https://www.rtl-theme.com/become-vendor/",
//       rel: "nofollow"
//     }
//   ];

//   return (
//     <section className="info-boxes-section" dir="rtl">
//       <div className="info-boxes-container">
//         <div className="info-boxes-row">
//           {boxes.map((box) => (
//             <div key={box.id} className="info-boxes-col">
//               <div className={`info-box ${box.bgColor}`}>
//                 <a 
//                   href={box.link} 
//                   className="info-box-link"
//                   target="_blank"
//                   rel={box.rel || "noopener noreferrer"}
//                 >
//                   <div className="info-box-content">
//                     {/* آیکون */}
//                     <div className={`info-box-icon-container ${box.bgColor}`}>
//                       <span className="info-box-icon">{box.icon}</span>
//                     </div>

//                     {/* متن */}
//                     <div className="info-box-text">
//                       <div className="info-box-title">
//                         {box.title}
//                         <i className="info-box-arrow">
//                           ←
//                         </i>
//                       </div>
//                       <div className="info-box-description">{box.desc}</div>
//                     </div>
//                   </div>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InfoBoxes;
import React from 'react';
import '../../assets/css/style.css';

const InfoBoxes = () => {
  const boxes = [
    {
      id: 1,
      title: "وبلاگ راست‌ چین",
      desc: "جدیدترین آموزش‌های حرفه‌ای راست چین",
      icon: "📝",
      bgColor: "blue",
      link: "",
      rel: ""
    },
    {
      id: 2,
      title: "فرصت‌های شغلی",
      desc: "مزایای استخدام در راست چین را مشاهده کنید",
      icon: "💼",
      bgColor: "orange",
      link: "",
      rel: "nofollow"
    },
    {
      id: 3,
      title: "فروشنده شوید",
      desc: "درآمد میلیونی داشته باشید",
      icon: "💰",
      bgColor: "green",
      link: "",
      rel: "nofollow"
    }
  ];

  return (
    <section className="info-boxes-section" dir="rtl">
      <div className="info-boxes-container">
        <div className="info-boxes-row">
          {boxes.map((box) => (
            <div key={box.id} className="info-boxes-col">
              <div className={`info-box ${box.bgColor}`}>
                <a 
                  href={box.link} 
                  className="info-box-link"
                  target="_blank"
                  rel={box.rel || "noopener noreferrer"}
                >
                  <div className="info-box-content">
                    {/* آیکون */}
                    <div className={`info-box-icon-container ${box.bgColor}`}>
                      <span className="info-box-icon">{box.icon}</span>
                    </div>

                    {/* متن */}
                    <div className="info-box-text">
                      <div className="info-box-title">
                        {box.title}
                        <i className="info-box-arrow">
                          ←
                        </i>
                      </div>
                      <div className="info-box-description">{box.desc}</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;