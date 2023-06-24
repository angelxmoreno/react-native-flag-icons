import * as React from 'react';
import type {SVGProps} from 'react';
const SvgCd = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <defs>
      <clipPath id="cd_svg__a">
        <path fill="#fff" d="M0-88h600v600H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#cd_svg__a)" transform="matrix(.853 0 0 .853 0 75.1)">
      <path fill="#007fff" d="M0-88h800v600H0z" />
      <path
        fill="#f7d618"
        d="M36 32h84l26-84 26 84h84l-68 52 26 84-68-52-68 52 26-84-68-52zM750-88 0 362v150h50L800 62V-88h-50"
      />
      <path fill="#ce1021" d="M800-88 0 392v120L800 32V-88" />
    </g>
  </svg>
);
export default SvgCd;
