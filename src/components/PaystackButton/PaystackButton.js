import React, {useState} from 'react';
import {PaystackButton} from 'react-paystack';
import Form from 'react-bootstrap/Form';
import {Row, Col} from 'react-bootstrap';
import './button.css'
import {useLocation} from 'react-router-dom';
import {useEffect} from 'react';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const PaystackBuyButton = () => {
    const query = useQuery();
    const email = query.get('email');
    const phone = query.get('phone');

    const [config, setConfig] = useState({
        reference: new Date().getTime().toString(),
        email: email ? email : '',
        phone: phone ? phone : '',
        amount: '',
        publicKey: 'pk_test_46d593161ae1645eff5c58e09495fe818f90d867',
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setConfig((prevConfig) => ({...prevConfig, [name]: value}));
    };

    const handlePaymentSuccess = (response) => {
        // Handle successful payment
        console.log('Payment successful:', response);
    };


    const handlePaymentError = (error) => {
        // Handle payment error
        console.error('Payment error:', error);
    };

    return (

        <Form onSubmit={(e) => {
            e.preventDefault()
        }}>
            <fieldset>
                <Form.Group className="mb-3" as={Row}>
                    <Form.Label htmlFor="email" column sm={2}>Email: </Form.Label>
                    <Col sm={10}>

                        <Form.Control id="email" placeholder="email"
                                      type="email"
                                      name="email"
                                      value={config.email}
                                      onChange={handleInputChange}
                                      required
                        />
                    </Col>
                </Form.Group>
                <Form.Group className="mb-3" as={Row}>
                    <Form.Label htmlFor="phone" column sm={2}>Phone: </Form.Label>
                    <Col sm={10}>

                        <Form.Control id="phone" placeholder="phone"
                                      type="phone"
                                      name="phone"
                                      value={config.phone}
                                      onChange={handleInputChange}
                                      required
                                      disabled={!!phone}
                        />
                    </Col>
                </Form.Group>
                <Form.Group className="mb-3" as={Row}>
                    <Form.Label htmlFor="plan" column sm={2}>Plan</Form.Label>
                    <Col sm={10}>

                        <Form.Select id="plan"
                                     name="amount"
                                     value={config.amount}
                                     onChange={handleInputChange}
                                     required
                        >
                            <option>Select subscription type</option>
                            <option value={'100000'}>Monthly</option>
                            <option value={'2850000'}>Yearly</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
                <PaystackButton
                    text="Pay Now"
                    {...config}
                    onSuccess={handlePaymentSuccess}
                    onError={handlePaymentError}
                    className="paystack-button"
                />
            </fieldset>
        </Form>
    );
};

export default PaystackBuyButton;
