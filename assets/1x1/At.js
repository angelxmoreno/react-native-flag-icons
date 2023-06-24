import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const SvgAt = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <G fillRule="evenodd">
      <Path fill="#fff" d="M512 512H0V0h512z" />
      <Path fill="#c8102e" d="M512 512H0V341.3h512zm0-341.2H0V.1h512z" />
    </G>
  </Svg>
);
export default SvgAt;
