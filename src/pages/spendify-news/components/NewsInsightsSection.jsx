
import React from 'react'
import {
    Box,
    Container,
    Heading,
    Image,
    Stack,
    Text,
    VStack  
} from '@chakra-ui/react'
import NewsInsights2 from '../../../assets/img/NewsInsights-2.png'

const NewsInsightsSection = () => {
  return (
    <section>
        <Container h={"100%"} size="xl" py={55}>
            <Heading
                fontFamily="Gilroy700"
                fontSize={[20, null, 30, 38]}
                fontWeight={700}
                color="neutralGray900"
                mt={[4, null, 6]}
                mb={10}
                data-aos="fade-up"
            >
              News insights delivered <br />to you daily  
            </Heading>
            <Box>
                <Stack direction={["column", "row"]} spacing={4} >
                    <Box
                    bg="lightGray"
                    borderRadius={20}
                    w={[null, "100%", "80%", "100%"]}
                    pt={[50, 45, null, 50]}
                    px={[5, null, null, null]}
                    >
                        <VStack
                            justifyContent="space-between"
                            h="100%"
                            alignItems="flex-start"
                            gap={[10, null, null, 0]}
                        >
                            <Box>
                                <Container maxW="550px" px={0}>
                                    <Heading
                                    fontSize={[18, null, 24]}
                                    fontWeight={600}
                                    fontFamily="Gilroy600"
                                    color="neutralGray900"
                                    mb={5}
                                    data-aos="fade-up"
                                    >
                                    Get global business news
                                    </Heading>
                                    <Text
                                        fontSize={[16, 17]}
                                        color="darkGray"
                                        lineHeight="32px"
                                        mb={[0, 5]}
                                        fontFamily="Gilroy400"
                                        fontWeight={400}
                                        data-aos="fade-right"
                                        >
                                        Stay informed with global finance news, economic updates , market trends and investments.
                                    </Text>
                                    <Box data-aos="fade-top" maxW="352px" w="100%" margin={"auto"} h="auto">
                                        <Image src={NewsInsights2} alt="phone img" />
                                    </Box>
                                </Container>
                            </Box>
                            <Box data-aos="fade-up">
                            </Box>
                        </VStack>
                    </Box>
                    <Box
                    bg="veryDarkGray"
                    borderRadius={20}
                    w={[null, "100%", "80%", "100%"]}
                    pt={[50, 45, null, 50]}
                    px={[5, null, null, null]}
                    >
                        <VStack
                            justifyContent="space-between"
                            h="100%"
                            alignItems="flex-start"
                            gap={[10, null, null, 0]}
                        >
                            <Box>
                                <Container maxW="550px" px={0}>
                                    <Heading
                                        fontSize={[18, null, 24]}
                                        fontWeight={600}
                                        fontFamily="Gilroy600"
                                        color="white"
                                        mb={5}
                                        data-aos="fade-up"
                                    >
                                        Economic and Investment News
                                    </Heading>
                                    <Text
                                        fontSize={[16, 17]}
                                        color="white"
                                        lineHeight="32px"
                                        mb={[0, 5]}
                                        fontFamily="Gilroy400"
                                        fontWeight={400}
                                        data-aos="fade-right"
                                        >
                                        Spendify finance news provides timely updates on global business and economic developments .
                                    </Text>
                                    <Box data-aos="fade-top" maxW="352px" w="100%" margin={"auto"} h="auto">
                                        <Image src={NewsInsights2} alt="phone img" />
                                    </Box>
                                </Container>
                            </Box>
                            <Box data-aos="fade-up">
                            </Box>
                        </VStack>
                    </Box>
                </Stack>
            </Box>
        </Container>
    </section>
  )
}


export default NewsInsightsSection
