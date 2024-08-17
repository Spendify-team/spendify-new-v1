
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
import Spendify101_1 from '../../../assets/img/Spendify101-1.png'
import Spendify101_2 from '../../../assets/img/Spendify101-2.png'

const QuizSection = () => {
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
              101 has you covered!  
            </Heading>
            <Box>
                <Stack direction={["column", "row"]} spacing={4} >
                    <Box
                    bg="background"
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
                                    Financial education 
                                    </Heading>
                                    <Text
                                        fontSize={[16, 17]}
                                        color="neutralGray900"
                                        lineHeight="32px"
                                        mb={[0, 5]}
                                        fontFamily="Gilroy400"
                                        fontWeight={400}
                                        data-aos="fade-right"
                                        >
                                        Our Interactive quiz and clear glossary will boost your financial knowledge and steer you toward smarter descisions.
                                    </Text>
                                    <Box data-aos="fade-right" maxW="452px" w="100%" mx={"auto"} mt={12} h="auto">
                                        <Image src={Spendify101_1} alt="phone img" />
                                    </Box>
                                </Container>
                            </Box>
                            <Box data-aos="fade-up">
                            </Box>
                        </VStack>
                    </Box>
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
                                        Confused by financial terms
                                    </Heading>
                                    <Text
                                        fontSize={[16, 17]}
                                        color="neutralGray900"
                                        lineHeight="32px"
                                        mb={[0, 5]}
                                        fontFamily="Gilroy400"
                                        fontWeight={400}
                                        data-aos="fade-right"
                                        >
                                        We make it easy with a user friendly quiz and straight forward definitions offering real word examples to help you confidently master your finances
                                    </Text>
                                    <Box data-aos="fade-top" maxW="452px" w="100%" margin={"auto"} h="auto">
                                        <Image src={Spendify101_2} alt="phone img" />
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


export default QuizSection