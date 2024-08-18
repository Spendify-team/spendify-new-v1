
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
import Analysis1 from '../../../assets/img/Analysis-1.png'
import Analysis2 from '../../../assets/img/Analysis-2.png'

const AnalysisSection = () => {
  return (
    <section>
        <Container h={"100%"} size="xl" pb={85}>
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
                                    fontWeight={700}
                                    fontFamily="Gilroy600"
                                    color="neutralGray900"
                                    mb={5}
                                    data-aos="fade-up"
                                    >
                                    Automate  your finances  report
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
                                        Spendify analytics simplifies personal and business data clear , actionable reports visualisation , helping you make informed decisions.
                                    </Text>
                                    <Box data-aos="fade-right" maxW="452px" w="100%" mx={"auto"} mt={12} h="auto">
                                        <Image src={Analysis1} alt="phone img" />
                                    </Box>
                                </Container>
                            </Box>
                            <Box data-aos="fade-up">
                            </Box>
                        </VStack>
                    </Box>
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
                                        Know you spending numbers
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
                                        We provide easy to understand reports on personnel and business finances , helping you boost you financial confidence.
                                    </Text>
                                    <Box data-aos="fade-top" maxW="452px" w="100%" margin={"auto"} h="auto">
                                        <Image src={Analysis2} alt="phone img" />
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


export default AnalysisSection