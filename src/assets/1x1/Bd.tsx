import * as React from 'react';
import type {SVGProps} from 'react';
const SvgBd = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path fill="#006a4e" d="M0 0h512v512H0z" />
    <circle cx={230} cy={256} r={170.7} fill="#f42a41" />
  </svg>
);
export default SvgBd;
