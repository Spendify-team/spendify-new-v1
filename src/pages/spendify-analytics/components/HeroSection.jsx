import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import HeroImg from "../../../assets/img/SpendifyAnalysis.png";
import Pointer from "../../../assets/icon/Pointer.svg";
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
          <Container maxW="900px" px={0}>
            <Heading
              fontSize={[30, 48, null, 60]}
              fontWeight={700}
              color="neutralGray900"
              fontFamily="Gilroy700"
              mb={17}
              textAlign="center"
              data-aos="fade-up"
            >
              Transform Your Business Insight with{" "}
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
          </Container>
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
          <Button
            variant="primaryButton"
            px={5}
            py="14px"
            fontWeight={600}
            fontFamily="Gilroy600"
            color="neutralGray50"
            data-aos="fade-up"
          >
            Subcribe
          </Button>
          <Box
            maxW="982px"
            data-aos="fade-up"
            w="100%"
            h={["100%", null, null, "657px"]}
          >
            <Image src={HeroImg} alt="hero image" />
          </Box>
          <Center data-aos="fade-up">
            <Image src={Pointer} alt="pointer" />
          </Center>
        </VStack>
      </Container>
    </section>
  );
};

export default HeroSection;
