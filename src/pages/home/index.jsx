import Header from "../../components/layout/Header";
import Experience from "../../components/Experience";
import Faq from "./components/Faq";
import HeroSection from "./components/HeroSection";
import OurProducts from "./components/OurProducts";
import UsersReview from "./components/UsersReview";
import Footer from "../../components/layout/Footer";
import Partners from "./components/Partners";
import AppFeature from "./components/AppFeature";

const HomePage = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <Partners />
      <OurProducts />
      <UsersReview />
      <AppFeature />
      <Faq />
      <Experience />
      <Footer />
    </main>
  );
};

export default HomePage;
