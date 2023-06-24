import * as React from 'react';
import type {SVGProps} from 'react';
const SvgRe = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#fff" d="M0 0h512v512H0z" />
      <path fill="#00267f" d="M0 0h170.7v512H0z" />
      <path fill="#f31830" d="M341.3 0H512v512H341.3z" />
    </g>
  </svg>
);
export default SvgRe;
