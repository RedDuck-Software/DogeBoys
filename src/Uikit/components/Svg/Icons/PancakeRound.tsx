import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    // @ts-ignore
    // eslint-disable-next-line react/destructuring-assignment
    <img src='https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png' alt="" style={{width: props.width, marginRight: props.mr, borderRadius: '50%'}}/>
  );
};

export default Icon;
