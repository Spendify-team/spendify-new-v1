import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

import ScrollToTop from './ScrollToTop';

import "./App.css";

//font files
import "./fonts/Gilroy-Regular.ttf";
import "./fonts/Gilroy-Medium.ttf";
import "./fonts/Gilroy-Semibold.ttf";
import "./fonts/Gilroy-Bold.ttf";
import "./fonts/Gilroy-Heavy.ttf";
import "./fonts/Gilroy-Black.ttf";
import Home from "./pages/Home";
import SpendifyApp from "./pages/SpendifyApp";
import SpendifyAnalytics from "./pages/SpendifyAnalytics";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Faq from "./pages/Faq";
import Subscribe from "./pages/Subscribe";
import {useEffect, useState} from "react";
import FaqOla from "./pages/FaqOla";


function App() {
    const [country, setCountry] = useState('')

// eslint-disable-next-line
    async function fetchCountry() {
        const response = await (await fetch('https://api.ipify.org/?format=json')).json()
        const lookup = await (await fetch(`https://api.ipdata.co/${response.ip}?api-key=598258db594c7e41437bea7c913a1aa92e1e82c07932e9be261a2bd8&fields=ip,is_eu,city,region,region_code,country_name,country_code,continent_name,continent_code,latitude,longitude,postal,calling_code,flag,emoji_flag,emoji_unicode`)).json()
        setCountry(lookup.country_code)
    }

    useEffect(() => {
        fetchCountry();
    }, [fetchCountry])
    return (
        <>
            <Router>
                <ScrollToTop>
                    <Routes>
                        <Route path="/" element={<Home country={country}/>}/>
                        <Route path="/spendify-app" element={<SpendifyApp/>}/>
                        <Route path="/spendify-analytics" element={<SpendifyAnalytics/>}/>
                        <Route path="/policies/privacy" element={<Privacy/>}/>
                        <Route path="/policies/terms" element={<Terms/>}/>
                        <Route path="/faq" element={<Faq/>}/>
                        <Route path="/commands" element={<FaqOla/>}/>
                        <Route path="/subscribe" element={<Subscribe country={country}/>}/>
                    </Routes>
                </ScrollToTop>
            </Router>
        </>
    );
}

export default App;
