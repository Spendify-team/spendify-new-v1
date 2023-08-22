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
        const lookup = await (await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_6SXAi2WibgDpaBsfhW1WpYz411rcq&ipAddress=${response.ip}`)).json()
        setCountry(lookup.location.country)
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
