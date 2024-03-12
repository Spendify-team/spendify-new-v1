import {
    Box,
    Center,
    Container,
    Heading,
    Image,
    Stack,
    VStack,
} from "@chakra-ui/react";
import AppStore from "../assets/img/AppStore.png";
import PlayStore from "../assets/img/PlayStore.png";
import SpendifyWeb from "../assets/img/SpendifyWeb.png";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

const Experience = () => {
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
        // {
        //   name: "Spendify web",
        //   button: SpendifyWeb,
        //   data: "fade-left",
        // },
    ];
    return (
        <section className="experienceBg">
            <Container size="xl" centerContent py={55}>
                <Box h={["100%", null, "600px"]} w="100%">
                    <Center h="100%">
                        <VStack spacing="48px">
                            <Container maxW="900px">
                                <Heading
                                    color="neutralGray900"
                                    fontSize={[30, null, 50]}
                                    fontWeight={700}
                                    fontFamily="Gilroy700"
                                    textAlign="center"
                                    data-aos="fade-up"
                                >
                                    Experience a user-friendly, secure finance solution.
                                </Heading>
                            </Container>
                            <Stack direction={["column", "row"]} spacing={21}>
                                {buttons.map((btn, i) => (
                                    <Box
                                        data-aos={btn.data}
                                        key={i}
                                        cursor="pointer"
                                        maxW="171px"
                                        w="100%"
                                        h={54}
                                        onClick={() => window.open(btn.link, "_blank")}
                                    >
                                        <Image src={btn.button} alt={btn.name}/>
                                    </Box>
                                ))}
                            </Stack>
                        </VStack>
                    </Center>
                </Box>
            </Container>
        </section>
    );
};

export default Experience;
