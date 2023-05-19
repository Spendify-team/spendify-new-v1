import React from "react";
import { Container } from "react-bootstrap";
import { Rating as RenderRating } from "react-simple-star-rating";
import styled from "styled-components";
import ManImg from "../../assets/man.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
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

const ReviewCmp = ({ bgColor }) => {
  const ReviewCard = ({ review, name, title, rating, img }) => {
    return (
      <>
        <ReviewCardWrapper>
          <ReviewText>{review}</ReviewText>

          <MainWrapper>
            <ReviewerWrapper>
              <ReviewerImage src={img} alt={name} />
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
          <Desc>See what are users says about us.</Desc>
          <ReviewSliderWrapper>
            <Swiper
              className="review-carousel"
              modules={[Autoplay, Pagination]}
              slidesPerView={3}
              breakpoints={{
                // when window width is >= 320px
                300: { slidesPerView: 0.7 },
                360: { slidesPerView: 0.8 },
                510: { slidesPerView: 1 },
                550: { slidesPerView: 1.1 },
                590: { slidesPerView: 1.2 },
                670: { slidesPerView: 1.4 },
                750: { slidesPerView: 1.7 },
                850: { slidesPerView: 2 },
                1010: { slidesPerView: 2.5 },
                1170: { slidesPerView: 3 },
              }}
              autoplay={{
                delay: 5000,
              }}
              pagination={{
                clickable: true,
                el: ".review-pagination",
              }}
              speed={1500}
              style={{ width: "100%" }}
              loop={true}
            >
              {[
                {
                  review:
                    "I used to struggle with keeping track of my finances, but ever since I started using this budgeting OLA, everything has become so much easier. It's like having a personal financial advisor in my pocket.",
                  name: "Peterson Wilson",
                  title: "Ceo Hive haven",
                  rating: 5,
                  img: ManImg,
                },
                {
                  review:
                    "I used to struggle with keeping track of my finances, but ever since I started using this budgeting OLA, everything has become so much easier. It's like having a personal financial advisor in my pocket.",
                  name: "Peterson Wilson",
                  title: "Ceo Hive haven",
                  rating: 5,
                  img: ManImg,
                },
                {
                  review:
                    "I used to struggle with keeping track of my finances, but ever since I started using this budgeting OLA, everything has become so much easier. It's like having a personal financial advisor in my pocket.",
                  name: "Peterson Wilson",
                  title: "Ceo Hive haven",
                  rating: 5,
                  img: ManImg,
                },
                {
                  review:
                    "I used to struggle with keeping track of my finances, but ever since I started using this budgeting OLA, everything has become so much easier. It's like having a personal financial advisor in my pocket.",
                  name: "Peterson Wilson",
                  title: "Ceo Hive haven",
                  rating: 5,
                  img: ManImg,
                },
                {
                  review:
                    "I used to struggle with keeping track of my finances, but ever since I started using this budgeting OLA, everything has become so much easier. It's like having a personal financial advisor in my pocket.",
                  name: "Peterson Wilson",
                  title: "Ceo Hive haven",
                  rating: 5,
                  img: ManImg,
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
