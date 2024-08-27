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
import OlaAiIphone from "../../../assets/img/iphone13pm.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MoneyManager = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const download = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isIphone = /iphone/i.test(navigator.userAgent);
    const isIpad = /ipad/i.test(navigator.userAgent);
    const isMacOS = /mac/i.test(navigator.userAgent);

    let targetUrl;

    if (isIphone || isIpad || isMacOS) {
      // Redirect for iOS devices
      targetUrl = 'https://apps.apple.com/us/app/spendify/id1629340357';
    } else {
      // Redirect for Android devices
      targetUrl = 'https://play.google.com/store/apps/details?id=com.rscbyte.spendifylite';
    }
    window.open(targetUrl, "_blank")
  }
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
              fontFamily="Gilroy900"
              fontWeight={900}
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
              Personal Finance AI
            </Heading>
            <Container maxW="450px" px={0}>
              <Text
                fontSize={[16, null, 18]}
                lineHeight={8}
                color="darkGray"
                mb={10}
                fontFamily="Gilroy400"
                fontWeight={400}
                data-aos="fade-right"
              >
                Chat with OLA, your virtual assistant, for personalized
                financial advice and interactive budgeting support.
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
              onClick={download}
            >
              Get Started
            </Button>
          </Box>
          <Box
            bgColor="financeAiBg"
            maxW={["100%", null, "50%", "632px"]}
            w="100%"
            h={["100%", null, null, "575px"]}
            px={[5, null, null, 0]}
            pt={[10, null, null, 0]}
            borderRadius="16px"
            data-aos="fade-left"
          >
            <Center w="100%" h="100%" alignItems="flex-end">
              <Box mr={[0, "-30px", "-50px"]} maxW={380} w="100%" h="auto">
                <Image src={OlaAiIphone} alt="ola ai image" />
              </Box>
            </Center>
          </Box>
        </Stack>
      </Container>
    </section>
  );
};

export default MoneyManager;
