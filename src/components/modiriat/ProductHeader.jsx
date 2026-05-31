// // ProductHeader.jsx
// import React, { useState } from 'react';
// import ProductThumbnail from './ProductThumbnail';
// import ProductIntro from './ProductIntro';
// import CompareModal from './CompareModal';
// import '../../assets/css/style.css';

// const ProductHeader = () => {
//   const [showCompareModal, setShowCompareModal] = useState(false);
//   const [showVideo, setShowVideo] = useState(true);
//   const [showVideoCover, setShowVideoCover] = useState(false);

//   const productData = {
//     id: 151771,
//     title: 'افزونه مدیریت هوشمند راست چین',
//     version: '2.8.2',
//     thumbnail: 'https://media.rtlcdn.com/2020/08/280720fd7873f3d1f8c31c938a742c300db33f36153c23-1050x520.jpg',
//     videoUrl: 'https://files.rtl-theme.com/products/content/2024/11/34516_38fe2a31ea5cf70ce6b47c774.mp4',
//     downloads: 164759,
//     satisfaction: 100,
//     votes: 1,
//     sales: 47,
//     lastUpdate: '2 ماه قبل',
//     price: 0,
//     isFree: true,
//     features: [
//       'بررسی خودکار ارتباط سرور',
//       'آپدیت خودکار محصولات خریداری شده',
//       'نمایش اعلان ها و اطلاعیه ها',
//       'امکان پشتیبان گیری از نسخه های قدیمی'
//     ]
//   };

//   return (
//     <div className="product-header">
//       <div className="row justify-content-center">
//         <div className="col-xl-auto order-xl-2 product-colum-thumbnail">
//           <ProductThumbnail 
//             product={productData}
//             showVideo={showVideo}
//             showVideoCover={showVideoCover}
//             setShowVideo={setShowVideo}
//             setShowVideoCover={setShowVideoCover}
//             onCompareClick={() => setShowCompareModal(true)}
//           />
//         </div>

//         <div className="col-xl order-xl-1 product-colum-intro">
//           <ProductIntro product={productData} />
//         </div>
//       </div>

//       {showCompareModal && (
//         <CompareModal 
//           product={productData}
//           onClose={() => setShowCompareModal(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default ProductHeader;
// ProductHeader.jsx
import React, { useState } from 'react';
import ProductThumbnail from './ProductThumbnail';
import ProductIntro from './ProductIntro';
import '../../assets/css/style.css';


const ProductHeader = ({ product, onShowCompare, onShowShare, onShowVersion }) => {
  const [showVideo, setShowVideo] = useState(true);
  const [showVideoCover, setShowVideoCover] = useState(false);

  return (
    <div className="product-header">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-auto order-xl-2 product-colum-thumbnail">
            <ProductThumbnail 
              product={product}
              showVideo={showVideo}
              showVideoCover={showVideoCover}
              setShowVideo={setShowVideo}
              setShowVideoCover={setShowVideoCover}
              onCompareClick={onShowCompare}
              onShareClick={onShowShare}
              onVersionClick={onShowVersion}
            />
          </div>

          <div className="col-xl order-xl-1 product-colum-intro">
            <ProductIntro product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;