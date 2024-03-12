import Experience from "../../components/Experience";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import FlagsSection from "./components/FlagsSection";
import HeroSection from "./components/HeroSection";
import MoneyManager from "./components/MoneyManager";
import PeriodicReport from "./components/PeriodicReport";
import SpendifySteps from "./components/SpendifySteps";

const SpendifyApp = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <FlagsSection />
      <MoneyManager />
      <PeriodicReport />
      <SpendifySteps />
      <Experience />
      <Footer />
    </main>
  );
};

export default SpendifyApp;
