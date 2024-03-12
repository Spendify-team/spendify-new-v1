import Experience from "../../components/Experience";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import HeroSection from "./components/HeroSection";
import MoneyManager from "./components/MoneyManager";
import MoneyManagerSummary from "./components/MoneyManagerSummary";

const OlaAi = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <MoneyManagerSummary />
      <MoneyManager />
      <Experience />
      <Footer />
    </main>
  );
};

export default OlaAi;
