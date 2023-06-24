import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";
const SvgSd = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <Defs>
      <ClipPath id="sd_svg__a">
        <Path fillOpacity={0.7} d="M0 0h496v496H0z" />
      </ClipPath>
    </Defs>
    <G
      fillRule="evenodd"
      strokeWidth="1pt"
      clipPath="url(#sd_svg__a)"
      transform="scale(1.0321)"
    >
      <Path d="M0 330.7h992.1v165.4H0z" />
      <Path fill="#fff" d="M0 165.3h992.1v165.4H0z" />
      <Path fill="red" d="M0 0h992.9v165.4H0z" />
      <Path fill="#009a00" d="M0 0v496l330.7-248L0 0z" />
    </G>
  </Svg>
);
export default SvgSd;
