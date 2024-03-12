import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import AllinOne from "../../../assets/img/AllinOne.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MoneyManager = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section>
      <Container size="xl" centerContent py={55}>
        <Stack
          direction={["column", null, "row"]}
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          gap={[5, null, 10]}
        >
          <Box maxW={["100%", null, "50%"]}>
            <Text
              fontWeight={900}
              fontFamily="Gilroy900"
              color="secondaryColor"
              data-aos="fade-up"
            >
              Money Manager
            </Text>
            <Heading
              fontFamily="Gilroy700"
              fontSize={[30, null, 40, 48]}
              fontWeight={700}
              color="neutralGray900"
              mt={[4, null, 6]}
              mb={4}
              data-aos="fade-up"
            >
              All in One!
            </Heading>
            <Container maxW="450px" px={0}>
              <Text
                fontSize={[18, null, 20]}
                lineHeight={8}
                color="darkGray"
                mb={10}
                fontFamily="Gilroy400"
                fontWeight={400}
                data-aos="fade-right"
              >
                Comprehensive personal financial management, with all-in-one
                features.
              </Text>
            </Container>
            <Button
              variant="primaryButton"
              px="36px"
              py={17}
              fontWeight={700}
              fontFamily="Gilroy700"
              fontSize={18}
              data-aos="fade-right"
            >
              Get Started
            </Button>
          </Box>
          <Box
            bgColor="financeAiBg"
            maxW={["100%", null, "50%", "632px"]}
            w="100%"
            h={["100%", null, null, "575px"]}
            p={[5, 0]}
            borderRadius="16px"
            data-aos="fade-left"
          >
            <Center w="100%" h="100%">
              <Box maxW={380} w="100%" h="auto">
                <Image src={AllinOne} alt="all in one" />
              </Box>
            </Center>
          </Box>
        </Stack>
      </Container>
    </section>
  );
};

export default MoneyManager;
