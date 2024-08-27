import {
    Box,
    Button,
    Container,
    Heading,
    Image,
    Text,
    VStack,
} from "@chakra-ui/react";
import HeroImg from "../../../assets/img/HeroImg.png";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

const HeroSection = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const download = () => {
        const userAgent = navigator.userAgent.toLowerCase();
        const isIphone = /iphone/i.test(navigator.userAgent);
        const isIpad = /ipad/i.test(navigator.userAgent);
        const isMacOS = /mac/i.test(navigator.userAgent);

        let targetUrl;

        if (isIphone || isIpad || isMacOS) {
            // Redirect for iOS devices
            targetUrl = 'https://apps.apple.com/us/app/spendify/id1629340357';
        } else {
            // Redirect for Android devices
            targetUrl = 'https://play.google.com/store/apps/details?id=com.rscbyte.spendifylite';
        }
        window.open(targetUrl, "_blank")
    }

    return (
        <section className="herosection">
            <Container size="xl" centerContent py={55}>
                <VStack spacing={0}>
                    <Heading
                        fontSize={[30, 48, null, 60]}
                        fontWeight={600}
                        color="neutralGray900"
                        fontFamily="Gilroy600"
                        mb={17}
                        textAlign="center"
                        data-aos="fade-up"
                    >
                        Chat with Ola your{" "}
                        <Text
                            as="span"
                            fontWeight={900}
                            fontFamily="Gilroy900"
                            color="secondaryColor"
                        >
                            Spendify
                        </Text>{" "}
                        Buddy
                    </Heading>
                    <Container maxW="650px" px={0}>
                        <Text
                            textAlign="center"
                            fontSize="20px"
                            fontWeight={500}
                            fontFamily="Gilroy500"
                            color="darkGray"
                            mb={8}
                            data-aos="fade-up"
                        >
                            Connecting with OLA goes beyond expense tracking and budgeting.
                            Chat, engage and get financial education!
                        </Text>
                    </Container>
                    <Button
                        variant="primaryButton"
                        px={5}
                        py="14px"
                        fontWeight={600}
                        fontFamily="Gilroy600"
                        color="neutralGray50"
                        mb={12}
                        data-aos="fade-up"
                        onClick={download}
                    >
                        Download now
                    </Button>
                    <Box
                        data-aos="fade-up"
                        maxW="774px"
                        w="100%"
                        h={["100%", null, null, "516px"]}
                    >
                        <Image src={HeroImg} alt="hero image"/>
                    </Box>
                </VStack>
            </Container>
        </section>
    );
};

export default HeroSection;
