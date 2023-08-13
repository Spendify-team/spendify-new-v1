import React from "react";
import FooterCmp from "../components/FooterCmp/FooterCmp";
import NavbarCmp from "../components/NavbarCmp/NavbarCmp";
import PaystackBuyButton from "../components/PaystackButton/PaystackButton";
import {CardGroup, Container, Card} from "react-bootstrap";

const Subscribe = ({country}) => {

    return (
        <>
            <NavbarCmp/>
            <br/>
            <br/>
            <br/>
            <Container>

                <div>
                    <CardGroup className="shadow">
                        <Card className="text-center align-content-center border-0">
                            <Card.Img variant="top"
                                      src="https://i.im.ge/2023/07/23/5g4P2x.olaback.png"
                                      className="image"/>
                        </Card>
                        <Card className="custom-card border-0">
                            <Card.Body className="">
                                <br/>
                                <br/>
                                <br/>
                                <Card.Text>
                                    <PaystackBuyButton country={country}/>
                                </Card.Text>
                            </Card.Body>
                            <br/>
                        </Card>
                    </CardGroup>
                </div>
            </Container>
            <br/>
            <br/>
            <FooterCmp/>
        </>
    );
};

export default Subscribe;
