import * as React from 'react';
import type {SVGProps} from 'react';
const SvgHn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    {...props}
  >
    <path fill="#18c3df" d="M0 0h512v512H0z" />
    <path fill="#fff" d="M0 170.7h512v170.6H0z" />
    <g
      id="hn_svg__c"
      fill="#18c3df"
      transform="translate(256 256) scale(28.44446)"
    >
      <g id="hn_svg__b">
        <path id="hn_svg__a" d="m0-1-.3 1 .5.1z" />
        <use
          xlinkHref="#hn_svg__a"
          width="100%"
          height="100%"
          transform="scale(-1 1)"
        />
      </g>
      <use
        xlinkHref="#hn_svg__b"
        width="100%"
        height="100%"
        transform="rotate(72)"
      />
      <use
        xlinkHref="#hn_svg__b"
        width="100%"
        height="100%"
        transform="rotate(-72)"
      />
      <use
        xlinkHref="#hn_svg__b"
        width="100%"
        height="100%"
        transform="rotate(144)"
      />
      <use
        xlinkHref="#hn_svg__b"
        width="100%"
        height="100%"
        transform="rotate(-144)"
      />
    </g>
    <use
      xlinkHref="#hn_svg__c"
      width="100%"
      height="100%"
      transform="translate(142.2 -45.5)"
    />
    <use
      xlinkHref="#hn_svg__c"
      width="100%"
      height="100%"
      transform="translate(142.2 39.8)"
    />
    <use
      xlinkHref="#hn_svg__c"
      width="100%"
      height="100%"
      transform="translate(-142.2 -45.5)"
    />
    <use
      xlinkHref="#hn_svg__c"
      width="100%"
      height="100%"
      transform="translate(-142.2 39.8)"
    />
  </svg>
);
export default SvgHn;
