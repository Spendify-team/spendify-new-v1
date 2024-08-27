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
import PeriodicReportImg from "../../../assets/img/PeriodicReport.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {download} from "../../../utils/constants.jsx";

const PeriodicReport = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section>
      <Container size="xl" centerContent py={55}>
        <Stack
          direction={["column-reverse", null, "row"]}
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
            p={[5, 0]}
            borderRadius="16px"
            data-aos="fade-right"
          >
            <Center w="100%" h="100%">
              <Box maxW={395} w="100%" h="auto">
                <Image src={PeriodicReportImg} alt="periodic report" />
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
              fontFamily="Gilroy700"
              fontSize={[30, null, 40, 48]}
              fontWeight={700}
              color="neutralGray900"
              mt={[4, null, 6]}
              mb={4}
              data-aos="fade-up"
            >
              Periodic report
            </Heading>
            <Container maxW="450px" px={0}>
              <Text
                fontFamily="Gilroy400"
                fontWeight={400}
                fontSize={18}
                lineHeight={8}
                color="darkGray"
                mb={10}
                data-aos="fade-left"
              >
                Easily assess your personal financial health with a periodic
                report on various simple charts.
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
              onClick={download}
            >
              Get Started
            </Button>
          </Box>
        </Stack>
      </Container>
    </section>
  );
};

export default PeriodicReport;
