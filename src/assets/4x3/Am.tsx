import * as React from 'react';
import type {SVGProps} from 'react';
const SvgAm = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <path fill="#d90012" d="M0 0h640v160H0z" />
    <path fill="#0033a0" d="M0 160h640v160H0z" />
    <path fill="#f2a800" d="M0 320h640v160H0z" />
  </svg>
);
export default SvgAm;
