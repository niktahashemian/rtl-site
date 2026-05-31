// // ProductIntro.jsx
// import React from 'react';
// import '../../assets/css/style.css';


// const ProductIntro = ({ product }) => {
//   return (
//     <article className="card product-intro product-intro__noDiscount">
//       <div className="intro-body">
//         <div className="product-grid-details">
//           <div className="detail-item sale">
//             <span className="count">{product.downloads.toLocaleString()}</span>
//             <span className="title">دانلود</span>
//           </div>
//           <div className="detail-item rate">
//             <span className="count">{product.satisfaction}%</span>
//             <span className="title">رضایت <span className="rateUserRate">از {product.votes} رای</span></span>
//           </div>
//         </div>

//         <ul className="product-listed-features">
//           {product.features.map((feature, index) => (
//             <li key={index} className="product-listed-features__item">
//               <div className="product-listed-features__item-icon">
//                 <i className="rip rip-s-check"></i>
//               </div>
//               <div className="product-listed-features__item-text">{feature}</div>
//             </li>
//           ))}
//         </ul>

//         <div className="intro-body__content" id="intro-body__content">
//           <div className="price-outer">
//             <div className="floatingPurchaseBar__price">
//               {product.price}
//               <span className="floatingPurchaseBar__price__sym">تومان</span>
//             </div>

//             {product.isFree && (
//               <div className="free">این محصول را رایگان دانلود کنید</div>
//             )}
//           </div>

//           <div className="product-action-outer">
//             <div className="product-cart">
//               <button 
//                 className="download btn btn-lg btn-primary" 
//                 style={{ width: '100%' }} 
//                 id="intro-product-download" 
//                 data-id={product.id}
//               >
//                 دانلود رایگان
//               </button>
              
//               <button 
//                 data-type="ProductPreview" 
//                 data-target="https://rtlr.ir/151771" 
//                 data-id={product.id} 
//                 className="btn btn-orange product-demo"
//               >
//                 <span className="prepend-icon">
//                   <i className="rip rip-s-desktop"></i>
//                 </span>
//                 پیشنمایش
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="intro-free-product-must-login" style={{ display: 'none' }}>
//         جهت دانلود این محصول باید
//         <a href="https://www.rtl-theme.com/authenticate/" data-type="loginLink" data-target="https://www.rtl-theme.com/authenticate/?redirect=https://www.rtl-theme.com/rtl-smart-management/">
//           وارد راستچین شوید
//         </a>
//       </div>

//       <div className="product-average-response">
//         <div className="product-average-response__title">
//           میانگین زمان پاسخگویی تیکت:
//         </div>
//         <div className="product-average-response__desc">
//           -
//         </div>
//       </div>
//     </article>
//   );
// };

// export default ProductIntro;
// ProductIntro.jsx
import React from 'react';
import '../../assets/css/style.css';


const ProductIntro = ({ product }) => {
  return (
    <article className="card product-intro product-intro__noDiscount">
      <div className="intro-body">
        <div className="product-grid-details">
          <div className="detail-item sale">
            <span className="count">{product.downloads.toLocaleString()}</span>
            <span className="title">دانلود</span>
          </div>
          <div className="detail-item rate">
            <span className="count">{product.satisfaction}%</span>
            <span className="title">رضایت <span className="rateUserRate">از {product.votes} رای</span></span>
          </div>
        </div>

        <ul className="product-listed-features">
          {product.features.map((feature, index) => (
            <li key={index} className="product-listed-features__item">
              <div className="product-listed-features__item-icon">
                <i className="rip rip-s-check"></i>
              </div>
              <div className="product-listed-features__item-text">{feature}</div>
            </li>
          ))}
        </ul>

        <div className="intro-body__content" id="intro-body__content">
          <div className="price-outer">
            <div className="floatingPurchaseBar__price">
              {product.price}
              <span className="floatingPurchaseBar__price__sym">تومان</span>
            </div>

            {product.isFree && (
              <div className="free">این محصول را رایگان دانلود کنید</div>
            )}
          </div>

          <div className="product-action-outer">
            <div className="product-cart">
              <button 
                className="download btn btn-lg btn-primary" 
                style={{ width: '100%' }} 
                id="intro-product-download" 
                data-id={product.id}
              >
                دانلود رایگان
              </button>
              
              <button 
                data-type="ProductPreview" 
                data-target="https://rtlr.ir/151771" 
                data-id={product.id} 
                className="btn btn-orange product-demo"
              >
                <span className="prepend-icon">
                  <i className="rip rip-s-desktop"></i>
                </span>
                پیشنمایش
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="intro-free-product-must-login" style={{ display: 'none' }}>
        جهت دانلود این محصول باید
        <a href="https://www.rtl-theme.com/authenticate/" data-type="loginLink" data-target="https://www.rtl-theme.com/authenticate/?redirect=https://www.rtl-theme.com/rtl-smart-management/">
          وارد راستچین شوید
        </a>
      </div>

      <div className="product-average-response">
        <div className="product-average-response__title">
          میانگین زمان پاسخگویی تیکت:
        </div>
        <div className="product-average-response__desc">
          -
        </div>
      </div>
    </article>
  );
};

export default ProductIntro;