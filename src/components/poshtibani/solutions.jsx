import React, { useState } from 'react';
import '../../assets/css/style.css';

const Solutions = () => {
  const [activeTab, setActiveTab] = useState(2); // شروع با تب سوم (بهینه‌سازی سایت)

  const solutionsData = [
    {
      id: 1,
      title: "راهکار افزایش راندمان و خطایابی سایت",
      description: "عملکرد سایتت رو به اوج برسون و خطاها رو برای همیشه حذف کن!",
      progress: 0,
      items: [
        {
          title: "بررسی تخصصی سایت",
          description: "تحلیل دقیق عملکرد سایت برای شناسایی مشکلات و ارائه راهکارهای بهبود در تمام جنبه‌ها.",
          link: "https://www.rtl-theme.com/service/specialized-site-review/"
        },
        {
          title: "رفع آلودگی سایت",
          description: "پاک‌سازی سایت از بدافزارها، ویروس‌ها و کدهای مخرب برای جلوگیری از آسیب به عملکرد و امنیت سایت.",
          link: "https://www.rtl-theme.com/service/wordpress-site-cleanup/"
        },
        {
          title: "افزایش امنیت سایت وردپرس",
          description: "استفاده از روش‌های نوین برای تقویت امنیت وردپرس، جلوگیری از نفوذ هکرها و محافظت از داده‌ها",
          link: "https://www.rtl-theme.com/service/increasing-wordpress-site-security/"
        }
      ]
    },
    {
      id: 2,
      title: "راهکار راه اندازی فروشگاه آنلاین",
      description: "فروشگاه حرفه‌ای خودت رو بساز و فروش آنلاین رو همین امروز شروع کن!",
      progress: 0,
      items: [
        {
          title: "طراحی سایت فروشگاهی",
          description: "ایجاد و طراحی سایت‌های فروشگاهی زیبا و کاربرپسند برای فروش آنلاین محصولات",
          link: "https://www.rtl-theme.com/service/shopping-website-design/"
        },
        {
          title: "درج محصول در سایت",
          description: "اضافه‌کردن محصولات ساده و متغییر، تصاویر، توضیحات و قیمت‌ها به فروشگاه آنلاین.",
          link: "https://www.rtl-theme.com/service/insert-product/"
        },
        {
          title: "طراحی لندینگ با المنتور",
          description: "ساخت صفحات لندینگ حرفه‌ای با استفاده از افزونه قدرتمند المنتور، برای جذب مشتری و ارتقاء نرخ تبدیل.",
          link: "https://www.rtl-theme.com/service/elementor-landing-page-design/"
        }
      ]
    },
    {
      id: 3,
      title: "راهکار بهینه‌سازی سایت",
      description: "سایتت رو سریع، به‌روز و آماده رقابت کن!",
      progress: 71.84,
      items: [
        {
          title: "بهینه‌سازی سرعت سایت - پایه",
          description: "اجرای اقدامات اولیه برای بهبود سرعت بارگذاری سایت، مانند بهینه‌سازی تصاویر، کش کردن و فشرده‌سازی فایل‌ها",
          link: "https://www.rtl-theme.com/service/site-speed-optimization-basic/"
        },
        {
          title: "بهینه‌سازی پیشرفته سایت",
          description: "بهینه‌سازی جامع‌تر سایت برای دستیابی به سرعت بارگذاری بالا و تجربه کاربری بهتری",
          link: "https://www.rtl-theme.com/service/advanced-site-optimization/"
        },
        {
          title: "بروزرسانی سایت وردپرس",
          description: "اطمینان از استفاده از آخرین نسخه وردپرس و افزونه‌ها برای جلوگیری از مشکلات امنیتی و بهبود عملکرد سایت.",
          link: "https://www.rtl-theme.com/service/wordpress-site-update/"
        }
      ]
    }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const getContentClass = (index) => {
    return `content-${index} ${activeTab === index ? 'active' : ''}`;
  };

  return (
    <div className='Solutions_container'>
      <div className="solutions__container solutions__container--desktop">
      <div className="solutions__header">
        {solutionsData.map((solution) => (
          <div
            key={solution.id}
            className={`solutions__header-item item-${solution.id} ${solution.id === activeTab ? 'active' : ''} ${solution.id === 2 ? 'solutions__header-item--no-border' : ''}`}
            onClick={() => handleTabClick(solution.id)}
          >
            <div className="solutions__header-title">{solution.title}</div>
            <div className="solutions__header-desc">{solution.description}</div>
            <div className="solutions__header-progress">
              <div
                className="solutions__header-progress-fill"
                style={{ width: `${solution.progress}%` }}
              ></div>
            </div>
            {solution.id < solutionsData.length && <div className="solutions__header-item-division"></div>}
          </div>
        ))}
      </div>

      <div className="solutions__content">
        {solutionsData.map((solution) => (
          <div key={solution.id} className={`solutions__content-item ${getContentClass(solution.id)}`}>
            {solution.items.map((item, index) => (
              <div key={index} className="solutions__content-box">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="solutions__content-title"
                >
                  {item.title}
                  <span className="solutions__content-title-icon">
                    <img
                      src="https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/VIPService/dist/Active/media/html/arrow-left.png"
                      alt="arrow"
                    />
                  </span>
                </a>
                <div className="solutions__content-desc">{item.description}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Solutions;
