import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";
const SvgBs = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <Defs>
      <ClipPath id="bs_svg__a">
        <Path fillOpacity={0.7} d="M56.6 26.4H537v480.3H56.6z" />
      </ClipPath>
    </Defs>
    <G
      fillRule="evenodd"
      clipPath="url(#bs_svg__a)"
      transform="matrix(1.066 0 0 1.067 -60.4 -28.1)"
    >
      <Path fill="#fff" d="M990 506.2H9.4V27.6H990z" />
      <Path fill="#ffe900" d="M990 370.6H9.4V169.2H990z" />
      <Path fill="#08ced6" d="M990 506.2H9.4V346.7H990zm0-319H9.4V27.9H990z" />
      <Path d="M9 25.9c2.1 0 392.3 237 392.3 237L7.8 505.3 9 25.9z" />
    </G>
  </Svg>
);
export default SvgBs;
