import {Box, Image, useBreakpointValue} from "@chakra-ui/react";
import Iphone13promax1 from "../../../assets/img/Iphone13promax-1.png";
import Iphone13promax2 from "../../../assets/img/Iphone13promax-2.png";
import Iphone13promax3 from "../../../assets/img/Iphone13promax-3.png";
import Iphone13promax4 from "../../../assets/img/Iphone13promax-4.png";
import Iphone13promax5 from "../../../assets/img/Iphone13promax1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AppFeatureCarousel = () => {
    const isMobile = useBreakpointValue({base: true, md: false});

    const appFeatures = [
        {
            img: Iphone13promax5,
            maxW: "249px",
        },
        {
            img: Iphone13promax1,
            maxW: "249px",
        },
        {
            img: Iphone13promax2,
            maxW: "249px",
        },
        {
            img: Iphone13promax3,
            maxW: "249px",
        },
        {
            img: Iphone13promax4,
            maxW: "249px",
        },
    ];

    const filteredAppFeatures = isMobile
        ? appFeatures.slice(1, -1)
        : appFeatures;

    const settings = {
        className: "appFeature",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            {filteredAppFeatures.map((feature, i) => (
                <Box
                    display="flex"
                    justifyContent="center"
                    key={i}
                    maxW="249px"
                    w="100%"
                    h="499px"
                >
                    <Image src={feature.img} alt="app feature"/>
                </Box>
            ))}
        </Slider>
    );
};

export default AppFeatureCarousel;
