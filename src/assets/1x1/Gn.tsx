import * as React from 'react';
import type {SVGProps} from 'react';
const SvgGn = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="red" d="M0 0h170.7v512H0z" />
      <path fill="#ff0" d="M170.7 0h170.6v512H170.7z" />
      <path fill="#090" d="M341.3 0H512v512H341.3z" />
    </g>
  </svg>
);
export default SvgGn;
