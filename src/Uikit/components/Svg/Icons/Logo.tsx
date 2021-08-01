import React from "react";
import styled from 'styled-components'
import { SvgProps } from "../types";
import headerLogo from "../../../../assets/images/dogeboys/headerLogo.png"

const StyledImg = styled.img`
  @media screen and (max-width: 576px) {
      width: 90px;
  }
  @media screen and (min-width: 577px) {
      width: 120px;
  }
`

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <StyledImg src={headerLogo} alt="" {...props}/>
  );
};

export default Icon;
