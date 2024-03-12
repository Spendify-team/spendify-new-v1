/* eslint-disable react/prop-types */
import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";

const AnalyticsOptions = ({ img, title, desc, data }) => {
  return (
    <Box
      maxW={317}
      w="100%"
      h={[null, null, 225, "auto"]}
      py={[4, null, null, 5]}
      px={[4, null, null, 5]}
      border="1px"
      borderColor="analyticsBorder"
      borderRadius={7}
      textAlign="center"
      data-aos={data}
    >
      <VStack w="100%" mb={19}>
        <Box w={62} h={62}>
          <Image src={img} alt="analytics" />
        </Box>
      </VStack>
      <Heading
        fontFamily="Gilroy700"
        fontSize={[16, null, null, 19]}
        fontWeight={700}
        color="neutralGray900"
        mb="9px"
      >
        {title}
      </Heading>
      <Text
        fontFamily="Gilroy400"
        fontWeight={400}
        fontSize={[14, null, null, 16]}
        color="neutralGray900"
      >
        {desc}
      </Text>
    </Box>
  );
};

export default AnalyticsOptions;
