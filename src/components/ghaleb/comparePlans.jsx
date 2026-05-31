// src/components/ComparePlans/ComparePlans.jsx
import React from "react";
import '../../assets/css/style.css';
import { comparePlans } from "../../assets/js/comparePlans";
/* مسیرهای ثابت برای آیکون‌ها (می‌توانید به‌صورت import هم باشند) */
const ICONS = {
  tick: "https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/Pro/dist/Active/media/html/check-tick.png",
  close: "https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/Pro/dist/Active/media/html/check-close.png",
  success: "https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/Pro/dist/Active/media/html/succes-green.png",
};

const ComparePlans = () => {
  return (
    <section className="compare-plans" id="ComparisonPlans">
      <div className="container">
        <div className="compare-plans__wrapper">

          {/* ---------- جدول مقایسه ---------- */}
          <div className="compare-plans__table">
            <div className="compare-plans__table-content">

              {/* سرجدول */}
              <div className="compare-plans__table-head">
                <div className="compare-plans__table-head__text">پلن استاندارد</div>
                <div className="compare-plans__table-head__text">پلن پرو</div>
              </div>

              {/* ردیف‌ها */}
              <div className="compare-plans__table-items">
                {comparePlans.map((item, idx) => (
                  <div
                    key={idx}
                    className={`compare-plans__table-item ${
                      item.subItems ? "compare-plans__table-item--hasChaild" : ""
                    }`}
                  >
                    {/* ردیف اصلی */}
                    <div className="compare-plans__table-item-wrapper">
                      <div className="compare-plans__table-item__title">
                        {item.title}
                      </div>
                      <div className="compare-plans__table-item__icon">
                        <img src={ICONS[item.standard]} alt={item.standard} />
                      </div>
                      <div className="compare-plans__table-item__icon">
                        <img src={ICONS[item.pro]} alt={item.pro} />
                      </div>
                    </div>

                    {/* زیرمجموعه‌ها (اگر وجود داشته باشد) */}
                    {item.subItems &&
                      item.subItems.map((sub, sIdx) => (
                        <div
                          key={sIdx}
                          className="compare-plans__table-item__sub"
                        >
                          <div className="compare-plans__table-item__sub-wrapper">
                            <div className="compare-plans__table-item__sub-icon">
                              <img src={ICONS.success} alt="success" />
                            </div>
                            <span className="compare-plans__table-item__sub-text js-marquee">
                              <span className="compare-plans__table-item__sub-text-inner">
                                {sub.text}
                              </span>
                            </span>
                          </div>

                          <div className="compare-plans__table-item__icon">
                            <img src={ICONS[sub.standard]} alt={sub.standard} />
                          </div>
                          <div className="compare-plans__table-item__icon">
                            <img src={ICONS[sub.pro]} alt={sub.pro} />
                          </div>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ---------- متن و تصویر سمت راست ---------- */}
          <div className="compare-plans__content">
            <div className="compare-plans__content-head">
              <div className="compare-plans__content-head__text">
                عادی یا استاندارد؟
              </div>
              <div className="compare-plans__content-head__title">
                مقایسه پلن ها
              </div>
              <div className="compare-plans__content-head__desc">
                <span> راست چین پرو؛</span> پلن پیشرفته پلتفرم راست‌چین
              </div>
            </div>

            <div className="compare-plans__content-img">
              <img
                className="compare-plans__content-img__lg"
                src="https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/Pro/dist/Active/media/html/comparison-plans-img.png"
                alt="compare"
              />
              <img
                className="compare-plans__content-img__sm"
                src="https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/Pro/dist/Active/media/html/comparison-plans-img-sm.png"
                alt="compare"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ComparePlans;
