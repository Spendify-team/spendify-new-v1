import React, {useEffect, useState} from 'react';
import {PaystackButton} from 'react-paystack';
import Form from 'react-bootstrap/Form';
import {Row, Col} from 'react-bootstrap';
import './button.css'
import {useLocation} from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const PaystackBuyButton = ({country}) => {
    const [countryMain, setCountry] = useState('')

    async function fetchCountry() {
        const response = await (await fetch('https://api.ipify.org/?format=json')).json()
        const lookup = await(await fetch(`https://api.ipdata.co/${response.ip}?api-key=598258db594c7e41437bea7c913a1aa92e1e82c07932e9be261a2bd8&fields=ip,is_eu,city,region,region_code,country_name,country_code,continent_name,continent_code,latitude,longitude,postal,calling_code,flag,emoji_flag,emoji_unicode`)).json()
        if (!!country) {
            setCountry(lookup.country_code)
            country = countryMain;
        }
    }

    useEffect(() => {
        fetchCountry();
    }, [fetchCountry])

    const apiCall = 'https://api.spendify.ca/api/v1/bot/new';

    const query = useQuery();
    const email = query.get('email');
    const phone = query.get('phone');

    const [config, setConfig] = useState({
        reference: new Date().getTime().toString(),
        email: email ? email : '',
        phone: phone ? phone : '',
        type: '1',
        paymentGt: country === 'NG' ? '1' : '0',
        publicKey: 'pk_live_24e56df86f6a8c8789ebbfa5c93cd21e8f4c1b92',
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

    const submitData = async () => {

        const res = await fetch(apiCall, {
            method: 'POST',
            body: JSON.stringify({email: config.email, phone: config.phone}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let response = await res.json();
        console.log(response)

    }

    const handleClick = () => {
        // if (!config.paymentGt || !config.email || !config.phone || !config.type) return window.alert('Please fill all fields')
        let url = config.type === '1' ? `https://buy.stripe.com/eVaeYzbTZcXu2Z27su?prefilled_email=${encodeURIComponent(config.email)}&client_reference_id=${config.type}` : `https://buy.stripe.com/7sI9EfcY35v21UY6or?prefilled_email=${encodeURIComponent(config.email)}&client_reference_id=${config.type}`
        window.open(url, '_blank');
    }
    return (

        <Form onSubmit={(e) => {

            e.preventDefault()
            submitData()
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
                    <Form.Label htmlFor="type" column sm={2}>Plan</Form.Label>
                    <Col sm={10}>

                        <Form.Select id="type"
                                     name="type"
                                     value={config.type}
                                     onChange={handleInputChange}
                                     required
                        >
                            <option value={'1'}>Monthly</option>
                            <option value={'12'}>Yearly</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Group className="mb-3" as={Row}>
                    <Form.Label htmlFor="paymentGt" column sm={2}>Payment Gateway</Form.Label>
                    <Col sm={10}>

                        <Form.Select id="paymentGt"
                                     name="paymentGt"
                                     value={config.paymentGt}
                                     onChange={handleInputChange}
                                     required
                        >
                            {country === 'NG' ?
                                <option value={'1'}>Paystack</option>
                                :
                                <option value={'0'}>Stripe</option>
                            }
                        </Form.Select>
                    </Col>
                </Form.Group>
                <div className="text-center align-content-center ">
                    {country === 'NG' ?
                        <PaystackButton
                            text="Pay Now"
                            amount={config.type === '12' ? '1200000' : '100000'}
                            metadata={{type: config.type}}
                            {...config}
                            onSuccess={handlePaymentSuccess}
                            onError={handlePaymentError}
                            className="paystack-button"
                        /> :
                        <button onClick={handleClick} type={'submit'} className={"paystack-button"}>Pay Now
                        </button>
                    }
                </div>
            </fieldset>
        </Form>
    )
        ;
};

export default PaystackBuyButton;
