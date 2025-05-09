import {
    Box,
    Container,
    Divider,
    HStack,
    Heading,
    Image,
    Stack,
    Text,
    VStack, useBreakpointValue,
} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import BrandLogo from "../../assets/img/BrandLogo.png";
import AppStore from "../../assets/img/AppStore.png";
import PlayStore from "../../assets/img/PlayStore.png";
import Instagram from "../../assets/img/Instagram.png";
import LinkedIn from "../../assets/img/LinkedIn.png";
import Facebook from "../../assets/img/Facebook.png";
import Twitter from "../../assets/img/Twitter.png";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

const Footer = () => {
    const isMobile = useBreakpointValue({base: true, md: false});

    const currentYear = new Date().getFullYear();

    useEffect(() => {
        AOS.init();
    }, []);

    const buttons = [

        {
            name: "AppStore Download",
            button: AppStore,
            data: "fade-right",
            link: "https://apps.apple.com/us/app/spendify/id1629340357"
        },
        {
            name: "PlayStore Download",
            button: PlayStore,
            data: "fade-up",
            link: "https://play.google.com/store/apps/details?id=com.rscbyte.spendifylite"
        },
    ];

    const socials = [
        {
            title: "Instagram",
            img: Instagram,
            link: "https://www.instagram.com/myspendify/",
        },
        {
            title: "LinkedIn",
            img: LinkedIn,
            link: "https://www.linkedin.com/company/spendify-ng/",
        },
        {
            title: "Facebook",
            img: Facebook,
            link: "https://web.facebook.com/spendify.ng",
        },
        {
            title: "Twitter",
            img: Twitter,
            link: "https://twitter.com/myspendify",
        },
    ];

    return (
        <footer>
            <Container size="xl" centerContent>
                <Stack
                    direction={["column", "row"]}
                    justifyContent="space-between"
                    w="100%"
                    py={55}
                    spacing={[6, null]}
                >
                    {!isMobile && (
                        <Box w="156px" h="45.8px" display={["none", "block"]}>
                            <Link to="/">
                                <Image src={BrandLogo} alt="logo"/>
                            </Link>
                        </Box>
                    )}
                    <Box>
                        <Heading
                            as="h6"
                            fontFamily="Gilroy700"
                            fontWeight={700}
                            color="neutralGray900"
                            fontSize={16}
                            mb="20px"
                        >
                            Products
                        </Heading>
                        <VStack
                            spacing={13}
                            fontSize={14}
                            fontFamily="Gilroy400"
                            fontWeight={400}
                            color="darkSlateBlue"
                            alignItems="flex-start"
                        >
                            <Link to="/ola-ai">Spendify AI OLA</Link>
                            <Link to="/spendify-tracker">Tracker</Link>
                            <Link to="/spendify-news">Finance news</Link>
                            <Link to="/spendify-insights">Insights</Link>
                            <Link to="/analysis">Analytics</Link>
                            <Link to="/spendify-101">Spendify 101</Link>
                        </VStack>
                    </Box>
                    <Box>
                        <Heading
                            as="h6"
                            fontFamily="Gilroy700"
                            fontWeight={700}
                            color="neutralGray900"
                            fontSize={16}
                            mb="20px"
                        >
                            Transparency
                        </Heading>
                        <VStack
                            spacing={13}
                            fontSize={14}
                            color="darkSlateBlue"
                            alignItems="flex-start"
                            fontFamily="Gilroy400"
                            fontWeight={400}
                        >
                            <Link to="/policies/terms">Terms and conditions</Link>
                            <Link to="/policies/privacy">Privacy</Link>
                            <Link to="mailto:info@spendify.ca">Contact us</Link>
                        </VStack>
                    </Box>
                    <Box>
                        <Heading
                            as="h6"
                            fontFamily="Gilroy700"
                            fontWeight={700}
                            color="neutralGray900"
                            fontSize={16}
                            mb="20px"
                        >
                            Follow Us
                        </Heading>
                        <HStack
                            spacing={13}
                            fontSize={14}
                            color="darkSlateBlue"
                            alignItems="flex-start"
                        >
                            {socials.map((social, i) => (
                                <Link key={i} to={social.link}>
                                    <Image
                                        src={social.img}
                                        alt={social.title}
                                        w="30px"
                                        h="28px"
                                    />
                                </Link>
                            ))}
                        </HStack>
                        <HStack spacing={21} mt={10} display={"grid"}>
                            {buttons.map((btn, i) => (
                                <Box key={i} cursor="pointer" w={118} h={37}>
                                    <Image src={btn.button} alt={btn.name}
                                           onClick={() => window.open(btn.link, "_blank")}/>
                                </Box>
                            ))}
                        </HStack>
                    </Box>
                </Stack>
                <Divider color="darkBlue" opacity="0.1"/>
                <Text
                    fontFamily="Gilroy400"
                    fontWeight={400}
                    py={55}
                    fontSize={13}
                    textAlign="center"
                    color="darkBlue"
                    data-aos="fade-up"
                >
                    © {currentYear} Spendify Technologies All Rights Reserved.
                </Text>
            </Container>
        </footer>
    );
};

export default Footer;
