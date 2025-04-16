import Experience from "../../components/Experience";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import PricingSection from "./components/PricingSection.jsx";
import {Container} from "@chakra-ui/react";

const Pricing = () => {
    return (
        <main>
            <Header/>
            <Container size="xl" pt={100}>
                <PricingSection/>
            </Container>
            <Experience/>
            <Footer/>
        </main>
    );
};

export default Pricing;
