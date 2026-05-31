import React, { useState } from 'react';
import PageHeader from './PageHeader';
import ProductHeader from './ProductHeader';
import CompareModal from './CompareModal';
import ShareModal from './ShareModal';
import VersionModal from './VersionModal';
import '../../assets/css/style.css';


const Modiriat = () => {
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showVersionModal, setShowVersionModal] = useState(false);

  // داده‌های محصول
  const productData = {
    id: 151771,
    title: 'افزونه مدیریت هوشمند راست چین',
    version: '2.8.2',
    thumbnail: 'https://media.rtlcdn.com/2020/08/280720fd7873f3d1f8c31c938a742c300db33f36153c23-1050x520.jpg',
    videoUrl: 'https://files.rtl-theme.com/products/content/2024/11/34516_38fe2a31ea5cf70ce6b47c774.mp4',
    downloads: 164759,
    satisfaction: 100,
    votes: 1,
    sales: 47,
    lastUpdate: '2 ماه قبل',
    price: 0,
    isFree: true,
    features: [
      'بررسی خودکار ارتباط سرور',
      'آپدیت خودکار محصولات خریداری شده',
      'نمایش اعلان ها و اطلاعیه ها',
      'امکان پشتیبان گیری از نسخه های قدیمی'
    ]
  };

  return (
    <div className="modiriat-page">
      <PageHeader onShowVersionModal={() => setShowVersionModal(true)} />
      
      <ProductHeader 
        product={productData}
        onShowCompare={() => setShowCompareModal(true)}
        onShowShare={() => setShowShareModal(true)}
        onShowVersion={() => setShowVersionModal(true)}
      />

      {showCompareModal && (
        <CompareModal 
          product={productData}
          onClose={() => setShowCompareModal(false)}
        />
      )}

      {showShareModal && (
        <ShareModal 
          onClose={() => setShowShareModal(false)}
          productUrl="https://www.rtl-theme.com/rtl-smart-management/"
        />
      )}

      {showVersionModal && (
        <VersionModal 
          onClose={() => setShowVersionModal(false)}
          version="2.8.2"
          changelog={[
            'رفع باگ‌های امنیتی',
            'بهبود عملکرد در وردپرس 6.4',
            'افزایش سرعت بارگذاری',
            'بهبود سازگاری با افزونه‌های دیگر',
            'اضافه شدن قابلیت مدیریت هوشمند محتوا',
            'بهبود رابط کاربری در بخش مدیریت'
          ]}
        />
      )}
    </div>
  );
};

export default Modiriat;