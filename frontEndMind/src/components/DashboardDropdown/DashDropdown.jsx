// import React from 'react'
import "./DashDropdown.css";
import { useState } from "react";

const DashDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown" style={{width:"100%"}}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        Projects
      </button>
      <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
        <div>Invoice</div>
        <div>Passport</div>
        <div>Receipt</div>
        <div>Emirates ID</div>
        <div>CBSE 12th</div>
        <div>PAN Card</div>
        <div>CBSE 10th</div>
        <div>Aadhar Card</div>
      </div>
    </div>
  );
};

export default DashDropdown;
