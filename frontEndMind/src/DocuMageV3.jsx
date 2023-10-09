// import React from 'react'
import "./DocuMageV3.css";
import Header from "./components/Header";
import MaskGroup from "./assets/mask-group.png";
import MaskWhiteGroup from "./assets/mask-white.png";
import FileUploader from "./assets/file-uploader.png";
import PurchaseIcon from "./assets/purchase-icon.png";
import UploadIcon from "./assets/upload-icon.png";
import RobotImage from "./assets/robot-img.png";
// import HamburgerMenu from "./components/HamburgerMenu";
import MsgIcon from "./assets/msg-icon.png";
import TowerChartIcont from "./assets/Chart.png";
import { useState } from "react";

function DocuMageV3() {
  const [buttonCount, setButtonCount] = useState(1);

  const createButtons = () => {
    const buttons = [];
    for (let i = 1; i <= buttonCount; i++) {
      buttons.push(
        <div>
          <button key={i} style={{background: "linear-gradient(92.46deg, rgb(185, 152, 255) 0%, rgb(212, 231, 255) 120.65%)",color:"#ffff",width:"220px",height:"40px",border: "1px solid rgb(255, 255, 255)",borderRadius:"8px"}}>Session {i}</button>
        </div>
      );
    }
    return buttons;
  };

  return (
    // <div className='hello'>Welcome to the DashBoard</div>
    <>
      <Header />

      <div
        style={{
          // border: "1px solid black",
          height: "93vh",
          width: "20%",
          float: "left",
          marginTop:"63px"
        }}
      >
        <div className="vertical-buttons-container">
          {createButtons()}
        
        <button
          onClick={() => setButtonCount(buttonCount + 1)}
          style={{
            float: "right",
            marginRight: "46px",
            background:
            "linear-gradient(92.46deg, #B998FF 0%, #D4E7FF 120.65%)",
            color: "#ffff",
            width: "220px",
            marginTop: "12px",
            height: "40px",
            border: "1px solid #ffff",
            borderRadius: "8px",
          }}
          >
          New Session +
        </button>
      </div>

        <div
          style={{
            // border: "1px solid red",
            // width: "22%",
            height: "100%",
            background: "#ffff",
            position:"fixed"
          }}
        >
          <div
            className="dashboard_reduction__menu"
            style={{ padding: "16px" }}
          >
            <div style={{ marginTop: "10rem" }} className="reduction_menu_msg_active">
              <img
                src={MsgIcon}
                alt=""
                style={{ height: "30px", width: "30px" }}
              />
            </div>

            <div>
              <img
                src={TowerChartIcont}
                alt=""
                style={{ height: "30px", width: "30px", marginTop: "30px" }}
              />
            </div>

            <div>
              <img
                src={TowerChartIcont}
                alt=""
                style={{ height: "30px", width: "30px", marginTop: "30px" }}
              />
            </div>
            
            <div>
              <img
                src={TowerChartIcont}
                alt=""
                style={{ height: "30px", width: "30px", marginTop: "30px" }}
              />
            </div>
          </div>
        </div>
      </div>
{/* =============================================== */}
      <div
        style={{
          // border: "2px solid blue",
          // height: "93vh",
          width: "80%",
          float: "left",
          marginTop:"63px"
        }}
      >
        {/* =======================section 1 ===============> */}
        
        <div
          style={{
            // border: "1px solid red",
            height: "331px",
            margin: "30px 60px 30px 30px",
            borderRadius: "16px",
          }}
        >
          <img
            src={MaskGroup}
            alt=""
            style={{
              height: "328px",
              width: "75%",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              borderRadius: "16px",
              position: "absolute",
            }}
          />
          <div className="mindmap__doc_main">
            <div
              className="doc_fileupload"
              style={{
                // border: "1px solid red",
                width: "252.28px",
                height: "279px",
                margin: "25px",
              }}
            >
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  fontFamily: "Inter",
                  color: "#081735",
                }}
              >
                MindMap Docu Mage v3
              </h2>
              <p
                style={{
                  color: "#718096",
                  fontFamily: "INTER",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "22.4px",
                }}
              >
                Please Upload PDF or Image files
              </p>
              <div className="file__uploader">
                <img
                  src={FileUploader}
                  alt=""
                  style={{ width: "256px", height: "132px", cursor: "pointer" }}
                />
              </div>
              <p
                style={{
                  color: "#718096",
                  fontFamily: "INTER",
                  fontWeight: "400",
                  fontSize: "13px",
                  lineHeight: "20.8px",
                }}
              >
                Word Count: 489
              </p>
              <p
                style={{
                  color: "#718096",
                  fontFamily: "INTER",
                  fontWeight: "400",
                  fontSize: "13px",
                  lineHeight: "20.8px",
                }}
              >
                OCR Status: MindMap OCR
              </p>
            </div>
            <div
              className="doc_purchase_upload"
              style={{
                // border: "1px solid red",
                height: "279px",
                width: "267px",
                marginTop: "26px",
              }}
            >
              <div className="pages_purchased">
                <div className="profile_cont_right" style={{ padding: "20px" }}>
                  <div className="pages_purchase_image">
                    <img src={PurchaseIcon} alt="" />
                  </div>
                  <div className="personal_detail">
                    <h3 style={{ width: "130px" }}>Pages Purchased</h3>
                    <div className="standard__user">
                      <p
                        style={{
                          background:
                            "linear-gradient(90deg, #B998FF 0%, #A8D1FF 33.5%) !importent",
                        }}
                      >
                        000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pages_uploaded">
                <div className="profile_cont_right" style={{ padding: "20px" }}>
                  <div className="pages_upload_image">
                    <img src={UploadIcon} alt="" />
                  </div>
                  <div className="personal_detail">
                    <h3 style={{ width: "130px" }}>Pages Uploaded</h3>
                    <div className="standard__user">
                      <p
                        style={{
                          background:
                            "linear-gradient(90deg, #B998FF 0%, #A8D1FF 33.5%) !importent",
                        }}
                      >
                        000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =======================section 1 ===============> */}

        <div
          style={
            {
              // border: "1px solid black",
              // height: "236px",
              // margin: "30px 60px 30px 30px",
              // borderRadius: "16px",
              // background:
              //   "linear-gradient(91.9deg, #EFE8FF -0.11%, #E5EEFB 100.59%)",
              // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              // width:"94%"
            }
          }
          className="main2_boto_doc_cont"
        >
          <div className="mindmap__doc_main">
            <div
              className="doc_fileupload"
              style={{
                // border: "1px solid red",
                height: "180px",
                width: "905px",
                // marginTop: "30px",
                // marginLeft:"27px"
              }}
            >
              <p style={{ width: "100%", fontSize: "15px", color: "#718096" }}>
                Ask a question about the uploaded document. You can submit
                multiple questions one after the other as well:
              </p>
              <input
                type="text"
                placeholder="Enter Your Question"
                name="question"
                className="form-control input_your_question"
                // onChange={handleInput}
              />
              <button type="submit" className="btn w-20 ask__submit_question">
                Ask Hercules
              </button>
            </div>
            <div
              className="doc_purchase_upload"
              style={{
                // border: "1px solid red",
                height: "180px",
                width: "160px",
                // marginTop: "30px",
              }}
            >
              <img src={RobotImage} alt="" />
            </div>
          </div>
        </div>

        <div
          style={{
            // border: "1px solid black",
            height: "40vh",
            margin: "30px 0px 0px 30px",
            borderRadius: "16px 16px 0px 0px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            width: "94%",
          }}
        >
          <img
            src={MaskWhiteGroup}
            alt=""
            style={{ width: "75%", height: "40vh", position: "absolute  " }}
          />
          <h2
            style={{
              position: "absolute",
              color: "#718096",
              padding: "25px 0px 0px 27px",
              fontSize: "18px",
              fontWeight: "600",
              lineHeight: "25px",
              fontFamily: "Inter",
            }}
          >
            Summary
          </h2>
          <table
            className="table table-bordered table-light"
            style={{ position: "absolute", width: "75%", marginTop: "60px" }}
          >
            <thead>
              <tr>
                <th
                  scope="col"
                  style={{
                    color: "#8F95B2",
                    height: "60px",
                    lineHeight: "40px",
                    background: "#EBE1FF",
                  }}
                >
                  Question
                </th>
                <th
                  scope="col"
                  style={{
                    color: "#8F95B2",
                    height: "60px",
                    lineHeight: "40px",
                    background: "#EBE1FF",
                  }}
                >
                  Answer
                </th>
                {/* <th scope="col">Handle</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                {/* <td>@mdo</td> */}
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                {/* <td>@fat</td> */}
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                {/* <td>@fat</td> */}
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                {/* <td>@fat</td> */}
              </tr>


              
            </tbody>
          </table>

          <button className="summery__dataDownlad">Download</button>
          
        </div>
      </div>
    </>
  );
}

export default DocuMageV3;
