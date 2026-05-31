// import React from 'react';
// import '../../assets/css/style.css';

// const LatestBlogPosts = () => {
//   const blogPosts = [
//     {
//       id: 1,
//       title: "هم‌ بنیان‌ گذار راست‌ چین: دسترسی به ۶۵٪ سایت‌ها از داخل ایران قطع شده است",
//       excerpt: "کامران یزدانی‌نیا گفت: بین وب‌سایت‌هایی که از محصولات راست‌چین استفاده کرده‌اند دسترسی به 65% وب‌سایت‌ها از داخل ایران قطع شده است.",
//       image: "https://media.rtlcdn.com/2026/01/7a69765681628deb007928cac21941be4b8ee1b8482739-590x300.jpg",
//       category: "اخبار",
//       categoryLink: "https://www.rtl-theme.com/blog-category/%d8%a7%d8%ae%d8%a8%d8%a7%d8%b1/",
//       comments: 0,
//       link: "https://www.rtl-theme.com/blog/access-to-65-of-sites-has-been-cut-off-from-inside-iran/",
//       date: "2026-01"
//     },
//     {
//       id: 2,
//       title: "دانلود مستقیم وردپرس و افزونه‌ های ضروری",
//       excerpt: "با توجه به نوسانات و محدودیت‌های اخیر در دسترسی به اینترنت بین‌الملل، بسیاری از ما با چالش دانلود نسخه‌های اصلی وردپرس و افزونه‌های ...",
//       image: "https://media.rtlcdn.com/2026/01/c55d016a38ed1c57ec6f4ef18273c828dd2aa684287f7-590x300.jpg",
//       category: "اخبار",
//       categoryLink: "https://www.rtl-theme.com/blog-category/%d8%a7%d8%ae%d8%a8%d8%a7%d8%b1/",
//       comments: 7,
//       link: "https://www.rtl-theme.com/blog/download-wordpress-essential-plugins/",
//       date: "2026-01"
//     },
//     {
//       id: 3,
//       title: "لیست سایت‌های قابل دسترس در زمان قطعی اینترنت در ایران",
//       excerpt: "لیست جامع سایت‌های داخلی ایران که در زمان قطعی اینترنت قابل دسترسی هستند؛ شامل خدمات بانکی، اخبار، دولتی و سرگرمی.",
//       image: "https://media.rtlcdn.com/2026/01/78ac767b8575c2e2b510144859eab8a401602a07da13d0-590x300.jpg",
//       category: "اخبار",
//       categoryLink: "https://www.rtl-theme.com/blog-category/%d8%a7%d8%ae%d8%a8%d8%a7%d8%b1/",
//       comments: 0,
//       link: "https://www.rtl-theme.com/blog/accessible-sites-in-iran/",
//       date: "2026-01"
//     },
//     {
//       id: 4,
//       title: "آموزش ساخت هدر در وردپرس (آموزش گام به گام)",
//       excerpt: "در این مقاله به شما آموزش می‌دهیم که چگونه با استفاده از ابزارهای داخلی وردپرس، افزونه‌های صفحه‌ ساز و با استفاده از کدنویسی کنترل ...",
//       image: "https://media.rtlcdn.com/2025/12/6bd860d2f7237fd53d63560987a76f0694ec15a4268e64-560x300.png",
//       category: "نقد و بررسی",
//       categoryLink: "https://www.rtl-theme.com/blog-category/review/",
//       comments: 0,
//       link: "https://www.rtl-theme.com/blog/creating-a-header-in-wordpress/",
//       date: "2025-12"
//     }
//   ];

//   return (
//     <section className="latest-blog-section" dir="rtl">
//       <div className="latest-blog-container">
//         {/* هدر */}
//         <header className="latest-blog-header">
//           <div className="latest-blog-header-content">
//             <div className="latest-blog-title-wrapper">
//               <div className="latest-blog-icon-container">
//                 <span className="latest-blog-icon-placeholder">📰</span>
//               </div>
//               <h3 className="latest-blog-title">جدیدترین‌های وبلاگ</h3>
//             </div>
//             <a 
//               href="https://www.rtl-theme.com/blog/?all=show" 
//               className="latest-blog-view-all"
//             >
//               مشاهده همه
//             </a>
//           </div>
//         </header>

//         {/* پست‌های وبلاگ */}
//         <div className="latest-blog-row">
//           {blogPosts.map((post) => (
//             <div key={post.id} className="latest-blog-col">
//               <article className="latest-blog-card">
//                 {/* تصویر */}
//                 <div className="latest-blog-image-container">
//                   <a href={post.link} target="_blank" rel="noopener noreferrer">
//                     <img 
//                       src={post.image} 
//                       alt={post.title}
//                       className="latest-blog-image"
//                       loading="lazy"
//                     />
//                   </a>
//                 </div>

//                 {/* محتوا */}
//                 <div className="latest-blog-body">
//                   <a 
//                     href={post.link} 
//                     className="latest-blog-title-link"
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     title={post.title}
//                   >
//                     {post.title}
//                   </a>

//                   <p className="latest-blog-excerpt">
//                     {post.excerpt}
//                   </p>

//                   {/* فوتر */}
//                   <div className="latest-blog-footer">
//                     <a 
//                       href={post.categoryLink} 
//                       className="latest-blog-category"
//                     >
//                       <i className="latest-blog-category-icon">📂</i>
//                       {post.category}
//                     </a>

//                     <a 
//                       href={`${post.link}#comments`} 
//                       className="latest-blog-comments"
//                     >
//                       <div className="latest-blog-comments-count">
//                         {post.comments}
//                         <i className="latest-blog-comments-icon">💬</i>
//                       </div>
//                       <span className="latest-blog-comments-text">دیدگاه</span>
//                     </a>
//                   </div>
//                 </div>
//               </article>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LatestBlogPosts;
import React from 'react';
import '../../assets/css/style.css';

const LatestBlogPosts = () => {
  const blogPosts = [
    {
      id: 1,
      title: "هم‌ بنیان‌ گذار راست‌ چین: دسترسی به ۶۵٪ سایت‌ها از داخل ایران قطع شده است",
      excerpt: "کامران یزدانی‌نیا گفت: بین وب‌سایت‌هایی که از محصولات راست‌چین استفاده کرده‌اند دسترسی به 65% وب‌سایت‌ها از داخل ایران قطع شده است.",
      image: "https://media.rtlcdn.com/2026/01/7a69765681628deb007928cac21941be4b8ee1b8482739-590x300.jpg",
      category: "اخبار",
      categoryLink: "",
      comments: 0,
      link: "",
      date: "2026-01"
    },
    {
      id: 2,
      title: "دانلود مستقیم وردپرس و افزونه‌ های ضروری",
      excerpt: "با توجه به نوسانات و محدودیت‌های اخیر در دسترسی به اینترنت بین‌الملل، بسیاری از ما با چالش دانلود نسخه‌های اصلی وردپرس و افزونه‌های ...",
      image: "https://media.rtlcdn.com/2026/01/c55d016a38ed1c57ec6f4ef18273c828dd2aa684287f7-590x300.jpg",
      category: "اخبار",
      categoryLink: "",
      comments: 7,
      link: "",
      date: "2026-01"
    },
    {
      id: 3,
      title: "لیست سایت‌های قابل دسترس در زمان قطعی اینترنت در ایران",
      excerpt: "لیست جامع سایت‌های داخلی ایران که در زمان قطعی اینترنت قابل دسترسی هستند؛ شامل خدمات بانکی، اخبار، دولتی و سرگرمی.",
      image: "https://media.rtlcdn.com/2026/01/78ac767b8575c2e2b510144859eab8a401602a07da13d0-590x300.jpg",
      category: "اخبار",
      categoryLink: "https://www.rtl-theme.com/blog-category/%d8%a7%d8%ae%d8%a8%d8%a7%d8%b1/",
      comments: 0,
      link: "https://www.rtl-theme.com/blog/accessible-sites-in-iran/",
      date: "2026-01"
    },
    {
      id: 4,
      title: "آموزش ساخت هدر در وردپرس (آموزش گام به گام)",
      excerpt: "در این مقاله به شما آموزش می‌دهیم که چگونه با استفاده از ابزارهای داخلی وردپرس، افزونه‌های صفحه‌ ساز و با استفاده از کدنویسی کنترل ...",
      image: "https://media.rtlcdn.com/2025/12/6bd860d2f7237fd53d63560987a76f0694ec15a4268e64-560x300.png",
      category: "نقد و بررسی",
      categoryLink: "",
      comments: 0,
      link: "",
      date: "2025-12"
    }
  ];

  return (
    <section className="latest-blog-section" dir="rtl">
      <div className="latest-blog-container">
        {/* هدر */}
        <header className="latest-blog-header">
          <div className="latest-blog-header-content">
            <div className="latest-blog-title-wrapper">
              <div className="latest-blog-icon-container">
                <span className="latest-blog-icon-placeholder">📰</span>
              </div>
              <h3 className="latest-blog-title">جدیدترین‌های وبلاگ</h3>
            </div>
            <a 
              href="https://www.rtl-theme.com/blog/?all=show" 
              className="latest-blog-view-all"
            >
              مشاهده همه
            </a>
          </div>
        </header>

        {/* پست‌های وبلاگ */}
        <div className="latest-blog-row">
          {blogPosts.map((post) => (
            <div key={post.id} className="latest-blog-col">
              <article className="latest-blog-card">
                {/* تصویر */}
                <div className="latest-blog-image-container">
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="latest-blog-image"
                      loading="lazy"
                    />
                  </a>
                </div>

                {/* محتوا */}
                <div className="latest-blog-body">
                  <a 
                    href={post.link} 
                    className="latest-blog-title-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                    title={post.title}
                  >
                    {post.title}
                  </a>

                  <p className="latest-blog-excerpt">
                    {post.excerpt}
                  </p>

                  {/* فوتر */}
                  <div className="latest-blog-footer">
                    <a 
                      href={post.categoryLink} 
                      className="latest-blog-category"
                    >
                      <i className="latest-blog-category-icon">📂</i>
                      {post.category}
                    </a>

                    <a 
                      href={`${post.link}#comments`} 
                      className="latest-blog-comments"
                    >
                      <div className="latest-blog-comments-count">
                        {post.comments}
                        <i className="latest-blog-comments-icon">💬</i>
                      </div>
                      <span className="latest-blog-comments-text">دیدگاه</span>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogPosts;