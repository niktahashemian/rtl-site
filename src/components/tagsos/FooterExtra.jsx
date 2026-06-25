import React from "react";
import '../../assets/css/style.css';

function FooterExtra() {
  return (
    <div className="footerExtra-row">
      {/* ---------- آمار فوتر ---------- */}
      <div className="col-lg-auto">
        <div className="footerExtra-statistics">
          <ul>
            <li>
              <b>8,032</b> محصول
            </li>
            <li>
              <b>305,440</b> کاربر ویژه
            </li>
            <li>
              <b>357,508</b> پرسش و پاسخ
            </li>
          </ul>
        </div>
      </div>

      {/* ---------- شبکه‌های اجتماعی ---------- */}
      <div className="footerExtra-col-lg">
        <div className="footerExtra-socials">
          <h6 className="title">با ما همراه باشید</h6>
          <ul>
            <li className="bale">
              <a
                href="https://ble.ir/rtltheme"
                target="_blank"
                rel="nofollow noopener"
              >
                <img
                  src="https://www.rtl-theme.com/wp-content/themes/rtl-theme/assets/images/bale.svg"
                  alt="بله"
                />
                <span>کانال بله</span>
              </a>
            </li>

            <li className="instagram">
              <a
                href="https://instagram.com/rtltheme"
                target="_blank"
                rel="nofollow noopener"
              >
                <i className="rip rip-b-instagram" />
              </a>
            </li>

            <li className="telegram">
              <a
                href="https://t.me/rtltheme"
                target="_blank"
                rel="nofollow noopener"
              >
                <i className="rip rip-l-paper-plane" />
              </a>
            </li>

            <li className="facebook">
              <a
                href="https://fb.com/rtltheme"
                target="_blank"
                rel="nofollow noopener"
              >
                <i className="rip rip-b-facebook-f" />
              </a>
            </li>

            <li className="twitter">
              <a
                href="https://twitter.com/rtltheme"
                target="_blank"
                rel="nofollow noopener"
              >
                <i className="rip rip-b-twitter" />
              </a>
            </li>

            <li className="linkedin">
              <a
                href="https://www.linkedin.com/company/rtltheme/"
                target="_blank"
                rel="nofollow noopener"
              >
                <i className="rip rip-b-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ---------- لوگوی نماد اعتماد الکترونیکی ---------- */}
      <div className="footerExtra-col-xl-4 footerExtra-col-lg-12">
        <div className="footerExtra-enamad">
          <div
            id="enamadLink"
            className="enamadLink"
            data-target="https://trustseal.enamad.ir/?id=264043&Code=ovJkkqknKiC5mVW9CdBU"
          >
            <img
              src="https://www.rtl-theme.com/wp-content/themes/rtl-theme/assets/images/enamad-logo.png"
              alt="نشان اعتماد"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default FooterExtra ;