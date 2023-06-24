import * as React from 'react';
import type {SVGProps} from 'react';
const SvgSd = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <defs>
      <clipPath id="sd_svg__a">
        <path fillOpacity={0.7} d="M0 0h496v496H0z" />
      </clipPath>
    </defs>
    <g
      fillRule="evenodd"
      strokeWidth="1pt"
      clipPath="url(#sd_svg__a)"
      transform="scale(1.0321)"
    >
      <path d="M0 330.7h992.1v165.4H0z" />
      <path fill="#fff" d="M0 165.3h992.1v165.4H0z" />
      <path fill="red" d="M0 0h992.9v165.4H0z" />
      <path fill="#009a00" d="M0 0v496l330.7-248L0 0z" />
    </g>
  </svg>
);
export default SvgSd;
