import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Center,
    Container,
    Divider,
    HStack,
    Heading,
    Stack,
    Text,
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
    const [starcount, setStarCount] = useState(0);
    const [usercount, setUserCount] = useState(0);

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        const userInterval = setInterval(() => {
            setUserCount((prevCount) => {
                if (prevCount < 20) {
                    return prevCount + 1;
                } else {
                    clearInterval(userInterval);
                    return prevCount;
                }
            });
        }, 50);

        return () => clearInterval(userInterval);
    }, []);

    useEffect(() => {
        const starInterval = setInterval(() => {
            setStarCount((prevCount) => {
                if (prevCount < 150) {
                    return prevCount + 1;
                } else {
                    clearInterval(starInterval);
                    return prevCount;
                }
            });
        }, 20);

        return () => clearInterval(starInterval);
    }, []);

    return (
        <section id="faq">
            <Container size="xl" centerContent py={55}>
                <Stack
                    direction={["column", null, null, "row"]}
                    justifyContent="space-between"
                    w="100%"
                    gap={[6, null, null, 20]}
                >
                    <Box w={["100%", null, null, "40%"]}>
                        <Box mb={[3, null, 4, 10]}>
                            <Heading
                                fontSize={[30, null, 40]}
                                fontFamily="Gilroy900"
                                fontWeight={900}
                                color="neutralGray900"
                                mb="10px"
                                data-aos="fade-up"
                            >
                                Frequently asked questions
                            </Heading>

                        </Box>
                        <HStack gap={[6, null, null, "60px"]} alignItems="center">
                            <Box>
                                <Text
                                    color="secondaryColor"
                                    fontSize={[30, 48, null, 60]}
                                    fontWeight={700}
                                    fontFamily="Gilroy700"
                                    data-aos="fade-up"
                                >
                                    {usercount}k+
                                </Text>
                                <Text
                                    color="neutralGray900"
                                    fontSize={14}
                                    fontFamily="Gilroy600"
                                    fontWeight={600}
                                    data-aos="fade-right"
                                >
                                    Trusted Users
                                </Text>
                            </Box>
                            <Center height="50px">
                                <Divider
                                    color="darkBlue"
                                    opacity="0.3"
                                    orientation="vertical"
                                />
                            </Center>
                            <Box>
                                <Text
                                    color="magentaPink"
                                    fontSize={[30, 48, null, 60]}
                                    fontWeight={700}
                                    fontFamily="Gilroy700"
                                    data-aos="fade-up"
                                >
                                    {starcount}+
                                </Text>
                                <Text
                                    color="neutralGray900"
                                    fontSize={14}
                                    fontFamily="Gilroy600"
                                    fontWeight={600}
                                    data-aos="fade-left"
                                >
                                    5 Star Ratings
                                </Text>
                            </Box>
                        </HStack>
                    </Box>
                    <Box maxW="630px" w={["100%", null, null, "60%"]}>
                        <Accordion allowToggle borderColor="transparent" defaultIndex={[0]}>
                            <AccordionItem>
                                {({isExpanded}) => (
                                    <Box
                                        py={[6, null, null, 34]}
                                        px={[4, null, null, 10]}
                                        bgColor="white"
                                        borderRadius="10px"
                                        boxShadow={
                                            isExpanded && "0px 4px 60px 0px rgba(15, 23, 42, 0.06)"
                                        }
                                        data-aos="fade-left"
                                    >
                                        <h2>
                                            <AccordionButton
                                                border="none"
                                                fontWeight={700}
                                                fontFamily="Gilroy700"
                                                fontSize={18}
                                                color="neutralGray900"
                                                p={0}
                                            >
                                                <Box as="span" flex="1" textAlign="left">
                                                    Q. Why do I need Spendify Mobile App?
                                                </Box>
                                                <AccordionIcon/>
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel
                                            pb={4}
                                            bgColor="white"
                                            fontFamily="Gilroy400"
                                            fontWeight={400}
                                        >
                                            Our finance management app focuses on guiding you to make
                                            better use of your money. It analyses users’ financial
                                            situation based on available personal financial
                                            transactions information that you stored manually,
                                            automatically through our AI (OLA) integrated on your
                                            WhatsApp mobile phone. We provide AI-based options for you
                                            make simple and effective financial decisions.
                                        </AccordionPanel>
                                    </Box>
                                )}
                            </AccordionItem>

                            <AccordionItem>
                                {({isExpanded}) => (
                                    <Box
                                        py={[6, null, null, 34]}
                                        px={[4, null, null, 10]}
                                        bgColor="white"
                                        borderRadius="10px"
                                        boxShadow={
                                            isExpanded && "0px 4px 60px 0px rgba(15, 23, 42, 0.06)"
                                        }
                                        data-aos="fade-up"
                                    >
                                        <h2>
                                            <AccordionButton
                                                border="none"
                                                fontWeight={700}
                                                fontFamily="Gilroy700"
                                                fontSize={18}
                                                color="neutralGray900"
                                                p={0}
                                            >
                                                <Box as="span" flex="1" textAlign="left">
                                                    Q. How do I start using the OLA?
                                                </Box>
                                                <AccordionIcon/>
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel
                                            pb={4}
                                            fontFamily="Gilroy400"
                                            fontWeight={400}
                                            bgColor="white"
                                        >
                                            Our finance management app focuses on guiding you to make
                                            better use of your money. It analyses users’ financial
                                            situation based on available personal financial
                                            transactions information that you stored manually,
                                            automatically through our AI (OLA) integrated on your
                                            WhatsApp mobile phone. We provide AI-based options for you
                                            make simple and effective financial decisions.
                                        </AccordionPanel>
                                    </Box>
                                )}
                            </AccordionItem>

                            <AccordionItem>
                                {({isExpanded}) => (
                                    <Box
                                        py={[6, null, null, 34]}
                                        px={[4, null, null, 10]}
                                        bgColor="white"
                                        borderRadius="10px"
                                        boxShadow={
                                            isExpanded && "0px 4px 60px 0px rgba(15, 23, 42, 0.06)"
                                        }
                                        data-aos="fade-up"
                                    >
                                        <h2>
                                            <AccordionButton
                                                border="none"
                                                fontWeight={700}
                                                fontFamily="Gilroy700"
                                                fontSize={18}
                                                color="neutralGray900"
                                                p={0}
                                            >
                                                <Box as="span" flex="1" textAlign="left">
                                                    Q. How easily can I recover my lost information or
                                                    data?
                                                </Box>
                                                <AccordionIcon/>
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel
                                            pb={4}
                                            bgColor="white"
                                            fontFamily="Gilroy400"
                                            fontWeight={400}
                                        >
                                            Our finance management app focuses on guiding you to make
                                            better use of your money. It analyses users’ financial
                                            situation based on available personal financial
                                            transactions information that you stored manually,
                                            automatically through our AI (OLA) integrated on your
                                            WhatsApp mobile phone. We provide AI-based options for you
                                            make simple and effective financial decisions.
                                        </AccordionPanel>
                                    </Box>
                                )}
                            </AccordionItem>
                        </Accordion>
                    </Box>
                </Stack>
            </Container>
        </section>
    );
};

export default Faq;
