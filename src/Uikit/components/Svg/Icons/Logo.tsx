import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";
import dogeBoys from "../../../../assets/images/dogeboys/ticker2_32x32.png"

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <img src={dogeBoys} alt="" {...props}/>
  );
};

export default Icon;
