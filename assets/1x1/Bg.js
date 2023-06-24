import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const SvgBg = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <G fillRule="evenodd" strokeWidth="1pt">
      <Path fill="#d62612" d="M0 341.3h512V512H0z" />
      <Path fill="#fff" d="M0 0h512v170.7H0z" />
      <Path fill="#00966e" d="M0 170.7h512v170.6H0z" />
    </G>
  </Svg>
);
export default SvgBg;
