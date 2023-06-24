import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDe = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <Path fill="#ffce00" d="M0 341.3h512V512H0z" />
    <Path d="M0 0h512v170.7H0z" />
    <Path fill="#d00" d="M0 170.7h512v170.6H0z" />
  </Svg>
);
export default SvgDe;
