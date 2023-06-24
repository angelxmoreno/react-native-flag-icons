import * as React from 'react';
import type {SVGProps} from 'react';
const SvgBg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#d62612" d="M0 320h640v160H0z" />
      <path fill="#fff" d="M0 0h640v160H0z" />
      <path fill="#00966e" d="M0 160h640v160H0z" />
    </g>
  </svg>
);
export default SvgBg;
