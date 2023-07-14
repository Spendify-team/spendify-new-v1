import React from "react";
import FooterCmp from "../components/FooterCmp/FooterCmp";
import NavbarCmp from "../components/NavbarCmp/NavbarCmp";
import PaystackBuyButton from "../components/PaystackButton/PaystackButton";
import {Col, Row, Tabs, Tab, Container, Card} from "react-bootstrap";


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
                    <Tab eventKey="paystack" title={<><img src="https://i.im.ge/2023/07/14/5Lwbpa.Paystack-mark-white-twitter.png" alt="Paystack Icon" className="picon" /> Paystack</>}>

                        <Card className="text-center">
                            <Card.Body className="shadow">
                                <Card.Title>Paystack Payment</Card.Title>
                                <br/>
                                <Card.Text>
                                    <PaystackBuyButton/>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                Subscription
                            </Card.Footer>
                        </Card>

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
