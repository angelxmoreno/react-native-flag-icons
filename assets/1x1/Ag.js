import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";
const SvgAg = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <Defs>
      <ClipPath id="ag_svg__a">
        <Path fill="#25ff01" d="M109 47.6h464.8v464.9H109z" />
      </ClipPath>
    </Defs>
    <G
      fillRule="evenodd"
      clipPath="url(#ag_svg__a)"
      transform="translate(-120 -52.4) scale(1.1014)"
    >
      <Path fill="#fff" d="M0 47.6h693V512H0z" />
      <Path d="M108.95 47.58h464.87V233.7H108.95V47.58Z" />
      <Path fill="#0072c6" d="M128.3 232.1h435.8v103.5H128.3V232.1Z" />
      <Path
        fill="#ce1126"
        d="M692.5 49.2v463.3H347L692.5 49.2zm-691.3 0v463.3h345.7L1.2 49.2z"
      />
      <Path
        fill="#fcd116"
        d="m508.8 232.2-69.3-17.6 59-44.4-72.5 10.3 37.3-63-64.1 37.2 11.3-73.5-43.4 58-17.6-67.3-19.6 69.3-43.4-59 12.4 75.6-64.1-39.3 37.2 63-70.3-11.3 57.9 43.4-72.4 18.6h321.6z"
      />
    </G>
  </Svg>
);
export default SvgAg;
