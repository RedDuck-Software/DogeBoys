import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";
import headerLogo from "../../../../assets/images/dogeboys/headerLogo.png"

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  return (
    <img src={headerLogo} alt="" style={{height: '80%'}}/>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
