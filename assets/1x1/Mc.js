import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const SvgMc = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <G fillRule="evenodd" strokeWidth="1pt">
      <Path fill="#f31830" d="M0 0h512v256H0z" />
      <Path fill="#fff" d="M0 256h512v256H0z" />
    </G>
  </Svg>
);
export default SvgMc;
