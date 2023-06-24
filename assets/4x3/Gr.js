import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
const SvgGr = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <Path fill="#0d5eaf" fillRule="evenodd" d="M0 0h640v53.3H0z" />
    <Path fill="#fff" fillRule="evenodd" d="M0 53.3h640v53.4H0z" />
    <Path fill="#0d5eaf" fillRule="evenodd" d="M0 106.7h640V160H0z" />
    <Path fill="#fff" fillRule="evenodd" d="M0 160h640v53.3H0z" />
    <Path fill="#0d5eaf" d="M0 0h266.7v266.7H0z" />
    <Path fill="#0d5eaf" fillRule="evenodd" d="M0 213.3h640v53.4H0z" />
    <Path fill="#fff" fillRule="evenodd" d="M0 266.7h640V320H0z" />
    <Path fill="#0d5eaf" fillRule="evenodd" d="M0 320h640v53.3H0z" />
    <Path fill="#fff" fillRule="evenodd" d="M0 373.3h640v53.4H0z" />
    <G fill="#fff" fillRule="evenodd" strokeWidth={1.3}>
      <Path d="M106.7 0H160v266.7h-53.3z" />
      <Path d="M0 106.7h266.7V160H0z" />
    </G>
    <Path fill="#0d5eaf" d="M0 426.7h640V480H0z" />
  </Svg>
);
export default SvgGr;
