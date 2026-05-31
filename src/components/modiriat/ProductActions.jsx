// // ProductActions.jsx
// import React, { useState } from 'react';
// import '../../assets/css/style.css';


// const ProductActions = ({ onCompareClick, productId }) => {
//   const [showMenu, setShowMenu] = useState(false);

//   return (
//     <>
//       <div data-toggle="modal" data-target="#compareModal" onClick={onCompareClick}>
//         <button className="product-actions-buttons__item gray" data-toggle="tooltip" data-placement="bottom" title="مقایسه">
//           <span className="prepend-icon">
//             <i className="rip rip-s-diagram-venn"></i>
//           </span>
//         </button>
//       </div>

//       <div className="product-like-actions-outer" id="product-like-actions-outer">
//         <button type="button" className="btn product-action-toggle" onClick={() => setShowMenu(!showMenu)}>
//           <i className="rip rip-s-ellipsis-vertical"></i>
//         </button>

//         {showMenu && (
//           <div className="product-like-actions" id="product-action-items-menu">
//             <button data-id={productId} className="btn product-add-favorite">
//               <i className="rip rip-l-heart"></i>
//             </button>
            
//             <button className="btn" data-toggle="modal" data-target="#shareModal">
//               <i className="rip rip-l-share-nodes"></i>
//             </button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default ProductActions;
// ProductActions.jsx
import React, { useState } from 'react';
import '../../assets/css/style.css';


const ProductActions = ({ onCompareClick, onShareClick, productId }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div onClick={onCompareClick}>
        <button className="product-actions-buttons__item gray" data-toggle="tooltip" data-placement="bottom" title="مقایسه">
          <span className="prepend-icon">
            <i className="rip rip-s-diagram-venn"></i>
          </span>
        </button>
      </div>

      <div className="product-like-actions-outer" id="product-like-actions-outer">
        <button type="button" className="btn product-action-toggle" onClick={() => setShowMenu(!showMenu)}>
          <i className="rip rip-s-ellipsis-vertical"></i>
        </button>

        {showMenu && (
          <div className="product-like-actions" id="product-action-items-menu">
            <button data-id={productId} className="btn product-add-favorite">
              <i className="rip rip-l-heart"></i>
            </button>
            
            <button className="btn" onClick={onShareClick}>
              <i className="rip rip-l-share-nodes"></i>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductActions;