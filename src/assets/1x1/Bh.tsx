import * as React from 'react';
import type {SVGProps} from 'react';
const SvgBh = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path fill="#fff" d="M0 0h512v512H0" />
    <path
      fill="#ce1126"
      d="M512 0H102.4l83.4 51.2-83.4 51.2 83.4 51.2-83.4 51.2 83.4 51.2-83.4 51.2 83.4 51.2-83.4 51.2 83.4 51.2-83.4 51.2H512"
    />
  </svg>
);
export default SvgBh;
