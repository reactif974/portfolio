const colors = {
  dark: "#17161a",
  white: "#F6F7FA",
  background_dark: "#121212",
};

const spacing = {
  xxs: "4px",
  xs: "8px",
  sm: "12px",
  md: "20px",
  lg: "32px",
  xl: "52px",
  xxl: "84px",
};

const fonts = {
  XXXS: "8px",
  XXS: "10px",
  XS: "12px",
  P0: "15px",
  P1: "18px",
  P2: "20px",
  P3: "24px",
  "P3.1": "33px",
  P4: "36px",
  P5: "48px",
  P6: "60px",
};
const gridUnit = 8;
const borderRadius = {
  subtle: 1,
  round: "5px",
  extraRound: "15px",
  circle: "50%",
};
const shadows = {};
const weights = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  heavy: 800,
};

// responsive
const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptopM: "1280px",
  laptop: "1440px",
  desktopHd: "2560px",
};
const devices = {
  mobileS: `(max-width:${sizes.mobileS})`,
  mobileM: `(max-width:${sizes.mobileM})`,
  mobileL: `(max-width:${sizes.mobileL})`,
  tablet: `(max-width:${sizes.tablet})`,
  laptopM: `(max-width:${sizes.laptopM})`,
  laptop: `(max-width:${sizes.laptop})`,
  desktopHd: `(max-width:${sizes.desktopHd})`,
};

export const theme = {
  colors,
  fonts,
  gridUnit,
  borderRadius,
  shadows,
  weights,
  spacing,
  sizes,
  devices,
};
