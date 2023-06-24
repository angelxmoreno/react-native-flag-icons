import * as React from 'react';
import type {SVGProps} from 'react';
const SvgCl = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <defs>
      <clipPath id="cl_svg__a">
        <path fillOpacity={0.7} d="M0 0h708.7v708.7H0z" />
      </clipPath>
    </defs>
    <g fillRule="evenodd" clipPath="url(#cl_svg__a)" transform="scale(.722)">
      <path fill="#fff" d="M354.3 0H1063v354.3H354.3z" />
      <path fill="#0039a6" d="M0 0h354.3v354.3H0z" />
      <path
        fill="#fff"
        d="m232.3 265.3-55-41.1-54.5 41.5 20.3-67.5-54.5-41.7 67.4-.6 21-67.3 21.3 67.2h67.5L211.4 198l20.8 67.4z"
      />
      <path fill="#d52b1e" d="M0 354.3h1063v354.4H0z" />
    </g>
  </svg>
);
export default SvgCl;
