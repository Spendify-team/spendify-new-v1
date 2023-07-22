import React from "react";
import FooterCmp from "../components/FooterCmp/FooterCmp";
import NavbarCmp from "../components/NavbarCmp/NavbarCmp";
import PaystackBuyButton from "../components/PaystackButton/PaystackButton";
import {CardGroup, Container, Card} from "react-bootstrap";
import {useLocation} from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Subscribe = () => {
    const query = useQuery();
    const email = query.get('email');
    const phone = query.get('phone');

    return (
        <>
            <NavbarCmp/>
            <br/>
            <br/>
            <br/>
            <Container>

                <div style={{display: "flex", justifyContent: "center"}}>
                    <CardGroup className="shadow">
                        <Card className="text-center align-content-center border-0">
                            <Card.Img variant="top"
                                      src="https://i.im.ge/2023/07/22/5cKXZp.olaback.png"
                                      className="image"/>
                        </Card>
                        <Card className="text-center align-content-center custom-card border-0">
                            <Card.Body className="">
                                <br/>
                                <br/>
                                <Card.Text>
                                    <PaystackBuyButton/>
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
