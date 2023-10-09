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
        {/* Dropdown options go here */}
        <div>Option 1</div>
        <div>Option 2</div>
        <div>Option 3</div>
      </div>
    </div>
  );
};

export default DashDropdown;
