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
import Summary from "../../../assets/img/Summary.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MoneyManagerSummary = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section>
      <Container size="xl" centerContent py={55}>
        <Stack
          direction={["column-reverse", "row"]}
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          gap={[5, null, 10]}
        >
          <Box
            bgColor="financeAiBg"
            maxW={["100%", null, "50%", "632px"]}
            w="100%"
            h={["100%", null, null, "575px"]}
            borderRadius="16px"
            data-aos="fade-right"
          >
            <Center w="100%" h="100%">
              <Box maxW={395} w="100%" h="auto">
                <Image src={Summary} alt="summary" />
              </Box>
            </Center>
          </Box>
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
              fontSize={[30, null, 40, 48]}
              fontWeight={700}
              fontFamily="Gilroy700"
              color="neutralGray900"
              mt={[4, null, 6]}
              mb={4}
              data-aos="fade-up"
            >
              Spendify AI
            </Heading>
            <Container maxW="470px" px={0}>
              <Text
                fontFamily="Gilroy400"
                fontWeight={400}
                fontSize={18}
                lineHeight={8}
                color="darkGray"
                mb={10}
                data-aos="fade-left"
              >
                With Spendify AI Indicator, track your financial health through
                intuitive &quot;red & green&quot; performance indicators,
                prompting you to review and make future decisions based on your
                financial plan
              </Text>
            </Container>
            <Button
              variant="primaryButton"
              px="36px"
              py={17}
              fontWeight={700}
              fontFamily="Gilroy700"
              fontSize={18}
              data-aos="fade-left"
            >
              Get Started
            </Button>
          </Box>
        </Stack>
      </Container>
    </section>
  );
};

export default MoneyManagerSummary;
