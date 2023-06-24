import * as React from 'react';
import type {SVGProps} from 'react';
const SvgSt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    {...props}
  >
    <path fill="#12ad2b" d="M0 0h512v512H0z" />
    <path fill="#ffce00" d="M0 146.3h512v219.4H0z" />
    <path fill="#d21034" d="M0 0v512l192-256" />
    <g id="st_svg__c" transform="translate(276.9 261.5) scale(.33167)">
      <g id="st_svg__b">
        <path id="st_svg__a" d="M0-200V0h100" transform="rotate(18 0 -200)" />
        <use
          xlinkHref="#st_svg__a"
          width="100%"
          height="100%"
          transform="scale(-1 1)"
        />
      </g>
      <use
        xlinkHref="#st_svg__b"
        width="100%"
        height="100%"
        transform="rotate(72)"
      />
      <use
        xlinkHref="#st_svg__b"
        width="100%"
        height="100%"
        transform="rotate(144)"
      />
      <use
        xlinkHref="#st_svg__b"
        width="100%"
        height="100%"
        transform="rotate(-144)"
      />
      <use
        xlinkHref="#st_svg__b"
        width="100%"
        height="100%"
        transform="rotate(-72)"
      />
    </g>
    <use
      xlinkHref="#st_svg__c"
      width="100%"
      height="100%"
      x={700}
      transform="translate(-550.9)"
    />
  </svg>
);
export default SvgSt;
