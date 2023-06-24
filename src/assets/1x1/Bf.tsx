import * as React from 'react';
import type {SVGProps} from 'react';
const SvgBf = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <g fillRule="evenodd">
      <path fill="#de0000" d="M512 511.6H.5V0H512z" />
      <path fill="#35a100" d="M511.8 512H0V256.2h511.7z" />
    </g>
    <path
      fill="#fff300"
      fillRule="evenodd"
      d="m389 223.8-82.9 56.5 31.7 91.6-82.7-56.7-82.8 56.7 31.7-91.6-82.8-56.6 102.3.2 31.6-91.7 31.5 91.6"
    />
  </svg>
);
export default SvgBf;
