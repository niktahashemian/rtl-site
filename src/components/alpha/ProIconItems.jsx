// components/ProIconItems.jsx
import React from 'react';
import '../../assets/css/style.css';

const ProIconItems = ({ items = [], columns = 4, showDivider = true }) => {
  const safeItems = Array.isArray(items) ? items : [];
  
  if (safeItems.length === 0) {
    return null;
  }

  return (
    <div className={`new-pro-icon-wrapper desktop-cols-${columns} ${showDivider ? 'with-divider' : ''}`}>
      {safeItems.map((item, index) => (
        <div key={item.id || index} className="new-pro-icon-item">
          {item.link ? (
            <a href={item.link} className="new-pro-icon-link">
              <div className="new-pro-icon-content">
                <div className="new-pro-icon-icon-wrap">
                  <i className={`new-pro-icon ${item.iconClass || ''}`}>
                    {item.icon || getDefaultIcon(index)}
                  </i>
                </div>
                <div className="new-pro-icon-title">
                  {item.showNumber !== false && (
                    <span className="new-pro-icon-title-number">{index + 1}.</span>
                  )}
                  <span className="new-pro-icon-title-text">{item.title}</span>
                </div>
                <div className="new-pro-icon-description">
                  <p>{item.description}</p>
                </div>
              </div>
            </a>
          ) : (
            <div className="new-pro-icon-content">
              <div className="new-pro-icon-icon-wrap">
                <i className={`new-pro-icon ${item.iconClass || ''}`}>
                  {item.icon || getDefaultIcon(index)}
                </i>
              </div>
              <div className="new-pro-icon-title">
                {item.showNumber !== false && (
                  <span className="new-pro-icon-title-number">{index + 1}.</span>
                )}
                <span className="new-pro-icon-title-text">{item.title}</span>
              </div>
              <div className="new-pro-icon-description">
                <p>{item.description}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// آیکون پیش‌فرض بر اساس ایندکس
const getDefaultIcon = (index) => {
  const icons = ['🎓', '👨‍💼', '🎤', '📚', '💡', '🚀', '🎯', '⚡'];
  return icons[index % icons.length];
};

export default ProIconItems;