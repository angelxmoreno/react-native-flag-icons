import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";
const SvgNa = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <Defs>
      <ClipPath id="na_svg__a">
        <Path fillOpacity={0.7} d="M0 0h512v512H0z" />
      </ClipPath>
    </Defs>
    <G fillRule="evenodd" clipPath="url(#na_svg__a)">
      <Path fill="#fff" d="M0 0h512v512H0z" />
      <Path fill="#3662a2" d="m-108.2.2.8 368.6L466.6 0l-574.8.2z" />
      <Path fill="#38a100" d="m630.7 511.5-1.4-383.2-579 383.5 580.4-.3z" />
      <Path
        fill="#c70000"
        d="m-107.9 396.6.5 115.4 125.3-.2 611.7-410.1L629 1.4 505.2.2l-613 396.4z"
      />
      <Path
        fill="#ffe700"
        d="m154 183.4-23.1-14-13.4 23.6-13-23.8L81 183l.6-27.1-27 .2 14-23.2L45 119.5l23.8-13L55 83l27 .6-.1-27.1 23.2 14 13.4-23.6 13 23.7L155.2 57l-.6 27 27-.1-14 23.2 23.6 13.3-23.8 13.1 13.7 23.4-27-.5z"
      />
      <Path
        fill="#3662a2"
        d="M167.8 120c0 27.2-22.3 49.3-49.8 49.3s-49.7-22.1-49.7-49.4 22.3-49.3 49.8-49.3 49.7 22 49.7 49.3z"
      />
      <Path
        fill="#ffe700"
        d="M157 120a39 39 0 1 1-77.9 0 39 39 0 0 1 77.9 0z"
      />
    </G>
  </Svg>
);
export default SvgNa;