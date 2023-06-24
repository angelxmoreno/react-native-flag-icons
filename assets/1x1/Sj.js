import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSj = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <Path fill="#ef2b2d" d="M0 0h512v512H0z" />
    <Path fill="#fff" d="M128 0h128v512H128z" />
    <Path fill="#fff" d="M0 192h512v128H0z" />
    <Path fill="#002868" d="M160 0h64v512h-64z" />
    <Path fill="#002868" d="M0 224h512v64H0z" />
  </Svg>
);
export default SvgSj;
