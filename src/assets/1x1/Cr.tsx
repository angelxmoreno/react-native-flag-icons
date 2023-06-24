import * as React from 'react';
import type {SVGProps} from 'react';
const SvgCr = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#0000b4" d="M0 0h512v512H0z" />
      <path fill="#fff" d="M0 80.5h512v343.7H0z" />
      <path fill="#d90000" d="M0 168.2h512v168.2H0z" />
    </g>
  </svg>
);
export default SvgCr;
