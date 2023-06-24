import * as React from 'react';
import type {SVGProps} from 'react';
const SvgLv = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <g fillRule="evenodd">
      <path fill="#fff" d="M0 0h512v512H0z" />
      <path fill="#981e32" d="M0 0h512v204.8H0zm0 307.2h512V512H0z" />
    </g>
  </svg>
);
export default SvgLv;
