import { Container, Heading, Text, VStack } from "@chakra-ui/react";
import ProductOne from "./ProductOne";
import ProductTwo from "./ProductTwo";
import ProductThree from "./ProductThree";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const OurProducts = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section>
      <Container size="xl" centerContent py={55}>
        <Heading
          fontSize={[30, null, 40, 48]}
          color="neutralGray900"
          fontFamily="inter"
          mb={76}
          data-aos="fade-up"
        >
          <Text color="steelBlue" as="span">
            Our{" "}
          </Text>
          Products
        </Heading>
        <VStack spacing={8} w="100%">
          <ProductOne />
          <ProductTwo />
          <ProductThree />
        </VStack>
      </Container>
    </section>
  );
};

export default OurProducts;
