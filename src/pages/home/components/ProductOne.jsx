import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import PhoneImage from "../../../assets/img/Iphone13promax.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom";

const ProductOne = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const navigate = useNavigate();

  return (
    <Box
      bgGradient="linear-gradient(136deg, #FFE6FF 0%, #FFE8FA 48%, #FFF1FF 56%)"
      w="100%"
      borderRadius={24}
    >
      <Stack
        direction={["column", "row"]}
        spacing="24px"
        px={[30, null, null, "77px"]}
        pt={[30, null, null, "77px"]}
        justifyContent="space-between"
      >
        <Box pb={[null, null, 30, "77px"]} w="100%">
          <VStack
            alignItems="flex-start"
            justifyContent="space-between"
            h="100%"
          >
            <Box>
              <Text
                fontWeight={700}
                fontFamily="Gilroy700"
                color="secondaryColor"
                mb={34}
                textTransform="uppercase"
                data-aos="fade-up"
              >
                Effortless Finances
              </Text>
              <Container maxW="480px" px={0}>
                <Heading
                  fontSize={[30, null, 40, 48]}
                  fontWeight={600}
                  fontFamily="Gilroy600"
                  color="neutralGray900"
                  data-aos="fade-up"
                >
                  Spendify Money Mastery
                </Heading>

                <Text
                  fontSize={[16, null, 20]}
                  color="darkGray"
                  lineHeight="32px"
                  mt="14px"
                  fontFamily="Gilroy400"
                  data-aos="fade-right"
                >
                  Master your money with Spendify&apos;s feature for easy
                  budgeting, real-time updates, and financial insights.
                </Text>
              </Container>
            </Box>
            <Box>
              <Button
                fontFamily="Gilroy700"
                fontWeight={700}
                variant="primaryButton"
                py={17}
                px="36px"
                data-aos="fade-right"
                onClick={()=> navigate('/spendify-app')}
              >
                Learn more
              </Button>
            </Box>
          </VStack>
        </Box>
        <Box data-aos="fade-left" maxW="452px" w="100%" h="auto">
          <Image src={PhoneImage} alt="phone img" />
        </Box>
      </Stack>
    </Box>
  );
};

export default ProductOne;
