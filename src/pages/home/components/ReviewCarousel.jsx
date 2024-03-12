import {Box, HStack, Image, Text, VStack} from "@chakra-ui/react";
import ReviewProfile from "../../../assets/img/ReviewProfile.png";
import Stars from "../../../assets/img/Stars.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewCarousel = () => {
    const reviews = [
        {
            userImg: ReviewProfile,
            rating: Stars,
            reviewText: "Accuracy is just too much...if it's possible I would have given the developer ten 10 🌟. What a well orchestrated app? It is fantastic.",
            userName: "Michael M. Ogale",
            designation: "Nigeria",
        },
        {
            userImg: ReviewProfile,
            rating: Stars,
            reviewText: "Spendify is simply the best expense tracker that fit into my personal budgetary control system. I can call it 'a good guidance and perfect checker",
            userName: "Anonymous",
            designation: "Egypt",
        },
        {
            userImg: ReviewProfile,
            rating: Stars,
            reviewText: "This app is great. It's simplicity allows individuals clear understanding on how their finances flow daily, weekly, quarterly and annual",
            userName: "Anonymous",
            designation: "United States of America",
        },
        {
            userImg: ReviewProfile,
            rating: Stars,
            reviewText: "I love this app, it really helps in managing your financial plans for the month. A must have on your phone.",
            userName: "Anonymous",
            designation: "UAE",
        },
        {
            userImg: ReviewProfile,
            rating: Stars,
            reviewText: "It is very helpful in displaying your money habits. Wow, it is very important in this current situation of economic meltdown.",
            userName: "Ajibike Jimoh",
            designation: "Nigeria",
        }
    ];

    const settings = {
        className: "userReview",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "50px",
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
            {reviews.map((review, i) => (
                <Box
                    key={i}
                    maxW={["100%", null, "400px"]}
                    h={["auto", null, null, 270]}
                    w="100%"
                    py={[3, null, 4, 6]}
                    px={[4, null, 5, "31px"]}
                    borderRadius={8}
                    bgColor="white"
                    marginLeft={[-5, null, -4, "-18px", -1]}
                    boxShadow="0px 3.16px 47.405px 0px rgba(30, 30, 30, 0.06)"
                >
                    <VStack justifyContent="space-between" h="100%">
                        <Text
                            fontFamily="Gilroy400"
                            fontWeight={400}
                            fontSize={14}
                            color="darkSlateBlue"
                            lineHeight="22px"
                        >
                            {review.reviewText}
                        </Text>
                        <HStack mt={25} justifyContent="space-between" w="100%">
                            <HStack spacing={4}>
                                <Box w={55} h={55}>
                                    <Image src={review.userImg} alt="user image"/>
                                </Box>
                                <Box>
                                    <Text fontSize={14} fontFamily="Gilroy700" fontWeight={700}>
                                        {review.userName}
                                    </Text>
                                    <Text fontSize={14} fontFamily="Gilroy400" fontWeight={400}>
                                        {review.designation}
                                    </Text>
                                </Box>
                            </HStack>
                            <Box maxW={84} w="100%" h={12} display={["none", "block"]}>
                                <Image src={review.rating} alt="rating star"/>
                            </Box>
                        </HStack>
                    </VStack>
                </Box>
            ))}
        </Slider>
    );
};

export default ReviewCarousel;
