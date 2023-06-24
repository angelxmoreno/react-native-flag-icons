import * as React from 'react';
import type {SVGProps} from 'react';
const SvgUa = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="gold" d="M0 0h512v512H0z" />
      <path fill="#0057b8" d="M0 0h512v256H0z" />
    </g>
  </svg>
);
export default SvgUa;
