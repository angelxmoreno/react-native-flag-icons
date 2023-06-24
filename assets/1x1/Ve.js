import * as React from "react";
import Svg, { Defs, G, Path, Use } from "react-native-svg";
const SvgVe = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    {...props}
  >
    <Defs>
      <G id="ve_svg__d" transform="translate(0 -36)">
        <G id="ve_svg__c">
          <G id="ve_svg__b">
            <Path id="ve_svg__a" fill="#fff" d="M0-5-1.5-.2l2.8.9z" />
            <Use
              xlinkHref="#ve_svg__a"
              width={180}
              height={120}
              transform="scale(-1 1)"
            />
          </G>
          <Use
            xlinkHref="#ve_svg__b"
            width={180}
            height={120}
            transform="rotate(72)"
          />
        </G>
        <Use
          xlinkHref="#ve_svg__b"
          width={180}
          height={120}
          transform="rotate(-72)"
        />
        <Use
          xlinkHref="#ve_svg__c"
          width={180}
          height={120}
          transform="rotate(144)"
        />
      </G>
    </Defs>
    <Path fill="#cf142b" d="M0 0h512v512H0z" />
    <Path fill="#00247d" d="M0 0h512v341.3H0z" />
    <Path fill="#fc0" d="M0 0h512v170.7H0z" />
    <G id="ve_svg__f" transform="translate(256.3 358.4) scale(4.265)">
      <G id="ve_svg__e">
        <Use
          xlinkHref="#ve_svg__d"
          width={180}
          height={120}
          transform="rotate(10)"
        />
        <Use
          xlinkHref="#ve_svg__d"
          width={180}
          height={120}
          transform="rotate(30)"
        />
      </G>
      <Use
        xlinkHref="#ve_svg__e"
        width={180}
        height={120}
        transform="rotate(40)"
      />
    </G>
    <Use
      xlinkHref="#ve_svg__f"
      width={180}
      height={120}
      transform="rotate(-80 256.3 358.4)"
    />
  </Svg>
);
export default SvgVe;
