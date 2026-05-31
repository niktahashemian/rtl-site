import React from 'react';
import '../../assets/css/style.css';

const PlanCard = ({ plan }) => {
  return (
    <div className="plans__card">
      <div className="plans__card-title">{plan.title}</div>
      {plan.badge && <div className="plans__card-badge">{plan.badge}</div>}
      <div className="plans__card-price">
        <div className="plans__card-price__original">
          <div className="plans__card-price__original-value">{plan.originalPrice}</div>
          <div className="plans__card-price__original-percent">{plan.discountPercent}</div>
        </div>
        <div className="plans__card-price__sale">
          <div className="plans__card-price__sale-value">{plan.salePrice}</div>
          <span className="plans__card-price__sale-sym">تومان</span>
        </div>
      </div>
      <div className="plans__card-features">
        <div className="plans__card-line"></div>
        {plan.features.map((feature, index) => (
          <div key={index} className="plans__card-features-item">
            <img src={feature.icon} alt="icon" />
            <div className="plans__card-features-item__text">
              <span>{feature.value}</span>
            </div>
            {feature.subItems && (
              <div className="plans__card-features-item__sub">
                {feature.subItems.map((subItem, subIndex) => (
                  <div key={subIndex} className="plans__card-features-item__sub-item">
                    <img src={subItem.icon} alt="icon" />
                    <span>{subItem.text}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="plans__card-line"></div>
          </div>
        ))}
      </div>
      <a href="javascript:void(0);" className="plans__card-btn Add-To-Invoice" data-index={plan.index}>سفارش پلن</a>
    </div>
  );
};

const  PlansSection = () => {
  const plansData = [
    {
      title: 'اشتراک 1 ماهه',
      originalPrice: 210000,
      discountPercent: '29%',
      salePrice: 149000,
      index: 1,
      features: [
        {
          value: '7,000 اعتبار راست‌چین AI',
          icon: 'https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/Pro/dist/Active/media/html/tick-square.png',
        },
        {
          subItems: [
            { icon: 'https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/Pro/dist/Active/media/html/succes-icon.png', text: 'تغییر محتوای متنی کل صفحه' },
            { icon: 'https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/Pro/dist/Active/media/html/succes-icon.png', text: 'تولید متن و تصویر' },
            { icon: 'https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/Pro/dist/Active/media/html/succes-icon.png', text: 'قابل استفاده در بی نهایت سایت' },
          ],
        },
        {
          value: '100 هزار تومان تخفیف به تعداد نامحدود',
          icon: 'https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/Pro/dist/Active/media/html/tick-square.png',
        },
        {
          value: 'دسترسی به 5 سایت آماده',
          icon: 'https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/Pro/dist/Active/media/html/tick-square.png',
        },
        {
          value: 'دانلود رایگان 10 تصویر پریمیوم از Freepik',
          icon: 'https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/Pro/dist/Active/media/html/tick-square.png',
        },
      ],
    },
    {
      title: 'اشتراک 3 ماهه',
      badge: 'پیشنهادی',
      originalPrice: 630000,
      discountPercent: '68%',
      salePrice: 199000,
      index: 2,
       features: [
        {
          value: '7,000 اعتبار راست‌چین AI',
          icon: 'https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/Pro/dist/Active/media/html/tick-square.png',
        },
        {
          subItems: [
            { icon: 'https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/Pro/dist/Active/media/html/succes-icon.png', text: 'تغییر محتوای متنی کل صفحه' },
            { icon: 'https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/Pro/dist/Active/media/html/succes-icon.png', text: 'تولید متن و تصویر' },
            { icon: 'https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/Pro/dist/Active/media/html/succes-icon.png', text: 'قابل استفاده در بی نهایت سایت' },
          ],
        },
        {
          value: '100 هزار تومان تخفیف به تعداد نامحدود',
          icon: 'https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/Pro/dist/Active/media/html/tick-square.png',
        },
        {
          value: 'دسترسی به 5 سایت آماده',
          icon: 'https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/Pro/dist/Active/media/html/tick-square.png',
        },
        {
          value: 'دانلود رایگان 10 تصویر پریمیوم از Freepik',
          icon: 'https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/Pro/dist/Active/media/html/tick-square.png',
        },
      ],
    },
    {
      title: 'اشتراک 6 ماهه',
      originalPrice: 1260000,
      discountPercent: '60%',
      salePrice: 499000,
      index: 3,
       features: [
        {
          value: '7,000 اعتبار راست‌چین AI',
          icon: 'https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/Pro/dist/Active/media/html/tick-square.png',
        },
        {
          subItems: [
            { icon: 'https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/Pro/dist/Active/media/html/succes-icon.png', text: 'تغییر محتوای متنی کل صفحه' },
            { icon: 'https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/Pro/dist/Active/media/html/succes-icon.png', text: 'تولید متن و تصویر' },
            { icon: 'https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/Pro/dist/Active/media/html/succes-icon.png', text: 'قابل استفاده در بی نهایت سایت' },
          ],
        },
        {
          value: '100 هزار تومان تخفیف به تعداد نامحدود',
          icon: 'https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/Pro/dist/Active/media/html/tick-square.png',
        },
        {
          value: 'دسترسی به 5 سایت آماده',
          icon: 'https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/Pro/dist/Active/media/html/tick-square.png',
        },
        {
          value: 'دانلود رایگان 10 تصویر پریمیوم از Freepik',
          icon: 'https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/Pro/dist/Active/media/html/tick-square.png',
        },
      ],
    },
  ];

  return (
    <div className='pcard'>
      {plansData.map((plan) => (
        <PlanCard key={plan.title} plan={plan} />
      ))}
    </div>
  );
};

export default PlansSection;
