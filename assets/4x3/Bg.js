import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const SvgBg = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <G fillRule="evenodd" strokeWidth="1pt">
      <Path fill="#d62612" d="M0 320h640v160H0z" />
      <Path fill="#fff" d="M0 0h640v160H0z" />
      <Path fill="#00966e" d="M0 160h640v160H0z" />
    </G>
  </Svg>
);
export default SvgBg;
