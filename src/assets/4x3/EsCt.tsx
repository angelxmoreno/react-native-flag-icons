import * as React from 'react';
import type {SVGProps} from 'react';
const SvgEsCt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <path fill="#fcdd09" d="M0 0h640v480H0z" />
    <path
      stroke="#da121a"
      strokeWidth={60}
      d="M0 90h810m0 120H0m0 120h810m0 120H0"
      transform="scale(.79012 .88889)"
    />
  </svg>
);
export default SvgEsCt;
