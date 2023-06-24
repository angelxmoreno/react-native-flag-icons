import * as React from 'react';
import type {SVGProps} from 'react';
const SvgBg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#d62612" d="M0 341.3h512V512H0z" />
      <path fill="#fff" d="M0 0h512v170.7H0z" />
      <path fill="#00966e" d="M0 170.7h512v170.6H0z" />
    </g>
  </svg>
);
export default SvgBg;
