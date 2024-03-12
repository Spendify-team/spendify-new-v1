import { Box, Container, Heading, Text } from "@chakra-ui/react";
import AppFeatureCarousel from "./AppFeatureCarousel";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AppFeature = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="appFeatureSection">
      <Container size="xl" centerContent pt={55}>
        <Heading
          fontFamily="gilroy"
          fontSize={40}
          fontWeight={700}
          color="neutralGray900"
          data-aos="fade-up"
        >
          App Features
        </Heading>
        <Container maxW="650px" px={0}>
          <Text
            data-aos="fade-up"
            fontSize={20}
            color="darkGray"
            textAlign="center"
          >
            The simple, intuitive, and powerful expense tracker and budget app
            to manage your financial life. See screenshots
          </Text>
        </Container>
      </Container>
      <Box data-aos="fade-up" w="100%">
        <AppFeatureCarousel />
      </Box>
    </section>
  );
};

export default AppFeature;
