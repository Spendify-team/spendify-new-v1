import {
  Box,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LearnMore from "../../../assets/icon/LearnMore.svg";
import SpendifyPopover from "../../../assets/img/SpendifyPopover.png";
import Card from "../../../assets/img/Card.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProductThree = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const download = () => {
    const userAgent = navigator.userAgent.toLowerCase();

    let targetUrl;

    if (userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('macintosh')) {
      // Redirect for iOS devices
      targetUrl = 'https://apps.apple.com/us/app/spendify/id1629340357';
    } else {
      // Redirect for Android devices
      targetUrl = 'https://play.google.com/store/apps/details?id=com.rscbyte.spendifylite';
    }
    window.open(targetUrl, "_blank")
  }

  return (
    <Box>
      <Stack direction={["column", "row"]} spacing="30px">
        <Box
          bgGradient="linear-gradient(156deg, #FFF 0%, #FFF1FF 48%, #F6FAFF 56%)"
          border="1px solid"
          borderColor="borderColor"
          borderRadius={20}
          px={[5, null, null, 10]}
          pt={[30, null, null, 61]}
        >
          <VStack justifyContent="space-between" h="100%">
            <Box>
              <Text
                fontFamily="inter"
                fontWeight="bold"
                color="secondaryColor"
                fontSize={14}
                textTransform="uppercase"
                mb={5}
                data-aos="fade-up"
              >
                Smart Learning
              </Text>
              <Heading
                fontSize={[25, null, 32]}
                fontWeight={600}
                fontFamily="Gilroy600"
                color="neutralGray900"
                mb={5}
                data-aos="fade-up"
              >
                Financial Education
              </Heading>
              <Text
                fontSize={[16, null, 18]}
                color="darkGray"
                lineHeight="32px"
                mb={5}
                fontFamily="Gilroy400"
                fontWeight={400}
                data-aos="fade-right"
              >
                Enhance your money skills with Spendify 101, offering financial
                words, finance news and articles, and interactive lessons for
                smart financial practices.
              </Text>
              <Link onClick={download}>
                <HStack
                  fontSize={[16, null, 18]}
                  fontWeight={700}
                  fontFamily="Gilroy700"
                  color="primaryColor"
                  data-aos="fade-right"
                >
                  <Text>Download now</Text>
                  <Image src={LearnMore} alt="download" />
                </HStack>
              </Link>
            </Box>
            <Box data-aos="fade-up">
              <Image src={SpendifyPopover} alt="phone img" />
            </Box>
          </VStack>
        </Box>
        <Box
          bgGradient="linear-gradient(156deg, #FFF 0%, #FFF1FF 48%, #F6FAFF 56%)"
          border="1px solid"
          borderColor="borderColor"
          borderRadius={20}
          px={[5, null, null, 10]}
          pt={[30, null, null, 61]}
        >
          <VStack justifyContent="space-between" h="100%">
            <Box>
              <Text
                fontFamily="inter"
                fontWeight="bold"
                color="secondaryColor"
                fontSize={14}
                textTransform="uppercase"
                mb={5}
                data-aos="fade-up"
              >
                Personalized Wallet
              </Text>
              <Heading
                fontSize={[25, null, 32]}
                fontWeight={600}
                fontFamily="Gilroy600"
                color="neutralGray900"
                mb={5}
                data-aos="fade-up"
              >
                Spendify Wallet
              </Heading>
              <Text
                fontSize={[16, null, 18]}
                color="darkGray"
                lineHeight="32px"
                mb={5}
                fontFamily="Gilroy400"
                fontWeight={400}
                data-aos="fade-left"
              >
                Categorize income & expenses,custom spending, manage
                mini-project and so on. Share real-time updates with families,
                friends and associates.
              </Text>
              <Link onClick={download}>
                <HStack
                  fontSize={[16, null, 18]}
                  fontWeight={700}
                  fontFamily="Gilroy700"
                  color="primaryColor"
                  data-aos="fade-left"
                >
                  <Text>Download now</Text>
                  <Image src={LearnMore} alt="download" />
                </HStack>
              </Link>
            </Box>
            <Box data-aos="fade-up">
              <Image src={Card} alt="card" />
            </Box>
          </VStack>
        </Box>
      </Stack>
    </Box>
  );
};

export default ProductThree;
