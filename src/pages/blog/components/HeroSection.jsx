import { Box, Button, Center, Container, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react'

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
              fontWeight={400}
              fontFamily="Gilroy400"
              color="neutralGray900"
              data-aos="fade-up"
            >
              STAY UP TO DATE
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
              The Spendify Blog
            </Heading>
            <Container maxW="650px" px={0}>
              <Text
                fontSize={[18, null, 20]}
                lineHeight={10}
                color="darkGray"
                mb={10}
                fontFamily="Gilroy400"
                fontWeight={400}
                data-aos="fade-right"
              >
                Dive into our latest product updates, user interviews, finance tips, and 
                strategic insights from the Spendify team. 
              </Text>
            </Container>
          </Box>
        </Stack>
        </Container>
    </section>
  )
}

export default HeroSection
