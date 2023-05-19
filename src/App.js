import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

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

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spendify-app" element={<SpendifyApp />} />
          <Route path="/spendify-analytics" element={<SpendifyAnalytics />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
