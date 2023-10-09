// import * as React from 'react'
import "./Header.css";
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
  return (
    <AppBar position="static" style={{ backgroundColor: '#FFFFFF',position:"fixed",zIndex:"1" }}>
      <Toolbar>
       
        <IconButton
          size="large"
          edge="start"
          color="#718096"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
         
          {/* <MenuIcon /> */}
          <HamburgerMenu />

        </IconButton>
        

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          color="black"
          size="24px"
        >
          Hi, User!
          <p
            style={{
              fontSize: "14px",
              color: "#718096",
              lineHeight: "6px",
              margin: "0px",
            }}
          >
            Let’s check your store today
          </p>
        </Typography>
        {/* <Button color="inherit">Login</Button> */}
        <div className="profile_cont_right">
          <div className="user_profile_img"></div>
          <div className="personal_detail">
            <h3>Personal Name </h3>
            <div className="standard__user">
              <p>standard user</p>
            </div>
          </div>
        </div>
      </Toolbar>
    </AppBar>
    // <div style={{border:"1px solid black",widows:"100%",height:"80px"}}>
    // </div>
  );
}

export default Header;
