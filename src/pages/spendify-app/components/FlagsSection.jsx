import { Box, Container, HStack, Image, Stack, Text } from "@chakra-ui/react";
import Flag1 from "../../../assets/img/Flag1.png";
import Flag2 from "../../../assets/img/Flag2.png";
import Flag3 from "../../../assets/img/Flag3.png";
import Flag4 from "../../../assets/img/Flag4.png";
import Flag5 from "../../../assets/img/Flag5.png";
import Flag6 from "../../../assets/img/Flag6.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FlagsSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const flags = [
    {
      flag: Flag1,
    },
    {
      flag: Flag2,
    },
    {
      flag: Flag3,
    },
    {
      flag: Flag4,
    },
    {
      flag: Flag5,
    },
    {
      flag: Flag6,
    },
  ];
  return (
    <section>
      <Box bgColor="primaryColor">
        <Container size="xl" centerContent py={55}>
          <Stack
            direction={["column", null, "row"]}
            w="100%"
            justifyContent="space-between"
            alignItems="center"
            gap={[5, 0]}
          >
            <Container maxW="550px">
              <Text
                fontSize={[25, null, null, 36]}
                fontWeight={700}
                fontFamily="Gilroy700"
                color="white"
                data-aos="fade-right"
              >
                Thousands of people across the world use Spendify
              </Text>
            </Container>
            <HStack data-aos="fade-up" spacing={25}>
              {flags.map((flag, i) => (
                <Box key={i} maxW={62} w="100%" h={62}>
                  <Image src={flag.flag} alt="country flag" />
                </Box>
              ))}
            </HStack>
          </Stack>
        </Container>
      </Box>
    </section>
  );
};

export default FlagsSection;
