import * as React from 'react';
import type {SVGProps} from 'react';
const SvgMm = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    {...props}
  >
    <path fill="#fecb00" d="M0 0h512v512H0z" />
    <path fill="#34b233" d="M0 170.7h512V512H0z" />
    <path fill="#ea2839" d="M0 341.3h512V512H0z" />
    <path
      id="mm_svg__a"
      fill="#fff"
      strokeWidth={188.7}
      d="M312.6 274H199.4L256 85.3Z"
    />
    <use
      xlinkHref="#mm_svg__a"
      width="100%"
      height="100%"
      transform="rotate(-144 256 274)"
    />
    <use
      xlinkHref="#mm_svg__a"
      width="100%"
      height="100%"
      transform="rotate(-72 256 274)"
    />
    <use
      xlinkHref="#mm_svg__a"
      width="100%"
      height="100%"
      transform="rotate(72 256 274)"
    />
    <use
      xlinkHref="#mm_svg__a"
      width="100%"
      height="100%"
      transform="rotate(144 256 274)"
    />
  </svg>
);
export default SvgMm;
