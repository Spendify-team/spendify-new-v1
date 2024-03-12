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
import Ipad from "../../../assets/img/Ipad.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Insight = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section>
      <Container size="xl" centerContent py={55}>
        <Stack
          direction={["column", null, "row"]}
          w="100%"
          gap={[30, null]}
          justifyContent="space-between"
          alignItems={[null, null, "center"]}
        >
          <Box w={["100%", null, "50%"]}>
            <Heading
              fontFamily="Gilroy700"
              fontSize={[30, null, 40, 48]}
              fontWeight={700}
              color="neutralGray900"
              mt={6}
              mb={4}
              data-aos="fade-up"
            >
              Insights for Business Success
            </Heading>
            <Text
              maxW="456px"
              w="100%"
              fontSize={[16, null, 20]}
              lineHeight={8}
              color="darkGray"
              mb={10}
              fontFamily="Gilroy400"
              fontWeight={400}
              data-aos="fade-right"
            >
              Our commitment is to provide a good data infrastructure and
              insights to businesses, enabling them to outperform competitors in
              today&apos;s changing marketplace.
            </Text>
            <Button
              variant="primaryButton"
              px="36px"
              py={17}
              fontWeight={700}
              fontFamily="Gilroy700"
              fontSize={18}
              data-aos="fade-up"
            >
              Login
            </Button>
          </Box>
          <Center data-aos="fade-left" w={["100%", null, "50%"]} h="auto">
            <Box maxW={484} w="100%" h="auto">
              <Image src={Ipad} alt="ipad" />
            </Box>
          </Center>
        </Stack>
      </Container>
    </section>
  );
};

export default Insight;
