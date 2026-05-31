// // src/components/NewProductsSection.jsx
// import React, { useState, useEffect } from 'react';
// import { Grid, ChevronDown, Eye, ShoppingCart } from 'lucide-react';
// import '../../assets/css/style.css';

// const NewProductsSection = () => {
//   const [selectedOption, setSelectedOption] = useState('date');
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   const options = [
//     { value: 'date', label: 'جدیدترین ها', icon: '🆕' },
//     { value: 'saleCount', label: 'پرفروش ترین ها', icon: '🔥' },
//     { value: 'updateDate', label: 'بروز ترین ها', icon: '🔄' }
//   ];

//   const selectedLabel = options.find(opt => opt.value === selectedOption)?.label || 'جدیدترین ها';

//   // همه محصولات
//   const allProducts = [
//     // جدیدترین ها
//     {
//       id: 101,
//       title: "قالب آموزشی آلفا پرس",
//       category: "قالب وردپرس",
//       type: "theme",
//       price: "۱,۰۴۸,۶۰۰",
//       oldPrice: "۱,۴۹۸,۰۰۰",
//       discount: 30,
//       image: "https://media.rtlcdn.com/2026/01/04ecc69e5efcc084315f93044716210420c73408f4779f-scaled.webp",
//       sales: 53,
//       satisfaction: 86,
//       date: "2026-01-15",
//       updateDate: "2026-02-10",
//       link: "/alfapress-wordpress-theme/"
//     },
//     {
//       id: 102,
//       title: "قالب چند منظوره شمیم",
//       category: "قالب وردپرس",
//       type: "theme",
//       price: "۱,۳۴۸,۰۰۰",
//       image: "https://media.rtlcdn.com/2026/01/63b0fd7015f7073e8749d62268653361846a82f16179a5-scaled.webp",
//       sales: 743,
//       satisfaction: 90,
//       date: "2026-01-10",
//       updateDate: "2026-02-08",
//       link: "/shamim-wordpress-theme/"
//     },
//     {
//       id: 103,
//       title: "قالب آموزشی گردو",
//       category: "قالب وردپرس",
//       type: "theme",
//       price: "۱,۵۹۸,۰۰۰",
//       image: "https://media.rtlcdn.com/2025/12/6f6a8174843b72f21817c8479065589f161a98c56f8da6.webp",
//       sales: 15,
//       satisfaction: 100,
//       date: "2025-12-20",
//       updateDate: "2026-02-05",
//       link: "/gerdoo-wordpress-theme/"
//     },
//     {
//       id: 104,
//       title: "قالب فروشگاهی بوم",
//       category: "قالب وردپرس",
//       type: "theme",
//       price: "۲,۱۴۸,۰۰۰",
//       image: "https://media.rtlcdn.com/2025/12/c8391c0737cc3407f36e7949e60c33b17b26125d155480.webp",
//       sales: 236,
//       satisfaction: 91,
//       date: "2025-12-15",
//       updateDate: "2026-02-01",
//       link: "/boom-wordpress-theme/"
//     },
    
//     // پرفروش ترین ها
//     {
//       id: 201,
//       title: "قالب وودمارت",
//       category: "قالب وردپرس",
//       type: "theme",
//       price: "۷۴۹,۵۰۰",
//       oldPrice: "۱,۴۹۹,۰۰۰",
//       discount: 50,
//       image: "https://media.rtlcdn.com/2025/12/9913a9909808654c6ad3a26901df0a78175423e2b874b6-337x171.png",
//       sales: 37284,
//       satisfaction: 91,
//       date: "2025-10-01",
//       updateDate: "2026-02-12",
//       link: "/woodmart/"
//     },
//     {
//       id: 202,
//       title: "افزونه المنتور پرو",
//       category: "افزونه وردپرس",
//       type: "plugin",
//       price: "۲۹۹,۰۰۰",
//       oldPrice: "۵۹۸,۰۰۰",
//       discount: 50,
//       image: "https://media.rtlcdn.com/2022/12/0e77f6dd56cabf6ba08571d629f119d6611336216f4765-160x160.png",
//       sales: 34379,
//       satisfaction: 91,
//       date: "2025-09-15",
//       updateDate: "2026-02-10",
//       link: "/elementor-pro/"
//     },
//     {
//       id: 203,
//       title: "قالب پارس کالا",
//       category: "قالب وردپرس",
//       type: "theme",
//       price: "۱,۲۹۹,۰۰۰",
//       oldPrice: "۲,۵۹۸,۰۰۰",
//       discount: 50,
//       image: "https://media.rtlcdn.com/2025/11/62e00d648c788643e0949715fa664574a844c985250f48-337x171.jpg",
//       sales: 5205,
//       satisfaction: 84,
//       date: "2025-11-20",
//       updateDate: "2026-02-05",
//       link: "/parskala-wordpress-theme/"
//     },
//     {
//       id: 204,
//       title: "افزونه رنک مث",
//       category: "افزونه وردپرس",
//       type: "plugin",
//       price: "۳۴۹,۰۰۰",
//       image: "https://media.rtlcdn.com/2025/12/46fa876bfd377116a18585186301a625d7902965f907c7-160x160.png",
//       sales: 876,
//       satisfaction: 94,
//       date: "2025-12-01",
//       updateDate: "2026-02-08",
//       link: "/rank-math/"
//     },
    
//     // بروزترین ها
//     {
//       id: 301,
//       title: "قالب شرکتی نادر",
//       category: "قالب وردپرس",
//       type: "theme",
//       price: "۱,۳۴۸,۰۰۰",
//       image: "https://media.rtlcdn.com/2026/01/4d4e529ee2658798ca31b4bc35e7dc1414d1988a16d294-337x171.jpg",
//       sales: 1873,
//       satisfaction: 88,
//       date: "2025-08-10",
//       updateDate: "2026-02-14",
//       link: "/nader-wordpress-theme/"
//     },
//     {
//       id: 302,
//       title: "قالب فروشگاهی بوم",
//       category: "قالب وردپرس",
//       type: "theme",
//       price: "۱,۰۷۴,۰۰۰",
//       oldPrice: "۲,۱۴۸,۰۰۰",
//       discount: 50,
//       image: "https://media.rtlcdn.com/2026/01/a1e19b79e4132b71b5812ae07669c6e7416979e4507822-337x171.png",
//       sales: 234,
//       satisfaction: 91,
//       date: "2025-11-15",
//       updateDate: "2026-02-13",
//       link: "/boom-wordpress-theme/"
//     },
//     {
//       id: 303,
//       title: "افزونه فاکتوریار",
//       category: "افزونه وردپرس",
//       type: "plugin",
//       price: "۷۴۸,۰۰۰",
//       image: "https://media.rtlcdn.com/2024/12/7966361435d877a1513d068b7ebaa3cb37fd8c50061847-590x300.jpg",
//       sales: 1282,
//       satisfaction: 94,
//       date: "2024-12-01",
//       updateDate: "2026-02-12",
//       link: "/faktoryar-wordpress-plugin/"
//     },
//     {
//       id: 304,
//       title: "قالب اکسترا",
//       category: "قالب وردپرس",
//       type: "theme",
//       price: "۸۴۸,۵۰۰",
//       oldPrice: "۱,۶۹۷,۰۰۰",
//       discount: 50,
//       image: "https://media.rtlcdn.com/2025/12/f477845c66531057a30814f9b57abe19d513e179222410-590x300.jpg",
//       sales: 30647,
//       satisfaction: 94,
//       date: "2025-09-20",
//       updateDate: "2026-02-10",
//       link: "/xtra-corporate-woocommerce-theme/"
//     }
//   ];
  

//   // تابع فیلتر محصولات بر اساس گزینه انتخاب شده
//   const filterProducts = (optionValue) => {
//     let filtered = [];
    
//     switch(optionValue) {
//       case 'date': // جدیدترین ها
//         filtered = allProducts.filter(p => p.date >= '2025-12-15').slice(0, 4);
//         break;
//       case 'saleCount': // پرفروش ترین ها
//         filtered = [...allProducts].sort((a, b) => b.sales - a.sales).slice(0, 4);
//         break;
//       case 'updateDate': // بروز ترین ها
//         filtered = [...allProducts].sort((a, b) => b.updateDate.localeCompare(a.updateDate)).slice(0, 4);
//         break;
//       default:
//         filtered = allProducts.slice(0, 4);
//     }
    
//     setFilteredProducts(filtered);
//   };

//   // وقتی کامپوننت لود میشه، محصولات پیش‌فرض رو نشون بده
//   useEffect(() => {
//     filterProducts(selectedOption);
//   }, []);

//   const handleSelect = (value) => {
//     setSelectedOption(value);
//     filterProducts(value);
//     setIsDropdownOpen(false);
//   };

//   return (
//     <section className="rtl-new-products-section">
//       <div className="rtl-new-products-container">
        
//         {/* هدر با دراپ‌داون */}
//         <header className="rtl-new-products-header">
//           {/* بخش عنوان و آیکون */}
//           <div className="rtl-new-products-title-section">
//             <div className="rtl-new-products-icon">
//               <span>🆕</span>
//             </div>
//             <h3 className="rtl-new-products-title">
//               جدیدترین قالب و افزونه‌های وردپرس
//             </h3>
//           </div>

//           {/* بخش دراپ‌داون */}
//           <div className="rtl-new-products-dropdown-container">
//             <div
//               className={`rtl-new-products-dropdown-select ${isDropdownOpen ? 'open' : ''}`}
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//             >
//               <span className="rtl-new-products-dropdown-text">
//                 <Grid size={18} className="rtl-new-products-dropdown-icon" />
//                 {selectedLabel}
//               </span>
//               <ChevronDown
//                 size={16}
//                 className={`rtl-new-products-dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}
//               />
//             </div>

//             {/* منوی دراپ‌داون */}
//             {isDropdownOpen && (
//               <div className="rtl-new-products-dropdown-menu">
//                 <ul style={{ margin: 0, padding: 0 }}>
//                   {options.map((option) => (
//                     <li
//                       key={option.value}
//                       className={`rtl-new-products-dropdown-item ${selectedOption === option.value ? 'active' : ''}`}
//                       onClick={() => handleSelect(option.value)}
//                     >
//                       <span className="rtl-new-products-dropdown-item-icon">{option.icon}</span>
//                       {option.label}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         </header>

//         {/* گرید محصولات - فیلتر شده بر اساس گزینه انتخاب شده */}
//         <div className="rtl-new-products-grid">
//           {filteredProducts.map((product) => (
//             <a
//               key={product.id}
//               href={product.link}
//               className="rtl-new-products-card"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <div className="rtl-new-products-image">
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="rtl-new-products-image-inner"
//                   loading="lazy"
//                 />
//               </div>
//               <div className="rtl-new-products-body">
//                 <h4 className="rtl-new-products-title">{product.title}</h4>
//                 <div className="rtl-new-products-category">{product.category}</div>

//                 <div className="rtl-new-products-footer">
//                   <div className="rtl-new-products-stats">
//                     <div className="rtl-new-products-stat">
//                       <span className="rtl-new-products-stat-count">{product.sales.toLocaleString('fa-IR')}</span>
//                       <span className="rtl-new-products-stat-label">فروش</span>
//                     </div>
//                     <div className="rtl-new-products-stat">
//                       <span className="rtl-new-products-stat-count">{product.satisfaction}%</span>
//                       <span className="rtl-new-products-stat-label">رضایت</span>
//                     </div>
//                   </div>
//                   <div className="rtl-new-products-price">
//                     {product.discount && (
//                       <div className="rtl-new-products-price-old">
//                         <span className="rtl-new-products-discount">{product.discount}%</span>
//                         <span className="rtl-new-products-price-old-value">{product.oldPrice}</span>
//                       </div>
//                     )}
//                     <div className="rtl-new-products-price-sale">
//                       {product.price}
//                       <span className="rtl-new-products-price-sym">تومان</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="rtl-new-products-actions">
//                   <button
//                     className="rtl-new-products-buy-btn"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       window.location.href = product.link;
//                     }}
//                   >
//                     <ShoppingCart size={14} />
//                     خرید
//                   </button>
//                   <button
//                     className="rtl-new-products-preview-btn"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       window.open(`https://rtlr.ir/${product.id}`, '_blank');
//                     }}
//                   >
//                     <Eye size={14} />
//                     پیش‌نمایش
//                   </button>
//                 </div>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewProductsSection;
// src/components/NewProductsSection.jsx
import React, { useState, useEffect } from 'react';
import { Grid, ChevronDown, Eye, ShoppingCart } from 'lucide-react';
import '../../assets/css/style.css';

const NewProductsSection = () => {
  const [selectedOption, setSelectedOption] = useState('date');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const options = [
    { value: 'date', label: 'جدیدترین ها', icon: '🆕' },
    { value: 'saleCount', label: 'پرفروش ترین ها', icon: '🔥' },
    { value: 'updateDate', label: 'بروز ترین ها', icon: '🔄' }
  ];

  const selectedLabel = options.find(opt => opt.value === selectedOption)?.label || 'جدیدترین ها';

  // همه محصولات
  const allProducts = [
    // جدیدترین ها
    {
      id: 101,
      title: "قالب آموزشی آلفا پرس",
      category: "قالب وردپرس",
      type: "theme",
      price: "۱,۰۴۸,۶۰۰",
      oldPrice: "۱,۴۹۸,۰۰۰",
      discount: 30,
      image: "https://media.rtlcdn.com/2026/01/04ecc69e5efcc084315f93044716210420c73408f4779f-scaled.webp",
      sales: 53,
      satisfaction: 86,
      date: "2026-01-15",
      updateDate: "2026-02-10",
      link: "/alfapress-wordpress-theme/"
    },
    {
      id: 102,
      title: "قالب چند منظوره شمیم",
      category: "قالب وردپرس",
      type: "theme",
      price: "۱,۳۴۸,۰۰۰",
      image: "https://media.rtlcdn.com/2026/01/63b0fd7015f7073e8749d62268653361846a82f16179a5-scaled.webp",
      sales: 743,
      satisfaction: 90,
      date: "2026-01-10",
      updateDate: "2026-02-08",
      link: "/shamim-wordpress-theme/"
    },
    {
      id: 103,
      title: "قالب آموزشی گردو",
      category: "قالب وردپرس",
      type: "theme",
      price: "۱,۵۹۸,۰۰۰",
      image: "https://media.rtlcdn.com/2025/12/6f6a8174843b72f21817c8479065589f161a98c56f8da6.webp",
      sales: 15,
      satisfaction: 100,
      date: "2025-12-20",
      updateDate: "2026-02-05",
      link: "/gerdoo-wordpress-theme/"
    },
    {
      id: 104,
      title: "قالب فروشگاهی بوم",
      category: "قالب وردپرس",
      type: "theme",
      price: "۲,۱۴۸,۰۰۰",
      image: "https://media.rtlcdn.com/2025/12/c8391c0737cc3407f36e7949e60c33b17b26125d155480.webp",
      sales: 236,
      satisfaction: 91,
      date: "2025-12-15",
      updateDate: "2026-02-01",
      link: "/boom-wordpress-theme/"
    },
    
    // پرفروش ترین ها
    {
      id: 201,
      title: "قالب وودمارت",
      category: "قالب وردپرس",
      type: "theme",
      price: "۷۴۹,۵۰۰",
      oldPrice: "۱,۴۹۹,۰۰۰",
      discount: 50,
      image: "https://media.rtlcdn.com/2025/12/9913a9909808654c6ad3a26901df0a78175423e2b874b6-337x171.png",
      sales: 37284,
      satisfaction: 91,
      date: "2025-10-01",
      updateDate: "2026-02-12",
      link: "/woodmart/"
    },
    {
      id: 202,
      title: "افزونه المنتور پرو",
      category: "افزونه وردپرس",
      type: "plugin",
      price: "۲۹۹,۰۰۰",
      oldPrice: "۵۹۸,۰۰۰",
      discount: 50,
      image: "https://media.rtlcdn.com/2022/12/0e77f6dd56cabf6ba08571d629f119d6611336216f4765-160x160.png",
      sales: 34379,
      satisfaction: 91,
      date: "2025-09-15",
      updateDate: "2026-02-10",
      link: "/elementor-pro/"
    },
    {
      id: 203,
      title: "قالب پارس کالا",
      category: "قالب وردپرس",
      type: "theme",
      price: "۱,۲۹۹,۰۰۰",
      oldPrice: "۲,۵۹۸,۰۰۰",
      discount: 50,
      image: "https://media.rtlcdn.com/2025/11/62e00d648c788643e0949715fa664574a844c985250f48-337x171.jpg",
      sales: 5205,
      satisfaction: 84,
      date: "2025-11-20",
      updateDate: "2026-02-05",
      link: "/parskala-wordpress-theme/"
    },
    {
      id: 204,
      title: "افزونه رنک مث",
      category: "افزونه وردپرس",
      type: "plugin",
      price: "۳۴۹,۰۰۰",
      image: "https://media.rtlcdn.com/2025/12/46fa876bfd377116a18585186301a625d7902965f907c7-160x160.png",
      sales: 876,
      satisfaction: 94,
      date: "2025-12-01",
      updateDate: "2026-02-08",
      link: "/rank-math/"
    },
    
    // بروزترین ها
    {
      id: 301,
      title: "قالب شرکتی نادر",
      category: "قالب وردپرس",
      type: "theme",
      price: "۱,۳۴۸,۰۰۰",
      image: "https://media.rtlcdn.com/2026/01/4d4e529ee2658798ca31b4bc35e7dc1414d1988a16d294-337x171.jpg",
      sales: 1873,
      satisfaction: 88,
      date: "2025-08-10",
      updateDate: "2026-02-14",
      link: "/nader-wordpress-theme/"
    },
    {
      id: 302,
      title: "قالب فروشگاهی بوم",
      category: "قالب وردپرس",
      type: "theme",
      price: "۱,۰۷۴,۰۰۰",
      oldPrice: "۲,۱۴۸,۰۰۰",
      discount: 50,
      image: "https://media.rtlcdn.com/2026/01/a1e19b79e4132b71b5812ae07669c6e7416979e4507822-337x171.png",
      sales: 234,
      satisfaction: 91,
      date: "2025-11-15",
      updateDate: "2026-02-13",
      link: "/boom-wordpress-theme/"
    },
    {
      id: 303,
      title: "افزونه فاکتوریار",
      category: "افزونه وردپرس",
      type: "plugin",
      price: "۷۴۸,۰۰۰",
      image: "https://media.rtlcdn.com/2024/12/7966361435d877a1513d068b7ebaa3cb37fd8c50061847-590x300.jpg",
      sales: 1282,
      satisfaction: 94,
      date: "2024-12-01",
      updateDate: "2026-02-12",
      link: "/faktoryar-wordpress-plugin/"
    },
    {
      id: 304,
      title: "قالب اکسترا",
      category: "قالب وردپرس",
      type: "theme",
      price: "۸۴۸,۵۰۰",
      oldPrice: "۱,۶۹۷,۰۰۰",
      discount: 50,
      image: "https://media.rtlcdn.com/2025/12/f477845c66531057a30814f9b57abe19d513e179222410-590x300.jpg",
      sales: 30647,
      satisfaction: 94,
      date: "2025-09-20",
      updateDate: "2026-02-10",
      link: "/xtra-corporate-woocommerce-theme/"
    }
  ];
  

  // تابع فیلتر محصولات بر اساس گزینه انتخاب شده
  const filterProducts = (optionValue) => {
    let filtered = [];
    
    switch(optionValue) {
      case 'date': // جدیدترین ها
        filtered = allProducts.filter(p => p.date >= '2025-12-15').slice(0, 4);
        break;
      case 'saleCount': // پرفروش ترین ها
        filtered = [...allProducts].sort((a, b) => b.sales - a.sales).slice(0, 4);
        break;
      case 'updateDate': // بروز ترین ها
        filtered = [...allProducts].sort((a, b) => b.updateDate.localeCompare(a.updateDate)).slice(0, 4);
        break;
      default:
        filtered = allProducts.slice(0, 4);
    }
    
    setFilteredProducts(filtered);
  };

  // وقتی کامپوننت لود میشه، محصولات پیش‌فرض رو نشون بده
  useEffect(() => {
    filterProducts(selectedOption);
  }, []);

  const handleSelect = (value) => {
    setSelectedOption(value);
    filterProducts(value);
    setIsDropdownOpen(false);
  };

  return (
    <section className="rtl-new-products-section">
      <div className="rtl-new-products-container">
        
        {/* هدر با دراپ‌داون */}
        <header className="rtl-new-products-header">
          {/* بخش عنوان و آیکون */}
          <div className="rtl-new-products-title-section">
            <div className="rtl-new-products-icon">
              <span>🆕</span>
            </div>
            <h3 className="rtl-new-products-title">
              جدیدترین قالب و افزونه‌های وردپرس
            </h3>
          </div>

          {/* بخش دراپ‌داون */}
          <div className="rtl-new-products-dropdown-container">
            <div
              className={`rtl-new-products-dropdown-select ${isDropdownOpen ? 'open' : ''}`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="rtl-new-products-dropdown-text">
                <Grid size={18} className="rtl-new-products-dropdown-icon" />
                {selectedLabel}
              </span>
              <ChevronDown
                size={16}
                className={`rtl-new-products-dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}
              />
            </div>

            {/* منوی دراپ‌داون */}
            {isDropdownOpen && (
              <div className="rtl-new-products-dropdown-menu">
                <ul style={{ margin: 0, padding: 0 }}>
                  {options.map((option) => (
                    <li
                      key={option.value}
                      className={`rtl-new-products-dropdown-item ${selectedOption === option.value ? 'active' : ''}`}
                      onClick={() => handleSelect(option.value)}
                    >
                      <span className="rtl-new-products-dropdown-item-icon">{option.icon}</span>
                      {option.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </header>

        {/* گرید محصولات - فیلتر شده بر اساس گزینه انتخاب شده */}
        <div className="rtl-new-products-grid">
          {filteredProducts.map((product) => (
            <a
              key={product.id}
              href={product.link}
              className="rtl-new-products-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rtl-new-products-image">
                <img
                  src={product.image}
                  alt={product.title}
                  className="rtl-new-products-image-inner"
                  loading="lazy"
                />
              </div>
              <div className="rtl-new-products-body">
                <h4 className="rtl-new-products-title">{product.title}</h4>
                <div className="rtl-new-products-category">{product.category}</div>

                <div className="rtl-new-products-footer">
                  <div className="rtl-new-products-stats">
                    <div className="rtl-new-products-stat">
                      <span className="rtl-new-products-stat-count">{product.sales.toLocaleString('fa-IR')}</span>
                      <span className="rtl-new-products-stat-label">فروش</span>
                    </div>
                    <div className="rtl-new-products-stat">
                      <span className="rtl-new-products-stat-count">{product.satisfaction}%</span>
                      <span className="rtl-new-products-stat-label">رضایت</span>
                    </div>
                  </div>
                  <div className="rtl-new-products-price">
                    {product.discount && (
                      <div className="rtl-new-products-price-old">
                        <span className="rtl-new-products-discount">{product.discount}%</span>
                        <span className="rtl-new-products-price-old-value">{product.oldPrice}</span>
                      </div>
                    )}
                    <div className="rtl-new-products-price-sale">
                      {product.price}
                      <span className="rtl-new-products-price-sym">تومان</span>
                    </div>
                  </div>
                </div>

                <div className="rtl-new-products-actions">
                  <button
                    className="rtl-new-products-buy-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = product.link;
                    }}
                  >
                    <ShoppingCart size={14} />
                    خرید
                  </button>
                  <button
                    className="rtl-new-products-preview-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(`https://rtlr.ir/${product.id}`, '_blank');
                    }}
                  >
                    <Eye size={14} />
                    پیش‌نمایش
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewProductsSection;