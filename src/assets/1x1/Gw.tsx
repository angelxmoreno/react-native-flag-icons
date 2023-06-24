import * as React from 'react';
import type {SVGProps} from 'react';
const SvgGw = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    {...props}
  >
    <path fill="#ce1126" d="M0 0h160v512H0z" />
    <path fill="#fcd116" d="M160 0h352v256H160z" />
    <path fill="#009e49" d="M160 256h352v256H160z" />
    <g transform="translate(-46.2 72.8) scale(.7886)">
      <g id="gw_svg__b" transform="matrix(80 0 0 80 160 240)">
        <path id="gw_svg__a" d="M0-1v1h.5" transform="rotate(18 0 -1)" />
        <use
          xlinkHref="#gw_svg__a"
          width="100%"
          height="100%"
          transform="scale(-1 1)"
        />
      </g>
      <use
        xlinkHref="#gw_svg__b"
        width="100%"
        height="100%"
        transform="rotate(72 160 240)"
      />
      <use
        xlinkHref="#gw_svg__b"
        width="100%"
        height="100%"
        transform="rotate(144 160 240)"
      />
      <use
        xlinkHref="#gw_svg__b"
        width="100%"
        height="100%"
        transform="rotate(-144 160 240)"
      />
      <use
        xlinkHref="#gw_svg__b"
        width="100%"
        height="100%"
        transform="rotate(-72 160 240)"
      />
    </g>
  </svg>
);
export default SvgGw;
