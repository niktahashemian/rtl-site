// src/components/Features/FeaturesSection.jsx
import React, { useState } from "react";
import '../../assets/css/style.css';
import { features } from "../../assets/js/featuresData";

const FeaturesSection = () => {
  // تب فعال (به‌صورت پیش‌فرض اولین تب)
  const [activeId, setActiveId] = useState(features[0].id);

  return (
    <section className="features__area">
      {/* ---------- تب‌ها ---------- */}
      <div className="features__tabs">
        {features.map((tab) => (
          <div
            key={tab.id}
            className={`features__tabs-item ${
              activeId === tab.id ? "active" : ""
            }`}
            onClick={() => setActiveId(tab.id)}
          >
            <div className="features__tabs-title">{tab.title}</div>
          </div>
        ))}
      </div>

      {/* ---------- محتوای تب‌ها ---------- */}
      <div className="features__box">
        {features.map((item) => (
          <div
            key={item.id}
            className={`features__content ${
              activeId === item.id ? "active" : ""
            }`}
          >
            {/* متن */}
            <div className="features__content-inner">
              <div className="features__content-title">{item.contentTitle}</div>
              <div className="features__content-desc">{item.description}</div>
              <div className="features__content-action">
                <a className="button button--large button--green" href="#Plans">
                  خرید اشتراک
                </a>
              </div>
            </div>

            {/* تصویر */}
            <div className="features__content-banner">
              <img src={item.img} alt="features" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
