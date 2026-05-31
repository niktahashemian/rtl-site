// // ShareModal.jsx
// import React from 'react';

// const ShareModal = ({ onClose }) => {
//   return (
//     <div className="modal fade show" id="shareModal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
//       <div className="modal-dialog" role="document">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title">اشتراک‌گذاری</h5>
//             <button type="button" className="close" onClick={onClose}>
//               <span>&times;</span>
//             </button>
//           </div>
//           <div className="modal-body">
//             <p>لینک محصول را کپی کنید:</p>
//             <input type="text" className="form-control" value="https://www.rtl-theme.com/rtl-smart-management/" readOnly />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShareModal;
// ShareModal.jsx
import React, { useState } from 'react';
import '../../assets/css/style.css';


const ShareModal = ({ onClose, productUrl }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(productUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-dialog" onClick={e => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">اشتراک‌گذاری</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>لینک محصول را کپی کنید:</p>
            <div className="share-input-group">
              <input 
                type="text" 
                className="form-control" 
                value={productUrl} 
                readOnly 
              />
              <button 
                className="btn btn-primary copy-btn"
                onClick={copyToClipboard}
              >
                {copied ? 'کپی شد!' : 'کپی'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;