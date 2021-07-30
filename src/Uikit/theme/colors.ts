import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#A47126",
  primaryBright: "#53DEE9",
  primaryDark: "#A47126",
  secondary: "#A47126",
  success: "#A47126",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FEFEFE",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FEFEFE",
  contrast: "#2E1C00",
  dropdown: "#FFEACB",
  dropdownDeep: "#FFEACB",
  disabled: "#BDC2C4",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#FFEACB",
  tertiary: "#FFEACB",
  text: "#2E1C01",
  textDisabled: "#BDC2C4",
  textSubtle: "#A37128",
  borderColor: "#A37128",
  cardBorder: "#EDE9E1",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A37128 0%, #F8D08D 100%)",
    gold: "linear-gradient(180deg, #A37128 0%, #F8D08D 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#A37128",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#27262c",
  contrast: "#FFFFFF",
  disabled: "#BDC2C4",
  dropdown: "#1E1D20",
  invertedContrast: "#191326",
  dropdownDeep: "#F6F6F6",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#0098A1",
  tertiary: "#2E1C01",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#A37128",
  borderColor: "#524B63",
  cardBorder: "#F1EEE7",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    gold: "linear-gradient(180deg, #A37128 0%, #F8D08D 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
  },
};
