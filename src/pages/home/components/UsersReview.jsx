import { Box, Container, Heading, Text } from "@chakra-ui/react";
import ReviewCarousel from "./ReviewCarousel";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const UsersReview = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section>
      <Container size="xl" centerContent py="80px">
        <Box w="100%">
          <Box>
            <Heading
              fontSize={40}
              fontFamily="Gilroy900"
              fontWeight={900}
              color="neutralGray900"
              textAlign="center"
              data-aos="fade-up"
            >
              Reviews from{" "}
              <Text as="span" fontFamily="Gilroy600" fontWeight={600}>
                our Users
              </Text>
            </Heading>
            <Text
              color="darkGray"
              fontWeight={500}
              fontFamily="Gilroy500"
              fontSize="20px"
              textAlign="center"
              data-aos="fade-up"
            >
              Discover what our users are saying about us
            </Text>
          </Box>
          <Box data-aos="fade-up">
            <ReviewCarousel />
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default UsersReview;
