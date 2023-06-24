import * as React from 'react';
import type {SVGProps} from 'react';
const SvgAe = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path fill="#00732f" d="M0 0h512v170.7H0z" />
    <path fill="#fff" d="M0 170.7h512v170.6H0z" />
    <path d="M0 341.3h512V512H0z" />
    <path fill="red" d="M0 0h180v512H0z" />
  </svg>
);
export default SvgAe;
