import * as React from 'react';
import type {SVGProps} from 'react';
const SvgMc = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#f31830" d="M0 0h512v256H0z" />
      <path fill="#fff" d="M0 256h512v256H0z" />
    </g>
  </svg>
);
export default SvgMc;
