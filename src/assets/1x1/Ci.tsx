import * as React from 'react';
import type {SVGProps} from 'react';
const SvgCi = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <g fillRule="evenodd">
      <path fill="#00cd00" d="M341.5 0H512v512H341.5z" />
      <path fill="#ff9a00" d="M0 0h170.3v512H0z" />
      <path fill="#fff" d="M170.3 0h171.2v512H170.3z" />
    </g>
  </svg>
);
export default SvgCi;
