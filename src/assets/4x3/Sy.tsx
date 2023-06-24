import * as React from 'react';
import type {SVGProps} from 'react';
const SvgSy = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <path d="M0 0h640v480H0Z" />
    <path fill="#fff" d="M0 0h640v320H0Z" />
    <path fill="#ce1126" d="M0 0h640v160H0Z" />
    <path
      fill="#007a3d"
      d="m161 300 39-120 39 120-102-74.2h126M401 300l39-120 39 120-102-74.2h126"
    />
  </svg>
);
export default SvgSy;
