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


function App() {
    return (
        <>
            <Router>
                <ScrollToTop>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/spendify-app" element={<SpendifyApp/>}/>
                        <Route path="/spendify-analytics" element={<SpendifyAnalytics/>}/>
                        <Route path="/policies/privacy" element={<Privacy/>}/>
                        <Route path="/policies/terms" element={<Terms/>}/>
                        <Route path="/faq" element={<Faq/>}/>
                        <Route path="/subscribe" element={<Subscribe/>}/>
                    </Routes>
                </ScrollToTop>
            </Router>
        </>
    );
}

export default App;
