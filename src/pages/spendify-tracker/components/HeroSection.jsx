import { Box, Button, Center, Container, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { download } from '../../../utils/constants';

const HeroSection = () => {
  return (
    <section className="heroBg herosection">
        <Container h="60vh" size="xl" centerContent pt={55}>
        <Stack
          direction={["column", null, "row"]}
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          gap={[5, null, 10]}
        >
          <Box maxW={["100%", null, "50%"]}>
            <Text
              fontWeight={900}
              fontFamily="Gilroy900"
              color="secondaryColor"
              data-aos="fade-up"
            >
              TRACKER 
            </Text>
            <Heading
              fontFamily="Gilroy700"
              fontSize={[30, null, 40, 48]}
              fontWeight={700}
              color="neutralGray900"
              mt={[4, null, 6]}
              mb={4}
              data-aos="fade-up"
            >
              Spendify Tracker
            </Heading>
            <Container maxW="450px" px={0}>
              <Text
                fontSize={[18, null, 20]}
                lineHeight={8}
                color="darkGray"
                mb={10}
                fontFamily="Gilroy400"
                fontWeight={400}
                data-aos="fade-right"
              >
                Take charge of your finances at no cost! 
              </Text>
            </Container>
            <Button
              variant="primaryButton"
              px="36px"
              py={17}
              fontWeight={700}
              fontFamily="Gilroy700"
              fontSize={18}
              data-aos="fade-right"
              onClick={download}
            >
              Track now
            </Button>
          </Box>
        </Stack>
        </Container>
    </section>
  )
}

export default HeroSection
