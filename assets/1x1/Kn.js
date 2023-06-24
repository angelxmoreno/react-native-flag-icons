import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";
const SvgKn = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <Defs>
      <ClipPath id="kn_svg__a">
        <Path fillOpacity={0.7} d="M151.7-.3h745.1v745H151.7z" />
      </ClipPath>
    </Defs>
    <G
      fillRule="evenodd"
      clipPath="url(#kn_svg__a)"
      transform="translate(-104.2 .2) scale(.68714)"
    >
      <Path fill="#ffe900" d="M-5.3 0h1073.5v744H-5.3z" />
      <Path fill="#35a100" d="m-5.8 0 1.2 536.4L830.7-.4-5.8 0z" />
      <Path fill="#c70000" d="m1069.5 744-1.9-557.7L225 744.5l844.5-.4z" />
      <Path d="m-5.3 576.9.7 167.9 182.3-.3L1068 147.6l-1-146L886.9 0-5.4 576.9z" />
      <Path
        fill="#fff"
        d="m818 269-64.2-2.2-25.3 60.2-14.3-61.5-64.2-2.2 55.4-35.7L691 166l48.5 39.4 55.3-35.9-25.4 60.2zM417.5 529.6l-64.3-2.3-25.2 60.2-14.3-61.5-64.3-2.2 55.4-35.8-14.4-61.4 48.5 39.4 55.3-35.9-25.3 60.1z"
      />
    </G>
  </Svg>
);
export default SvgKn;