import {
  Box,
  Container,
  Divider,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import AnalyticsIcon from "../../../assets/icon/Analytics.svg";
import AnalyticsOptions from "./AnalyticsOptions";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Analytics = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section>
      <Container size="xl" centerContent py={55}>
        <Box mb={8} textAlign="center">
          <Heading
            fontFamily="Gilroy700"
            fontSize={[30, null, 48]}
            fontWeight={700}
            color="neutralGray900"
            data-aos="fade-up"
          >
            Real-Time Analytics
          </Heading>
          <Container maxW="600px">
            <Text
              fontSize={[16, null, 18]}
              fontWeight={500}
              fontFamily="Gilroy500"
              color="darkGray"
              textAlign="center"
              data-aos="fade-up"
            >
              For precise and concise expense analytics of people in different
              geographical location
            </Text>
          </Container>
        </Box>
        <Stack
          direction={["column", null, "row"]}
          w="100%"
          spacing={[6, null, 3, 6]}
          justifyContent="center"
          alignItems="center"
        >
          <AnalyticsOptions
            img={AnalyticsIcon}
            title="User-friendly Data Analytics Platform"
            desc="Simplicity for seamless business decision-making process."
            data="fade-right"
          />
          <Box display={["none", null, null, "block"]}>
            <Divider
              borderWidth="4px"
              w={[null, null, null, "50px", 102]}
              borderColor="secondaryColor"
              borderRadius={5}
            />
          </Box>
          <AnalyticsOptions
            img={AnalyticsIcon}
            title="Competitive Advantage in the Marketplace"
            desc="Insightful data analysis enhances business performance."
            data="fade-up"
          />
          <Box display={["none", null, null, "block"]}>
            <Divider
              borderWidth="4px"
              w={[null, null, null, "50px", 102]}
              borderColor="secondaryColor"
              borderRadius={5}
            />
          </Box>
          <AnalyticsOptions
            img={AnalyticsIcon}
            title="Real-Time Analysis of Personal Financial Data"
            desc="Identifying patterns for formal and informed financial decisions."
            data="fade-left"
          />
        </Stack>
      </Container>
    </section>
  );
};

export default Analytics;
