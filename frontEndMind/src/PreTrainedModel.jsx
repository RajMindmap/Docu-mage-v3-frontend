import React from 'react'
import './PreTrainedModel.css'
import Header from './components/Header'
import PagePurchaseIcon from "./assets/page-purchase-icon.png";
import InvoicePretrained from './assets/invoice-pretrained.png';
import PassportImg from './assets/passport-img.png';
import RecieptPretrend from './assets/reciept-pretrend.png';
import EmiratesImg from './assets/emirate-img.png';
import CBSE12thImg from './assets/cbse12th.png';
import CBSE10thImg from './assets/cbse10th.png';
import AadharCardImg from './assets/adhar-card-img.png'
import Card from 'react-bootstrap/Card';
import PretrendStepper from './components/PreTrendStepperComp/MyStepper';

export const PreTrainedModel = () => {
    return (
        <>
            {/* <div className='kukur'>PreTrainedModel</div> */}
            <Header />
            <div style={{ border: "3px solid red", height: "100vh", width: "100", margin: "0px", padding: "0px" }}>
                <div style={{ border: "2px solid blue", height: "99vh", width: "20%", float: "left" }}></div>

                <div style={{ border: "1px solid blue", height: "99vh", width: "80%", float: "left" }}>

                    <PretrendStepper />

                    {/* <div className='stepper_navigationBar'>
                        <p className='stepperNavigation_title'>Pre Trained Models</p>
                        <p className='modelConf__title'>Model Configuration</p>
                        <p className='modelConf__title'>Inbound Integrations</p>
                        <p className='modelConf__title'>Outbound Integrations</p>
                        <p className='modelConf__title'>Initiate Project</p>
                    </div> */}

                    <div className="classi__menu_item_pretrend">
                        <nav className="menu">
                            <ul className="menu-list">
                                <li className="menu-item">
                                    <a
                                        href="/"
                                        style={{
                                            // background: "#ffff",
                                            background: "linear-gradient(94.62deg, #B998FF -3.69%, #ACCDFF 100%)",
                                            padding: "12px",
                                            borderRadius: "12px",
                                            color: "#FFF",
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
                            marginTop: "26px",
                            // background: "#fff",
                            // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                            // borderRadius: "10px",
                            // width: "84%",
                            marginLeft: "8%"
                        }}
                    >
                        <div
                            className="main__pretrained_option"

                        >
                            <Card style={{ width: '14rem', padding: "0px", margin: "32px" }}>
                                <Card.Img variant="top" src={InvoicePretrained} style={{ height: "94px", width: "80%", marginLeft: "38px" }} />
                                <Card.Body style={{ background: "#fff ", borderRadius: "0px 0px 45px 45px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                                    <Card.Title><h2 className="invoice_heading">Invoice</h2></Card.Title>
                                    <Card.Text>
                                        <h3 className="invoice_pageAmount">Lorem Ipsum is a dummy text</h3>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '14rem', padding: "0px", margin: "32px" }}>
                                <Card.Img variant="top" src={PassportImg} style={{ height: "94px", width: "80%", marginLeft: "42px" }} />
                                <Card.Body style={{ background: "#fff ", borderRadius: "0px 0px 45px 45px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                                    <Card.Title><h2 className="invoice_heading">Passport</h2></Card.Title>
                                    <Card.Text>
                                        <h3 className="invoice_pageAmount">Lorem Ipsum is a dummy text</h3>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '14rem', padding: "0px", margin: "32px" }}>
                                <Card.Img variant="top" src={RecieptPretrend} style={{ height: "94px", width: "80%", marginLeft: "18px" }} />
                                <Card.Body style={{ background: "#fff ", borderRadius: "0px 0px 45px 45px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                                    <Card.Title><h2 className="invoice_heading">Receipts</h2></Card.Title>
                                    <Card.Text>
                                        <h3 className="invoice_pageAmount">Lorem Ipsum is a dummy text</h3>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '14rem', padding: "0px", margin: "32px" }}>
                                <Card.Img variant="top" src={EmiratesImg} style={{ height: "94px", width: "80%", marginLeft: "2px" }} />
                                <Card.Body style={{ background: "#fff ", borderRadius: "0px 0px 45px 45px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                                    <Card.Title><h2 className="invoice_heading">Emirates ID</h2></Card.Title>
                                    <Card.Text>
                                        <h3 className="invoice_pageAmount">Lorem Ipsum is a dummy text</h3>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </div>

                        <div
                            className="main__pretrained_option"
                        >
                            <Card style={{ width: '14rem', padding: "0px", margin: "32px" }}>
                                <Card.Img variant="top" src={CBSE12thImg} style={{ height: "94px", width: "80%", marginLeft: "38px" }} />
                                <Card.Body style={{ background: "#fff ", borderRadius: "0px 0px 45px 45px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                                    <Card.Title><h2 className="invoice_heading">CBSE 12th</h2></Card.Title>
                                    <Card.Text>
                                        <h3 className="invoice_pageAmount">Lorem Ipsum is a dummy text</h3>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '14rem', padding: "0px", margin: "32px" }}>
                                <Card.Img variant="top" src={EmiratesImg} style={{ height: "94px", width: "80%", marginLeft: "2px" }} />
                                <Card.Body style={{ background: "#fff ", borderRadius: "0px 0px 45px 45px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                                    <Card.Title><h2 className="invoice_heading">Pan Card</h2></Card.Title>
                                    <Card.Text>
                                        <h3 className="invoice_pageAmount">Lorem Ipsum is a dummy text</h3>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '14rem', padding: "0px", margin: "32px" }}>
                                <Card.Img variant="top" src={CBSE10thImg} style={{ height: "94px", width: "80%" }} />
                                <Card.Body style={{ background: "#fff ", borderRadius: "0px 0px 45px 45px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                                    <Card.Title><h2 className="invoice_heading">CBSE 10th</h2></Card.Title>
                                    <Card.Text>
                                        <h3 className="invoice_pageAmount">Lorem Ipsum is a dummy text</h3>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '14rem', padding: "0px", margin: "32px" }}>
                                <Card.Img variant="top" src={AadharCardImg} style={{ height: "94px", width: "80%", marginLeft: "43px" }} />
                                <Card.Body style={{ background: "#fff ", borderRadius: "0px 0px 45px 45px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                                    <Card.Title><h2 className="invoice_heading">Aadhar Card</h2></Card.Title>
                                    <Card.Text>
                                        <h3 className="invoice_pageAmount">Lorem Ipsum is a dummy text</h3>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                </div>
            </div>



        </>
    )
}
