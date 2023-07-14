import React from "react";
import FooterCmp from "../components/FooterCmp/FooterCmp";
import NavbarCmp from "../components/NavbarCmp/NavbarCmp";
import PaystackBuyButton from "../components/PaystackButton/PaystackButton";
import {CardGroup, Tabs, Tab, Container, Card} from "react-bootstrap";


const Subscribe = () => {

    return (
        <>
            <NavbarCmp/>
            <br/>
            <br/>
            <Container>

                <Tabs
                    defaultActiveKey="paystack"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    {/*<Tab eventKey="stripe" title={<><img src="https://i.im.ge/2023/07/14/5Lms90.Stripe-Emblem.png" alt="Stripe Icon" className="icon" /> Stripe</>}>*/}
                    {/*    <Row>*/}
                    {/*        <Col>*/}
                    {/*            <Card className="text-center">*/}
                    {/*                <Card.Body className="shadow">*/}
                    {/*                    <Card.Title>Monthly Subscription</Card.Title>*/}
                    {/*                    <Card.Text>*/}
                    {/*                        <stripe-buy-button*/}
                    {/*                            customer-email="jaysage73@gmail.com"*/}
                    {/*                            customer-phone="09016258859"*/}
                    {/*                            buy-button-id="buy_btn_1NTjXvAcxvDdmAlwSrC8btLa"*/}
                    {/*                            publishable-key="pk_live_51NB3uKAcxvDdmAlw0eNmlewWf2ezFANPnrhMOSskWHHMHWWlpnW2OeLpJIc8jZPOX6QRAE8v0xXPOdPfqAw9aVyC00o7IFjwD9"*/}
                    {/*                        >*/}
                    {/*                        </stripe-buy-button>*/}
                    {/*                    </Card.Text>*/}
                    {/*                </Card.Body>*/}
                    {/*            </Card>*/}
                    {/*        </Col>*/}
                    {/*        <Col>*/}
                    {/*            <Card className="text-center">*/}
                    {/*                <Card.Body className="shadow">*/}
                    {/*                    <Card.Title>Yearly Subscription</Card.Title>*/}
                    {/*                    <Card.Text>*/}
                    {/*                        <stripe-buy-button*/}
                    {/*                            buy-button-id="buy_btn_1NTjaGAcxvDdmAlwyhXkTK3S"*/}
                    {/*                            publishable-key="pk_live_51NB3uKAcxvDdmAlw0eNmlewWf2ezFANPnrhMOSskWHHMHWWlpnW2OeLpJIc8jZPOX6QRAE8v0xXPOdPfqAw9aVyC00o7IFjwD9"*/}
                    {/*                        >*/}
                    {/*                        </stripe-buy-button>*/}
                    {/*                    </Card.Text>*/}
                    {/*                </Card.Body>*/}
                    {/*            </Card>*/}
                    {/*        </Col>*/}
                    {/*    </Row>*/}
                    {/*</Tab>*/}
                    <Tab eventKey="paystack"
                         title={<><img src="https://i.im.ge/2023/07/14/5Lwbpa.Paystack-mark-white-twitter.png"
                                       alt="Paystack Icon" className="picon"/> Paystack</>}>
                        <CardGroup className={'shadow'}>
                            <Card className="text-center align-content-center border-0">
                                <Card.Img variant="top"
                                          src="https://i.im.ge/2023/07/15/5U7llx.WhatsApp-Image-2023-06-29-at-11-46-44-PM.jpg"
                                          className={'image'}/>
                            </Card>
                            <Card className="text-center align-content-center custom-card border-0">
                                <Card.Body className="">
                                    <br/>
                                    <Card.Title><img src="https://i.im.ge/2023/07/15/5UDPzF.6079706c752a09007a6ebea3-Paystack-Logo.png"
                                                     alt="Paystack Icon" className="ptitle"/></Card.Title>
                                    <br/>
                                    <br/>
                                    <Card.Text>
                                        <PaystackBuyButton/>
                                    </Card.Text>
                                    {/*<Card.Img variant="top"*/}
                                    {/*          src="https://i.im.ge/2023/07/15/5UDQxY.paystack-logo-1.png"*/}
                                    {/*          className={'image'}/>*/}
                                </Card.Body>
                                <br/>
                            </Card>

                        </CardGroup>
                    </Tab>
                </Tabs>
            </Container>
            <br/>
            <br/>
            <FooterCmp/>
        </>
    );
};

export default Subscribe;
