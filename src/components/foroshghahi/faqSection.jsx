import React, { useState } from "react";
import '../../assets/css/style.css';

const faqData = [
  {
    id: 1,
    question: "تضمین فروش 2 برابری به چه معناست؟",
    answer:
      "راست‌چین به طراحانی که محصولات خود را تا پایان سال 1404 به این مارکت منتقل کنند، تضمین فروش حداقل دو برابری در ماه اول فروش نسبت به میانگین فروش ماهانه آن محصولات در مارکت قبلی ارائه خواهد داد. اگر در ماه اول فروش محصول به حداقل دو برابر نرسد، تفاوت مبلغ فروش تا میزان اعلام‌شده توسط راست‌چین پرداخت می‌شود.",
  },
  {
    id: 2,
    question: "10% کارمزد کمتر برای چه محصولاتی است؟",
    answer:
      "در حالت عادی، کارمزد انتشار محصولات ایرانی 20 درصد است؛ ولی اگر توسعه‌دهنده محصولش را تا پایان بهار 1405 منتشر کند، فقط 10 درصد کارمزد پرداخت می‌کند.",
  },
  {
    id: 3,
    question: "شرایط بهره‌مندی از 10% کارمزد تشویقی نامحدود چیست؟",
    answer:
      "اگر محصول شما میزان رضایت کاربران بالاتری نسبت به میانگین کل محصولات داشته باشد، از 10% کارمزد تشویقی به‌صورت نامحدود بهره‌مند خواهید شد.",
  },
  {
    id: 4,
    question: "خدمات نیترو شامل چه مواردی می‌شود؟",
    answer:
      "نیترو راست‌چین یک سرویس مشاوره و منتورینگ فروش است که با تحلیل بازار، بهبود فنی محصولات و آموزش ارائه بهتر، به فروشندگان کمک می‌کند محصولات پرفروش‌تری داشته باشند.",
  },
  {
    id: 5,
    question: "تا چند فایل می‌توانم با سرویس ioncube 15 کدگذاری کنم؟",
    answer:
      "کدگذاری محصولات با سرویس ioncube 15 راست‌چین بدون محدودیت و کاملاً رایگان برای توسعه‌دهندگان انجام می‌شود.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq__container faq__container--sm">
      <div className="row">
        <div className="col-lg-12">
          <div className="faq__header">
            {faqData.map((faq, index) => (
              <div
                key={faq.id}
                className={`faq__header-item ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq__header-title">{faq.question}</div>
                {activeIndex === index && (
                  <div className="faq__content-desc">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
