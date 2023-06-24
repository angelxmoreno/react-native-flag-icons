import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const SvgRu = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <G fillRule="evenodd" strokeWidth="1pt">
      <Path fill="#fff" d="M0 0h512v512H0z" />
      <Path fill="#0039a6" d="M0 170.7h512V512H0z" />
      <Path fill="#d52b1e" d="M0 341.3h512V512H0z" />
    </G>
  </Svg>
);
export default SvgRu;
