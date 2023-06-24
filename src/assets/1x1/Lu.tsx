import * as React from 'react';
import type {SVGProps} from 'react';
const SvgLu = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path fill="#00a1de" d="M0 256h512v256H0z" />
    <path fill="#ed2939" d="M0 0h512v256H0z" />
    <path fill="#fff" d="M0 170.7h512v170.6H0z" />
  </svg>
);
export default SvgLu;
