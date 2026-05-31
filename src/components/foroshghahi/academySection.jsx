import React from 'react';
import '../../assets/css/style.css';

const AcademySection = () => {
    return (
        <div className="container-academySection">
            <div className="academy__texts">
                <div className="academy__title"> میخوای درآمد کسب کنی اما دانش کافی نداری؟ </div>
                <div className="academy__desc"> با راست چین آکادمی شروع کن! </div>
            </div>
            <div className="academy__content">
                <div className="row gy-4">
                    <div className="col-xxl-6 col-xl-6 col-12">
                        <div className="academy__card">
                            <div className="academy__cardHead">
                                <div className="academy__cardImage">
                                    <img src="https://content-marketing.rtlcdn.com/image/2026/01/563e3f32-0ed0-4f6a-9a89-0607440b3741.jpg" alt="دوره مسترکلاس وردپرس" />
                                </div>
                                <div className="academy__cardInfo">
                                    <div className="academy__cardText">
                                        <div className="academy__cardTitle"> دوره مسترکلاس وردپرس </div>
                                        <div className="academy__cardDesc"> برنامه‌نویسی قالب و افزونه وردپرس </div>
                                    </div>
                                    <div className="academy__cardDetail">
                                        <div className="academy__cardDetailBox">
                                            <div className="academy__cardDetailBoxText">
                                                <div className="academy__cardDetailBoxIcon">
                                                    <img src="https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/BecomeSeller/dist/Active/media/html/alfa-icon-two.svg" alt="Alfa Academy Icon" />
                                                </div>
                                                <div className="academy__cardDetailBoxTitle">رضایت دانشجویان از دوره</div>
                                            </div>
                                            <div className="academy__cardDetailBoxRate"> 92% </div>
                                        </div>
                                        <div className="academy__cardDetailBox">
                                            <div className="academy__cardDetailBoxText">
                                                <div className="academy__cardDetailIcon">
                                                    <img src="https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/BecomeSeller/dist/Active/media/html/alfa-icon-one.svg" alt="Alfa Academy Icon" />
                                                </div>
                                                <div className="academy__cardDetailBoxTitle">تعداد دانشجویان شرکت کننده</div>
                                            </div>
                                            <div className="academy__cardDetailBoxRate"> 1334 </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="academy__cardFooter">
                                    <div className="academy__cardFooterPrices">
                                        <div className="academy__cardFooterPricesSale">
                                            <div> 6,900,000 </div>
                                            <span> تومان </span>
                                        </div>
                                    </div>
                                    <div className="academy__cardButton">
                                        <a className="button button--green" href="https://academy.rtl-theme.com/course/become-wordpress-developer-php-javascript/"> مشاهده دوره </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-12">
                        <div className="academy__card">
                            <div className="academy__cardHead">
                                <div className="academy__cardImage">
                                    <img src="https://content-marketing.rtlcdn.com/image/2026/01/90de15c1-ed8c-4ff7-906c-9c19eba86dd8.jpg" alt="دوره وردپرس نینجا" />
                                </div>
                                <div className="academy__cardInfo">
                                    <div className="academy__cardText">
                                        <div className="academy__cardTitle"> دوره وردپرس نینجا </div>
                                        <div className="academy__cardDesc"> طراحی سایت وردپرس بدون برنامه نویسی </div>
                                    </div>
                                    <div className="academy__cardDetail">
                                        <div className="academy__cardDetailBox">
                                            <div className="academy__cardDetailBoxText">
                                                <div className="academy__cardDetailBoxIcon">
                                                    <img src="https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/BecomeSeller/dist/Active/media/html/alfa-icon-two.svg" alt="Alfa Academy Icon" />
                                                </div>
                                                <div className="academy__cardDetailBoxTitle">رضایت دانشجویان از دوره</div>
                                            </div>
                                            <div className="academy__cardDetailBoxRate"> 100% </div>
                                        </div>
                                        <div className="academy__cardDetailBox">
                                            <div className="academy__cardDetailBoxText">
                                                <div className="academy__cardDetailIcon">
                                                    <img src="https://www.rtl-theme.com/wp-content/themes/rtl-theme/events/BecomeSeller/dist/Active/media/html/alfa-icon-one.svg" alt="Alfa Academy Icon" />
                                                </div>
                                                <div className="academy__cardDetailBoxTitle">تعداد دانشجویان شرکت کننده</div>
                                            </div>
                                            <div className="academy__cardDetailBoxRate"> 1303 </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="academy__cardFooter">
                                    <div className="academy__cardFooterPrices">
                                        <div className="academy__cardFooterPricesSale">
                                            <div> 1,988,000 </div>
                                            <span> تومان </span>
                                        </div>
                                    </div>
                                    <div className="academy__cardButton">
                                        <a className="button button--green" href="https://academy.rtl-theme.com/course/build-wordpress-website/"> مشاهده دوره </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AcademySection;
