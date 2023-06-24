import * as React from "react";
import Svg, { G, Rect, Path } from "react-native-svg";
const SvgEe = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <G fillRule="evenodd" strokeWidth="1pt" transform="scale(.482 .72)">
      <Rect width={1063} height={708.7} rx={0} ry={0} />
      <Rect width={1063} height={236.2} y={475.6} fill="#fff" rx={0} ry={0} />
      <Path fill="#1791ff" d="M0 0h1063v236.2H0z" />
    </G>
  </Svg>
);
export default SvgEe;
