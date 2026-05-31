// src/components/FAQ/FAQ.jsx
import React, { useState } from "react";
import '../../assets/css/style.css';
import { faq } from "../../assets/js/faqData";

const Fag = () => {
  // اولین آیتم به‌صورت پیش‌فرض فعال
  const [activeId, setActiveId] = useState(faq[0].id);

  return (
    <section className="faq">
      {/* ------------------- سر بخش ------------------- */}
      <div className="faq__head">
        <h2 className="faq__head-title">
          سوالات متداول <span>راست چین پرو</span>
        </h2>
      </div>

      {/* ------------------- محتوای FAQ ------------------- */}
      <div className="faq__grid">
        {faq.map((item) => (
          <div
            key={item.id}
            className={`faq__header-item ${
              activeId === item.id ? "active" : ""
            }`}
            onClick={() => setActiveId(item.id)}
          >
            {/* عنوان سوال */}
            <div className="faq__header-title">{item.title}</div>

            {/* توضیح (در حالت فعال نمایش داده می‌شود) */}
            <div className="faq__content-desc">{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fag;
