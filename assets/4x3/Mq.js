import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMq = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <Path fill="#fff" d="M0 0h640v480H0z" />
    <Path fill="#002654" d="M0 0h213.3v480H0z" />
    <Path fill="#ce1126" d="M426.7 0H640v480H426.7z" />
  </Svg>
);
export default SvgMq;
