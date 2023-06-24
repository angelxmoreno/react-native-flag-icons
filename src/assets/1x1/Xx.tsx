import * as React from 'react';
import type {SVGProps} from 'react';
const SvgXx = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      fill="#fff"
      fillRule="evenodd"
      stroke="#adb5bd"
      d="M.5.5h511v511H.5z"
    />
    <path fill="none" stroke="#adb5bd" d="m.5.5 511 511m0-511-511 511" />
  </svg>
);
export default SvgXx;
