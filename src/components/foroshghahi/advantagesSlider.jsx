import '../../assets/css/style.css';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const cards = [
  {
    id: 1,
    title: "تسویه حساب آنی",
    desc: "تسویه حساب در کمتر از 2 ساعت",
    img: "https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/BecomeSeller/dist/Active/media/html/cart-circle-check.svg",
    imgHover: "https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/BecomeSeller/dist/Active/media/html/cart-circle-check-hover.svg"
  },
  {
    id: 2,
    title: "امنیت فروش بالا",
    desc: "تسویه حساب در کمتر از 2 ساعت",
    img: "https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/BecomeSeller/dist/Active/media/html/cart-circle-check.svg",
    imgHover: "https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/BecomeSeller/dist/Active/media/html/cart-circle-check-hover.svg"
  },
  {
    id: 3,
    title: "کسپ درامد بالا",
    desc: "تسویه حساب در کمتر از 2 ساعت",
    img: "https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/BecomeSeller/dist/Active/media/html/cart-circle-check.svg",
    imgHover: "https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/BecomeSeller/dist/Active/media/html/cart-circle-check-hover.svg"
  },
  {
    id: 4,
    title: "تسویه حساب آنی",
    desc: "تسویه حساب در کمتر از 2 ساعت",
    img: "https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/BecomeSeller/dist/Active/media/html/cart-circle-check.svg",
    imgHover: "https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/BecomeSeller/dist/Active/media/html/cart-circle-check-hover.svg"
  },
  {
    id: 4,
    title: "تسویه حساب آنی",
    desc: "تسویه حساب در کمتر از 2 ساعت",
    img: "https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/BecomeSeller/dist/Active/media/html/cart-circle-check.svg",
    imgHover: "https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/BecomeSeller/dist/Active/media/html/cart-circle-check-hover.svg"
  },
  // چند کارت دیگر اضافه کنید...
];

 function AdvantagesSlider() {
  return (
    <div style={{ direction: "rtl", padding: "20px" }}>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        grabCursor={true}
        style={{ padding: "10px" }}
      >
        {cards.map(card => (
          <SwiperSlide key={card.id}>
            <div className="advantages__cards">
              <div className="advantages__cardImage">
                <img
                  src={card.img}
                  alt={card.title}
                  className="advantages__cardImage--notHover"
                />
                <img
                  src={card.imgHover}
                  alt={card.title}
                  className="advantages__cardImage--hover"
                />
              </div>

              <div className="advantages__card">
                <div className="advantages__cardText">
                  <div className="advantages__cardTitle">{card.title}</div>
                  <div className="advantages__cardDesc">
                    {card.desc}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default AdvantagesSlider;