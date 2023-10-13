// import React from 'react'
import "./DocuMageV3.css";
import Header from "./components/Header";
import MaskGroup from "./assets/mask-group.png";
import MaskWhiteGroup from "./assets/mask-white.png";
import FileUploader from "./assets/file-uploader.png";
import PurchaseIcon from "./assets/purchase-icon.png";
import UploadIcon from "./assets/upload-icon.png";
import RobotImage from "./assets/robot-img.png";
import MsgIcon from "./assets/msg-icon.png";
import TowerChartIcont from "./assets/Chart.png";
import DocuMageSummaryTable from "./components/DocuMageSummaryTable/DocuMageSummaryTable";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = "http://localhost:5001"

function DocuMageV3() {
  const [buttonCount, setButtonCount] = useState(1);
  const [description, setDecription] = useState("")
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setDecription(e.target.value);
    // console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(description);

  }


  const createButtons = () => {
    const buttons = [];
    for (let i = 1; i <= buttonCount; i++) {
      buttons.push(
        <div>
          <button key={i} style={{ background: "linear-gradient(92.46deg, rgb(185, 152, 255) 0%, rgb(212, 231, 255) 120.65%)", color: "#ffff", width: "220px", height: "40px", border: "1px solid rgb(255, 255, 255)", borderRadius: "8px" }}>Session {i}</button>
        </div>
      );
    }
    return buttons;
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    // Do something with the selected file
    console.log('Selected file:', file);
  };

  axios.defaults.withCredentials = true;

  // const navigate = useNavigate();



  const handleUploadSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/upload", file)
      .then((res) => {
        if (res.data.Status === "Success") {
          // navigate("/docu-mage-v3");
          console.log('File submitted:', file);
        } else {
          alert(res.data.Message);
        }
      })
      .catch((err) => console.log(err));

  }

  return (
    <>
      <Header />
      <div
        style={{
          // border: "1px solid black",
          height: "93vh",
          width: "20%",
          float: "left",
          marginTop: "63px"
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
            position: "fixed"
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
          marginTop: "63px"
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
                MindMap Interactive AI
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
              <form onSubmit={handleUploadSubmit}>
                <div className="file__uploader">
                  {/* upload images for figma */}
                  {/* <img
                  src={FileUploader}
                  alt=""
                  style={{ width: "256px", height: "132px", cursor: "pointer" }}
                />   */}
                  <input type="file" onChange={handleFileChange} />
                </div>

                <button type="submit" class="btn btn-primary" style={{ marginTop: "10px" }}>Upload</button>
              </form>
              <p
                style={{
                  color: "#718096",
                  fontFamily: "INTER",
                  fontWeight: "400",
                  fontSize: "13px",
                  lineHeight: "20.8px",
                  marginTop: "10px"
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
              <form onSubmit={handleSubmit}>
                <p style={{ width: "100%", fontSize: "15px", color: "#718096" }}>
                  Ask a question about the uploaded document. You can submit
                  multiple questions one after the other as well:
                </p>
                <input
                  type="text"
                  placeholder="Enter Your Question"
                  name="question"
                  className="form-control input_your_question"
                  onChange={handleChange}
                />

                <button type="submit" className="btn w-20 ask__submit_question">
                  Ask Hercules
                </button>
              </form>
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

          <div style={{ position: "absolute", width: "73%", padding: "44px 0px 10px 0px", margin: "16px" }}>
            <DocuMageSummaryTable />

          </div>
          <button className="summery__dataDownlad">Download</button>

        </div>
      </div>
    </>
  );
}

export default DocuMageV3;
