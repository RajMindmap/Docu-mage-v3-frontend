// import React from 'react'
import "./Dashboard.css";
import Header from "./components/Header";
import BackImgRactangle from "./assets/ractangle-img-dash.png";
import PagePurchaseCard from "./components/CardComponent/PagePurchaseCard";
import PageUploadCard from "./components/CardComponent/PageUploadCard";
import TrendLineGraphCard from "./components/CardComponent/TrendLineGraphCard";
import DashDropdown from "./components/DashboardDropdown/DashDropdown";
import PagePurchaseIcon from "./assets/page-purchase-icon.png";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div
        style={{ 
          // border: "1px solid red",
          width: "100%", height: "7vh" }}
        className="header__main_cont"
      ></div>
      {/* <div style={{border:"1px solid red", width:"18%",height:"93vh",float:'left',marginTop:"16rem"}} className='left__menu_main_cont'></div> */}
      <div
        style={{ 
          // border: "5px solid red",
          width: "100%", height: "93vh" }}
        className="right__main_cont"
      >
        <div style={{ 
          // border: "1px solid red", 
          height: "18rem" }}>
          <div className="classi__menu_item">
            <nav className="menu">
              <ul className="menu-list">
                <li className="menu-item">
                  <a
                    href="/"
                    style={{
                      background: "#ffff",
                      padding: "12px",
                      borderRadius: "12px",
                    }}
                  >
                    Classifications
                  </a>
                </li>
                <li className="menu-item">
                  <a href="/extraction" style={{ color: "black" }}>
                    Extractions
                  </a>
                </li>
                <li className="menu-item">
                  <a href="/redaction" style={{ color: "black" }}>
                    Redaction
                  </a>
                </li>
                <li className="menu-item">
                  <a href="/intractive-ai" style={{ color: "black" }}>
                    Interactive AI
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="main__pages_purchase_upload">
            <PagePurchaseCard title="Pages Purchased" content="000" />
            <PageUploadCard title="Pages Uploaded" content="000" />
            <TrendLineGraphCard title="Trend Line" />
          </div>
          <img src={BackImgRactangle} alt="" style={{ width: "100%" }} />
        </div>

        <div
          style={{
            // border: "1px solid red",
            height: "80px",
            width: "78%",
            marginTop: "86px",
            marginLeft: "20%",
          }}
        >
          <DashDropdown />
        </div>
        <div
          style={{
            // border: "1px solid red",
            height: "280px",
            width: "76%",
            marginTop: "18px",
            marginLeft: "21%",
            background: "#fff",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            borderRadius: "10px"
          }}
        >
          <div
            className="main__dash_contentDiv_displayData"
            style={{ display: "flex" }}
          >
            <div className="main__dash_pageProcess">
              <div className="pages__process_background">
                <div className="sub_page__process_background">
                  <img
                    src={PagePurchaseIcon}
                    alt=""
                    style={{ height: "50px", width: "50px", margin: "24px" }}
                  />
                  <div
                    className="main_percent_div_content"
                    style={{ width: "64px" }}
                  >
                    <div className="sub_parcent_div">+ 18%</div>
                    <div className="sub_parcent_title">Lorem</div>
                  </div>
                </div>
                <h2 className="page__heading">Pages Processed</h2>
                <h2 className="pageAmount">0000</h2>
              </div>
            </div>

            <div className="main__dash_pageProcess">
              <div className="pages__process_background">
                <div className="sub_page__process_background">
                  <img
                    src={PagePurchaseIcon}
                    alt=""
                    style={{ height: "50px", width: "50px", margin: "24px" }}
                  />
                  <div
                    className="main_percent_div_content"
                    style={{ width: "64px" }}
                  >
                    <div className="sub_parcent_div">+ 18%</div>
                    <div className="sub_parcent_title">Lorem</div>
                  </div>
                </div>
                <h2 className="page__heading">Pages Uploaded</h2>
                <h2 className="pageAmount">0000</h2>
              </div>
            </div>

            <div className="main__dash_pageProcess">
              <div className="pages__process_background">
                <div className="sub_page__process_background">
                  <img
                    src={PagePurchaseIcon}
                    alt=""
                    style={{ height: "50px", width: "50px", margin: "24px" }}
                  />
                  <div
                    className="main_percent_div_content"
                    style={{ width: "64px" }}
                  >
                    <div className="sub_parcent_div">+ 18%</div>
                    <div className="sub_parcent_title">Lorem</div>
                  </div>
                </div>
                <h2 className="page__heading">Accuracy</h2>
                <h2 className="pageAmount">0000</h2>
              </div>
            </div>

            <div className="main__dash_pageProcess">
              <div className="pages__process_background">
                <div className="sub_page__process_background">
                  <img
                    src={PagePurchaseIcon}
                    alt=""
                    style={{ height: "50px", width: "50px", margin: "24px" }}
                  />
                  <div
                    className="main_percent_div_content"
                    style={{ width: "64px" }}
                  >
                    <div className="sub_parcent_div">+ 18%</div>
                    <div className="sub_parcent_title">Lorem</div>
                  </div>
                </div>
                <h2 className="page__heading">Straight-Through Processing</h2>
                <h2 className="pageAmount">0000</h2>
              </div>
            </div>


{/* 
            <div className="main__dash_pageUpload"></div>
            <div className="main__dash_Accuracy"></div>
            <div className="main__dash_straightProcessing"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
