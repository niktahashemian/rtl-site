// import React from "react";
// import '../../assets/css/style.css';

// const Footer = () => {
//   return (
//     <footer className="site-footer mt-5">
//       <div className="footer-main">
//         <div className="container">
//           <div className="row">

//             {/* منوها */}
//             <div className="col-xl-8 col-md-12 col-lg-12 align-menu-footer">
//               <div className="row">

//                 {/* معرفی */}
//                 <nav className="col-xl-3 col-sm-6 col-md-3 col-6 mt-20">
//                   <div className="footer-widget list-menu responsive-menu-footer">
//                     <span className="title">معرفی</span>
//                     <ul>
//                       <li><a href="#">درباره ما</a></li>
//                       <li><a href="#">فرصت های شغلی</a></li>
//                       <li><a href="#">تماس با ما</a></li>
//                     </ul>
//                   </div>
//                 </nav>

//                 {/* خدمات */}
//                 <nav className="col-xl-3 col-sm-6 col-md-3 col-6 mt-20">
//                   <div className="footer-widget list-menu responsive-menu-footer">
//                     <span className="title">خدمات</span>
//                     <ul>
//                       <li><a href="#">ضمانت بازگشت وجه</a></li>
//                       <li><a href="#">پشتیبانی سریع</a></li>
//                       <li className="d-flex align-items-center">
//                         <a href="#">فروشنده شوید</a>
//                         <div className="badge">در حال جذب</div>
//                       </li>
//                     </ul>
//                   </div>
//                 </nav>

//                 {/* دسترسی سریع */}
//                 <nav className="col-xl-3 col-sm-6 col-md-3 col-6 mt-20">
//                   <div className="footer-widget list-menu responsive-menu-footer">
//                     <span className="title">دسترسی سریع</span>
//                     <ul>
//                       <li><a href="#">وبلاگ</a></li>
//                       <li><a href="#">مدیریت لایسنس</a></li>
//                       <li><a href="#">قوانین سایت</a></li>
//                     </ul>
//                   </div>
//                 </nav>

//                 {/* هاستینگ */}
//                 <nav className="col-xl-3 col-sm-6 col-md-3 col-6 mt-20">
//                   <div className="footer-widget list-menu responsive-menu-footer">
//                     <span className="title">سرویس های میزبانی</span>
//                     <ul>
//                       <li><a href="#">هاست وردپرس</a></li>
//                       <li><a href="#">هاست لینوکس</a></li>
//                       <li><a href="#">سرور مجازی</a></li>
//                     </ul>
//                   </div>
//                 </nav>

//               </div>
//             </div>

//             {/* تیکت */}
//             <div className="col-xl-4 col-md-12 col-sm-12">
//               <div className="align-box-sed-ticket">
//                 <nav className="footer-send-ticket">
//                   <div className="top-footer-send-ticket">
//                     <div>۷ روز هفته و ۲۴ ساعته پاسخگوی شماییم!</div>
//                     <a href="#" className="btn-send-ticket">ارسال تیکت</a>
//                   </div>
//                   <a href="#" className="answer-question-footer">
//                     آموزش نصب محصولات
//                   </a>
//                 </nav>
//               </div>
//             </div>

//           </div>

//           {/* پایین فوتر */}
//           <div className="footer-bottom">
//             <div className="row">

//               {/* آمار */}
//               <div className="col-lg-auto">
//                 <div className="footer-statistics">
//                   <ul>
//                     <li><b>8,072</b> محصول</li>
//                     <li><b>309,764</b> کاربر ویژه</li>
//                     <li><b>364,735</b> پرسش و پاسخ</li>
//                   </ul>
//                 </div>
//               </div>

//               {/* شبکه‌های اجتماعی */}
//               <div className="col-lg">
//                 <div className="footer-socials">
//                   <h6 className="title">با ما همراه باشید</h6>
//                   <ul>
//                     <li><a href="#"><i className="rip rip-b-instagram"></i></a></li>
//                     <li><a href="#"><i className="rip rip-l-paper-plane"></i></a></li>
//                     <li><a href="#"><i className="rip rip-b-facebook-f"></i></a></li>
//                     <li><a href="#"><i className="rip rip-b-twitter"></i></a></li>
//                     <li><a href="#"><i className="rip rip-b-linkedin"></i></a></li>
//                   </ul>
//                 </div>
//               </div>

//               {/* اینماد */}
//               <div className="col-xl-4 col-lg-12">
//                 <div className="enamad">
//                   <img
//                     src="/images/enamad-logo.png"
//                     alt="enamad"
//                     width="125"
//                   />
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>

//         {/* توضیحات */}
//         <div className="footer-desc">
//           <div className="container">
//             <p className="desc">
//               ما به شما کمک می‌کنیم کسب و کار آنلاین خود را سریع و حرفه‌ای راه‌اندازی کنید.
//             </p>
//             <span className="copy-right">
//               تمامی حقوق محفوظ است.
//             </span>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import '../../assets/css/style.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* ردیف اصلی فوتر (ساختاری مشابه style.css) */}
        <div className="footer-main-row">
          {/* ستون منوها (مطابق با footer-menu-col) */}
          <div className="footer-menu-col">
            <div className="footer-inner-row">
              {/* --- منوی اول: معرفی --- */}
              <div className="footer-nav-col">
                <div className="footer-widget">
                  <span className="footer-widget-title">
                    معرفی
                    <span className="footer-title-underline"></span>
                  </span>
                  <ul className="footer-list">
                    <li className="footer-list-item"><a href="#" className="footer-link">درباره ما</a></li>
                    <li className="footer-list-item"><a href="#" className="footer-link">فرصت های شغلی</a></li>
                    <li className="footer-list-item"><a href="#" className="footer-link">تماس با ما</a></li>
                  </ul>
                </div>
              </div>

              {/* --- منوی دوم: خدمات --- */}
              <div className="footer-nav-col">
                <div className="footer-widget">
                  <span className="footer-widget-title">
                    خدمات
                    <span className="footer-title-underline"></span>
                  </span>
                  <ul className="footer-list">
                    <li className="footer-list-item"><a href="#" className="footer-link">ضمانت بازگشت وجه</a></li>
                    <li className="footer-list-item"><a href="#" className="footer-link">پشتیبانی سریع</a></li>
                    <li className="footer-list-item">
                      <div className="footer-link-wrapper">
                        <a href="#" className="footer-link">فروشنده شوید</a>
                        <span className="footer-badge">در حال جذب</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* --- منوی سوم: دسترسی سریع --- */}
              <div className="footer-nav-col">
                <div className="footer-widget">
                  <span className="footer-widget-title">
                    دسترسی سریع
                    <span className="footer-title-underline"></span>
                  </span>
                  <ul className="footer-list">
                    <li className="footer-list-item"><a href="#" className="footer-link">وبلاگ</a></li>
                    <li className="footer-list-item"><a href="#" className="footer-link">مدیریت لایسنس</a></li>
                    <li className="footer-list-item"><a href="#" className="footer-link">قوانین سایت</a></li>
                  </ul>
                </div>
              </div>

              {/* --- منوی چهارم: سرویس های میزبانی --- */}
              <div className="footer-nav-col">
                <div className="footer-widget">
                  <span className="footer-widget-title">
                    سرویس های میزبانی
                    <span className="footer-title-underline"></span>
                  </span>
                  <ul className="footer-list">
                    <li className="footer-list-item"><a href="#" className="footer-link">هاست وردپرس</a></li>
                    <li className="footer-list-item"><a href="#" className="footer-link">هاست لینوکس</a></li>
                    <li className="footer-list-item"><a href="#" className="footer-link">سرور مجازی</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* ستون تیکت (مطابق با footer-ticket-col) */}
          <div className="footer-ticket-col">
            <div className="footer-ticket-box">
              <div className="footer-ticket-top">
                <p className="footer-ticket-text">
                  ۷ روز هفته و ۲۴ ساعته پاسخگوی شماییم!
                </p>
                <button className="footer-ticket-button">
                  ارسال تیکت
                </button>
              </div>
              <a href="#" className="footer-guide-link">
                آموزش نصب محصولات
              </a>
            </div>
          </div>
        </div>

        {/* بخش پایینی فوتر (آمار، شبکه‌های اجتماعی و نماد) - با استفاده از کلاس‌های موجود در style.css */}
        {/* توجه: برای این بخش، style.css فعلی شما استایل اختصاصی ندارد. */}
        {/* در صورت نیاز می‌توانید این بخش را با یک ساختار ساده‌تر و کلاس‌های دلخواه طراحی کنید */}
        {/* بخش پایینی فوتر (آمار، شبکه‌های اجتماعی و نماد) */}
        <div className="footer-bottom-section" style={{ marginTop: '40px', borderTop: '1px solid #eaeaea', paddingTop: '20px' }}>
          <div className="footer-bottom-row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>

            {/* آمار */}
            <div className="footer-bottom-stats">
              <ul style={{ display: 'flex', gap: '25px', listStyle: 'none', margin: 0, padding: 0 }}>
                <li><strong>8,072</strong> محصول</li>
                <li><strong>309,764</strong> کاربر ویژه</li>
                <li><strong>364,735</strong> پرسش و پاسخ</li>
              </ul>
            </div>

            {/* شبکه‌های اجتماعی */}
            <div className="footer-bottom-social">
              <span style={{ marginLeft: '15px', fontWeight: 'bold' }}>با ما همراه باشید:</span>
              <div style={{ display: 'flex', gap: '12px', display: 'inline-flex' }}>
                <a href="#" style={{ textDecoration: 'none', color: '#333' }}>اینستاگرام</a>
                <a href="#" style={{ textDecoration: 'none', color: '#333' }}>تلگرام</a>
                <a href="#" style={{ textDecoration: 'none', color: '#333' }}>فیسبوک</a>
                <a href="#" style={{ textDecoration: 'none', color: '#333' }}>توییتر</a>
                <a href="#" style={{ textDecoration: 'none', color: '#333' }}>لینکدین</a>
              </div>
            </div>

            {/* اینماد - مسیر اصلاح شده */}
            <div className="footer-bottom-enamad">
              <img src="/download.jpg" alt="enamad" width="80" />
            </div>
          </div>
        </div>

        {/* بخش توضیحات و کپی‌رایت - با کلاس‌های ساده */}
        <div className="footer-copyright-text" style={{ textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #eaeaea', color: '#666', fontSize: '14px' }}>
          <p>ما به شما کمک می‌کنیم کسب و کار آنلاین خود را سریع و حرفه‌ای راه‌اندازی کنید.</p>
          <p>تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;