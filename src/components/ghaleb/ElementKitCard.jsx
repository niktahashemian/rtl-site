// src/components/ElementKitCards/ElementKitCard.jsx
import React from "react";

const ElementKitCard = ({ kit }) => {
  return (
    <article className="elementKitCard">
      {/* تصویر */}
      <div className="elementKitCard__imgWrapper">
        <div className="elementKitCard__img">
          <img src={kit.img} alt="element-kit" />
        </div>
      </div>

      {/* بدنه کارت */}
      <div className="elementKitCard__body">
        {/* دسته (PRO / FREE …) */}
        <div className="elementKitCard__category">{kit.category}</div>

        {/* عنوان + لینک */}
        <a href={kit.link} className="elementKitCard__title">
          {kit.title}
        </a>

        {/* کاربرد / دسته‌بندی */}
        <div className="elementKitCard__usage">
          <img
            src="https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/Pro/dist/Active/media/html/icon-grid.png"
            alt="grid"
          />
          <span>{kit.usage}</span>
        </div>

        {/* بخش پایین کارت */}
        <div className="elementKitCard__bottom">
          {/* نویسنده / ناشر */}
          <div className="elementKitCard__bottom-author">
            <img
              className="elementKitCard__bottom-authorLogo"
              src={kit.author.logo}
              alt="logo"
            />
            <span className="elementKitCard__bottom-authorName">
              {kit.author.name}
            </span>
          </div>

          {/* دکمه «مشاهده و دانلود» (قالب ساده) */}
          <div className="elementKitCard__bottom-downloads">
            <a href={kit.link} className="btn">
              مشاهده و دانلود
            </a>
          </div>

          {/* دکمهٔ اصلی (با رنگ اصلی) */}
          <div className="elementKitCard__bottom-active">
            <a href={kit.link} className="btn btn-primary">
              مشاهده و دانلود
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ElementKitCard;
