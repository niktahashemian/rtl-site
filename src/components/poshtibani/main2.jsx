import React from 'react';
import '../../assets/css/style.css';

const Maine2 = () => {
  const services = [
    {
      id: 1,
      icon: "⭐",
      title: "انتخاب سرویس",
      subtitle: "با توجه به نیازها و پروژه خود، سرویس متناسب را انتخاب نمایید.",
      iconClass: "icon-org"
    },
    {
      id: 2,
      icon: "📦",
      title: "ارسال جزئیات",
      subtitle: "جزئیات، مستندات و اطلاعات خواسته شده را برای ما ارسال نمایید.",
      iconClass: "icon-box"
    },
    {
      id: 3,
      icon: "📖",
      title: "کنترل و پذیرش",
      subtitle: "پس از بررسی اطلاعات، در صورت داشتن ظرفیت، پروژه پذیرفته می‌شود.",
      iconClass: "icon-mag"
    },
    {
      id: 4,
      icon: "💰",
      title: "انجام پروژه",
      subtitle: "پروژه‌ی پذیرش شده وارد مرحله طراحی و پیاده سازی خواهد شد.",
      iconClass: "icon-wallet"
    },
    {
      id: 5,
      icon: "💬",
      title: "تأیید کیفیت و تحویل",
      subtitle: "پس از بررسی کیفیت انجام پروژه توسط کارشناسان، نتیجه تحویل خواهد شد.",
      iconClass: "icon-chat"
    }
  ];

  return (
    <section className="service" dir="rtl">
      <div className="service-container">
        <div className="service-row">
          {services.map((service) => (
            <div key={service.id} className="service-col">
              <div className="service-Item">
                <div className="service-Icon-container">
                  <span className="service-Icon">{service.icon}</span>
                </div>
                <div className="service-Title">{service.title}</div>
                <div className="service-Subtitle">{service.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Maine2;



