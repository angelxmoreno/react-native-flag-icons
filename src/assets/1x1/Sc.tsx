import * as React from 'react';
import type {SVGProps} from 'react';
const SvgSc = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path fill="#fff" d="M0 0h512v512H0Z" />
    <path fill="#d92223" d="M0 512V0h512v170.7z" />
    <path fill="#fcd955" d="M0 512V0h341.3z" />
    <path fill="#003d88" d="M0 512V0h170.7z" />
    <path fill="#007a39" d="m0 512 512-170.7V512Z" />
  </svg>
);
export default SvgSc;
