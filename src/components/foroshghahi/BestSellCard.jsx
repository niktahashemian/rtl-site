import React from "react";
import '../../assets/css/style.css';

const BestSellCard = ({
  image="https://media.rtlcdn.com/2024/04/1243dd7e30b92cf11f71321757774e1a9f1e774ab9d56e.png",
  title,
  totalIncome,
  monthlyIncome,
  salesCount,
  price,
  link,
}) => {
  return (
    <div className="bestSell__card">

      {/* Image */}
      <div className="bestSell__cardImage">
        <img src={image} alt={title} />
      </div>

      {/* Info */}
      <div className="bestSell__cardInfo">

        <div className="bestSell__cardTitle">
          {title}
        </div>

        <div className="bestSell__cardDetail">

          <div className="bestSell__cardDetailBox">
            <div className="bestSell__cardDetailTitle">
              کل درآمد فروش
            </div>
            <div className="bestSell__cardDetailPrice">
              <div className="bestSell__cardPrice">{totalIncome}</div>
              <span> تومان </span>
            </div>
          </div>

          <div className="bestSell__cardDetailBox">
            <div className="bestSell__cardDetailTitle">
              میانگین درآمد ماهیانه
            </div>
            <div className="bestSell__cardDetailPrice">
              <div className="bestSell__cardPrice">{monthlyIncome}</div>
              <span> تومان </span>
            </div>
          </div>

          <div className="bestSell__cardDetailBox">
            <div className="bestSell__cardDetailTitle">
              تعداد فروش
            </div>
            <div className="bestSell__cardDetailPrice bestSell__cardDetailPrice--number">
              {salesCount}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bestSell__cardFooter">

          <div className="bestSell__cardFooterPrice">
            <div className="bestSell__cardFooterTitle">
              قیمت محصول:
            </div>
            <div className="bestSell__cardFooterNumber">
              <div className="bestSell__cardPrice">{price}</div>
              <span> تومان </span>
            </div>
          </div>

          <div className="bestSell__cardFooterButton">
            <a className="button button--green" href={link}>
              مشاهده محصول
            </a>
          </div>

        </div>

      </div>

    </div>
  );
};

export default BestSellCard;