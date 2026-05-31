import React from 'react';
import '../../assets/css/style.css';


function FooterHeader() {
  return (
    <div className="row">
      <div className="col-xl-8 col-md-12 col-lg-12 align-menu-footer">
        <div className="row">
          <nav className="col-xl-3 col-sm-6 col-md-3 col-6 mt-20">
            <div className="footer-widget list-menu responsive-menu-footer">
              <span className="title">معرفی</span>
              <ul>
                <li><a href="https://www.rtl-theme.com/about-us/">درباره راست چین</a></li>
                <li><a href="https://careers.rtl-theme.com/" target="_blank" rel="nofollow">فرصت‌های شغلی</a></li>
                <li><a href="https://www.rtl-theme.com/contact-us/">اطلاعات تماس</a></li>
              </ul>
            </div>
          </nav>
          <nav className="col-xl-3 col-sm-6 col-md-3 col-6 mt-20">
            <div className="footer-widget list-menu responsive-menu-footer">
              <span className="title">خدمات</span>
              <ul>
                <li><a href="https://www.rtl-theme.com/blog/product-warranty/" rel="nofollow">ضمانت بازگشت وجه</a></li>
                <li><a href="https://www.rtl-theme.com/jet/" rel="nofollow">پشتیبانی سریع</a></li>
                <li className="d-flex align-items-center"><a href="https://www.rtl-theme.com/become-vendor/" rel="nofollow">فروشنده شوید</a>
                </li>
              </ul>
            </div>
          </nav>
          <nav className="col-xl-3 col-sm-6 col-md-3 col-6 mt-20">
            <div className="footer-widget list-menu responsive-menu-footer">
              <span className="title">دسترسی سریع</span>
              <ul>
                <li><a href="https://www.rtl-theme.com/blog/">وبلاگ راست چین</a></li>
                <li><a href="https://www.rtl-theme.com/products-license-status-deactivate/" rel="nofollow">افزونه مدیریت لایسنس</a></li>
                <li><a href="https://www.rtl-theme.com/buyers-rules/" rel="nofollow">قوانین سایت</a></li>
              </ul>
            </div>
          </nav>
          <nav className="col-xl-3 col-sm-6 col-md-3 col-6 mt-20">
            <div className="footer-widget list-menu responsive-menu-footer">
              <span className="title">سرویس‌های میزبانی</span>
              <ul>
                <li><a href="https://cloud.rtl-theme.com/wordpress-hosting-plans/">هاست وردپرس</a></li>
                <li><a href="https://cloud.rtl-theme.com/linux-web-hosting/">هاست لینوکس</a></li>
                <li><a href="https://cloud.rtl-theme.com/virtual-server/">سرور مجازی</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="col-xl-4 col-md-12 col-sm-12">
        <div className="col-lg align-box-sed-ticket">
          <nav className="footer-send-ticket">
            <div className="top-footer-send-ticket">
              <div>۷ روز هفته و ۲۴ ساعته پاسخگوی شماییم!</div>
              <a href="https://www.rtl-theme.com/dashboard/#/ticket-send" className="btn-send-ticket">ارسال تیکت</a>
            </div>
            
          </nav>
        </div>
      </div>
    </div>
  );
}

export default FooterHeader;
