import * as React from 'react';
import type {SVGProps} from 'react';
const SvgTr = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <g fillRule="evenodd">
      <path fill="#e30a17" d="M0 0h640v480H0z" />
      <path
        fill="#fff"
        d="M407 247.5c0 66.2-54.6 119.9-122 119.9s-122-53.7-122-120 54.6-119.8 122-119.8 122 53.7 122 119.9z"
      />
      <path
        fill="#e30a17"
        d="M413 247.5c0 53-43.6 95.9-97.5 95.9s-97.6-43-97.6-96 43.7-95.8 97.6-95.8 97.6 42.9 97.6 95.9z"
      />
      <path
        fill="#fff"
        d="m430.7 191.5-1 44.3-41.3 11.2 40.8 14.5-1 40.7 26.5-31.8 40.2 14-23.2-34.1 28.3-33.9-43.5 12-25.8-37z"
      />
    </g>
  </svg>
);
export default SvgTr;