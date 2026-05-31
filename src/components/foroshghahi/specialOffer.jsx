import { useEffect, useState } from "react";
import '../../assets/css/style.css';

function SpecialOffer() {
    const offers = [
    {
      id: 1,
      icon: "https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/BecomeSeller/dist/Active/media/html/icon-card-5.png",
      title: "مشاوره رایگان نیترو",
      description: "شکل‌گیری ایده‌ها از طریق مشاورت فنی و ارائه محصول براساس فرآیند فروش"
    },
    {
      id: 2,
      icon: "https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/BecomeSeller/dist/Active/media/html/icon-card-2.png",
      title: "۱۰٪ کارمزد تشویقی نامحدود",
      description: "در صورت بالا رفتن میزان رضایت محصول از میانگین رضایت کل محصولات راست‌چین"
    },
    {
      id: 3,
      icon: "https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/BecomeSeller/dist/Active/media/html/icon-card-1.png",
      title: "۱۰٪ کارمزد کمتر",
      description: "کارمزد انتشار محصولات منتشر شده در بهار 1405، صرفاً ۱۰٪ خواهد بود"
    },
    {
      id: 4,
      icon: "https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/BecomeSeller/dist/Active/media/html/icon-card-6.png",
      title: "طراحی رایگان کاور و لندینگ پیج",
      description: "طراحی رایگان آیکون، کاور و لندینگ پیج برای دومین محصول منتشر شده در بهار 1405"
    },
    {
      id: 5,
      icon: "https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/BecomeSeller/dist/Active/media/html/icon-card-4.png",
      title: "سرویس رایگان ioncube 15",
      description: "امکان رمزگذاری نامحدود رایگان و محافظت قدرتمند از سورس‌کد محصولات"
    },
    {
      id: 6,
      icon: "https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/BecomeSeller/dist/Active/media/html/icon-card-2.png",
      title: "پکیج پروموت رایگان",
      description: "امکان استفاده از جایگاه‌های تبلیغاتی و انواع پروموشن به ارزش ۵۰ میلیون تومان"
    }
  ];

  const featuredOffer = {
    id: 7,
    icon: "https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/BecomeSeller/dist/Active/media/html/icon-card-7.png",
    title: "ضمانت فروش ۲ برابری",
    description: "تضمین فروش حداقل دو برابری محصول، نسبت به میانگین فروش ماهانه همان محصول در مارکت قبلی",
    image: "https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/BecomeSeller/dist/Active/media/html/specialOffer-card-2x.png"
  };
    const targetDate = new Date("2026-06-21T23:59:59").getTime();

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance <= 0) {
                clearInterval(timer);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((distance / (1000 * 60)) % 60);
            const seconds = Math.floor((distance / 1000) % 60);

            setTimeLeft({ days, hours, minutes, seconds });

        }, 1000);

        return () => clearInterval(timer);
    }, []);
    

    return (
        <div className='specialOffer'>
            <div className='container'>
                <div className='specialOffer-wrapper'>

                    <div className='specialOffer-wrapper__head'>

                        <div className='specialOffer-wrapper__head-right'>
                            <div className='specialOffer-wrapper__head-right__badge'>
                                <img src="https://www.rtl-theme.com/wp-content/themes/rtl-theme/assets/images/bahar-end-v2.png" alt="" />
                            </div>

                            <div className="specialOffer-wrapper__head-right__texts">
                                <div className="specialOffer-wrapper__head-right__texts-title">
                                    پیشنهاد ویژه <span>راست چین</span>
                                </div>
                                <div className="specialOffer-wrapper__head-right__texts-subTitle">
                                    برای توسعه دهندگان محصول
                                </div>
                            </div>
                        </div>

                        <div className="specialOffer-wrapper__head-time">
                            <div className="clock-boxes">

                                <div className="clock-boxes-info">
                                    <span className="clock-boxes-title">ثانیه</span>
                                    <span className="clock-boxes-number">{timeLeft.seconds}</span>
                                </div>

                                <span className="clock-boxes-points">:</span>

                                <div className="clock-boxes-info">
                                    <span className="clock-boxes-title">دقیقه</span>
                                    <span className="clock-boxes-number">{timeLeft.minutes}</span>
                                </div>

                                <span className="clock-boxes-points">:</span>

                                <div className="clock-boxes-info">
                                    <span className="clock-boxes-title">ساعت</span>
                                    <span className="clock-boxes-number">{timeLeft.hours}</span>
                                </div>

                                <span className="clock-boxes-points">:</span>

                                <div className="clock-boxes-info">
                                    <span className="clock-boxes-title">روز</span>
                                    <span className="clock-boxes-number">{timeLeft.days}</span>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                    <article className="offerCard offerCard--featured">
          <div className="featuredContent">
            <div className="featuredIcon">
              <img src={featuredOffer.icon} alt={featuredOffer.title} />
            </div>
            <h3 className="featuredTitle">{featuredOffer.title}</h3>
            <span className="featuredDivider"></span>
            <div className="featuredImage">
              <img src={featuredOffer.image} alt={featuredOffer.title} />
            </div>
            <p className="featuredDescription">{featuredOffer.description}</p>
          </div>
          <div className="featuredEffects">
            <div className="effectGlow effectGlow--1"></div>
            <div className="effectGlow effectGlow--2"></div>
          </div>
        </article>
        <div className="offerGrid">
          {offers.map((offer) => (
            <article key={offer.id} className="offerCard">
              <div className="offerIcon">
                <img src={offer.icon} alt={offer.title} />
              </div>
              <h3 className="offerTitle">{offer.title}</h3>
              <span className="offerDivider"></span>
              <p className="offerDescription">{offer.description}</p>
            </article>
          ))}
        </div>
                </div>
            </div>
        </div>
    );
}

export default SpecialOffer;