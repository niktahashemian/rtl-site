
import { Link } from "react-router-dom";
import "../../assets/css/style.css";
import Header from "../home/SimpleHeader";
import ServiceItems from "./ServiceItems";
import FooterHeader from "./FooterHeader";
import FooterExtra from "./FooterExtra";
import TextParagraph from "./TextParagraph";

const Maine2 = () => (
  <section className="archive-section full-width">
    <Header />
    <div className="page-header">
    <div className="container">
      <nav className="breadcrumbs" id="breadcrumbs">
        <ol>
          <li>
            <a href="https://www.rtl-theme.com">راست چین</a>
            <i className="rip rip-s-angle-left"></i>
          </li>
          <li>
            <a href="https://www.rtl-theme.com/tag/sos/">
              افزونه‌های کاربردی در شرایط اضطراری
            </a>
          </li>
        </ol>
      </nav>

      <div className="title">
        <span className="span ">27</span>
        <p className="term-title">
          افزونه‌های کاربردی در شرایط اضطراری
        </p>
      </div>
    </div>
  </div>
    {/* ----------------- Header Filter ----------------- */}
    <header className="archive-header" id="archiveHeaderFilter">
      <div className="header-row">
        {/* فیلتر‑تب‌ها */}
        <div className="header-filters" id="archiveHeaderFilterChild1">
          <ul className="tabs archive-tabs">
            <li className="tab-item active" data-order="DESC" data-orderby="date">
              <a className="dynamic-link" href="https://www.rtl-theme.com/tag/sos/">
                جدیدترین
              </a>
            </li>
            <li className="tab-item" data-order="DESC" data-orderby="saleCount">
              <a className="dynamic-link" href="https://www.rtl-theme.com/tag/sos/">
                پرفروش‌ترین
              </a>
            </li>
            <li className="tab-item" data-order="DESC" data-orderby="rateAverage">
              <a className="dynamic-link" href="https://www.rtl-theme.com/tag/sos/">
                محبوب‌ترین
              </a>
            </li>
            <li className="tab-item" data-order="DESC" data-orderby="price">
              <a className="dynamic-link" href="https://www.rtl-theme.com/tag/sos/">
                گران‌ترین
              </a>
            </li>
            <li className="tab-item" data-order="ASC" data-orderby="price">
              <a className="dynamic-link" href="https://www.rtl-theme.com/tag/sos/">
                ارزان‌ترین
              </a>
            </li>
            <li className="tab-item" data-order="DESC" data-orderby="updateDate">
              <a className="dynamic-link" href="https://www.rtl-theme.com/tag/sos/">
                بروزترین
              </a>
            </li>
            <li className="tab-item" data-order="DESC" data-orderby="saleCountMonthly">
              <a className="dynamic-link" href="https://www.rtl-theme.com/tag/sos/">
                <i className="rip rip-l-fire icon-animation" />
                ترند‌ها
              </a>
            </li>
          </ul>
          <i className="sort-arrow rip rip-s-angle-down" />
        </div>

        {/* نمای‑سوییچ (grid / list) */}
        <div className="header-view-switch" id="archiveHeaderFilterChild2">
          <ul className="tabs archive-view">
            <li className="active" data-style="grid">
              <a className="dynamic-link" href="https://www.rtl-theme.com/tag/sos/">
                <i
                  className="rip rip-s-grid"
                  style={{ fontSize: "16px", transform: "translateY(3px)" }}
                />
              </a>
            </li>
            <li data-style="list">
              <a className="dynamic-link" href="https://www.rtl-theme.com/tag/sos/">
                <i className="rip rip-s-bars" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <section className="active-filters mb-4"><ul /></section>

    {/* ---------- لیست محصولات (همان‌چیز یا متفاوت) ---------- */}
    <section className="archive-product-contents">
      <div className="products-row">
        {/* کارت محصول نمونه – می‌توانید به‌صورت map یا ثابت اضافه کنید */}
        <article className="card card-product">
          <div className="card-header">
            <a href="https://www.rtl-theme.com/selfsufficient-wordpress-plugin/">
              <figure className="thumbnail">
                <img
                  src="https://media.rtlcdn.com/2026/03/445983423a505e5ff56078199861b9712cba99d1cf7800-590x300.jpg"
                  alt="خودکفا، افزونه افزایش سرعت با اینترنت ملی"
                />
              </figure>
            </a>
          </div>

          <div className="card-body">
            <h3 className="title">
              <a href="https://www.rtl-theme.com/selfsufficient-wordpress-plugin/">
                خودکفا، افزونه افزایش سرعت با اینترنت ملی
              </a>
            </h3>
            <div className="usage"><i className="rip rip-l-grid-2" /><span>افزونه بهینه سازی</span></div>
          </div>

          <div className="card-footer">
            <div className="product-details">
              <div className="detail-item rate"><span className="count">11</span><span className="title">فروش</span></div>
              <div className="detail-item rate"><span className="no-value">محصول<br/>جـدیــد</span></div>
              <div className="detail-item rate"><span className="count">-</span><span className="title">پشتیبانی</span></div>
            </div>

            <div className="rtl-price">
              <del className="regular">895,000</del>
              <span className="sale-percent">60%</span>
              <ins className="sale">358,000<span className="sym">تومان</span></ins>
            </div>
          </div>

          <div className="card-hover product-actions">
            <button className="btn btn-primary add-to-cart" data-id="305279">خرید و دانلود</button>
            <button className="preview btn" data-id="305279"><i className="rip rip-l-desktop" /> پیش نمایش</button>
          </div>
        </article>
        <article className="card card-product">
          <div className="card-header">
            <a href="https://www.rtl-theme.com/selfsufficient-wordpress-plugin/">
              <figure className="thumbnail">
                <img
                  src="https://media.rtlcdn.com/2026/03/445983423a505e5ff56078199861b9712cba99d1cf7800-590x300.jpg"
                  alt="خودکفا، افزونه افزایش سرعت با اینترنت ملی"
                />
              </figure>
            </a>
          </div>

          <div className="card-body">
            <h3 className="title">
              <a href="https://www.rtl-theme.com/selfsufficient-wordpress-plugin/">
                خودکفا، افزونه افزایش سرعت با اینترنت ملی
              </a>
            </h3>
            <div className="usage"><i className="rip rip-l-grid-2" /><span>افزونه بهینه سازی</span></div>
          </div>

          <div className="card-footer">
            <div className="product-details">
              <div className="detail-item rate"><span className="count">11</span><span className="title">فروش</span></div>
              <div className="detail-item rate"><span className="no-value">محصول<br/>جـدیــد</span></div>
              <div className="detail-item rate"><span className="count">-</span><span className="title">پشتیبانی</span></div>
            </div>

            <div className="rtl-price">
              <del className="regular">895,000</del>
              <span className="sale-percent">60%</span>
              <ins className="sale">358,000<span className="sym">تومان</span></ins>
            </div>
          </div>

          <div className="card-hover product-actions">
            <button className="btn btn-primary add-to-cart" data-id="305279">خرید و دانلود</button>
            <button className="preview btn" data-id="305279"><i className="rip rip-l-desktop" /> پیش نمایش</button>
          </div>
        </article>
        <article className="card card-product">
          <div className="card-header">
            <a href="https://www.rtl-theme.com/selfsufficient-wordpress-plugin/">
              <figure className="thumbnail">
                <img
                  src="https://media.rtlcdn.com/2026/03/445983423a505e5ff56078199861b9712cba99d1cf7800-590x300.jpg"
                  alt="خودکفا، افزونه افزایش سرعت با اینترنت ملی"
                />
              </figure>
            </a>
          </div>

          <div className="card-body">
            <h3 className="title">
              <a href="https://www.rtl-theme.com/selfsufficient-wordpress-plugin/">
                خودکفا، افزونه افزایش سرعت با اینترنت ملی
              </a>
            </h3>
            <div className="usage"><i className="rip rip-l-grid-2" /><span>افزونه بهینه سازی</span></div>
          </div>

          <div className="card-footer">
            <div className="product-details">
              <div className="detail-item rate"><span className="count">11</span><span className="title">فروش</span></div>
              <div className="detail-item rate"><span className="no-value">محصول<br/>جـدیــد</span></div>
              <div className="detail-item rate"><span className="count">-</span><span className="title">پشتیبانی</span></div>
            </div>

            <div className="rtl-price">
              <del className="regular">895,000</del>
              <span className="sale-percent">60%</span>
              <ins className="sale">358,000<span className="sym">تومان</span></ins>
            </div>
          </div>

          <div className="card-hover product-actions">
            <button className="btn btn-primary add-to-cart" data-id="305279">خرید و دانلود</button>
            <button className="preview btn" data-id="305279"><i className="rip rip-l-desktop" /> پیش نمایش</button>
          </div>
        </article>
        {/* … کارت‌های دیگر … */}
      </div>
    </section>
    <section className="archive-product-contents">
      <div className="products-row">
        {/* کارت محصول نمونه – می‌توانید به‌صورت map یا ثابت اضافه کنید */}
        <article className="card card-product">
          <div className="card-header">
            <a href="https://www.rtl-theme.com/selfsufficient-wordpress-plugin/">
              <figure className="thumbnail">
                <img
                  src="https://media.rtlcdn.com/2026/03/445983423a505e5ff56078199861b9712cba99d1cf7800-590x300.jpg"
                  alt="خودکفا، افزونه افزایش سرعت با اینترنت ملی"
                />
              </figure>
            </a>
          </div>

          <div className="card-body">
            <h3 className="title">
              <a href="https://www.rtl-theme.com/selfsufficient-wordpress-plugin/">
                خودکفا، افزونه افزایش سرعت با اینترنت ملی
              </a>
            </h3>
            <div className="usage"><i className="rip rip-l-grid-2" /><span>افزونه بهینه سازی</span></div>
          </div>

          <div className="card-footer">
            <div className="product-details">
              <div className="detail-item rate"><span className="count">11</span><span className="title">فروش</span></div>
              <div className="detail-item rate"><span className="no-value">محصول<br/>جـدیــد</span></div>
              <div className="detail-item rate"><span className="count">-</span><span className="title">پشتیبانی</span></div>
            </div>

            <div className="rtl-price">
              <del className="regular">895,000</del>
              <span className="sale-percent">60%</span>
              <ins className="sale">358,000<span className="sym">تومان</span></ins>
            </div>
          </div>

          <div className="card-hover product-actions">
            <button className="btn btn-primary add-to-cart" data-id="305279">خرید و دانلود</button>
            <button className="preview btn" data-id="305279"><i className="rip rip-l-desktop" /> پیش نمایش</button>
          </div>
        </article>
        <article className="card card-product">
          <div className="card-header">
            <a href="https://www.rtl-theme.com/selfsufficient-wordpress-plugin/">
              <figure className="thumbnail">
                <img
                  src="https://media.rtlcdn.com/2026/03/445983423a505e5ff56078199861b9712cba99d1cf7800-590x300.jpg"
                  alt="خودکفا، افزونه افزایش سرعت با اینترنت ملی"
                />
              </figure>
            </a>
          </div>

          <div className="card-body">
            <h3 className="title">
              <a href="https://www.rtl-theme.com/selfsufficient-wordpress-plugin/">
                خودکفا، افزونه افزایش سرعت با اینترنت ملی
              </a>
            </h3>
            <div className="usage"><i className="rip rip-l-grid-2" /><span>افزونه بهینه سازی</span></div>
          </div>

          <div className="card-footer">
            <div className="product-details">
              <div className="detail-item rate"><span className="count">11</span><span className="title">فروش</span></div>
              <div className="detail-item rate"><span className="no-value">محصول<br/>جـدیــد</span></div>
              <div className="detail-item rate"><span className="count">-</span><span className="title">پشتیبانی</span></div>
            </div>

            <div className="rtl-price">
              <del className="regular">895,000</del>
              <span className="sale-percent">60%</span>
              <ins className="sale">358,000<span className="sym">تومان</span></ins>
            </div>
          </div>

          <div className="card-hover product-actions">
            <button className="btn btn-primary add-to-cart" data-id="305279">خرید و دانلود</button>
            <button className="preview btn" data-id="305279"><i className="rip rip-l-desktop" /> پیش نمایش</button>
          </div>
        </article>
        <article className="card card-product">
          <div className="card-header">
            <a href="https://www.rtl-theme.com/selfsufficient-wordpress-plugin/">
              <figure className="thumbnail">
                <img
                  src="https://media.rtlcdn.com/2026/03/445983423a505e5ff56078199861b9712cba99d1cf7800-590x300.jpg"
                  alt="خودکفا، افزونه افزایش سرعت با اینترنت ملی"
                />
              </figure>
            </a>
          </div>

          <div className="card-body">
            <h3 className="title">
              <a href="https://www.rtl-theme.com/selfsufficient-wordpress-plugin/">
                خودکفا، افزونه افزایش سرعت با اینترنت ملی
              </a>
            </h3>
            <div className="usage"><i className="rip rip-l-grid-2" /><span>افزونه بهینه سازی</span></div>
          </div>

          <div className="card-footer">
            <div className="product-details">
              <div className="detail-item rate"><span className="count">11</span><span className="title">فروش</span></div>
              <div className="detail-item rate"><span className="no-value">محصول<br/>جـدیــد</span></div>
              <div className="detail-item rate"><span className="count">-</span><span className="title">پشتیبانی</span></div>
            </div>

            <div className="rtl-price">
              <del className="regular">895,000</del>
              <span className="sale-percent">60%</span>
              <ins className="sale">358,000<span className="sym">تومان</span></ins>
            </div>
          </div>

          <div className="card-hover product-actions">
            <button className="btn btn-primary add-to-cart" data-id="305279">خرید و دانلود</button>
            <button className="preview btn" data-id="305279"><i className="rip rip-l-desktop" /> پیش نمایش</button>
          </div>
        </article>
        {/* … کارت‌های دیگر … */}
      </div>
    </section>

    {/* ---------- Pagination (بازگشت به صفحهٔ ۱) ---------- */}
    <nav className="archive-pagination" role="navigation">
      <div className="nav-links">
        {/* صفحهٔ ۲ به‌عنوان فعال */}
        <span className="page-numbers current" aria-current="page" data-num="2">2</span>

        {/* لینک به صفحهٔ ۱ (Maine) */}
        <Link className="page-numbers" to="/tagsos" data-num="1">1</Link>

        {/* دکمهٔ قبلی – می‌توانید به URL واقعی یا خالی بگذارید */}
        <a className="prev page-numbers" href="https://www.rtl-theme.com/tag/sos/page/1/">
          <i className="rip rip-s-angle-right" />
        </a>
      </div>
    </nav>
    <ServiceItems />
    <FooterHeader />
    <FooterExtra />
    <TextParagraph />
  </section>
);

export default Maine2;
