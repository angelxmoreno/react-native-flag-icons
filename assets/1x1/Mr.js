import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMr = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <Path fill="#cd2a3e" d="M0 0h512v512H0z" />
    <Path fill="#006233" d="M0 76.8h512v358.4H0z" />
    <Path
      fill="#ffc400"
      d="M416 164.9a160 160 0 0 1-320 0 165.2 165.2 0 0 0-5.4 41.8A165.4 165.4 0 1 0 416 165z"
      className="mr_svg__st1"
    />
    <Path
      fill="#ffc400"
      d="m256 100-14.4 44.3h-46.5l37.6 27.3-14.3 44.2 37.6-27.3 37.6 27.3-14.4-44.2 37.7-27.3h-46.5z"
    />
  </Svg>
);
export default SvgMr;
