import * as React from 'react';
import type {SVGProps} from 'react';
const SvgEsPv = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path fill="#d52b1e" d="M0 0h512v512H0z" />
    <path
      fill="#009b48"
      d="M0 0h42.5l106.7 106.7C207.9 165.4 256 213.4 256 213.4s48.1-48 213.5-213.4H512v42.5L405.3 149.2C346.6 207.9 298.6 256 298.6 256s48 48.1 213.4 213.5V512h-42.5L362.8 405.3C304.1 346.6 256 298.6 256 298.6s-48.1 48-213.5 213.4H0v-42.5l106.7-106.7C165.4 304.1 213.4 256 213.4 256S165.4 207.9 0 42.5V21.3z"
    />
    <path
      fill="#fff"
      d="M221.9 0h68.2v221.9H512v68.2H290.1V512h-68.2V290.1H0v-68.2h221.9v-111z"
    />
  </svg>
);
export default SvgEsPv;
