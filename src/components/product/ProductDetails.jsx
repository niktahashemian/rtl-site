import React from 'react';
import '../../assets/css/style.css';

const ProductDetails = () => {
    return (
        <section className="widgets all-details-desktop purchase-box" id="all-details-desktop">

            <div className="product-grid-details">
                <div className="detail-item sale">
                    <span className="count">158</span>
                    <span className="title">فروش</span>
                </div>
                <div className="detail-item rate">
                    <div className="detail-item__tooltip">
                        <span className="rateUserRate">از 11 رأی</span>
                    </div>
                    <span className="count">94%</span>
                    <span className="title">رضایت</span>
                </div>

                <div className="product-add-to-card__price d-flex align-items-center justify-content-between">
                    <div className="price">
                        <div className="price-top">
                            <del className="regular">525,000</del>
                            <span className="percent">60%</span>
                        </div>
                        <ins className="sale">
                            <span className="number">210,000</span>
                            <span className="sym">تومان</span>
                        </ins>
                    </div>
                </div>
            </div>

            <ul className="product-listed-features">
                <li className="product-listed-features__item">
                    <div className="product-listed-features__item-icon">
                        <i className="rip rip-s-check"></i>
                    </div>
                    <div className="product-listed-features__item-text">دسترسی مادام‌العمر و آپدیت رایگان</div>
                </li>
                <li className="product-listed-features__item">
                    <div className="product-listed-features__item-icon">
                        <i className="rip rip-s-check"></i>
                    </div>
                    <div className="product-listed-features__item-text">ضمانت بازگشت 6 ماهه وجه</div>
                    <span className="help help-extended-support" data-toggle="tooltip" data-placement="bottom" data-original-title="در صورت نقص محصول و یا عدم پشتیبانی">
                        <i className="rip rip-l-circle-question"></i>
                    </span>
                </li>
                <li className="product-listed-features__item">
                    <div className="product-listed-features__item-icon">
                        <i className="rip rip-s-check"></i>
                    </div>
                    <div className="product-listed-features__item-text">6 ماه پشتیبانی رایگان حرفه‌ای</div>
                </li>
            </ul>

            <div className="product-ribbons">
                <ul>
                    <li data-toggle="tooltip" data-placement="bottom" title="" style={{ backgroundColor: 'rgba(138, 144, 151, 0.25)' }} data-original-title="محصول ایرانی">
                        <i className="rip rip-iran-s" style={{ color: '#8a9097' }}></i>
                    </li>
                    <li data-toggle="tooltip" data-placement="bottom" title="" style={{ backgroundColor: 'rgba(254, 139, 126, 0.25)' }} data-original-title="محصول ویژه">
                        <i className="rip rip-s-medal" style={{ color: '#fe8b7e' }}></i>
                    </li>
                    <li data-toggle="tooltip" data-placement="bottom" title="" style={{ backgroundColor: 'rgba(251, 203, 101, 0.25)' }} data-original-title="نصب آسان">
                        <i className="rip rip-s-box-open" style={{ color: '#fbcb65' }}></i>
                    </li>
                    <li data-toggle="tooltip" data-placement="bottom" title="" style={{ backgroundColor: 'rgba(137, 176, 250, 0.25)' }} data-original-title="بروزرسانی خودکار">
                        <i className="rip rip-s-arrows-repeat" style={{ color: '#89b0fa' }}></i>
                    </li>
                    <li data-toggle="tooltip" data-placement="bottom" title="" style={{ backgroundColor: 'rgba(158, 150, 220, 0.25)' }} data-original-title="دارای لایسنس">
                        <i className="rip rip-s-shield" style={{ color: '#9e96dc' }}></i>
                    </li>
                    <li data-toggle="tooltip" data-placement="bottom" title="" style={{ backgroundColor: 'rgba(129, 215, 66, 0.25)' }} data-original-title="اورجینال">
                        <i className="rip rip-s-badge-check" style={{ color: '#81d742' }}></i>
                    </li>
                    <li data-toggle="tooltip" data-placement="bottom" title="" style={{ backgroundColor: 'rgba(52, 205, 200, 0.25)' }} data-original-title="دارای آموزش">
                        <i className="rip rip-s-student-hat" style={{ color: '#34cdc8' }}></i>
                    </li>
                </ul>
            </div>

            <div className="product-add-to-card">
                <div className="box-footer">
                    <div className="customize-services addons">
                        <ul className="list"></ul>
                    </div>
                    <div className="add-to-cart-wrapper">
                        <button className="btn btn-primary btn-lg intro-product-add-to-cart" data-id="305633">
                            <span className="prepend-icon">
                                <i className="rip rip-s-basket-shopping"></i>
                            </span>
                            افزودن به سبد خرید
                        </button>
                        <button data-type="ProductPreview" data-target="https://rtlr.ir/305633" data-id="305633" className="btn product-demo">
                            <span className="prepend-icon">
                                <i className="rip rip-s-desktop"></i>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="product-intro__ai">
                <a href="https://www.rtl-theme.com/rtl-ai/" target="_blank" rel="noopener noreferrer">
                    دستیار <img src="https://www.rtl-theme.com/wp-content/themes/rtl-theme/assets/images/stars-green.png" width="24" height="24" alt="stars" />
                </a> AI راست‌چین فقط با اشتراک پرو!
                <a href="https://www.rtl-theme.com/pro/" target="_blank" rel="noopener noreferrer" className="badge">Pro</a>
            </div>
        </section>
    );
};

export default ProductDetails;
