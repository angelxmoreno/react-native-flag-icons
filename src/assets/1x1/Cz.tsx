import * as React from 'react';
import type {SVGProps} from 'react';
const SvgCz = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path fill="#fff" d="M0 0h512v256H0z" />
    <path fill="#d7141a" d="M0 256h512v256H0z" />
    <path fill="#11457e" d="M300 256 0 56v400z" />
  </svg>
);
export default SvgCz;
