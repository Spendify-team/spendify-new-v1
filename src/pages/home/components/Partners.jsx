import {
  Box,
  Center,
  Container,
  Divider,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import FlipFloss from "../../../assets/img/FlipFloss.png";
import Forbes from "../../../assets/img/Forbes.png";
import Mongoro from "../../../assets/img/Mongoro.png";
import Trove from "../../../assets/img/Trove.png";
import Ultimate from "../../../assets/img/Ultimate.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Partners = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section>
      <Container size="xl" centerContent py={55}>
        <Stack
          direction={["column", "row"]}
          spacing="30px"
          w="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box data-aos="fade-right">
            <Text color="LavenderBlue" fontFamily="inter" fontSize={15}>
              OUR PARTNERS
            </Text>
          </Box>
          <HStack data-aos="fade-left" spacing={[5, 22]} alignItems="center">
            <Box maxW="106px" w="100%" h="41px">
              <Image src={FlipFloss} alt="flip floss logo" />
            </Box>
            <Center height="50px" display={["none", "block"]}>
              <Divider
                color="linear-gradient(180deg, rgba(143, 143, 143, 0.00) 0%, #B8B8B8 50%, rgba(143, 143, 143, 0.00) 100%)"
                orientation="vertical"
              />
            </Center>
            {/*<Box maxW="92px" w="100%" h="25px">*/}
            {/*  <Image src={Forbes} alt="forbes logo" />*/}
            {/*</Box>*/}
            {/*<Center height="50px" display={["none", "block"]}>*/}
            {/*  <Divider*/}
            {/*    color="linear-gradient(180deg, rgba(143, 143, 143, 0.00) 0%, #B8B8B8 50%, rgba(143, 143, 143, 0.00) 100%)"*/}
            {/*    orientation="vertical"*/}
            {/*  />*/}
            {/*</Center>*/}
            <Box maxW="60px" w="100%" h="43px">
              <Image src={Ultimate} alt="ultimate logo" />
            </Box>
            <Center height="50px" display={["none", "block"]}>
              <Divider
                color="linear-gradient(180deg, rgba(143, 143, 143, 0.00) 0%, #B8B8B8 50%, rgba(143, 143, 143, 0.00) 100%)"
                orientation="vertical"
              />
            </Center>
            <Box maxW="81px" w="100%" h="14px">
              <Image src={Mongoro} alt="mongoro logo" />
            </Box>
            <Center height="50px" display={["none", "block"]}>
              <Divider
                color="linear-gradient(180deg, rgba(143, 143, 143, 0.00) 0%, #B8B8B8 50%, rgba(143, 143, 143, 0.00) 100%)"
                orientation="vertical"
              />
            </Center>
            <Box maxW="98px" w="100%" h="35px">
              <Image src={Trove} alt="trove logo" />
            </Box>
          </HStack>
        </Stack>
      </Container>
    </section>
  );
};

export default Partners;
