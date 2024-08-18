
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
import SpendifyTracker1 from '../../../assets/img/SpendifyTracker-1.png'
import SpendifyTracker2 from '../../../assets/img/SpendifyTracker-2.png'
import SpendifyTracker3 from '../../../assets/img/SpendifyTracker-3.png'

const ManageFinancesSection = () => {
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
              Manage all your <br /> finances 
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
                                    Personal and business
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
                                        Spendify tracker helps you manage personal and business finances with ease.
                                    </Text>
                                    <Box data-aos="fade-right" maxW="452px" w="100%" h="auto" mt={[0, 12]}>
                                        <Image src={SpendifyTracker1} alt="phone img" />
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
                                        Personal and business reminder
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
                                        Track expenses set reminders, and stay on top of your budget.
                                    </Text>
                                    <Box data-aos="fade-top" maxW="452px" w="100%" h="auto">
                                        <Image src={SpendifyTracker2} alt="phone img" />
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
                                    Financial management
                                </Heading>
                                <Text
                                    fontSize={[16, 17]}
                                    color="neutralGray900"
                                    lineHeight="32px"
                                    mb={5}
                                    fontFamily="Gilroy400"
                                    fontWeight={400}
                                    data-aos="fade-right"
                                    >
                                    Spendify tracker, you can split share budget, expenses and income with friends and families.
                                </Text>
                                <Box data-aos="fade-top" maxW="452px" w="100%" h="auto">
                                    <Image src={SpendifyTracker3} alt="phone img" />
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


export default ManageFinancesSection