import { Container } from "@chakra-ui/react";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Faq from "../home/components/Faq";

const FaqPage = () => {
  return (
    <main>
      <Header />
      <Container size="xl" pt={100}>
        <Faq />
      </Container>
      <Footer />
    </main>
  );
};

export default FaqPage;
