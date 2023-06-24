import * as React from 'react';
import type {SVGProps} from 'react';
const SvgTd = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <g fillRule="evenodd">
      <path fill="#000067" d="M0 0h171.2v512H0z" />
      <path fill="red" d="M340.8 0H512v512H340.8z" />
      <path fill="#ff0" d="M171.2 0h169.6v512H171.2z" />
    </g>
  </svg>
);
export default SvgTd;
