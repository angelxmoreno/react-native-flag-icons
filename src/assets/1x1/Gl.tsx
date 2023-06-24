import * as React from 'react';
import type {SVGProps} from 'react';
const SvgGl = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path fill="#fff" d="M0 0h512v512H0z" />
    <path
      fill="#d00c33"
      d="M0 256h512v256H0zm53.3 0a170.7 170.7 0 1 0 341.4 0 170.7 170.7 0 0 0-341.4 0"
    />
  </svg>
);
export default SvgGl;
