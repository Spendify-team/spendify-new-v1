import {
    Box,
    Container,
    Heading,
    Image,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";
import AppStore from "../../../assets/img/AppStore.png";
import PlayStore from "../../../assets/img/PlayStore.png";
import SpendifyWeb from "../../../assets/img/SpendifyWeb.png";
import IphoneHero from "../../../assets/img/IphoneHero.png";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

const HeroSection = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const buttons = [
        {
            name: "AppStore Download",
            button: AppStore,
            data: "fade-right",
            link:"https://apps.apple.com/us/app/spendify/id1629340357"
        },
        {
            name: "PlayStore Download",
            button: PlayStore,
            data: "fade-up",
            link:"https://play.google.com/store/apps/details?id=com.rscbyte.spendifylite"
        },
        // {
        //   name: "Spendify web",
        //   button: SpendifyWeb,
        //   data: "fade-left",
        // },
    ];
    return (
        <section className="heroBg herosection">
            <Container h="100%" size="xl" centerContent pt={55}>
                <VStack h="100%" gap={[4, null, 5, 10]} justifyContent="space-between">
                    <Box
                        borderRadius={38}
                        maxW={243}
                        w="100%"
                        p="10px"
                        bgColor="bgFinanceCompanion"
                        data-aos="fade-up"
                    >
                        <Text
                            textAlign="center"
                            color="secondaryColor"
                            fontSize={20}
                            fontWeight={700}
                        >
                            Finance Companion
                        </Text>
                    </Box>
                    <Container maxW="1000px" px={0}>
                        <Heading
                            textAlign="center"
                            fontWeight={600}
                            fontFamily="Gilroy600"
                            fontSize={[34, 52, null, 64]}
                            color="neutralGray900"
                            data-aos="fade-up"
                        >
                            Personal financial management designed{" "}
                            <Text as="span" color="secondaryColor">
                                just for you.
                            </Text>
                        </Heading>
                    </Container>
                    <Text
                        color="darkGray"
                        textAlign="center"
                        fontSize={20}
                        fontFamily="Gilroy400"
                        data-aos="fade-up"
                    >
                        Track spending , manage budgets and get insights
                    </Text>
                    <Stack direction={["column", "row"]} spacing={21}>
                        {buttons.map((btn, i) => (
                            <Box
                                data-aos={btn.data}
                                onClick={() => window.open(btn.link, "_blank")}
                                key={i}
                                cursor="pointer"
                                maxW="171px"
                                w="100%"
                                h={54}
                            >
                                <Image src={btn.button} alt={btn.name}/>
                            </Box>
                        ))}
                    </Stack>
                    <Box data-aos="fade-up" maxW={405} w="20em" h="auto">
                        {/*<video*/}
                        {/*    onLoadedMetadata={(event) => {*/}
                        {/*        event.target.playbackRate = 2.0;*/}
                        {/*    }}*/}
                        {/*    autoPlay muted loop playsInline={true} style={{width: "inherit"}}>*/}
                        {/*    <source*/}
                        {/*        src="https://res.cloudinary.com/dckonxwzh/video/upload/v1710113533/pc6dnu2bnfjdby5eb4yv.mp4"*/}
                        {/*        type="video/mp4"/>*/}
                        {/*</video>*/}
                        <Image src={IphoneHero} alt="phone"/>
                    </Box>
                </VStack>
            </Container>
        </section>
    );
};

export default HeroSection;
