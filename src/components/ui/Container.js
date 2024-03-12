import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

// define custom sizes
const sizes = {
  // sm: defineStyle({
  //   maxW: '45ch',
  //   p: '4',
  // }),
  // md: defineStyle({
  //   maxW: 'container.sm',
  //   p: '6',
  //   fontSize: 'lg',
  // }),
  // lg: defineStyle({
  //   maxW: '75ch',
  //   p: '8',
  //   fontSize: 'xl',
  // }),
  xl: defineStyle({
    maxW: "1300px",
  }),
};

// export the component theme
export const containerTheme = defineStyleConfig({ sizes });
