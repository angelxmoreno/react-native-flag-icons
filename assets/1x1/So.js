import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";
const SvgSo = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <Defs>
      <ClipPath id="so_svg__a">
        <Path fillOpacity={0.7} d="M177.2 0h708.6v708.7H177.2z" />
      </ClipPath>
    </Defs>
    <G
      fillRule="evenodd"
      clipPath="url(#so_svg__a)"
      transform="translate(-128) scale(.72249)"
    >
      <Path fill="#40a6ff" d="M0 0h1063v708.7H0z" />
      <Path
        fill="#fff"
        d="m643 527.6-114.3-74-113.6 74.8 42.3-121.5-113.5-75 140.4-1 43.5-121.1 44.5 120.8 140.3.1-112.9 75.7L643 527.6z"
      />
    </G>
  </Svg>
);
export default SvgSo;