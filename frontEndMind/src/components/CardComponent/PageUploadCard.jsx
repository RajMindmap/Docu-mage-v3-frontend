// import React from 'react'
import PropTypes from 'prop-types'; 
import PageUploadIcon from '../../assets/pages-upload.png'

import './PageUploadCard.css';

const PageUploadCard = ({title, content }) => {
    return (
        <div className="card" style={{marginLeft:"34px"}}>
            <div className="card-image">
                <img src={PageUploadIcon} alt="" />
            </div>
          <div className="card-title">{title}</div>
          <div className="card-content">{content}</div>
        </div>
      );
}

PageUploadCard.propTypes = {
    img:PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  };

export default PageUploadCard