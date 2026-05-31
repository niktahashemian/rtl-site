// components/SimpleSectionTitle.jsx
import React from 'react';
import '../../assets/css/style.css';

const SimpleSectionTitle = ({ 
  title, 
  subtitle = null,
  align = 'center',
  showDecoration = true,
  className = ''
}) => {
  return (
    <div className={`new-simple-section-title align-${align} ${className}`}>
      <div className="new-simple-title-wrap">
        {subtitle && (
          <span className="new-simple-subtitle">{subtitle}</span>
        )}
        <h2 className="new-simple-title">
          <span className="new-simple-title-text">{title}</span>
        </h2>
      </div>
    </div>
  );
};

export default SimpleSectionTitle;