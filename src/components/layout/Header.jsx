import {
    Box,
    Button,
    Container,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    HStack,
    Image,
    ListItem,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    SimpleGrid,
    Text,
    UnorderedList,
    VStack,
    useDisclosure,
} from "@chakra-ui/react";
import BrandLogo from "../../assets/img/BrandLogo.png";
import LangFlag from "../../assets/img/LangFlag.png";
import DownArrow from "../../assets/icon/chevron-down.svg";
import DropDown from "../../assets/icon/Arrow-Down.svg";
import UserProfile from "../../assets/icon/UserProfile.svg";
import Chart from "../../assets/icon/Chart.svg";
import {Link, useLocation} from "react-router-dom";
import HamburgerIcon from "../../assets/icon/HamburgerIcon";
import {useState} from "react";
import {navItems} from "../../utils/constants";

const Header = () => {
    const [dropdown, setDropdown] = useState(false);
    const location = useLocation();
    const {isOpen, onOpen, onClose} = useDisclosure();
    const notWhiteBgRoute = ["/", "/spendify-insights", "/spendify-news", "/spendify-101", "/blog", "/spendify-tracker"]
    const [placement] = useState("left");
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
        <header>
            <Box
                borderBottom="1px solid"
                borderColor="border"
                bgColor={notWhiteBgRoute.includes(location.pathname) ? "background" : "white"}
                position="fixed"
                minW="100vw"
                zIndex={99}
                top={0}
            >
                <Container size="xl" centerContent>
                    <HStack justifyContent="space-between" h="90px" w="100%">
                        <Box w="156px" h="45.8px">
                            <Link to="/">
                                <Image src={BrandLogo} alt="logo"/>
                            </Link>
                        </Box>
                        <Box display={["none", null, null, "block"]}>
                            <HStack
                                color="neutralGray900"
                                fontFamily="Gilroy600"
                                fontWeight={600}
                            >
                                <Menu>
                                    <MenuButton
                                        color="neutralGray900"
                                        fontFamily="Gilroy600"
                                        fontWeight={600}
                                    >
                                        <HStack>
                                            <Text>Products</Text>
                                            <Image src={DropDown} alt="dropdown"/>
                                        </HStack>
                                    </MenuButton>
                                    <MenuList border="6px solid" borderColor="lightGray02" py={1}>
                                        <SimpleGrid columns={{base: 1, md: 2}} p={3} spacing={2}>
                                            {navItems.map((item, index) => (
                                                <MenuItem
                                                    key={index}
                                                    borderRadius={"5px"}
                                                    _hover={{
                                                        bgColor: "lightGray01",
                                                        color: "secondaryColor",
                                                    }}
                                                >
                                                    <Link to={item.to}>
                                                        <VStack>
                                                            <Container p={0}>
                                                                <Text
                                                                    color="neutralGray900"
                                                                    fontFamily={"Gilroy700"}
                                                                    fontSize={14}
                                                                    fontWeight={900}>{item.name}</Text>
                                                            </Container>
                                                            <Container p={0} mt={-2}>
                                                                <Text color="lightGray00" fontSize={[10, 12]}
                                                                      fontWeight="extrabold">{item.subText}</Text>
                                                            </Container>
                                                        </VStack>
                                                    </Link>
                                                </MenuItem>
                                            ))}
                                        </SimpleGrid>
                                    </MenuList>
                                </Menu>
                                <Link to="/faq">
                                    <Box px={5}>F.A.Q</Box>
                                </Link>
                                <Link to="/blog">
                                    <Box px={5}>Blog</Box>
                                </Link>
                                <Link to="/pricing">
                                    <Box px={5}>Pricing</Box>
                                </Link>
                            </HStack>
                        </Box>
                        <Box>
                            <HStack spacing={[2, null, null, 4]}>
                                <Box cursor="pointer">
                                    <HStack spacing={2}>
                                        <Box w={["24px", "38px"]} h={["24px", "38px"]}>
                                            <Image src={LangFlag} alt="language"/>
                                        </Box>
                                        <HStack spacing={0}>
                                            <Text
                                                fontFamily="Gilroy600"
                                                fontWeight={600}
                                                fontSize={[14, 16]}
                                            >
                                                En
                                            </Text>
                                            <Image src={DownArrow} alt="dropdown"/>
                                        </HStack>
                                    </HStack>
                                </Box>
                                {/*<Box*/}
                                {/*    display={["none", null, null, "block"]}*/}
                                {/*    color="primaryColor"*/}
                                {/*    fontWeight={600}*/}
                                {/*    fontFamily="Gilroy600"*/}
                                {/*    py={3}*/}
                                {/*    px="18px"*/}
                                {/*>*/}
                                {/*    <Link to="" onClick={download}>Sign In</Link>*/}
                                {/*</Box>*/}
                                <Button
                                    display={["none", null, null, "block"]}
                                    variant="primaryButton"
                                    fontFamily="Gilroy600"
                                    fontWeight={600}
                                    py={3}
                                    px="18px"
                                    w="129px"
                                    onClick={download}
                                >
                                    Download
                                </Button>
                                <Box
                                    onClick={onOpen}
                                    cursor="pointer"
                                    display={["block", null, null, "none"]}
                                >
                                    <HamburgerIcon/>
                                </Box>
                                <Drawer
                                    placement={placement}
                                    onClose={onClose}
                                    isOpen={isOpen}
                                    size="sm"
                                >
                                    <DrawerOverlay/>
                                    <DrawerContent width="lg">
                                        <DrawerCloseButton/>
                                        <DrawerHeader borderBottomWidth="1px">
                                            <Link to="/" onClick={onClose}>
                                                <Box w={156} h={46}>
                                                    <Image src={BrandLogo} alt="logo"/>
                                                </Box>
                                            </Link>
                                        </DrawerHeader>
                                        <DrawerBody my={6}>
                                            <VStack
                                                spacing={4}
                                                alignItems="center"
                                                h="100vh"
                                                w="100%"
                                            >
                                                <Box w="100%" cursor="pointer">
                                                    <HStack
                                                        color="neutralGray900"
                                                        fontWeight={600}
                                                        fontFamily="Gilroy600"
                                                        justifyContent="center"
                                                        onClick={() => setDropdown((prev) => !prev)}
                                                    >
                                                        <Text textAlign="center">Products</Text>
                                                        <Image src={DropDown} alt="dropdown"/>
                                                    </HStack>
                                                </Box>
                                                {dropdown && (
                                                    <VStack w="100%" textAlign="center"
                                                            backgroundColor={"bgFinanceCompanion"} borderRadius={10}>
                                                        <UnorderedList spacing={5} listStyleType="none">
                                                            {navItems.map((item, index) => (
                                                                <ListItem
                                                                    key={index}
                                                                    p={2}
                                                                    _hover={{
                                                                        bgColor: "bgFinanceCompanion",
                                                                        color: "secondaryColor",
                                                                    }}
                                                                >
                                                                    <Link to={item.to}>
                                                                        <HStack
                                                                            color="neutralGray900"
                                                                            fontWeight={600}
                                                                            fontFamily="Gilroy600"
                                                                            spacing="10px"
                                                                        >
                                                                            <Text>{item.name}</Text>
                                                                        </HStack>
                                                                    </Link>
                                                                </ListItem>
                                                            ))}
                                                        </UnorderedList>
                                                    </VStack>
                                                )}
                                                <Link to="/faq">
                                                    <Text
                                                        color="neutralGray900"
                                                        fontWeight={600}
                                                        fontFamily="Gilroy600"
                                                        py={3}
                                                        px={5}
                                                    >
                                                        F.A.Q
                                                    </Text>
                                                </Link>
                                                <Link to="/blog">
                                                    <Box px={5}>Blog</Box>
                                                </Link>

                                                <Link to="/pricing">
                                                    <Box px={5}>Pricing</Box>
                                                </Link>
                                                {/*<Link to="/">*/}
                                                {/*    <Box*/}
                                                {/*        color="primaryColor"*/}
                                                {/*        fontWeight={600}*/}
                                                {/*        fontFamily="Gilroy600"*/}
                                                {/*        py={3}*/}
                                                {/*        px="18px"*/}
                                                {/*        onClick={download}*/}
                                                {/*    >*/}
                                                {/*        Sign In*/}
                                                {/*    </Box>*/}
                                                {/*</Link>*/}
                                                <Button
                                                    variant="primaryButton"
                                                    fontFamily="Gilroy600"
                                                    fontWeight={600}
                                                    py={3}
                                                    px="18px"
                                                    w="100%"
                                                    onClick={download}
                                                >
                                                    Download
                                                </Button>
                                            </VStack>
                                        </DrawerBody>
                                    </DrawerContent>
                                </Drawer>
                            </HStack>
                        </Box>
                    </HStack>
                </Container>
            </Box>
        </header>
    );
};

export default Header;
