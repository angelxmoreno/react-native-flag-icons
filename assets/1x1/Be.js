import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const SvgBe = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <G fillRule="evenodd" strokeWidth="1pt">
      <Path d="M0 0h170.7v512H0z" />
      <Path fill="#ffd90c" d="M170.7 0h170.6v512H170.7z" />
      <Path fill="#f31830" d="M341.3 0H512v512H341.3z" />
    </G>
  </Svg>
);
export default SvgBe;