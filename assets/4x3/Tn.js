import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTn = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <Path fill="#e70013" d="M0 0h640v480H0z" />
    <Path
      fill="#fff"
      d="M320 119.2a1 1 0 0 0-1 240.3 1 1 0 0 0 1-240.3zM392 293a90 90 0 1 1 0-107 72 72 0 1 0 0 107zm-4.7-21.7-37.4-12.1-23.1 31.8v-39.3l-37.4-12.2 37.4-12.2V188l23.1 31.8 37.4-12.1-23.1 31.8z"
    />
  </Svg>
);
export default SvgTn;
