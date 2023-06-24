import * as React from 'react';
import type {SVGProps} from 'react';
const SvgJm = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <g fillRule="evenodd">
      <path d="m0 0 256 256L0 512zm512 0L256 256l256 256z" />
      <path fill="#090" d="m0 0 256 256L512 0zm0 512 256-256 256 256z" />
      <path fill="#fc0" d="M512 0h-47.7L0 464.3V512h47.7L512 47.7z" />
      <path fill="#fc0" d="M0 0v47.7L464.3 512H512v-47.7L47.7 0z" />
    </g>
  </svg>
);
export default SvgJm;