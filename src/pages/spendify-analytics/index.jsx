import Experience from "../../components/Experience";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Analytics from "./components/Analytics";
import HeroSection from "./components/HeroSection";
import Insight from "./components/Insight";

const SpendifyAnalytics = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <Analytics />
      <Insight />
      <Experience />
      <Footer />
    </main>
  );
};

export default SpendifyAnalytics;
