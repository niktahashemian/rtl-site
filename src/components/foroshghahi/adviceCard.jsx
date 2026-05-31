import React from "react";

const AdviceCard = () => {
    return (
        <div>
            <div className="advice__card">
                <div className="advice__cardHead">
                    <div className="advice__cardIcon">
                        <img
                            src="https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/BecomeSeller/dist/Active/media/html/gear.svg"
                            alt="Gear"
                        />
                    </div>
                    <div className="advice__cardTitle">
                        یافتن محصول متناسب با نیاز بازار
                    </div>
                </div>

                <div className="advice__cardDesc">
                    با بررسی نیازهای بازار، شانس موفقیت در فروشتون رو افزایش بدید!
                </div>
            </div>
            <div className="advice__card">
                <div className="advice__cardHead">
                    <div className="advice__cardIcon">
                        <img
                            src="https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/BecomeSeller/dist/Active/media/html/gear.svg"
                            alt="Gear"
                        />
                    </div>
                    <div className="advice__cardTitle">
                        استراتژی ارائه محصول
                    </div>
                </div>

                <div className="advice__cardDesc">
                مسیر ارائه محصولتون رو مشخص کنید و اولین قدم‌ها رو توی مسیر کسب درآمد بردارید.
                </div>
            </div>
            
            <div className="advice__card">
                <div className="advice__cardHead">
                    <div className="advice__cardIcon">
                        <img
                            src="https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/BecomeSeller/dist/Active/media/html/gear.svg"
                            alt="Gear"
                        />
                    </div>
                    <div className="advice__cardTitle">
                        راهکارهای افزایش فروش
                    </div>
                </div>

                <div className="advice__cardDesc">
                    با کسب تجربه از مشاوران با تجربه راست چین، فروشتون رو افزایش بدید.
                </div>
            </div>
        </div>
    );
};

export default AdviceCard;
