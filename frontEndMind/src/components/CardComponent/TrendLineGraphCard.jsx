// import React from 'react'
import './TrendLineGraphCard.css'
import PropTypes from 'prop-types'; 
import TrendLineGraph from '../../assets/tren-line-graph.png'


const TrendLineGraphCard = ({title}) => {
    return (
        <div className="card" style={{marginLeft:"34px",width:"60%"}} >
           
          <div className="card-title" style={{margin:"0px"}}>{title}</div>
          {/* <div className="card-content">{content}</div> */}
          <div className="card-image">
                <img src={TrendLineGraph} alt="" style={{width:"100%",height:"125px"}}/>
            </div>
        </div>
      );
}

TrendLineGraphCard.propTypes = {
    title: PropTypes.string.isRequired,

  };

export default TrendLineGraphCard