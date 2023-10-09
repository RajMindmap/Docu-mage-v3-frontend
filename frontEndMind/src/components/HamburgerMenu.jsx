// import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./HamburgerMenu.css";
import MsgIcon from "../assets/msg-icon.png"
import TowerChartIcont from '../assets/Chart.png'


const HamburgerMenu = () => {
  return (
    <Menu>
      <h4 style={{ textAlign: "start" }}>Menu</h4>
        <a className="menu-item" href="/dashboard" style={{ textAlign: "start",marginTop:'24px',textDecoration:"none",color:"#8F95B2",fontWeight:"600",fontSize:"18px",lineHeight:"20px",display:"flex",columnGap:"12px" }}>
         <div className="menu_msg_icon"><img src={MsgIcon} alt="" /></div>
         <div className="menu_msg_dash_label">Dashboard</div> 
        </a>
        <a className="menu-item" href="/pre-trained-models" style={{ textAlign: "start",marginTop:'24px',textDecoration:"none",color:"#8F95B2",fontWeight:"600",fontSize:"18px",lineHeight:"20px",display:"flex",columnGap:"12px" }}>
         <div className="menu_msg_icon"><img src={TowerChartIcont} alt="" /></div>
         <div className="menu_msg_dash_label">Pre-Trained Models</div> 
        </a>
        <a className="menu-item" href="/my-projects" style={{ textAlign: "start",marginTop:'24px',textDecoration:"none",color:"#8F95B2",fontWeight:"600",fontSize:"18px",lineHeight:"20px",display:"flex",columnGap:"12px" }}>
         <div className="menu_msg_icon"><img src={TowerChartIcont} alt="" /></div>
         <div className="menu_msg_dash_label">My Projects</div> 
        </a>
        <a className="menu-item" href="/integrations" style={{ textAlign: "start",marginTop:'24px',textDecoration:"none",color:"#8F95B2",fontWeight:"600",fontSize:"18px",lineHeight:"20px",display:"flex",columnGap:"12px" }}>
         <div className="menu_msg_icon"><img src={TowerChartIcont} alt="" /></div>
         <div className="menu_msg_dash_label">Integrations</div> 
        </a>
        <a className="menu-item" href="/performance-report" style={{ textAlign: "start",marginTop:'24px',textDecoration:"none",color:"#8F95B2",fontWeight:"600",fontSize:"18px",lineHeight:"20px",display:"flex",columnGap:"12px" }}>
         <div className="menu_msg_icon"><img src={TowerChartIcont} alt="" /></div>
         <div className="menu_msg_dash_label">Performance Report</div> 
        </a>
      <hr />
      <h4 style={{ textAlign: "start",marginTop:"40px" }}>Administration</h4>
      <a className="menu-item" href="/user-management" style={{ textAlign: "start",marginTop:'24px',textDecoration:"none",color:"#8F95B2",fontWeight:"600",fontSize:"18px",lineHeight:"20px",display:"flex",columnGap:"12px" }}>
         <div className="menu_msg_icon"><img src={MsgIcon} alt="" /></div>
         <div className="menu_msg_dash_label">User Management</div> 
        </a>
    </Menu>
  );
};

export default HamburgerMenu;
