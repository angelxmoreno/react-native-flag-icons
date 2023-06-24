import * as React from 'react';
import type {SVGProps} from 'react';
const SvgPw = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <defs>
      <clipPath id="pw_svg__a">
        <path fillOpacity={0.7} d="M61.7 4.2h170.8V175H61.7z" />
      </clipPath>
    </defs>
    <g
      fillRule="evenodd"
      strokeWidth="1pt"
      clipPath="url(#pw_svg__a)"
      transform="translate(-185 -12.5) scale(2.9973)"
    >
      <path fill="#4aadd6" d="M0 4.2h301.2V175H0z" />
      <path
        fill="#ffde00"
        d="M185.9 86.8a52 52 0 0 1-53 50.8 52 52 0 0 1-53.2-50.8c0-28 23.8-50.8 53.1-50.8s53 22.7 53 50.8z"
      />
    </g>
  </svg>
);
export default SvgPw;
