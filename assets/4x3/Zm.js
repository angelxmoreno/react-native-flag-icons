import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";
const SvgZm = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <Defs>
      <ClipPath id="zm_svg__a">
        <Path fillOpacity={0.7} d="M-170.7 0H512v512h-682.7z" />
      </ClipPath>
    </Defs>
    <G
      fillRule="evenodd"
      clipPath="url(#zm_svg__a)"
      transform="translate(160) scale(.9375)"
    >
      <Path fill="#198a00" d="M-256 0h768v512h-768z" />
      <Path fill="#ef7d00" d="M421.9 184H512v328h-90.1z" />
      <Path d="M331.9 183.8h90v328h-90z" />
      <Path fill="#de2010" d="M240 184h91.9v328h-92z" />
      <G fill="#ef7d00" stroke="#000">
        <Path
          strokeLinejoin="round"
          d="M451.6 65.6s34-14.5 37.2-17.5c1.5 1.8-13.6 20-42.9 26.7 26.6-6.2 49.3-26 54-25.4 1.3.3 1 19.3-60 35.8 42.2-11 66.7-31.4 66.4-29.2.3.5-4.2 16-41.1 28.1 10.3-2.4 38.3-19.4 38-16.1.9 1.3-27 37.2-77.6 25.5 40.4 10.5 66.5-14.8 70.2-14.3.8.1-7.4 22-58.2 23.4 24.3-2.5 17.3-.1 17.3-.1s-14.3 11.2-31.7 3.6c13.6 3.7 15.1 3.9 15.4 5-.9 1.6-12 3.8-22.9-2 8.7 3.6 16.5 4.2 16.6 5.5-.1.4-5.6 3.6-10.6 1.3-4.9-2.2-50.3-30.1-50.3-30.1l77.4-21.3 2.8 1zm-91 75.6c-6.8 0-7 6-7 6s-.5.5-.2 3.4l1.7-2.6c.8.1 3.9 1 8.8-2.8-4.5 4.7-1.8 6.4-1.8 6.4s-1 3.7 2.4 4.4c-1-1.5-.4-2.8-.4-2.8s4.8-.5 4.5-6.3c.1 5.3 3 6.6 3 6.6s0 2.9 3.1 3.2c-1.6-1.5-1.3-3.8-1.3-3.8s4-3 .7-8c2-1.2 3.7-4.5 3.7-4.5s-2.8-1.2-4.1-2.2c-.6-1.3 0-8.5 0-8.5l-1.8-9.3-4.8 14.5c.2-2 .3 6.3-6.5 6.3z"
        />
        <Path
          strokeLinejoin="round"
          d="M394.2 120.3c.2.1 5.1 5.6 9.9 5.3 1.8-1.5-3.7-4.7-3.7-5.5 2 1.8 10.1 8.8 15.4 6.3 2-3-3.8-2.5-10.2-10.6 4.5 3 15.7 9.5 21 7 2.1-2.4-11.7-9.9-16.4-15.7l-12-6.1-16.2 13.3 12.3 6z"
        />
        <Path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M375.9 74.8s5.5-3.2 27.6-1.6c2.4.3 15-4.3 19.1-5.7 6.4-1.2 27-5.6 32.4-9.8 4-.5-1 7.1-6 9-5.2 2.3-24.1 8.9-30.9 8 8.1.1 3.6 6.7-9.8 3.6 6.4 3.6 4 4.2 4 4.2s-11.3.6-14.3-2c7.6 2.9 4.4 4 4.4 4s-7.7.7-11.3-1c5.5 1.7 2.7 2.7 2.7 2.7s-4.5.8-8.2-.6c-3.8-1.3-9.4-10.7-9.7-10.7z"
        />
        <Path
          strokeLinejoin="round"
          d="m384.7 123.4.8 14.6-.8 1.2c-.3.4-10.3-1.6-9 6 0 3.2 0 4 2.2 5.7-.5-2-.4-3.5-.4-3.5s2.9 1.7 5.6-3c-1.9 4.6-.6 6.3-.1 6.4.4.8-.8 4.5 3 4.4-1.5-1.4-.8-3.4-.8-3.4s4-.6 2.6-7.7c1.4-1.4 2 0 2 0s.4 4.2 3.9 3.3c1.5.9-.3 3.2-.3 3.2s2.5 0 3.3-2c.7-2.2 1.6-6-2.5-7.6-.5-1.5 1.6-1.6 1.6-1.6s2.6.9 3.4 2.2.5-3.4-2.8-4c-4 0-4.2-.9-4.2-1l-1-13.7-6.5.5z"
        />
        <Path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.1}
          d="M398.6 135.8c0-.7-6.8-9.9-5-11 1.7.3 4.5 4.5 6.9 3.1-.7-1.6-2.8-.7-5.1-4.9-2.4-4.8-2.7-11.9-11-19.6 5.4 8.2 17.4 13 18 10.6s-10.7-11.4-10.1-13.6c2.2 4.4 13.4 14.4 21.6 13.6.6-2-6.7-5.8-8.6-9.4-5.3-3.6-19.4-15.7-19.6-18.5a33.3 33.3 0 0 0-9.9-10.6 5 5 0 0 1-.8-1.7c-3.2-7.5 1-10 3.5-10.3 2-.3 2.6 0 4-.7l-5.1-2c2.3 1.7 8 .2 6.8 5 2.5-1 7.9-7.4-6.1-8.8-4.6-5.2-23.3-8.2-28 14.6.4.3.6.6 1.8 1.4-6-2.8-21.9-5-27.6-6-15.6-4.4-31.7-15.2-33.2-13.9-2 1 9.4 11.6 8.8 11.8a263 263 0 0 0-27.5-13.6c-6-2.2-11.9-7.4-12.5-6.4-2.2 4.5 9.5 15.9 11.7 17.2 2.2 1.3 19.3 9.3 19 9.4-25.8-11.7-30-13.9-31.4-15.2-2.3-.5-7.8-8-9.3-7.5-.9.8.8 12.6 13.1 18 2 1.4 26.4 10.1 26.2 10.8 0 .2-28-11.5-29-12-5.4-2-12-9.4-13.2-8.6-1.2.8 3 8.8 8.4 11.3 2.9 1.2 13.8 6.6 23.6 10 .6.3-17.7-6.9-26.5-10.5-4-2.2-5.8-5-6.4-4.4-1 .6 1.4 12.4 29.7 19 .7.4 10-2.1 9.5-1.8a113.3 113.3 0 0 1-15.8 2.8c-.3.8 1.8 5 16.4 4.2 1.8-.1 12-3.7 11.1-3a174 174 0 0 1-14.8 4.9c-.9 0-5.6.6-5.8 1-.2.8 3.5 3.8 11.3 4.2 7 .4 20.2-4.2 20-3.9-.4.3-12.8 4.6-13.1 4.8-.5.3-5 .5-5.2.9-.4.9 6.6 7.4 27.1.4-2 2.8-12 4.7-12 5.2 0 .4 2.2 2.5 5.7 3.3 1.7.4 4.1.3 6.3 0 4-.8 8-2.3 13.3-7.2.6 1.5-13.1 8.5-12.5 9.1 3 2.8 12.9-.3 13.5-.7.7-.3 19-10.7 19-12 .3 1.6-23.7 14.7-23.4 15.2 1.5 2.4 9.7-.1 10-.4l10.8-5.8c.3-.1-11.8 7-10.8 8.2-.5 4.7 19-3.2 20.5-4.2.7-.5-9.4 4.4-9.4 6.7 3.3 5.5 13.7 3.8 15.3 2.6.8-.6-1 4-.4 3.6a16 16 0 0 0 3-4.3c-.2 1.6-1.4 4-2 6.8-.7 2.7-.9 5.9-1.8 9.2-.2 1.4 6.4-2.9 5.4-13.2.6 5.4-2 15.4-1.3 16 1.3 1 5.2-5 5.6-9.1 1.1 2 3.5 6.3 5.6 7.3-.2-3.1 0-3-1-6 .6-4.1.7-9.7.8-16.1 5.6 10.7 7.9 15.3 6.3 23.5 1.7.7 4.3-5.8 4.1-9a13.3 13.3 0 0 0 11.5 10.2z"
        />
        <Path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.1}
          d="M305.4 67.7s-3.9 2.9-8.6 2.7c1.2 4.8 11 1.1 11 1.1s-4.7 5.3-8.1 6.1c2 1.7 10.6 1.1 12 .3 1.4-.9 4-4.2 4-4.2s-8.8 10.2-10 10.1c-.3 1.2 9.1.8 11-1 2-1.8 7-4.4 7-4.4s-13 9-13.5 9c4.8 1.2 14.5-1.6 20.7-5.4-9.2 6.1-10 7.2-14.7 9.3 4.2.9 6.3 3.7 20.3-2.4 8-3.8 12.6-10.8 12.6-10.8a81.7 81.7 0 0 1-21.6 18c-.5 1 9.4 5.2 21.9-7.9"
        />
        <Path
          strokeLinecap="round"
          strokeWidth={1.1}
          d="M373.4 96s.9 4 4.3 7 3.6 6 3.6 6m-9.5-39s1.1 3.7 4.6 6c3.6 2.2 9 9.4 9.3 10.7.4 1.5 2.5 12.6 2.3 13.8m-37.8-25c.2 1.5-5 8.3 2.2 16.4-6.6 8-6.6 9-6.6 9s3.7 2 10.2-3.6c10.8 13.2 7.2 19.2 7.2 19.2"
        />
        <Path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.1}
          d="M362.3 107.2s-1-1.4.8-6.7c1.6 2 3.4 2.3 4.1 3 .8.9 9 2 9.4 7.5"
        />
        <Path
          strokeWidth={1.1}
          d="M371.9 57.5c0-.4-1.7-4-7.8.4 3.3.2 6.5 2.1 7.8-.4z"
        />
        <Path
          strokeLinejoin="round"
          strokeWidth={1.1}
          d="M430.1 73.5c.3.2 18.2 4 24.2 2.1-7.6 10.2-22.9 3.3-22.9 3.3 7.5 2.2 7.8 2 10.2 4.2.8 2-13.8 1-18.5-1.7 13.3 4.2 13.6 4 14 5.5.6 2.3-21.8-.6-23.7-3.5 6 4.6 9.2 5.5 12.5 7.6-4 1.8-11.5 3.6-25.2-6.1 18 16.4 34.3 15.4 36.9 18.3-6.3 9.3-30.7-5.5-41.9-13s24.5 18.1 27.8 17.7c-1.6 2.5-13.4.3-14.2-1"
        />
        <Path
          strokeLinecap="round"
          strokeWidth={1.1}
          d="M434.7 90.7c-2 .3-8.3.3-9.2.1"
        />
        <Path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.1}
          d="M300.1 65s13.6 7.2 19.4 6.7a10 10 0 0 1-3.8 2c1.4.6 5.4 2.7 11.4 1.4l-3.3 3s5.2 2 11-1a46.4 46.4 0 0 0-2.8 3.7l4.1.3"
        />
      </G>
    </G>
  </Svg>
);
export default SvgZm;
