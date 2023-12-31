import * as React from 'react';
import type {SVGProps} from 'react';
const SvgCm = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    {...props}
  >
    <path fill="#007a5e" d="M0 0h170.7v512H0z" />
    <path fill="#ce1126" d="M170.7 0h170.6v512H170.7z" />
    <path fill="#fcd116" d="M341.3 0H512v512H341.3z" />
    <g fill="#fcd116" transform="translate(256 256) scale(5.6889)">
      <g id="cm_svg__b">
        <path id="cm_svg__a" d="M0-8-2.5-.4 1.3.9z" />
        <use
          xlinkHref="#cm_svg__a"
          width="100%"
          height="100%"
          transform="scale(-1 1)"
        />
      </g>
      <use
        xlinkHref="#cm_svg__b"
        width="100%"
        height="100%"
        transform="rotate(72)"
      />
      <use
        xlinkHref="#cm_svg__b"
        width="100%"
        height="100%"
        transform="rotate(144)"
      />
      <use
        xlinkHref="#cm_svg__b"
        width="100%"
        height="100%"
        transform="rotate(-144)"
      />
      <use
        xlinkHref="#cm_svg__b"
        width="100%"
        height="100%"
        transform="rotate(-72)"
      />
    </g>
  </svg>
);
export default SvgCm;
