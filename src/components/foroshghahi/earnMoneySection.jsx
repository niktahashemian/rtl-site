import React from 'react';
import '../../assets/css/style.css';

const EarnMoneySection = () => {
  return (
    <section className="earnMoney">
      <div className="container">
        <div className="earnMoney__header">
          <h2 className="earnMoney__title">روش‌های کسب درآمد</h2>
          <p className="earnMoney__desc">
            در راست چین به دو روش می‌توانید کسب درآمد کنید
          </p>
        </div>

        <div className="earnMoney__content">
          <div className="row gy-4">
            {/* کارت ۱: طراحی محصولات ایرانی */}
            <div className="col-lg-6 col-md-6 col-xl-6 col-xxl-6 col-12">
              <div className="earnMoney__card earnMoney__card--iran">
                <div className="earnMoney__cardIcon earnMoney__cardIcon--iran">
                  <img 
                    src="https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/BecomeSeller/dist/Active/media/html/iran.png" 
                    alt="ایران" 
                  />
                </div>
                <div className="earnMoney__cardText">
                  <h3 className="earnMoney__cardTitle">طراحی محصولات ایرانی</h3>
                  <p className="earnMoney__cardDesc">
                    محصولات اختصاصی ایرانی خلق کنید و درآمد کسب کنید.
                  </p>
                </div>
              </div>
            </div>

            {/* کارت ۲: فارسی‌سازی محصولات اورجینال */}
            <div className="col-lg-6 col-md-6 col-xl-6 col-xxl-6 col-12">
              <div className="earnMoney__card earnMoney__card--persianization">
                <div className="earnMoney__cardIcon">
                  <img 
                    src="https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/BecomeSeller/dist/Active/media/html/ok.png" 
                    alt="تیک سبز" 
                  />
                </div>
                <div className="earnMoney__cardText">
                  <h3 className="earnMoney__cardTitle">فارسی‌سازی محصولات اورجینال</h3>
                  <p className="earnMoney__cardDesc">
                    با فارسی‌سازی و انتشار محصولات اورجینال درآمد کسب کنید.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarnMoneySection;
