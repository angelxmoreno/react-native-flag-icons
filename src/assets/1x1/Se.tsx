import * as React from 'react';
import type {SVGProps} from 'react';
const SvgSe = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path fill="#005293" d="M0 0h512v512H0z" />
    <path
      fill="#fecb00"
      d="M134 0v204.8H0v102.4h134V512h102.4V307.2H512V204.8H236.4V0H134z"
    />
  </svg>
);
export default SvgSe;
