import {
  Box,
  Container,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Girl from "../../../assets/img/boy.png";
import IphoneGroup from "../../../assets/img/IphoneGroup.png";
import LearnMore from "../../../assets/icon/LearnMore.svg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProductTwo = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box>
      <Stack direction={["column", "row"]} spacing="22px">
        <Box
          bgGradient="linear-gradient(156deg, #FFF 0%, #FFF1FF 48%, #F6FAFF 56%)"
          border="1px solid"
          borderColor="borderColor"
          borderRadius={20}
          w={["100%", "50%", null, "60%"]}
          pt={[30, null, null, 61]}
          px={[5, null, null, 10]}
        >
          <VStack
            justifyContent="space-between"
            h="100%"
            alignItems="flex-start"
            gap={[10, null, null, 0]}
          >
            <Box>
              <Text
                fontFamily="inter"
                fontWeight="bold"
                color="secondaryColor"
                fontSize={13}
                textTransform="uppercase"
                mb={5}
                data-aos="fade-up"
              >
                Spendify Buddy
              </Text>
              <Container maxW="550px" px={0}>
                <Heading
                  fontSize={[25, null, 32]}
                  fontWeight={600}
                  fontFamily="Gilroy600"
                  color="neutralGray900"
                  mb={5}
                  data-aos="fade-up"
                >
                  Personal Finance AI
                </Heading>
                <Text
                  fontSize={[16, 18]}
                  color="darkGray"
                  lineHeight="32px"
                  mb={5}
                  fontFamily="Gilroy400"
                  fontWeight={400}
                  data-aos="fade-right"
                >
                  Connecting with OLA goes beyond expense tracking and
                  budgeting. Chat, engage and get financial education!
                </Text>
              </Container>
              <Link to="/">
                <HStack
                  fontSize={[16, 18]}
                  fontWeight={700}
                  fontFamily="Gilroy700"
                  color="primaryColor"
                  data-aos="fade-right"
                >
                  <Text>Learn more</Text>
                  <Image src={LearnMore} alt="learn more" />
                </HStack>
              </Link>
            </Box>
            <Box data-aos="fade-up">
              <Image src={IphoneGroup} alt="phone img" />
            </Box>
          </VStack>
        </Box>
        <Box data-aos="fade-left" w={["100%", "50%", null, "40%"]}>
          <Image src={Girl} alt="girl" />
        </Box>
      </Stack>
    </Box>
  );
};

export default ProductTwo;
