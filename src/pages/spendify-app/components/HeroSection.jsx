import {
  Box,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import AppStore from "../../../assets/img/AppStore.png";
import PlayStore from "../../../assets/img/PlayStore.png";
import SpendifyWeb from "../../../assets/img/SpendifyWeb.png";
import SpendifyAppHero from "../../../assets/img/SpendifyAppHero.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const buttons = [
    {
      name: "AppStore Download",
      button: AppStore,
      data: "fade-right",
    },
    {
      name: "PlayStore Download",
      button: PlayStore,
      data: "fade-up",
    },
    {
      name: "Spendify web",
      button: SpendifyWeb,
      data: "fade-left",
    },
  ];

  return (
    <section className="herosection">
      <Container size="xl" centerContent py={55}>
        <VStack spacing={0}>
          <Container maxW="1000px">
            <Heading
              fontSize={[30, 48, null, 60]}
              fontWeight={700}
              color="neutralGray900"
              fontFamily="Gilroy700"
              mb={17}
              textAlign="center"
              data-aos="fade-up"
            >
              Easily budget, track expenses, and control{" "}
              <Text
                as="span"
                fontWeight={900}
                fontFamily="Gilroy900"
                color="secondaryColor"
              >
                finances
              </Text>{" "}
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
            We believe that the right step to effective personal finance
            decisions starts with you.
          </Text>
          <Stack direction={["column", "row"]} spacing={21} mb={65}>
            {buttons.map((btn, i) => (
              <Box
                data-aos={btn.data}
                key={i}
                cursor="pointer"
                maxW="171px"
                w="100%"
                h={54}
              >
                <Image src={btn.button} alt={btn.name} />
              </Box>
            ))}
          </Stack>
          <Box
            data-aos="fade-up"
            maxW="594px"
            w="100%"
            h={["100%", null, null, "596px"]}
          >
            <Image src={SpendifyAppHero} alt="hero image" />
          </Box>
        </VStack>
      </Container>
    </section>
  );
};

export default HeroSection;
