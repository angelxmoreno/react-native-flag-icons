import * as React from 'react';
import type {SVGProps} from 'react';
const SvgMa = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path fill="#c1272d" d="M512 0H0v512h512z" />
    <path
      fill="none"
      stroke="#006233"
      strokeWidth={12.5}
      d="m256 191.4-38 116.8 99.4-72.2H194.6l99.3 72.2z"
    />
  </svg>
);
export default SvgMa;
