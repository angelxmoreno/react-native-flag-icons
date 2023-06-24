import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgLu = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <Path fill="#00a1de" d="M0 256h512v256H0z" />
    <Path fill="#ed2939" d="M0 0h512v256H0z" />
    <Path fill="#fff" d="M0 170.7h512v170.6H0z" />
  </Svg>
);
export default SvgLu;
