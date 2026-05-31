import React from 'react';
import '../../assets/css/style.css';

const FooterHeader = () => {
  const footerData = {
    sections: [
      {
        id: 1,
        title: "معرفی",
        items: [
          { text: "درباره راست چین", link: "https://www.rtl-theme.com/about-us/", rel: "", target: "" },
          { text: "فرصت های شغلی", link: "https://careers.rtl-theme.com/", rel: "nofollow", target: "_blank" },
          { text: "اطلاعات تماس", link: "https://www.rtl-theme.com/contact-us/", rel: "", target: "" }
        ]
      },
      {
        id: 2,
        title: "خدمات",
        items: [
          { text: "ضمانت بازگشت وجه", link: "https://www.rtl-theme.com/blog/product-warranty/", rel: "nofollow", target: "" },
          { text: "پشتیبانی سریع", link: "https://www.rtl-theme.com/jet/", rel: "nofollow", target: "" },
          { text: "فروشنده شوید", link: "https://www.rtl-theme.com/become-vendor/", rel: "nofollow", target: "", badge: "در حال جذب" }
        ]
      },
      {
        id: 3,
        title: "دسترسی سریع",
        items: [
          { text: "وبلاگ راست چین", link: "https://www.rtl-theme.com/blog/", rel: "", target: "" },
          { text: "افزونه مدیریت لایسنس", link: "https://www.rtl-theme.com/products-license-status-deactivate/", rel: "nofollow", target: "" },
          { text: "قوانین سایت", link: "https://www.rtl-theme.com/buyers-rules/", rel: "nofollow", target: "" }
        ]
      },
      {
        id: 4,
        title: "سرویس های میزبانی",
        items: [
          { text: "هاست وردپرس", link: "https://cloud.rtl-theme.com/wordpress-hosting-plans/", rel: "", target: "" },
          { text: "هاست لینوکس", link: "https://cloud.rtl-theme.com/linux-web-hosting/", rel: "", target: "" },
          { text: "سرور مجازی", link: "https://cloud.rtl-theme.com/virtual-server/", rel: "", target: "" }
        ]
      }
    ],
    support: {
      title: "۷ روز هفته و ۲۴ ساعته پاسخگوی شماییم!",
      ticketLink: "https://www.rtl-theme.com/dashboard/#/ticket-send",
      guideLink: "https://www.rtl-theme.com/product-installation-guide/",
      guideText: "آموزش نصب محصولات راست چین"
    }
  };

  return (
    <footer className="footer-section" dir="rtl">
      <div className="footer-container">
        <div className="footer-main-row">
          {/* ستون منوها */}
          <div className="footer-menu-col">
            <div className="footer-inner-row">
              {footerData.sections.map((section) => (
                <div key={section.id} className="footer-nav-col">
                  <nav className="footer-widget">
                    <span className="footer-widget-title">
                      {section.title}
                      <span className="footer-title-underline"></span>
                    </span>
                    <ul className="footer-list">
                      {section.items.map((item, index) => (
                        <li key={index} className="footer-list-item">
                          <div className="footer-link-wrapper">
                            <a 
                              href={item.link}
                              className="footer-link"
                              target={item.target}
                              rel={item.rel || undefined}
                            >
                              {item.text}
                            </a>
                            {item.badge && (
                              <span className="footer-badge">{item.badge}</span>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              ))}
            </div>
          </div>

          {/* ستون تیکت */}
          <div className="footer-ticket-col">
            <div className="footer-ticket-box">
              <div className="footer-ticket-top">
                <div className="footer-ticket-text">
                  {footerData.support.title}
                </div>
                <a 
                  href={footerData.support.ticketLink}
                  className="footer-ticket-button"
                >
                  ارسال تیکت
                </a>
              </div>
              <a 
                href={footerData.support.guideLink}
                className="footer-guide-link"
              >
                {footerData.support.guideText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterHeader;