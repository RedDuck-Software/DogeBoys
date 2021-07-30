import React from "react";
import { SvgProps } from "../types";
import dogeBoys from '../../../../assets/images/dogeboys/ticker2_28x28.png'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    // @ts-ignore
    // eslint-disable-next-line react/destructuring-assignment
    <img src={dogeBoys} alt="" style={{width: props.width, marginRight: props.mr, borderRadius: '50%'}}/>
  );
};

export default Icon;
