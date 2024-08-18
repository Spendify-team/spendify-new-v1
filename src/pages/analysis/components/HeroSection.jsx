import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import HeroImg from "../../../assets/img/AnalysisHeroBg.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="herosection">
      <Container size="xl" centerContent py={55}>
        <VStack spacing={0}>
          <Heading
            fontSize={[30, 48, null, 60]}
            fontWeight={600}
            color="neutralGray900"
            fontFamily="Gilroy600"
            mb={17}
            textAlign="center"
            data-aos="fade-up"
            maxW="1050px"
          >
            Transform Your Personal & Business Insight with{" "}
            <Text
              as="span"
              fontWeight={900}
              fontFamily="Gilroy900"
              color="secondaryColor"
            >
              Spendify
            </Text>{" "}
            Analytics Today
          </Heading>
          <Container maxW="650px" px={0}>
            <Text
              textAlign="center"
              fontSize="20px"
              fontWeight={500}
              fontFamily="Gilroy500"
              color="darkGray"
              mb={8}
              data-aos="fade-up"
            >
              Understanding personal financial data can provide valuable insights.
            </Text>
          </Container>
          <Button
            variant="primaryButton"
            px={5}
            py="14px"
            fontWeight={600}
            fontFamily="Gilroy600"
            color="neutralGray50"
            mb={12}
            data-aos="fade-up"
          >
            Learn  more
          </Button>
          <Box
            justifyContent="center"
            mx="auto"
            mt={14}
            data-aos="fade-up"
            maxW="fit-content"
            w="100%"
            h={["100%", null, null, "516px"]}
          >
            <Image src={HeroImg} alt="hero image" />
          </Box>
        </VStack>
      </Container>
    </section>
  );
};

export default HeroSection;
