import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const SvgLc = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <G fillRule="evenodd">
      <Path fill="#65cfff" d="M0 0h512v512H0z" />
      <Path fill="#fff" d="m254.8 44.8 173.5 421.6-344 1L254.7 44.8z" />
      <Path d="m255 103 150 362.6-297.5.8L255 103z" />
      <Path fill="#ffce00" d="m254.8 256.1 173.5 210.8-344 .5 170.5-211.3z" />
    </G>
  </Svg>
);
export default SvgLc;
