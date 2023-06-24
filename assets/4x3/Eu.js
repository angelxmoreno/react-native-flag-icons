import * as React from "react";
import Svg, { Defs, G, Path, Use } from "react-native-svg";
const SvgEu = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 640 480"
    {...props}
  >
    <Defs>
      <G id="eu_svg__d">
        <G id="eu_svg__b">
          <Path id="eu_svg__a" d="m0-1-.3 1 .5.1z" />
          <Use xlinkHref="#eu_svg__a" transform="scale(-1 1)" />
        </G>
        <G id="eu_svg__c">
          <Use xlinkHref="#eu_svg__b" transform="rotate(72)" />
          <Use xlinkHref="#eu_svg__b" transform="rotate(144)" />
        </G>
        <Use xlinkHref="#eu_svg__c" transform="scale(-1 1)" />
      </G>
    </Defs>
    <Path fill="#039" d="M0 0h640v480H0z" />
    <G fill="#fc0" transform="translate(320 242.3) scale(23.7037)">
      <Use xlinkHref="#eu_svg__d" width="100%" height="100%" y={-6} />
      <Use xlinkHref="#eu_svg__d" width="100%" height="100%" y={6} />
      <G id="eu_svg__e">
        <Use xlinkHref="#eu_svg__d" width="100%" height="100%" x={-6} />
        <Use
          xlinkHref="#eu_svg__d"
          width="100%"
          height="100%"
          transform="rotate(-144 -2.3 -2.1)"
        />
        <Use
          xlinkHref="#eu_svg__d"
          width="100%"
          height="100%"
          transform="rotate(144 -2.1 -2.3)"
        />
        <Use
          xlinkHref="#eu_svg__d"
          width="100%"
          height="100%"
          transform="rotate(72 -4.7 -2)"
        />
        <Use
          xlinkHref="#eu_svg__d"
          width="100%"
          height="100%"
          transform="rotate(72 -5 .5)"
        />
      </G>
      <Use
        xlinkHref="#eu_svg__e"
        width="100%"
        height="100%"
        transform="scale(-1 1)"
      />
    </G>
  </Svg>
);
export default SvgEu;