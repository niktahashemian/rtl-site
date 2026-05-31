// PageHeader.jsx
import React from 'react';
import '../../assets/css/style.css';


const PageHeader = ({ onShowVersionModal }) => {
  // داده‌های مسیریابی (breadcrumb)
  const breadcrumbItems = [
    { label: 'راست چین', url: 'https://www.rtl-theme.com' },
    { label: 'افزونه وردپرس', url: 'https://www.rtl-theme.com/category/wordpress-plugin/' },
    { label: 'افزونه کاربردی', url: 'https://www.rtl-theme.com/category/wordpress-plugin/utilities-plugin/', active: true }
  ];

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            {/* بخش breadcrumb - سمت چپ */}
            <div className="page-header__breadcrumb">
              <nav className="breadcrumbs" id="breadcrumbs">
                <ol>
                  {breadcrumbItems.map((item, index) => (
                    <li key={index}>
                      <a 
                        href={item.url}
                        className={item.active ? 'active' : ''}
                      >
                        {item.label}
                      </a>
                      {index < breadcrumbItems.length - 1 && (
                        <i className="rip rip-s-angle-left"></i>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

            {/* عنوان محصول و نسخه - سمت راست */}
            <div className="page-header__top">
              <div className="product-title">
                <h1 className="title">
                  <a href="https://www.rtl-theme.com/rtl-smart-management/">
                    افزونه مدیریت هوشمند راست چین
                  </a>
                </h1>

                <span className="version">
                  <a 
                    href="javascript:void(0);" 
                    onClick={onShowVersionModal}
                  >
                    نسخه 2.8.2
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeader;