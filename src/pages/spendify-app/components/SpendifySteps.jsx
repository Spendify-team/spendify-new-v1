import { Box, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import Step1 from "../../../assets/img/Step1.png";
import Step2 from "../../../assets/img/Step2.png";
import Step3 from "../../../assets/img/Step3.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SpendifySteps = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const steps = [
    {
      stepNumber: Step1,
      stepTitle: "Get app",
      stepDesc:
        "Download Spendify Mobile App\nfrom the app store or play store, or\nsignup via our web app.",
      data: "fade-right",
    },
    {
      stepNumber: Step2,
      stepTitle: "Get started",
      stepDesc:
        "Create a free Spendify  account\non mobile or the web. To get\nstarted.",
      data: "fade-up",
    },
    {
      stepNumber: Step3,
      stepTitle: "Friendly features",
      stepDesc:
        "Use our amazing  features to\nbudget and be a money manager\nwith ease.",
      data: "fade-left",
    },
  ];

  return (
    <section>
      <Box bgColor="stepsBg" mb={55}>
        <Container size="xl" centerContent py={55}>
          <Heading
            fontFamily="Gilroy700"
            fontSize={[30, null, 40, 48]}
            fontWeight={700}
            color="neutralGray900"
            mb={4}
            data-aos="fade-up"
          >
            Simple steps to use Spendify
          </Heading>
          <Text
            fontFamily="Gilroy400"
            fontWeight={400}
            fontSize={[18, null, 20]}
            color="darkGray"
            mb={14}
            data-aos="fade-up"
          >
            Sign Up Free for Your Best Money Manager Solution!
          </Text>
          <Stack
            direction={["column", null, "row"]}
            w="100%"
            gap={[4, null, null, 23]}
            alignItems="center"
          >
            {steps.map((step, i) => (
              <Box
                key={i}
                p={[5, null, null, "44px"]}
                bg="white"
                filter="drop-shadow(0px 4.612px 57.656px rgba(115, 115, 115, 0.07))"
                maxW={413}
                w="100%"
                h={["auto", null, 348]}
                borderRadius="11px"
                data-aos={step.data}
              >
                <Box maxW={[50, null, 82]} w="100%" h={[50, null, 82]} mb={10}>
                  <Image src={step.stepNumber} alt="analytics" />
                </Box>
                <Heading
                  fontFamily="Gilroy700"
                  fontSize={[18, null, 24]}
                  fontWeight={700}
                  color="neutralGray900"
                  mb="9px"
                >
                  {step.stepTitle}
                </Heading>
                <Text
                  color="neutralGray900"
                  fontFamily="Gilroy400"
                  fontWeight={400}
                  fontSize={[16, null, 20]}
                >
                  {step.stepDesc}
                </Text>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>
    </section>
  );
};

export default SpendifySteps;
