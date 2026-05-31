import React from "react";
import '../../assets/css/style.css';

const socialLinks = [
  {
    id: 1,
    name: "facebook",
    url: "https://fb.com/rtltheme",
    iconOnly: true,
  },
  {
    id: 2,
    name: "aparat",
    url: "https://aparat.com/rtltheme",
    iconOnly: true,
  },
  {
    id: 3,
    name: "telegram",
    url: "https://t.me/rtltheme",
    text: "ورود به تلگرام",
  },
  {
    id: 4,
    name: "instagram",
    url: "https://instagram.com/rtltheme",
    text: "ورود به اینستاگرام",
  },
  {
    id: 5,
    name: "linkdin",
    url: "https://www.linkedin.com/company/rtltheme",
    text: "ورود به لینکدین",
  },
  {
    id: 6,
    name: "twitter",
    url: "https://twitter.com/rtltheme",
    iconOnly: true,
  },
  {
    id: 7,
    name: "youtube",
    url: "https://www.youtube.com/@rtl-theme6113",
    iconOnly: true,
  },
];

const FooterSocial = () => {
  return (
    <div className="container-footer">
      <ul className="footer__content">
        {socialLinks.map((item) => (
          <li
            key={item.id}
            className={item.text ? `footer__content-text ${item.name}` : ""}
          >
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.text && <span>{item.text}</span>}
              <span className={`footer__buttons-icon ${item.name}`} />
            </a>
          </li>
        ))}
      </ul>

      <div className="footer__text">راست چین، رهبر بازار وردپرس ایران</div>

      <div className="footer__link">
        <a
          href="https://www.rtl-theme.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.RTL-Theme.com
        </a>
      </div>
    </div>
  );
};

export default FooterSocial;
