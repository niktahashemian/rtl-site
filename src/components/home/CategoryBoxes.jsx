// import React from 'react';
// import '../../assets/css/style.css';

// const CategoryBoxes = () => {
//   const categories = [
//     {
//       id: 1,
//       title: "قالب وردپرس",
//       icon: "🛒",
//       count: "2,245",
//       label: "پوسته",
//       link: "https://www.rtl-theme.com/category/wp-themes/",
//       desc: "دانلود پوسته‌های وردپرس حرفه ای"
//     },
//     {
//       id: 2,
//       title: "اسکریپت آماده",
//       icon: "💳",
//       count: "269",
//       label: "اسکریپت",
//       link: "https://www.rtl-theme.com/category/script/",
//       desc: "دانلود اسکریپت‌های لاراول، php"
//     },
//     {
//       id: 3,
//       title: "قالب جوملا",
//       icon: "❓",
//       count: "147",
//       label: "قالب",
//       link: "https://www.rtl-theme.com/category/joomla/",
//       desc: ""
//     },
//     {
//       id: 4,
//       title: "افزونه وردپرس",
//       icon: "🔌",
//       count: "930",
//       label: "افزونه",
//       link: "https://www.rtl-theme.com/category/wordpress-plugin/",
//       desc: "خرید و دانلود پلاگین‌های کاربردی"
//     },
//     {
//       id: 5,
//       title: "اپلیکیشن",
//       icon: "🏆",
//       count: "43",
//       label: "محصول",
//       link: "https://www.rtl-theme.com/category/application/",
//       desc: "ساخت اپلیکیشن وب"
//     },
//     {
//       id: 6,
//       title: "قالب html",
//       icon: "🌐",
//       count: "2,371",
//       label: "محصول",
//       link: "https://www.rtl-theme.com/category/template-html/",
//       desc: "خرید و دانلود تم های html"
//     }
//   ];

//   return (
//     <section className="category-boxes-section" dir="rtl">
//       <div className="category-boxes-container">
//         <div className="category-boxes-row">
//           {categories.map((category) => (
//             <div key={category.id} className="category-boxes-col">
//               <div className="category-box">
//                 <a 
//                   href={category.link} 
//                   title={category.desc || category.title}
//                   className="category-box-link"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <div className="category-box-content">
//                     {/* آیکون */}
//                     <div className="category-icon-container">
//                       <span className="category-icon">{category.icon}</span>
//                     </div>

//                     {/* عنوان */}
//                     <h3 className="category-title">{category.title}</h3>

//                     {/* توضیحات (مخفی در موبایل) */}
//                     {category.desc && (
//                       <div className="category-description">{category.desc}</div>
//                     )}

//                     {/* تعداد */}
//                     <div className="category-count-container">
//                       <span className="category-count">{category.count}</span>
//                       <span className="category-label"> {category.label}</span>
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

// export default CategoryBoxes;
import React from 'react';
import '../../assets/css/style.css';

const CategoryBoxes = () => {
  const categories = [
    {
      id: 1,
      title: "قالب وردپرس",
      icon: "🛒",
      count: "2,245",
      label: "پوسته",
      link: "",
      desc: "دانلود پوسته‌های وردپرس حرفه ای"
    },
    {
      id: 2,
      title: "اسکریپت آماده",
      icon: "💳",
      count: "269",
      label: "اسکریپت",
      link: "",
      desc: "دانلود اسکریپت‌های لاراول، php"
    },
    {
      id: 3,
      title: "قالب جوملا",
      icon: "❓",
      count: "147",
      label: "قالب",
      link: "",
      desc: ""
    },
    {
      id: 4,
      title: "افزونه وردپرس",
      icon: "🔌",
      count: "930",
      label: "افزونه",
      link: "",
      desc: "خرید و دانلود پلاگین‌های کاربردی"
    },
    {
      id: 5,
      title: "اپلیکیشن",
      icon: "🏆",
      count: "43",
      label: "محصول",
      link: "",
      desc: "ساخت اپلیکیشن وب"
    },
    {
      id: 6,
      title: "قالب html",
      icon: "🌐",
      count: "2,371",
      label: "محصول",
      link: "",
      desc: "خرید و دانلود تم های html"
    }
  ];

  return (
    <section className="category-boxes-section" dir="rtl">
      <div className="category-boxes-container">
        <div className="category-boxes-row">
          {categories.map((category) => (
            <div key={category.id} className="category-boxes-col">
              <div className="category-box">
                <a 
                  href={category.link} 
                  title={category.desc || category.title}
                  className="category-box-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="category-box-content">
                    {/* آیکون */}
                    <div className="category-icon-container">
                      <span className="category-icon">{category.icon}</span>
                    </div>

                    {/* عنوان */}
                    <h3 className="category-title">{category.title}</h3>

                    {/* توضیحات (مخفی در موبایل) */}
                    {category.desc && (
                      <div className="category-description">{category.desc}</div>
                    )}

                    {/* تعداد */}
                    <div className="category-count-container">
                      <span className="category-count">{category.count}</span>
                      <span className="category-label"> {category.label}</span>
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

export default CategoryBoxes;