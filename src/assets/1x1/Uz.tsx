import * as React from 'react';
import type {SVGProps} from 'react';
const SvgUz = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    {...props}
  >
    <path fill="#1eb53a" d="M0 341.3h512V512H0z" />
    <path fill="#0099b5" d="M0 0h512v170.7H0z" />
    <path fill="#ce1126" d="M0 163.8h512v184.4H0z" />
    <path fill="#fff" d="M0 174h512v164H0z" />
    <circle cx={143.4} cy={81.9} r={61.4} fill="#fff" />
    <circle cx={163.8} cy={81.9} r={61.4} fill="#0099b5" />
    <g fill="#fff" transform="translate(278.5 131) scale(2.048)">
      <g id="uz_svg__e">
        <g id="uz_svg__d">
          <g id="uz_svg__c">
            <g id="uz_svg__b">
              <path id="uz_svg__a" d="M0-6-1.9-.3 1 .7" />
              <use
                xlinkHref="#uz_svg__a"
                width="100%"
                height="100%"
                transform="scale(-1 1)"
              />
            </g>
            <use
              xlinkHref="#uz_svg__b"
              width="100%"
              height="100%"
              transform="rotate(72)"
            />
          </g>
          <use
            xlinkHref="#uz_svg__b"
            width="100%"
            height="100%"
            transform="rotate(-72)"
          />
          <use
            xlinkHref="#uz_svg__c"
            width="100%"
            height="100%"
            transform="rotate(144)"
          />
        </g>
        <use xlinkHref="#uz_svg__d" width="100%" height="100%" y={-24} />
        <use xlinkHref="#uz_svg__d" width="100%" height="100%" y={-48} />
      </g>
      <use xlinkHref="#uz_svg__e" width="100%" height="100%" x={24} />
      <use xlinkHref="#uz_svg__e" width="100%" height="100%" x={48} />
      <use xlinkHref="#uz_svg__d" width="100%" height="100%" x={-48} />
      <use xlinkHref="#uz_svg__d" width="100%" height="100%" x={-24} />
      <use xlinkHref="#uz_svg__d" width="100%" height="100%" x={-24} y={-24} />
    </g>
  </svg>
);
export default SvgUz;
