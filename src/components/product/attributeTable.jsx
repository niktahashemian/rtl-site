// import React from 'react';
// import '../../assets/css/style.css';

// const AttributeTable = () => {
//     const attributes = [
//         { name: "نسخه", value: "1.4.0" },
//         { name: "تاریخ به‌روزرسانی", value: "1 روز قبل", title: "12 اردیبهشت 1405" },
//         { name: "تاریخ انتشار", value: "23 فروردین 1405" },
//         { name: "دسته‌بندی اصلی", value: <a href="https://www.rtl-theme.com/category/wordpress-plugin/optimizer-plugin/">افزونه بهینه سازی</a> },
//         { name: "موضوع", value: (
//             <ul>
//                 <li>
//                     <a href="https://www.rtl-theme.com/category/wordpress-plugin/">افزونه وردپرس</a>
//                 </li>
//             </ul>
//         ) }
//     ];

//     return (
//         <table className="attributes-table">
//             <tbody>
//                 {attributes.map((attribute, index) => (
//                     <tr key={index}>
//                         <td className="name">{attribute.name}</td>
//                         <td className="value" title={attribute.title}>
//                             {attribute.value}
//                         </td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     );
// };

// export default AttributeTable;
import React from 'react';
import '../../assets/css/style.css';

const AttributeTable = () => {
    const attributes = [
        { name: "نسخه", value: "1.4.0" },
        { name: "تاریخ به‌روزرسانی", value: "1 روز قبل" },
        { name: "تاریخ انتشار", value: "23 فروردین 1405" },
        { name: "دسته‌بندی اصلی", value: "افزونه بهینه سازی" },
        { name: "موضوع", value: <a href="">افزونه وردپرس</a> },
    ];

    return (
        <div className="attribute-container">
            {attributes.map((attribute, index) => (
                <div className="attribute-row" key={index}>
                    <span className="attribute-name">{attribute.name}</span>
                    <span className="attribute-value">{attribute.value}</span>
                </div>
            ))}
            <div className="rating">
                <span className="rating-score">۴.۷ از ۱۱ رای</span>
                <div className="stars">
                    <span>⭐⭐⭐⭐☆</span>
                </div>
            </div>
        </div>
    );
};

export default AttributeTable;
