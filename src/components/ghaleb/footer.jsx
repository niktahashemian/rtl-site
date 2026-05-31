// src/components/Footer/Footer.jsx
import React, { useState } from "react";
import '../../assets/css/style.css';
import { footerLinks } from "../../assets/js/footerData";

const Footer = () => {
  const [activeId, setActiveId] = useState(null);   // اگر نیازی به حالت active ندارید می‌توانید حذف کنید

  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__list">
          {footerLinks.map((item) => (
            <li key={item.id} className="footer__item">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`footer__link ${
                  activeId === item.id ? "footer__link--active" : ""
                }`}
                onClick={() => setActiveId(item.id)}
              >
                {/* آیکون (کلاس مخصوص هر شبکه) */}
                <span className={`footer__icon ${item.icon}`}></span>

                {/* متن (اختیاری – فقط برای شبکه‌هایی که متن دارند) */}
                {["telegram", "instagram", "linkdin"].includes(item.icon) && (
                  <span className="footer__text">{item.title}</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
