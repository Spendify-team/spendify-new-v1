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
import FaqSectionCmp from "./components/FaqSectionCmp/FaqSectionCmp";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";


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
                        <Route path="/faq" component={<FaqSectionCmp/>}/>
                    </Routes>
                </ScrollToTop>
            </Router>
        </>
    );
}

export default App;
