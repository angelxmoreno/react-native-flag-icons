import * as React from 'react';
import type {SVGProps} from 'react';
const SvgCh = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="red" d="M0 0h512v512H0z" />
      <g fill="#fff">
        <path d="M96 208h320v96H96z" />
        <path d="M208 96h96v320h-96z" />
      </g>
    </g>
  </svg>
);
export default SvgCh;
