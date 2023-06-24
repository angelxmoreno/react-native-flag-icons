import * as React from 'react';
import type {SVGProps} from 'react';
const SvgAt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <g fillRule="evenodd">
      <path fill="#fff" d="M512 512H0V0h512z" />
      <path fill="#c8102e" d="M512 512H0V341.3h512zm0-341.2H0V.1h512z" />
    </g>
  </svg>
);
export default SvgAt;
