// // ProductThumbnail.jsx
// import React from 'react';
// import ProductActions from './ProductActions';
// import VersionModal from './VersionModal';
// import '../../assets/css/style.css';


// const ProductThumbnail = ({ product, showVideo, showVideoCover, setShowVideo, setShowVideoCover, onCompareClick }) => {
//   const [showVersionModal, setShowVersionModal] = React.useState(false);

//   return (
//     <>
//       <div className="product-thumbnail">
//         <figure>
//           <img 
//             src={product.thumbnail} 
//             width="1050" 
//             height="520" 
//             alt={product.title}
//           />
//           <noscript>
//             <img src={product.thumbnail} width="1050" height="520" alt={product.title} />
//           </noscript>
//         </figure>

//         {showVideo && (
//           <video controls>
//             <source src={product.videoUrl} type="video/mp4" />
//             مرورگر شما از این امکان پشتیبانی نمی کند!
//           </video>
//         )}
//       </div>

//       <div className="product-title-sm">
//         <h1 className="title">
//           <a href={`https://www.rtl-theme.com/rtl-smart-management/`}>
//             {product.title}
//           </a>
//         </h1>
//         <span className="version">
//           <a href="javascript:void(0);" onClick={() => setShowVersionModal(true)}>
//             نسخه {product.version}
//           </a>
//         </span>
//       </div>

//       <div className="product-actions">
//         <div className="product-actions-buttons" id="product-action-items">
//           <button 
//             className="product-actions-buttons__item product-video orange" 
//             data-toggle="tooltip" 
//             data-placement="bottom" 
//             title="ویدئو"
//             onClick={() => setShowVideo(!showVideo)}
//           >
//             <span className="prepend-icon video">
//               <i className="rip rip-s-play"></i>
//             </span>
//           </button>

//           <button 
//             className="product-actions-buttons__item product-video-cover orange" 
//             style={{ display: showVideoCover ? 'inline-block' : 'none' }}
//             data-toggle="tooltip" 
//             data-placement="bottom" 
//             title="کاور"
//             onClick={() => setShowVideoCover(!showVideoCover)}
//           >
//             <span className="prepend-icon video">
//               <i className="rip rip-image"></i>
//             </span>
//           </button>

//           <ProductActions onCompareClick={onCompareClick} productId={product.id} />

//           <button 
//             data-type="ProductPreview" 
//             data-target="https://rtlr.ir/151771" 
//             data-id={product.id} 
//             className="btn btn-orange product-demo"
//           >
//             <span className="prepend-icon">
//               <i className="rip rip-s-desktop"></i>
//             </span>
//             پیشنمایش
//           </button>
//         </div>
//       </div>

//       {showVersionModal && (
//         <VersionModal onClose={() => setShowVersionModal(false)} />
//       )}
//     </>
//   );
// };

// export default ProductThumbnail;
// ProductThumbnail.jsx
import React from 'react';
import ProductActions from './ProductActions';
import '../../assets/css/style.css';


const ProductThumbnail = ({ 
  product, 
  showVideo, 
  showVideoCover, 
  setShowVideo, 
  setShowVideoCover, 
  onCompareClick,
  onShareClick,
  onVersionClick 
}) => {
  return (
    <>
      <div className="product-thumbnail">
        <figure>
          <img 
            src={product.thumbnail} 
            width="1050" 
            height="520" 
            alt={product.title}
          />
          <noscript>
            <img src={product.thumbnail} width="1050" height="520" alt={product.title} />
          </noscript>
        </figure>

        {showVideo && (
          <video controls>
            <source src={product.videoUrl} type="video/mp4" />
            مرورگر شما از این امکان پشتیبانی نمی کند!
          </video>
        )}
      </div>

      <div className="product-title-sm">
        <h1 className="title">
          <a href={`https://www.rtl-theme.com/rtl-smart-management/`}>
            {product.title}
          </a>
        </h1>
        <span className="version">
          <a href="javascript:void(0);" onClick={onVersionClick}>
            نسخه {product.version}
          </a>
        </span>
      </div>

      <div className="product-actions">
        <div className="product-actions-buttons" id="product-action-items">
          <button 
            className="product-actions-buttons__item product-video orange" 
            data-toggle="tooltip" 
            data-placement="bottom" 
            title="ویدئو"
            onClick={() => setShowVideo(!showVideo)}
          >
            <span className="prepend-icon video">
              <i className="rip rip-s-play"></i>
            </span>
          </button>

          <button 
            className="product-actions-buttons__item product-video-cover orange" 
            style={{ display: showVideoCover ? 'inline-block' : 'none' }}
            data-toggle="tooltip" 
            data-placement="bottom" 
            title="کاور"
            onClick={() => setShowVideoCover(!showVideoCover)}
          >
            <span className="prepend-icon video">
              <i className="rip rip-image"></i>
            </span>
          </button>

          <ProductActions 
            onCompareClick={onCompareClick} 
            onShareClick={onShareClick}
            productId={product.id} 
          />

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
    </>
  );
};

export default ProductThumbnail;