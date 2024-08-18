import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./components/ui/Button";
import { containerTheme } from "./components/ui/Container";

// example theme
export const theme = extendTheme({
  components: {
    Button: buttonTheme,
    Container: containerTheme,
  },
  fonts: {
    body: `"Gilroy", sans-serif`,
    gilroy: `"Gilroy", sans-serif`,
    inter: `'Inter', sans-serif`,
  },
  colors: {
    transparent: "transparent",
    background: "#FBF5F9",
    black: "#000000",
    white: "#fff",
    primaryColor: "#A93691",
    secondaryColor: "#5E075F",
    neutralGray900: "#0F172A",
    border: "#E2E8F0",
    steelBlue: "#57637D",
    darkGray: "#424651",
    darkBlue: "#042552",
    darkSlateBlue: "#1E293B",
    LavenderBlue: "#8592AD",
    magentaPink: "#FF1181",
    borderColor: "rgba(94, 7, 95, 0.20)",
    bgFinanceCompanion: "rgba(165, 51, 143, 0.10)",
    financeAiBg: "rgba(203, 139, 190, 0.10)",
    analyticsBorder: "rgba(196, 215, 233, 0.70)",
    neutralGray50: "#F8FAFC",
    stepsBg: "#FFFAFE",
    lightGray: "#F0F2F5",
    lightGray00: "#D3D5D7",
    lightGray01: "#F9F9F9",
    lightGray02: "#f2f2f2",
    veryDarkGray: "#363F52"
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
});
