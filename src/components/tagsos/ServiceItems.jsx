import React from 'react';
import '../../assets/css/style.css';

const ServiceItems = () => {
  const services = [
    {
      id: 1,
      icon: "⭐",
      title: "اصلی و اورجینال",
      subtitle: "با ضمانت بازگشت وجه",
      iconClass: "icon-org"
    },
    {
      id: 2,
      icon: "📦",
      title: "نصب آسان",
      subtitle: "همراه با پشتیبانی کامل",
      iconClass: "icon-box"
    },
    {
      id: 3,
      icon: "📖",
      title: "فایل راهنما",
      subtitle: "برای استفاده صحیح",
      iconClass: "icon-mag"
    },
    {
      id: 4,
      icon: "💰",
      title: "بازگشت وجه",
      subtitle: "ضمانت بازگشت ۶ ماهه",
      iconClass: "icon-wallet"
    },
    {
      id: 5,
      icon: "💬",
      title: "پشتیبانی",
      subtitle: "۶ ماه پشتیبانی رایگان",
      iconClass: "icon-chat"
    }
  ];

  return (
    <section className="service-items-section" dir="rtl">
      <div className="service-items-container">
        <div className="service-items-row">
          {services.map((service) => (
            <div key={service.id} className="service-items-col">
              <div className="service-item">
                <div className="service-icon-container">
                  <span className="service-icon">{service.icon}</span>
                </div>
                <div className="service-title">{service.title}</div>
                <div className="service-subtitle">{service.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceItems;