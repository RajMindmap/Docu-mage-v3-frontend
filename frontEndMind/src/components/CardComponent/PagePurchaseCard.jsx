// import React from 'react'
import "./PagePurchaseCard.css";
import PropTypes from 'prop-types'; 
import PagePurchaseIcon from '../../assets/page-purchase-icon.png'

const PagePurchaseCard = ({title, content }) => {
  return (
    <div className="card">
        <div className="card-image">
            <img src={PagePurchaseIcon} alt="" />
        </div>
      <div className="card-title">{title}</div>
      <div className="card-content">{content}</div>
    </div>
  );
};


PagePurchaseCard.propTypes = {
    img:PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  };

export default PagePurchaseCard;
