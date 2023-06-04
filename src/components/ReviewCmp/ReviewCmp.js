import React from "react";
import {Container} from "react-bootstrap";
import {Rating as RenderRating} from "react-simple-star-rating";
import styled from "styled-components";
import ManImg from "../../assets/man-user.svg";
import WomanImg from "../../assets/woman.svg";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const ContainerDiv = styled(Container)`
  padding: 4rem 3rem;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#fff")};

  @media only screen and (max-width: 500px) {
    padding: 4rem 1rem 2rem;
  }
`;

const Wrapper = styled.div`
  max-width: calc(1100px + 3rem);
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-family: "Gilroy600";
  font-size: 48px;
  color: #0f172a;

  @media only screen and (max-width: 599px) {
    font-size: 30px;
  }
`;

const Span = styled.span`
  font-family: "Gilroy900";
`;

const Desc = styled.p`
  margin: 0;
  font-family: "Gilroy500";
  font-size: 20px;
  text-align: center;
  color: #424651;
  padding: 12px 0;

  @media only screen and (max-width: 599px) {
    font-size: 18px;
  }
`;

const ReviewSliderWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  padding-top: 1.2rem;

  @media only screen and (max-width: 599px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ReviewCardWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 1.5rem;
  box-shadow: 2px 3.16034px 7.4051px rgba(30, 30, 30, 0.06);
  border-radius: 7.90086px;
  background-color: #ffffff;
`;

const ReviewText = styled.p`
  font-family: "Gilroy400";
  font-size: 14px;
  color: #1e293b;
  margin: 0;
  text-align: justify;
`;

const MainWrapper = styled.div`
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

const ReviewerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ReviewerImage = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
`;

const ReviewerDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: left;
`;

const ReviewerName = styled.h2`
  margin: 0;
  font-family: "Gilroy700";
  font-size: 15.8017px;
  color: #1e293b;
`;

const ReviewerRole = styled.p`
  margin: 0;
  font-family: "Gilroy600";
  font-size: 11.0612px;
  color: #424651;
  opacity: 0.7;
`;

const RatingWrapper = styled.div`
  max-width: 84px;
  width: 100%;
`;

const ReviewPagination = styled.div`
  padding-top: 1rem;

  & > .swiper-pagination-bullet {
    width: 11px;
    height: 11px;
    margin: 0 5px;
    background: #ebebeb;
    opacity: unset;
    cursor: pointer;
  }

  & > .swiper-pagination-bullet-active {
    background: #a93691;
  }
`;

const ReviewCmp = ({bgColor}) => {
    const ReviewCard = ({review, name, title, rating, img}) => {
        return (
            <>
                <ReviewCardWrapper>
                    <ReviewText>{review}</ReviewText>

                    <MainWrapper>
                        <ReviewerWrapper>
                            <ReviewerImage src={img} alt={name}/>
                            <ReviewerDetails>
                                <ReviewerName>{name}</ReviewerName>
                                <ReviewerRole>{title}</ReviewerRole>
                            </ReviewerDetails>
                        </ReviewerWrapper>
                        <RatingWrapper>
                            <RenderRating
                                size={15}
                                readonly={true}
                                iconsCount={5}
                                initialValue={5}
                                SVGstrokeColor={"#FFB619"}
                            />
                        </RatingWrapper>
                    </MainWrapper>
                </ReviewCardWrapper>
            </>
        );
    };
    return (
        <>
            <ContainerDiv bgColor={bgColor} fluid>
                <Wrapper>
                    <Title>
                        <Span>Reviews from</Span> our customers
                    </Title>
                    <Desc>See what our users say about us.</Desc>
                    <ReviewSliderWrapper>
                        <Swiper
                            className="review-carousel"
                            modules={[Autoplay, Pagination]}
                            slidesPerView={3}
                            breakpoints={{
                                // when window width is >= 320px
                                300: {slidesPerView: 0.7},
                                360: {slidesPerView: 0.8},
                                510: {slidesPerView: 1},
                                550: {slidesPerView: 1.1},
                                590: {slidesPerView: 1.2},
                                670: {slidesPerView: 1.4},
                                750: {slidesPerView: 1.7},
                                850: {slidesPerView: 2},
                                1010: {slidesPerView: 2.5},
                                1170: {slidesPerView: 3},
                            }}
                            autoplay={{
                                delay: 5000,
                            }}
                            pagination={{
                                clickable: true,
                                el: ".review-pagination",
                            }}
                            speed={1500}
                            style={{width: "100%"}}
                            loop={true}
                        >
                            {[
                                {
                                    review: "Accuracy is just too much...if it's possible I would have given the developer ten 10 🌟",
                                    name: "Michael M. Ogale",
                                    title: "Nigeria",
                                    rating: 5,
                                    img: ManImg,
                                },
                                {
                                    review: "Spendify is simply the best expense tracker that fit into my personal budgetary control system. I can call it 'a good guidance and perfect checker",
                                    name: "A Google User",
                                    title: "Egypt",
                                    rating: 5,
                                    img: WomanImg,
                                },
                                {
                                    review: "This app is great. It's simplicity allows individuals clear understanding on how their finances flow daily, weekly, quarterly and annual",
                                    name: "A Google User",
                                    title: "United States of America",
                                    rating: 5,
                                    img: ManImg,
                                },
                                {
                                    review: "I love this app, it really helps in managing your financial plans for the month. A must have on your phone.",
                                    name: "A Google User",
                                    title: "UAE",
                                    rating: 5,
                                    img: ManImg,
                                },
                                {
                                    review: "It is very helpful in displaying your money habits\n",
                                    name: "Ajibike Jimoh",
                                    title: "Nigeria",
                                    rating: 5,
                                    img: WomanImg,
                                },
                            ].map((v, i) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <ReviewCard
                                            review={v.review}
                                            name={v.name}
                                            title={v.title}
                                            rating={v.rating}
                                            img={v.img}
                                        />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </ReviewSliderWrapper>
                    <ReviewPagination className="review-pagination"></ReviewPagination>
                </Wrapper>
            </ContainerDiv>
        </>
    );
};

export default ReviewCmp;
