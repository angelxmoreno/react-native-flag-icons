import * as React from 'react';
import type {SVGProps} from 'react';
const SvgSl = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <defs>
      <clipPath id="sl_svg__a">
        <rect width={384} height={512} rx={4.6} ry={7.6} />
      </clipPath>
    </defs>
    <g
      fillRule="evenodd"
      clipPath="url(#sl_svg__a)"
      transform="scale(1.33333 1)"
    >
      <path fill="#0000cd" d="M0 341.7h512V512H0z" />
      <path fill="#fff" d="M0 171.4h512v170.3H0z" />
      <path fill="#00cd00" d="M0 0h512v171.4H0z" />
    </g>
  </svg>
);
export default SvgSl;
