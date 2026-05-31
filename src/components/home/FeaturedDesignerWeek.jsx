import React from 'react';
import './FeaturedDesignerWeek.css'; // ایمپورت فایل استایل

const FeaturedDesignerWeek = () => {
  const designer = {
    id: 1,
    name: "تمووا | Themova",
    username: "@codecanionbartar",
    level: "حرفه ای",
    avatar: "https://media.rtlcdn.com/2025/12/26b523269f4609607f709759108c8dc796349b0d69676c-160x160.jpg",
    sales: "594",
    satisfaction: "88%",
    link: "https://www.rtl-theme.com/author/codecanionbartar/"
  };

  const products = [
    {
      id: 301916,
      title: "آتیکو سلر، افزونه دستیار فروش",
      image: "https://media.rtlcdn.com/2025/12/ade613f15fa8e66666819ca79ccb77279673655423b584-337x171.jpg",
      category: "افزونه دستیار فروش",
      sales: "8",
      satisfaction: "100%",
      support: "A+",
      price: "798,000",
      link: "https://www.rtl-theme.com/atikoseller-wordpress-plugin/",
      previewLink: "https://rtlr.ir/301916"
    },
    {
      id: 250725,
      title: "افزونه لاگین ور، افزونه مدیریت ورود و ثبت نام",
      image: "https://media.rtlcdn.com/2025/12/001ec4f4f7b060cf8b241084c367768173dc3f97504459-337x171.jpg",
      category: "قابلیت ورود از طریق اثر انگشت، از طریق گوگل، از طریق رمز عبور و پیامک",
      sales: "531",
      satisfaction: "84%",
      support: "A+",
      price: "748,000",
      link: "https://www.rtl-theme.com/login-wear-wordpress-plugin/",
      previewLink: "https://rtlr.ir/250725"
    },
    {
      id: 256855,
      title: "قالب HTML آموزشی منتورینگ، Mentoring",
      image: "https://media.rtlcdn.com/2023/04/c3162450062c61d8443092e06311b304664718cfc1196-337x171.jpg",
      category: "قالب آموزشی HTML",
      sales: "32",
      satisfaction: "100%",
      support: "A+",
      price: "598,000",
      link: "https://www.rtl-theme.com/mentoring-html-template/",
      previewLink: "https://rtlr.ir/256855"
    }
  ];

  const getSupportClass = (support) => {
    if (support === 'A+') return 'featured-product-support-Aplus';
    if (support === 'A') return 'featured-product-support-A';
    return 'featured-product-support-B';
  };

  return (
    <section className="featured-designer-section" dir="rtl">
      <div className="featured-designer-container">
        {/* هدر */}
        <header className="featured-designer-header">
          <div className="featured-designer-header-content">
            <div className="featured-designer-icon-container">
              <img 
                src="//files.rtl-theme.com/attachments/2022/06/ceef6db346a7515939015b4936618426967efe5c400179.svg" 
                alt="ICON"
                className="featured-designer-icon"
              />
            </div>
            <h3 className="featured-designer-title">طراح برگزیده هفته</h3>
          </div>
        </header>

        {/* ردیف اصلی */}
        <div className="featured-designer-row">
          {/* کارت طراح */}
          <div className="featured-designer-col">
            <article className="designer-card">
              <div className="designer-header">
                <div className="designer-avatar-container">
                  <img 
                    src={designer.avatar} 
                    alt={designer.name}
                    className="designer-avatar"
                  />
                </div>
                <div>
                  <span className="designer-name">{designer.name}</span>
                  <div className="designer-level-container">
                    <span className="designer-level-badge">
                      <i className="designer-check-icon">✓</i>
                      {designer.level}
                    </span>
                  </div>
                  <h6 className="designer-username">{designer.username}</h6>
                </div>
              </div>

              <div className="designer-footer">
                <div className="designer-stat-item">
                  <div className="designer-stat-value orange">{designer.sales}</div>
                  <div className="designer-stat-text">فروش</div>
                </div>
                <div className="designer-stat-item">
                  <div className="designer-stat-value green">{designer.satisfaction}</div>
                  <div className="designer-stat-text">رضایت</div>
                </div>
              </div>

              <div className="designer-view-all-container">
                <a 
                  href={designer.link}
                  className="designer-view-all-button"
                >
                  همه محصولات
                </a>
              </div>
            </article>
          </div>

          {/* محصولات */}
          {products.map((product) => (
            <div key={product.id} className="featured-product-col">
              <article className="featured-product-card">
                {/* تصویر */}
                <div className="featured-product-image-container">
                  <a href={product.link} target="_blank" rel="noopener noreferrer">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="featured-product-image"
                      loading="lazy"
                    />
                  </a>
                </div>

                {/* محتوا */}
                <div className="featured-product-body">
                  <h4 className="featured-product-title">
                    <a 
                      href={product.link} 
                      className="featured-product-link"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {product.title}
                    </a>
                  </h4>

                  <div className="featured-product-category">
                    {product.category}
                  </div>

                  {/* آمار */}
                  <div className="featured-product-stats">
                    <div className="featured-product-stats-group">
                      <div className="featured-product-stat-item">
                        <div className="featured-product-stat-value">{product.sales}</div>
                        <div className="featured-product-stat-label">فروش</div>
                      </div>
                      <div className="featured-product-stat-item">
                        <div className="featured-product-stat-value">{product.satisfaction}</div>
                        <div className="featured-product-stat-label">رضایت</div>
                      </div>
                      <div className="featured-product-stat-item">
                        <div className={getSupportClass(product.support)}>{product.support}</div>
                        <div className="featured-product-stat-label">پشتیبانی</div>
                      </div>
                    </div>

                    <div className="featured-product-price">
                      {product.price} 
                      <span className="featured-product-currency">تومان</span>
                    </div>
                  </div>

                  {/* دکمه‌ها */}
                  <div className="featured-product-actions">
                    <button 
                      className="featured-product-buy-button"
                      onClick={() => window.open(product.link, '_blank')}
                    >
                      خرید و دانلود
                    </button>
                    <button 
                      className="featured-product-preview-button"
                      onClick={() => window.open(product.previewLink, '_blank')}
                    >
                      <span>🖥️</span>
                      پیشنمایش
                    </button>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDesignerWeek;