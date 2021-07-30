import styled, { DefaultTheme } from "styled-components";
import { Variant, variants } from "../Button/types";

type StyledButtonMenuProps = {
  variant: Variant;
  theme: DefaultTheme;
};

const getBackgroundColor = ({ theme, variant }: StyledButtonMenuProps) => {
  return theme.colors[variant === variants.SUBTLE ? "tertiary" : "input"];
};

const StyledButtonMenu = styled.div<{ variant: Variant }>`
  background-color: ${getBackgroundColor};
  border-radius: 16px;
  border: 1px solid ${({theme}) => theme.colors.borderColor};
  display: inline-flex;

  & > button + button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }
`;

export default StyledButtonMenu;
