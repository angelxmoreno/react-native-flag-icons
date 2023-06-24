import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const SvgMy = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <G clipPath="url(#my_svg__a)">
      <Path fill="#C00" d="M0 0h640v480H0V0Z" />
      <Path fill="#C00" d="M0 0h640v34.3H0z" />
      <Path fill="#fff" d="M0 34.3h640v34.3H0z" />
      <Path fill="#C00" d="M0 68.6h640v34.3H0z" />
      <Path fill="#fff" d="M0 102.9h640V137H0z" />
      <Path fill="#C00" d="M0 137.1h640v34.3H0z" />
      <Path fill="#fff" d="M0 171.4h640v34.3H0z" />
      <Path fill="#C00" d="M0 205.7h640V240H0z" />
      <Path fill="#fff" d="M0 240h640v34.3H0z" />
      <Path fill="#C00" d="M0 274.3h640v34.3H0z" />
      <Path fill="#fff" d="M0 308.6h640v34.3H0z" />
      <Path fill="#C00" d="M0 342.9h640V377H0z" />
      <Path fill="#fff" d="M0 377.1h640v34.3H0z" />
      <Path fill="#C00" d="M0 411.4h640v34.3H0z" />
      <Path fill="#fff" d="M0 445.7h640V480H0z" />
      <Path fill="#006" d="M0 .5h320v274.3H0V.5Z" />
      <Path
        fill="#FC0"
        d="m207.5 73.8 6 40.7 23-34-12.4 39.2 35.5-20.8-28.1 30 41-3.2-38.3 14.8 38.3 14.8-41-3.2 28.1 30-35.5-20.8 12.3 39.3-23-34.1-6 40.7-5.9-40.7-23 34 12.4-39.2-35.5 20.8 28-30-41 3.2 38.4-14.8-38.3-14.8 41 3.2-28.1-30 35.5 20.8-12.4-39.3 23 34.1 6-40.7Zm-33.3 1.7a71.1 71.1 0 0 0-100 65 71.1 71.1 0 0 0 100 65 80 80 0 0 1-83.2 6.2 80 80 0 0 1-43.4-71.2 80 80 0 0 1 126.6-65Z"
      />
    </G>
    <Defs>
      <ClipPath id="my_svg__a">
        <Path fill="#fff" d="M0 0h640v480H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgMy;
