import * as React from 'react';
import type {SVGProps} from 'react';
const SvgGm = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="red" d="M0 0h512v170.7H0z" />
      <path fill="#fff" d="M0 170.7h512V199H0z" />
      <path fill="#009" d="M0 199.1h512V313H0z" />
      <path fill="#fff" d="M0 312.9h512v28.4H0z" />
      <path fill="#090" d="M0 341.3h512V512H0z" />
    </g>
  </svg>
);
export default SvgGm;
