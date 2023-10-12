import React from 'react'
import './PreTrainedModel.css'
import Header from './components/Header'
import PagePurchaseIcon from "./assets/page-purchase-icon.png";

export const PreTrainedModel = () => {
    return (
        <>
            {/* <div className='kukur'>PreTrainedModel</div> */}
            <Header />
            <div style={{ border: "3px solid red", height: "100vh", width: "100", margin: "0px", padding: "0px" }}>
                <div style={{ border: "2px solid blue", height: "99vh", width: "20%", float: "left" }}></div>
                <div style={{ border: "2px solid blue", height: "99vh", width: "80%", float: "left", background: "linear-gradient(269.45deg, #B998FF 26.93%, #ACCDFF 64.08%)" }}>

                    <div className="classi__menu_item_pretrend">
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


                    <div
                        style={{
                            // border: "1px solid red",
                            marginTop: "64px",
                            background: "#fff",
                            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                            borderRadius: "10px",
                            width: "94%",
                            marginLeft: "3%"
                        }}
                    >
                        <div
                            className="main__pretrained_option"
                            // style={{ display: "flex" }}
                        >
                            <div className="main__dash_pageProcess">
                                <div className="pages__process_background">
                                    <div className="sub_page__process_background">
                                        <img
                                            src={PagePurchaseIcon}
                                            alt=""
                                            style={{ height: "50px", width: "50px", margin: "24px" }}
                                        />
                                       
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
                                        {/* <div
                                            className="main_percent_div_content"
                                            style={{ width: "64px" }}
                                        >
                                            <div className="sub_parcent_div">+ 18%</div>
                                            <div className="sub_parcent_title">Lorem</div>
                                        </div> */}
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
                                        {/* <div
                                            className="main_percent_div_content"
                                            style={{ width: "64px" }}
                                        >
                                            <div className="sub_parcent_div">+ 18%</div>
                                            <div className="sub_parcent_title">Lorem</div>
                                        </div> */}
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
                                        {/* <div
                                            className="main_percent_div_content"
                                            style={{ width: "64px" }}
                                        >
                                            <div className="sub_parcent_div">+ 18%</div>
                                            <div className="sub_parcent_title">Lorem</div>
                                        </div> */}
                                    </div>
                                    <h2 className="page__heading">Straight-Through Processing</h2>
                                    <h2 className="pageAmount">0000</h2>
                                </div>
                            </div>

                        </div>

                        <div
                            className="main__pretrained_option"
                            // style={{ display: "flex" }}
                        >
                            <div className="main__dash_pageProcess">
                                <div className="pages__process_background">
                                    <div className="sub_page__process_background">
                                        <img
                                            src={PagePurchaseIcon}
                                            alt=""
                                            style={{ height: "50px", width: "50px", margin: "24px" }}
                                        />
                                        {/* <div
                                            className="main_percent_div_content"
                                            style={{ width: "64px" }}
                                        >
                                            <div className="sub_parcent_div">+ 18%</div>
                                            <div className="sub_parcent_title">Lorem</div>
                                        </div> */}
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
                                        {/* <div
                                            className="main_percent_div_content"
                                            style={{ width: "64px" }}
                                        >
                                            <div className="sub_parcent_div">+ 18%</div>
                                            <div className="sub_parcent_title">Lorem</div>
                                        </div> */}
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
                                        {/* <div
                                            className="main_percent_div_content"
                                            style={{ width: "64px" }}
                                        >
                                            <div className="sub_parcent_div">+ 18%</div>
                                            <div className="sub_parcent_title">Lorem</div>
                                        </div> */}
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
                                        {/* <div
                                            className="main_percent_div_content"
                                            style={{ width: "64px" }}
                                        >
                                            <div className="sub_parcent_div">+ 18%</div>
                                            <div className="sub_parcent_title">Lorem</div>
                                        </div> */}
                                    </div>
                                    <h2 className="page__heading">Straight-Through Processing</h2>
                                    <h2 className="pageAmount">0000</h2>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>



        </>
    )
}
