import React, {useState, useEffect} from 'react';
import {
    Box,
    Container,
    HStack,
    Heading,
    Image,
    Stack,
    Text,
    VStack,
    Button,
    Flex,
    Grid,
    GridItem,
    Icon
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import GirlBg from "../../../assets/img/girl.png";

// Custom icons
const CheckIcon = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path
            fill="currentColor"
            d="M9.55 18l-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Icon>
);

// Circled checkmark for comparison table header
const CircledCheckIcon = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <circle cx="12" cy="12" r="10" fill="#111827" />
        <path
            d="M8 12l3 3 5-5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Icon>
);

const ArrowForwardIcon = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path
            fill="currentColor"
            d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
        />
    </Icon>
);

const PricingToggle = ({ isYearly, setIsYearly }) => {
    return (
        <Box
            data-aos="fade-up"
            textAlign="center"
            my={8}
        >
            <Box
                display="flex"
                borderRadius="full"
                border="1px solid"
                borderColor="gray.100"
                bg="gray.50"
                overflow="hidden"
                width="fit-content"
                mx="auto"
                p="4px"
            >
                <Box
                    as="button"
                    onClick={() => setIsYearly(false)}
                    px={10}
                    py={2}
                    borderRadius="full"
                    bg={!isYearly ? "white" : "transparent"}
                    boxShadow={!isYearly ? "sm" : "none"}
                    transition="all 0.2s"
                    fontWeight={!isYearly ? "600" : "400"}
                >
                    <Text fontSize="md" color={!isYearly ? "black" : "gray.500"}>
                        Monthly
                    </Text>
                </Box>
                <Box
                    as="button"
                    onClick={() => setIsYearly(true)}
                    px={10}
                    py={2}
                    borderRadius="full"
                    bg={isYearly ? "white" : "transparent"}
                    boxShadow={isYearly ? "sm" : "none"}
                    transition="all 0.2s"
                    fontWeight={isYearly ? "600" : "400"}
                >
                    <Text fontSize="md" color={isYearly ? "black" : "gray.500"}>
                        Yearly
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};

const PlanCard = ({planType, isYearly}) => {
    // Determine plan details based on plan type
    let title, description, price, features;

    if (planType === "free") {
        title = "Free Plan";
        description = "Perfect for personal finance beginners who want to track and manage their money";
        price = 0;
        features = [
            "Spendify 101",
            "Income & Expense Tracker",
            "Spendify Budget",
            "Insights & Reports",
            "Reminders & News",
            "Spendify AI (OLA)",
            "Spendify Wallet",
            "Track up to 10 expense"
        ];
    } else if (planType === "basic") {
        title = "Basic Plan";
        description = "Perfect for personal finance beginners who want to track and manage their money";
        price = isYearly ? 10 : 1;
        features = [
            "Spendify 101",
            "Income & Expense Tracker",
            "Spendify Budget",
            "Insights & Reports",
            "Reminders & News",
            "Spendify AI (OLA)",
            "Spendify Wallet",
            "Unlimited Tracking"
        ];
    } else { // premium
        title = "Premium Plan";
        description = "For power users who need unlimited tracking and seamless bank integration.";
        price = isYearly ? 20 : 2;
        features = [
            "Everything in Basic +",
            "Unlimited Tracking",
            "Bank Account Sync"
        ];
    }

    return (
        <Box
            p={8}
            border="1px solid"
            borderColor="gray.200"
            borderRadius="lg"
            width="100%"
            bg="white"
            height="100%"
            display="flex"
            flexDirection="column"
            boxShadow="sm"
        >
            <VStack align="flex-start" spacing={4} flex="1">
                <Heading size="md" fontWeight={600}>{title}</Heading>
                <Text fontSize="sm" color="gray.600">{description}</Text>
                <HStack align="baseline" spacing={1} mt={2}>
                    <Heading size="lg" fontWeight={600}>${price}</Heading>
                    <Text color="gray.500" fontSize="md">{isYearly ? "Yearly" : "Monthly"}</Text>
                </HStack>
                <VStack align="flex-start" spacing={3} width="100%" pt={4} flex="1">
                    {features.map((feature, index) => (
                        <HStack key={index} spacing={2} align="flex-start">
                            <CheckIcon color="navy.800" boxSize={5} mt="2px"/>
                            <Text>{feature}</Text>
                        </HStack>
                    ))}
                </VStack>
                {/*<Button*/}
                {/*    colorScheme="purple"*/}
                {/*    fontWeight={600}*/}
                {/*    width="100%"*/}
                {/*    mt="auto"*/}
                {/*    borderRadius="md"*/}
                {/*>*/}
                {/*    Choose Plan*/}
                {/*</Button>*/}
            </VStack>
        </Box>
    );
};

const PlanComparison = ({isYearly}) => {
    const features = [
        {
            name: "Spendify 101",
            desc: "Learn the basics of personal finance",
            free: true,
            basic: true,
            premium: true
        },
        {
            name: "Income & Expense Tracker",
            desc: "Monitor your earnings and spending",
            free: true,
            basic: true,
            premium: true
        },
        {
            name: "Spendify Budget",
            desc: "Create and manage budgets",
            free: true,
            basic: true,
            premium: true
        },
        {
            name: "Insights",
            desc: "Get insights into your spending habits",
            free: true,
            basic: true,
            premium: true
        },
        {
            name: "Reminders",
            desc: "Set reminders for bill payments and other financial tasks",
            free: true,
            basic: true,
            premium: true
        },
        {
            name: "News",
            desc: "Stay up to date with personal finance news",
            free: true,
            basic: true,
            premium: true
        },
        {
            name: "Spendify AI (OLA)",
            desc: "Get personalized financial tips",
            free: true,
            basic: true,
            premium: true
        },
        {
            name: "Wallet",
            desc: "Customize your spending categories",
            free: true,
            basic: true,
            premium: true
        },
        {
            name: "Limit",
            desc: "Track up to 10 expense, income, and budget records",
            free: true,
            basic: false,
            premium: false
        },
        {
            name: "Unlimited income, expense, and budget tracking",
            desc: "",
            free: false,
            basic: true,
            premium: true
        },
        {
            name: "Bank Account Sync",
            desc: "Connect your Nigerian bank account for automatic tracking",
            free: false,
            basic: false,
            premium: true
        },
    ];

    const freePrice = 0;
    const basicPrice = isYearly ? 10 : 1;
    const premiumPrice = isYearly ? 20 : 2;

    return (
        <Box width="100%" mt={12}>
            <Heading size="md" mb={8} textAlign="center" fontWeight={600}>Compare plans</Heading>
            <Box border="1px solid" borderColor="gray.200" borderRadius="lg" overflow="hidden" mb={8} boxShadow="sm">
                <Grid templateColumns="repeat(4, 1fr)" gap={0}>
                    {/* Table header */}
                    <GridItem p={4} borderBottom="1px solid" borderRight="1px solid" borderColor="gray.200">
                        <Text fontWeight="bold">Feature</Text>
                    </GridItem>
                    <GridItem p={4} borderBottom="1px solid" borderRight="1px solid" borderColor="gray.200" textAlign="center">
                        <Text fontWeight="bold">Free Plan</Text>
                    </GridItem>
                    <GridItem p={4} borderBottom="1px solid" borderRight="1px solid" borderColor="gray.200" textAlign="center">
                        <Text fontWeight="bold">Basic Plan</Text>
                    </GridItem>
                    <GridItem p={4} borderBottom="1px solid" borderColor="gray.200" textAlign="center">
                        <Text fontWeight="bold">Premium Plan</Text>
                    </GridItem>

                    {/* Feature rows */}
                    {features.map((feature, idx) => (
                        <React.Fragment key={`row-${idx}`}>
                            <GridItem
                                p={4}
                                borderBottom={idx < features.length - 1 ? "1px solid" : "none"}
                                borderRight="1px solid"
                                borderColor="gray.200"
                                bg={idx % 2 === 0 ? "gray.50" : "white"}
                            >
                                <Text fontWeight="medium">{feature.name}</Text>
                                {feature.desc && <Text fontSize="sm" color="gray.600">{feature.desc}</Text>}
                            </GridItem>
                            <GridItem
                                p={4}
                                borderBottom={idx < features.length - 1 ? "1px solid" : "none"}
                                borderRight="1px solid"
                                borderColor="gray.200"
                                textAlign="center"
                                bg={idx % 2 === 0 ? "gray.50" : "white"}
                            >
                                {feature.free && <CircledCheckIcon boxSize={5}/>}
                            </GridItem>
                            <GridItem
                                p={4}
                                borderBottom={idx < features.length - 1 ? "1px solid" : "none"}
                                borderRight="1px solid"
                                borderColor="gray.200"
                                textAlign="center"
                                bg={idx % 2 === 0 ? "gray.50" : "white"}
                            >
                                {feature.basic && <CircledCheckIcon boxSize={5}/>}
                            </GridItem>
                            <GridItem
                                p={4}
                                borderBottom={idx < features.length - 1 ? "1px solid" : "none"}
                                borderColor="gray.200"
                                textAlign="center"
                                bg={idx % 2 === 0 ? "gray.50" : "white"}
                            >
                                {feature.premium && <CircledCheckIcon boxSize={5}/>}
                            </GridItem>
                        </React.Fragment>
                    ))}
                </Grid>
            </Box>

            <Grid templateColumns="repeat(4, 1fr)" gap={6} mt={10}>
                <GridItem></GridItem>
                <GridItem textAlign="center">
                    <Heading size="lg" color="gray.900" fontWeight={600}>${freePrice}</Heading>
                    <Text color="gray.500" fontSize="sm" mb={4}>{isYearly ? "Yearly" : "Monthly"}</Text>
                    {/*<Button*/}
                    {/*    colorScheme="purple"*/}
                    {/*    fontWeight={600}*/}
                    {/*    width="100%"*/}
                    {/*>*/}
                    {/*    Choose Plan*/}
                    {/*</Button>*/}
                </GridItem>
                <GridItem textAlign="center">
                    <Heading size="lg" color="gray.900" fontWeight={600}>${basicPrice}</Heading>
                    <Text color="gray.500" fontSize="sm" mb={4}>{isYearly ? "Yearly" : "Monthly"}</Text>
                    {/*<Button*/}
                    {/*    colorScheme="purple"*/}
                    {/*    fontWeight={600}*/}
                    {/*    width="100%"*/}
                    {/*>*/}
                    {/*    Choose Plan*/}
                    {/*</Button>*/}
                </GridItem>
                <GridItem textAlign="center">
                    <Heading size="lg" color="gray.900" fontWeight={600}>${premiumPrice}</Heading>
                    <Text color="gray.500" fontSize="sm" mb={4}>{isYearly ? "Yearly" : "Monthly"}</Text>
                    {/*<Button*/}
                    {/*    colorScheme="purple"*/}
                    {/*    fontWeight={600}*/}
                    {/*    width="100%"*/}
                    {/*>*/}
                    {/*    Choose Plan*/}
                    {/*</Button>*/}
                </GridItem>
            </Grid>
        </Box>
    );
};

const PricingHero = () => {
    return (
        <Box
            className="pricingBg"
            color="white"
            p={6}
            borderRadius="lg"
            h="100%"
            width="100%"
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            overflow="hidden"
            boxShadow="md"
        >
            {/* Background Image */}
            <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                overflow="hidden"
                zIndex="0"
            >
                <Image
                    src={GirlBg}
                    fallbackSrc="https://via.placeholder.com/800x600"
                    alt="Spendify customer"
                    objectFit="cover"
                    height="100%"
                    width="100%"
                />
            </Box>

            <Box position="relative" zIndex="1">
                <Heading as="h2" size="lg" mb={2}>Save More</Heading>
                <Heading as="h3" size="md" mb={4}>With Good-plans.</Heading>
                <Text mb={10}>Choose a plan and get onboard in minutes.</Text>
            </Box>

            <Box position="relative" zIndex="1">
                <Button
                    leftIcon={<ArrowForwardIcon/>}
                    variant="outline"
                    color="white"
                    borderColor="white"
                    borderRadius="full"
                    size="md"
                >
                    Learn More
                </Button>
            </Box>
        </Box>
    );
};

const PricingSection = () => {
    const [isYearly, setIsYearly] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 600,
            once: true,
            easing: 'ease-out',
            offset: 100
        });
    }, []);

    return (
        <Container maxW="container.xl" py={12}>
            <VStack spacing={8} align="center">
                <Box textAlign="center">
                    <Heading
                        fontSize={["25px", null, "32px"]}
                        fontWeight={600}
                        mb={5}
                    >
                        Choose The Right Plan For You
                    </Heading>
                    <Text
                        fontSize={["16px", "18px"]}
                        color="gray.600"
                        lineHeight="1.8"
                        maxW="800px"
                        mx="auto"
                    >
                        Spendify makes managing your finances easy, whether you're just getting started or
                        need unlimited tracking and bank sync. Pick a plan that fits your needs:
                    </Text>
                </Box>

                <PricingToggle isYearly={isYearly} setIsYearly={setIsYearly}/>

                <Flex
                    direction={{base: "column", lg: "row"}}
                    gap={8}
                    align="stretch"
                    w="100%"
                >
                    <Box flex="0 0 auto" width={{base: "100%", lg: "25%"}} data-aos="fade-right"
                         data-aos-duration="500">
                        <PricingHero/>
                    </Box>

                    <Flex
                        direction={{base: "column", md: "row", lg: "row"}}
                        gap={6}
                        align="stretch"
                        flex="1"
                        wrap={{base: "nowrap", md: "wrap", lg: "nowrap"}}
                        justify="space-between"
                    >
                        <Box flex="1" minWidth={{md: "calc(50% - 12px)", lg: "0"}} data-aos="fade" data-aos-duration="700" data-aos-delay="50">
                            <PlanCard planType="free" isYearly={isYearly}/>
                        </Box>
                        <Box flex="1" minWidth={{md: "calc(50% - 12px)", lg: "0"}} data-aos="fade" data-aos-duration="700" data-aos-delay="150">
                            <PlanCard planType="basic" isYearly={isYearly}/>
                        </Box>
                        <Box flex="1" minWidth={{md: "calc(50% - 12px)", lg: "0"}} data-aos="fade-left" data-aos-duration="700" data-aos-delay="250">
                            <PlanCard planType="premium" isYearly={isYearly}/>
                        </Box>
                    </Flex>
                </Flex>

                <Box w="100%">
                    <PlanComparison isYearly={isYearly}/>
                </Box>
            </VStack>
        </Container>
    );
};

export default PricingSection;
