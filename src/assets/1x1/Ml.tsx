import * as React from 'react';
import type {SVGProps} from 'react';
const SvgMl = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <g fillRule="evenodd">
      <path fill="red" d="M340.6 0H512v512H340.6z" />
      <path fill="#009a00" d="M0 0h170.3v512H0z" />
      <path fill="#ff0" d="M170.3 0h171.2v512H170.3z" />
    </g>
  </svg>
);
export default SvgMl;
