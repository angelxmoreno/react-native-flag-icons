import * as React from 'react';
import type {SVGProps} from 'react';
const SvgId = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path fill="#e70011" d="M0 0h512v256H0Z" />
    <path fill="#fff" d="M0 256h512v256H0Z" />
  </svg>
);
export default SvgId;
