// CompareModal.jsx
import React from 'react';
import '../../assets/css/style.css';


const CompareModal = ({ product, onClose }) => {
  return (
    <div className="modal comparison-modal" onClick={onClose}>
      <div className="comparison-modal__dialog" onClick={e => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-body">
            <div className="comparison-area comparison-area--laptop">
              <table className="comparison__table">
                <thead className="comparison__table-head">
                  <tr>
                    <th>
                      <div className="comparison__table-title">
                        <div className="comparison__table-title-icon">
                          <i className="rip rip-s-diagram-venn"></i>
                        </div>
                        <div className="comparison__table-title-text">
                          مقایسه محصول
                        </div>
                      </div>
                    </th>
                    <th>
                      <div className="comparison__table-product">
                        <div className="comparison__table-product-banner">
                          <img src={product.thumbnail} width="320" height="320" alt={product.title} />
                        </div>
                        <div className="comparison__table-product-content">
                          <div className="comparison__table-product-title">
                            {product.title}
                          </div>
                          <div className="comparison__table-product-actions product-cart product-compare">
                            <button className="btn btn-lg btn-primary add-to-cart product-add-to-cart-button" data-id={product.id}>
                              افزودن به سبد
                            </button>
                          </div>
                        </div>
                      </div>
                    </th>
                    <th>
                      <div className="comparison__table-search-title">
                        انتخاب محصول:
                      </div>
                      <div className="header-search-outer-compare">
                        <div className="header-search-compare">
                          <input 
                            type="search" 
                            placeholder="اسم قالب یا افزونه ..." 
                            className="search-field-compare form-field-compare"
                          />
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="comparison__table-body">
                  <tr>
                    <td className="comparison__table-body-title">قیمت</td>
                    <td>
                      <div className="comparison__table-body-price">
                        <div className="comparison__table-body-price-sale">
                          {product.price}
                          <span className="comparison__table-body-price-sym">تومان</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="comparison__table-body-price">
                        <div className="comparison__table-body-price-sale">
                          <span className="comparison__table-body-price-sym"></span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="comparison__table-body-title">درصد رضایت محصول</td>
                    <td className="comparison__table-body-text color-green">{product.satisfaction}%</td>
                    <td className="comparison__table-body-text color-green"></td>
                  </tr>
                  <tr>
                    <td className="comparison__table-body-title">تعداد فروش</td>
                    <td className="comparison__table-body-text">{product.sales} فروش</td>
                    <td className="comparison__table-body-text"></td>
                  </tr>
                  <tr>
                    <td className="comparison__table-body-title">آخرین بروزرسانی</td>
                    <td className="comparison__table-body-text">{product.lastUpdate}</td>
                    <td className="comparison__table-body-text"></td>
                  </tr>
                  <tr>
                    <td className="comparison__table-body-title">کیفیت پشتیبانی</td>
                    <td className="comparison__table-body-text comparison__table-body-text-support color-muted text-bold">-</td>
                    <td className="comparison__table-body-text text-bold"></td>
                  </tr>
                  <tr>
                    <td className="comparison__table-body-title">سرعت پاسخگویی به تیکت</td>
                    <td className="comparison__table-body-text">-</td>
                    <td className="comparison__table-body-text"></td>
                  </tr>
                  <tr>
                    <td className="comparison__table-body-title">پشتیبانی سریع (2 ساعته)</td>
                    <td className="comparison__table-body-icon">
                      <i className="rip rip-s-circle-xmark color-danger"></i>
                    </td>
                    <td className="comparison__table-body-icon"></td>
                  </tr>
                  <tr>
                    <td className="comparison__table-body-title">مشاوره پیش از خرید</td>
                    <td className="comparison__table-body-icon">
                      <i className="rip rip-s-circle-xmark color-danger"></i>
                    </td>
                    <td className="comparison__table-body-icon"></td>
                  </tr>
                  <tr>
                    <td className="comparison__table-body-title">آموزش کار با محصول</td>
                    <td className="comparison__table-body-icon">
                      <i className="rip rip-s-circle-xmark color-danger"></i>
                    </td>
                    <td className="comparison__table-body-icon"></td>
                  </tr>
                  <tr>
                    <td className="comparison__table-body-title">محصول ایرانی</td>
                    <td className="comparison__table-body-icon">
                      <i className="rip rip-s-circle-check color-green"></i>
                    </td>
                    <td className="comparison__table-body-icon"></td>
                  </tr>
                  <tr>
                    <td className="comparison__table-body-title">امکان تست قبل از خرید</td>
                    <td className="comparison__table-body-icon">
                      <i className="rip rip-s-circle-xmark color-danger"></i>
                    </td>
                    <td className="comparison__table-body-icon"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <button type="button" className="close" onClick={onClose}>
            <i className="rip rip-l-circle-xmark"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompareModal;