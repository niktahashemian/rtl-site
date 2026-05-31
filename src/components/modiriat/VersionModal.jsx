// // VersionModal.jsx
// import React from 'react';

// const VersionModal = ({ onClose }) => {
//   return (
//     <div className="modal fade show" id="changelogModal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
//       <div className="modal-dialog" role="document">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title">تغییرات نسخه 2.8.2</h5>
//             <button type="button" className="close" onClick={onClose}>
//               <span>&times;</span>
//             </button>
//           </div>
//           <div className="modal-body">
//             <p>جزئیات تغییرات نسخه...</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VersionModal;
// VersionModal.jsx
import React from 'react';
import '../../assets/css/style.css';

const VersionModal = ({ onClose, version, changelog }) => {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-dialog" onClick={e => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">تغییرات نسخه {version}</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <ul className="changelog-list">
              {changelog.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VersionModal;