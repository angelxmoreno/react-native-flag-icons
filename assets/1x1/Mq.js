import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMq = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <Path fill="#fff" d="M0 0h512v512H0z" />
    <Path fill="#002654" d="M0 0h170.7v512H0z" />
    <Path fill="#ce1126" d="M341.3 0H512v512H341.3z" />
  </Svg>
);
export default SvgMq;
