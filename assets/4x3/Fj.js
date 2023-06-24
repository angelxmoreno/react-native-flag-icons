import * as React from "react";
import Svg, { Path, G, Ellipse, Circle } from "react-native-svg";
const SvgFj = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <Path fill="#68bfe5" d="M0 0v480h640V0H0z" />
    <G strokeMiterlimit={4.8}>
      <Path
        fill="#fff"
        d="M420.9 193.2v136.4c0 44.6 80.6 71 80.6 71s80.5-26.4 80.5-71V193.2z"
      />
      <Path
        fill="#d21034"
        d="M490.3 241.2v61.4h-69.4v22.3h69.4v71.5l11.2 4.3 11.1-4.3V325H582v-22.4h-69.4v-61.4z"
      />
      <Path fill="#d21034" d="M420.9 193.2H582V246H420.8z" />
      <G strokeMiterlimit={3}>
        <G
          fill="#fff"
          stroke="#000"
          strokeWidth={0.8}
          transform="translate(-96.9 97.5) scale(.66486)"
        >
          <Ellipse cx={798.2} cy={192.2} rx={13.6} ry={11} />
          <Ellipse cx={798.2} cy={186.5} rx={12.1} ry={6.1} />
          <Ellipse cx={798.2} cy={198.8} rx={12.1} ry={6.1} />
          <Ellipse cx={798.2} cy={192.2} rx={12.1} ry={6.1} />
        </G>
        <Path
          fill="#ffd100"
          stroke="#000"
          strokeWidth={0.8}
          d="m578 235.4-1.3-3.6s-3.6-1.5-3.9-3.4c-.6-5.1-2.4-7-5.2-7.8a6 6 0 0 0-4.5.5c-.8 1.2-5 1.2-7.2 1.3-2.3 0-2.4-1-2.4-1-1.7 0-2.5-1.3-2.5-1.3-1.1-2.3-2-3.2-2.6-3.5 3 0 5.2-1.3 8.6-4.8 3.6-3.8 6.2-2.4 6.2-2.4-1.8 3.6.6 3.3.6 3.3 4.8-2.5.6-8.7-.8-8.4-1.5.3-1.9-.7-1.9-.7 0 1.1-1.6 1.6-1.6 1.6 1.2-7.1-3-9-3-9-.6.6-1 1.9-1 1.9-1.2 4.3-5.1 3.6-9.5 1.5-4.4-2-16 2.2-19.7 3.7-3.7 1.5-10.4 3.7-16.4.4-6-3.4-7.5-2.8-9.9-2.1-2.3.6-6.5 1.6-8 .8a8.5 8.5 0 0 0-3.4-.9c.4-.2-.2-1.2-.2-1.2-1.9-2.5.2-4 .2-4s-3.4 1-2 6.8l.6.8s.4 1.9 1.4 2.4v.4s.9-.4 1.1.8c.3 1.2 1.6 0 2.1-1 0 0-.9 5.4 5.7 6.7 0 0-.7-.9-.5-1.4.3-.6-.8-1-.7-1.8.1-.9-1.6-1.2-.3-1.9 1.4-.6 2-1.9 5-.1 2.9 1.7 5.2 1.3 5.2 1.3s-1.8-3.6-.8-3.6 5.4 5.4 7.5 5.2c2.2-.3 6.4-2.8 8.5-1.9 0 0 .2-1 8.2-2.4 8-1.4 18-5.4 21.7-1.9 0 0 .4 2.8 2 3.5 0 0-.3 5.8-10.2 2.6l-3.6-1s-.6-1.7-19.5 3.2c0 0-1.1.4-1.9.9-.7.5-1.7-.3-5.5 1-3.7 1.5-17.7 6-26.3 4.4-1.9-.6-3.6-.3-3.7-.6 0-.3 1 .1 1 .1-.6-.7-.9-.8-.9-.8-7.2-.8-6-4-6-4l.4 1c1.2-1.6-.4-5.2-.4-5.2h-.1a3.8 3.8 0 0 0 0-.3l.5-.4c3.5-3 7.5-3.5 7.5-3.5-2.4-3-7.4-1.4-7.4-1.4.1-3.5-1.4-7.7-1.4-7.7a12 12 0 0 0-7.7 4.7c-.2-3.7-4.9-5.8-4.9-5.8 1.8 2.1.7 7.2.7 7.2h.2-.5l-.1 1.1h-.2s-1.7.6-3.7 5.2c0 0-.2 1-1 2v-.4s-2.3 3-7.4 0c0 0-7-4.1-9.6-4-2.4.2-4 1.3-3.9 2 0 0-5.7-.4-7.6 2.8 0 0-4.3 1.6-.6 5 0 0 .5 1.6 1.5 2.4 0 0-.1-3.2.7-2.3l.5.6c.1.4.5 1.6 1.2 2.3l.6-.2c0-.8.2-1.8.4-2.2h.2l1 1.6 1-.6c.6 0 1.3.5 1.3.5l1.3-1.1c1.3.2 1.7-2.4 1.7-2.4a4 4 0 0 0 3.1-.5c.6 2 5.2 4.3 5.2 4.3h.2l-.6.4c2.1 1.5 6 1.1 6 1.1-1.6.6-1.4 3.7-1.4 3.7-1 .4-1 1.3-1 1.3 3.2 1.3 5.3.2 5.3.2.2 1 0 1.2 0 1.2-1.3 2.7-1.9 5.4-1.9 5.4h.1v.2s-5.7 2-8.1 4.7c0 0-.3-.8-1-.8s-2.8-1.8-3.8-2.1c-1-.3-2.5.3-3-.2-.3-.4-.1-3.6-.8-4l-.7-2c-.4 1-2.4.8-2.4.8l-.8.6-.8-.1c-.2 0-.4.5-.5 1l-.3.3v-.6c-.3.3-1.1-.1-1.4-.1-.2 0-.4.4-.5.9l-1.9.1c-.3.2 0 2.6 0 2.6-2.3 1.2-1.2 3.1-1.2 3.1 1.2 6 11.5 3.3 12.3 4.1.8.8 2.6 1 3.5 1 1 0 2.1 2.2 3.4 2.4 1.3.2 0-1.8 6.1-3.2 6.1-1.5 8.2-4 8.2-4 1.9-.4 2.4-2.7 2.5-3.6l.2 1.4c.3 2.1-1.2 3-1.2 3l5.3-1.7c2.1-.5 1.8-2.4 1.8-2.4 2 5.8 5.7 6.2 5.7 6.2.7-2.2.6-2.9.6-2.9h1.7c0-1.3-1-2.2-1.7-2.6l2.6 1.5 1-.1c0 .9 1.3 1.7 1.3 1.7l.2-1.2c1.2 1.6 3.4 1 3.4 1a7.3 7.3 0 0 0-.2-.8c4.7 2.9 12.2-.8 12.2-.8 2 .4 2.3-.8 2.3-.8 2.2.3 2.8-1.3 2.8-1.3 5.3-.4 9.1-4.2 9.1-4.2 2.7-.2 2.8-2.1 2.8-2.1s2.6.5 5.2-2.7c6-8.5 14.8-4 14.8-4l-5.1.3c-13.5-.1-7.9 9-7.9 9h.8c1.3.2 5.7 3.7 4 6.2v.2c-2.8 3.7-7.8.2-9.3-3-1.4-3.2-4.4-2.5-4.4-2.5s-7.5 1.3-4.4 7.3c.1 1.5 1 3.2 3.8 4.8 1.5 2.2 6.5 2.4 10.1 1.6C524 244 533 240 533 240c.7-2 3-1.5 5-4.4 2-2.8-2.9-3.8-4-5.4-1-1.5.3-1.2.3-1.2 4.4 2.3 4.8-5.2 4.8-5.2a6.6 6.6 0 0 0 4.3 5.5c2.3-2.3.6-7.2.6-7.2 5.7 10.2 9.1 8.5 9.1 8.5-3-1.8-1.5-4.4-1.5-4.4 2.7 10.8 14 1.4 14 1.4-.6 1.6 0 2.5 1 3.5s2.2 1.4 1.6 3.3c-.5 1.8-5.8 1.4-5.8 1.4s-5-.2-4.6 4c.3 1 3.6 1.4 5 1.1 0 0-.6.2 1.3.4h2.2c2.1 0 4.5-.4 4.5-.4 2.9-.6 2.4-1.6 2.4-1.6 4.5-.8 5-3.8 5-3.8z"
        />
        <Path d="M429.6 216.7s.3-.5.7-.6c.4 0 .8.2 1.2.8l.3-.2s-1.2-1.8-.8-3c.3-.6.8-1 1.6-1.1v-.3c-1 .2-1.6.6-1.8 1.3a2 2 0 0 0-.2.7c0 .6.2 1.2.5 1.7a1.1 1.1 0 0 0-.8-.2 1 1 0 0 0-.8.6zm141 24c-3 .5-7.5.7-7.9-.2 0-.2 0-.8 2.4-2.4l-.2-.5c-2.1 1.4-3 2.3-2.7 3 .7 1.8 7.2.8 8.5.6zm-58.4 1.7c-.7-1-.3-2.5 1-4.3l-.5-.3c-1.4 2-1.7 3.6-1 5z" />
        <Path d="M508.1 237.8c0 1.9 1.4 3.6 3.9 5.1l.3-.5c-2.4-1.4-3.6-3-3.6-4.6-.2-2.5 2.5-4.5 2.6-4.5l-.3-.4c-.2 0-3 2.1-2.9 5zm52 .7c-.8 1.3-.5 2.8-.5 2.8h.5c0-.1-.2-1.4.5-2.5a3 3 0 0 1 2-1.2v-.5c-1.1.2-2 .7-2.4 1.4zM441 215.1h-.2v.2s-.2 1.6-1 2a.8.8 0 0 1-.6 0l-1.3-.7c-.2-.2-.4-.3-.8-.2a1.8 1.8 0 0 1-.4-1.4c.1-.7.6-1.4 1.6-2l-.2-.3c-1 .7-1.6 1.5-1.7 2.3 0 1 .5 1.6.5 1.6v.1h.2c.3-.1.3 0 .6.2l1.4.8h1c.7-.5 1-1.9 1-2.2 3.2.7 5.8-3.3 6-3.4l-.3-.2s-2.7 4-5.8 3.2z" />
        <Path d="M433.1 214.5a3 3 0 0 0 .4 2c.3.5.7.8 1 .9.5 0 .8-.3 1.2-.6.2-.2.4-.4.6-.4l.3.2.2-.2-.5-.3c-.3 0-.6.2-.8.5s-.6.5-1 .5c-.2 0-.5-.3-.8-.8a2.2 2.2 0 0 1-.3-1.7c.4-1.4 2.1-2.5 2.1-2.5l-.1-.3c-.1 0-1.9 1.2-2.3 2.7zm-4.4 20.7c.1-.6.6-1 1.3-1.4-.2 0 .6.6 1.3.6l.5-.3c.2.2 1.4 1.3 1.4 2.7 0 .3 0 .6-.2.9l.3.1c.9-2.1-1.4-4-1.4-4h-.2l-.4.3c-.6 0-1.3-.6-1.3-.6-1 .4-1.4 1-1.6 1.6zm10.3-5.4c-.7.1-2.5.4-3.1 1.4-.2.4-.3.8-.1 1.2l.2.6c.6 1.6 1.2 3.2 1.9 3.6l.1-.3c-.6-.3-1.2-2-1.7-3.4l-.2-.6a1 1 0 0 1 0-1c.5-.7 2.2-1 3-1.1.4 0 .5 1.5.6 2.4h.3c-.1-1.4-.3-2.8-1-2.8z" />
        <Path d="M433.9 231.4c-.4.3-.3.8-.3.9 0 .1.2 4 2 4.8l.1-.3c-1.6-.7-1.8-4.5-1.8-4.6 0 0 0-.4.2-.6.3-.2.8-.3 1.6 0l.1-.3c-.9-.3-1.5-.2-1.9 0z" />
        <Path d="M432.4 231.7c-.8.6-.7 2.2-.7 2.3h.3s0-1.6.6-2c.3-.2.6-.2 1 0l.1-.4c-.5-.2-1-.2-1.3 0z" />
        <G transform="translate(-96.9 97.5) scale(.66486)">
          <Path d="M862.3 169.5s1.3 3 1.3 5.3c0 .4-.2.7-.3 1l-.5-1.3-.3 1s-.6 1.4.3 2.9c1.2 2 4.2 3.2 9 3.7v.1a.8.8 0 0 0-.4.1l-.2.2v.4c.2.5.7.5 1.8.5l.7.1.6.2-.1-.1c1 0 2.3.3 3.6.8l-1 .2 1.1.5c.1 0 8.7 3.5 12.2 6.3-1 .9-5.3 4-12.7 2.2l-1.2-.3.8 1s4.9 5.6 5.9 9c-1.7 0-8.2 0-10.5-2l-.5.5s3 4.6 3.8 8.1c-1 .2-3 .3-4.3-1.4l-.6-.7-.3 2c-.6-.5-1.4-1.1-1.4-1.9v-.4l-1.8.3-3.8-2.3a8 8 0 0 0-.6-.4l-.4.7.6.3c.8.6 2.2 1.7 2.3 3.3H863v.5c0 .3 0 1.4-.9 3.7-1.1-.2-5.3-1.7-7.8-8.8l-.8.2v.2c0 .7-.2 2.3-2.4 2.9l-6.5 2a4.5 4.5 0 0 0 .8-2.8v-.8a20.3 20.3 0 0 1-.2-2.6c0-1.5.3-2.4 1.4-3l-.4-.8c-.1 0-9.6 3.9-14.3 2.3.2-1 1-4.2 2.6-7.6l-.2.2c.3-.2.6-.6.3-2.2v-.5l-.5.2s-3 1.4-7.4-.2c0-.4.3-1 1.2-1.4l.3-.1v-.8c0-1.2.1-4 1.8-4.6l-.2-.8s-5.1.4-8.2-1.3a11 11 0 0 1 4.5-1.9h.3v-.4a6 6 0 0 0-.5-2.3c1.2.4 2.6.7 3.1.3l.2-.1-.2-3.1h-.8l.1 2.6-3-.7-1.2-.4.8 1a4 4 0 0 1 .7 2.4 12.7 12.7 0 0 0-5 2.3l-.5.4.5.3c2.4 1.6 6.1 1.8 8 1.7a8.4 8.4 0 0 0-1.3 4.5v.4a3.1 3.1 0 0 0-1.5 2.2v.3l.2.1a11 11 0 0 0 7.9.5v.9c-2 4.2-3 8.3-3 8.3v.4h.3c3.9 1.6 10.7-.5 13.8-1.6-.4.7-.7 1.5-.7 2.5a22.1 22.1 0 0 0 .3 3.4c0 2.3-1.5 3.2-1.6 3.2l.3.8 8-2.4c1.8-.5 2.5-1.6 2.8-2.5 3.1 7.4 8 8 8.3 8.1h.3l.1-.3a14 14 0 0 0 1-4 439.6 439.6 0 0 0 2.4-.1v-.5c0-.7-.1-1.3-.4-1.8l1.4.8 1.3-.2c.3 1.3 1.9 2.4 2.1 2.5l.5.3.3-1.7c2 1.7 4.7 1.2 4.9 1.2l.3-.1v-.4c-.4-2.7-2.2-5.9-3.3-7.6 3.5 1.6 9.9 1.5 10.2 1.5h.4v-.5a30 30 0 0 0-5.6-9c8.2 1.5 12.6-2.8 12.8-3l.3-.3-.4-.2a53.8 53.8 0 0 0-11.6-6.3l.9-.2-1-.5a12.8 12.8 0 0 0-5.8-1.4c-1-1.2-1.5-1.3-1.6-1.4-5.6-.6-7.6-2.1-8.4-3.3v-.3l.2-.3c.5-.7.7-1.6.7-2.6 0-2.6-1.3-5.5-1.3-5.6l-.8.3z" />
          <Path d="M836.8 167.9s-.6 3-3.2 4.5c-2 1-4.5 1-7.6-.3l-.4-.1v.4a5 5 0 0 0 2 3.2c1.3 1 3.3 1.4 5.9 1.2-.9 1-3.6 4.4-3.6 7.8v.5c.4.2 4.6 1.4 6.6-1.1 0 1 .4 4.5 1.7 5.8.8.8 1 1.8 1 2.7 0 .8-.2 1.4-.2 1.4l-.2.6.5-.4c.2-.1 4.1-3 5.3-6.7 0 0 .7-1 1.9-1.3v.5c0 1.5.6 4.1 4.8 5.7l.3.1v-.3a7.1 7.1 0 0 1 0-.7c0-1.1 0-3 1.1-4a2.8 2.8 0 0 0 .6-3.3c.9.2 2.9.9 3.7 2.4 1.2 2.2 5.3.4 5.5.4l-.1-.5s-1.8.4-2.9-.3a2.1 2.1 0 0 1-.8-1.5l-.2-2.4c0-1-.2-1.7-.7-2.2.5 0 1.6 0 2 1 .8 1.6 3.3 1.7 3.4 1.7l.9.1-.7-.5s-2.2-1.4-1.8-3.3l.3-1.4c.6-2.5 1.6-6.6.7-9.2l-.4.2c.2.6.3 1.4.3 2.2 0 2.2-.7 5-1 6.7l-.4 1.4a2.6 2.6 0 0 0 0 .5c0 1.3.7 2.2 1.3 2.7-.7-.1-1.7-.5-2-1.3-.7-1.4-2.3-1.4-3-1.3l-.6.1.4.4c.7.4.8 1 .8 2.3l.2 2.3c.1.8.5 1.4 1 1.8.6.4 1.2.4 1.7.5-1.2.3-2.9.5-3.5-.6-1.1-2.2-4.3-2.7-4.4-2.8h-.5l.2.4s.4.6.4 1.4c0 .5-.2 1.2-.7 1.7-1.1 1.1-1.3 3.2-1.3 4.3v.4c-3.6-1.5-4.2-3.7-4.2-5v-1l.2-.3h-.4a3.5 3.5 0 0 0-2.5 1.8 15 15 0 0 1-4.7 6.2 6.9 6.9 0 0 0 .1-1c0-.9-.2-2-1-2.9-1.5-1.4-1.7-6-1.7-6v-.8l-.4.7c-1.6 2.8-6.2 1.4-6.3 1.4-.2-3.5 4-8.1 4-8.2l.4-.4h-.6c-2.7.4-4.8 0-6.2-1a4.6 4.6 0 0 1-1.6-2.5c3 1.1 5.6 1.2 7.6.1a7.4 7.4 0 0 0 3.4-4.8c3-6.6 5.5-7.7 5.5-7.7l-.1-.4c-.2 0-2.8 1-5.8 8z" />
          <Path d="M843.5 158h-.2l-2.4 3.3h.7a31 31 0 0 1 19.7 9.2l.3.3 2.3-2.5-.2-.3c-6.5-10.2-20.1-10-20.3-10zm.2.9c1.6 0 13.2.3 19.2 9.3l-1.3 1.4a33 33 0 0 0-19.3-8.9 631.2 631.2 0 0 1 1.4-1.8z" />
          <Path d="M841.6 164.8a11 11 0 0 0-2.1 4.8l.1.4a7.3 7.3 0 0 0-2 5.5c0 1.3.2 2.6.6 3.8l.3.7c1.2 3.4 2.3 6.4 7.8 4.6 5.2-1.6 5.4-2 6.7-4.2l.4-.5c.7-1.2 1.5-1.4 2.3-1.7 1-.3 2-.6 3-2.4l.8-1.3c1-1.3 2.2-3 2.3-5h-.4a9.8 9.8 0 0 1-2.2 4.7l-1 1.4a3.6 3.6 0 0 1-2.6 2.2 3.9 3.9 0 0 0-2.6 1.8l-.4.6c-1.2 2.1-1.4 2.4-6.5 4-5 1.6-6-.9-7.2-4.4l-.3-.7c-1.4-3.8-.3-7.6 1.6-9l.6-.5-.9.1v-.1c0-.7.7-2.6 2-4.5 1.2-1.6 4-3.1 4-3.2l-.2-.4c-.2.1-2.9 1.7-4.1 3.3z" />
          <Path d="M839.2 178.7c.9.6 2.1.5 3.7 0 0 .5 0 1.7 1 2.5 1.2 1 3 1.2 5.5.6v-.5c-2.4.6-4.2.4-5.2-.5a3 3 0 0 1-.9-2.4v-.4l-.3.2c-1.5.6-2.7.7-3.6 0-1.5-1-1.4-3.7-1.4-3.7h-.4s-.2 3 1.6 4.2z" />
          <Path d="M842 175c-.6.2-.8.7-.8 1.1v.3c.2 1.2 1.5 2 2.6 2.3 1.2.3 2.6.4 3.1-.3.2-.3.4-.8 0-1.7a3.7 3.7 0 0 0-4.8-1.7zm2 3.3c-1-.3-2.2-1-2.3-2 0 0-.1-.7.5-.9a3.3 3.3 0 0 1 4.2 1.6c.3.4.3.8.1 1-.3.5-1.4.6-2.5.3zm-2-3.3zm1.6 6c-.3 2.5 0 2.6.1 2.6h.2l.2-.1 1.4-2-1.8-.8v.3zm.5.4.7.3-.8 1.1v-1.4zm-4.2-2.4-.1 2.3 2-2.4-2-.2v.3zm.4.2h.6l-.6.8v-.8z" />
          <Path d="M838.5 178.2s1.5 2.9 1.8 4c.1.6 1 1.4 2 1.7 1 .4 2 .4 2.7-.1l1.3-1.1c.4-.5.6-.6 1-.5v-.5c-.6 0-.9.2-1.3.6l-1.3 1c-.8.6-1.7.4-2.2.2-1-.3-1.7-1-1.8-1.5-.3-1-1.7-3.9-1.8-4l-.4.2zm2-8.6a5 5 0 0 0-2.4 2.8l.4.1s.7-1.8 2.1-2.5a2.9 2.9 0 0 1 2.4 0l.1-.4c-1-.4-1.8-.4-2.7 0zm10.8 5.2c.2 0 3.2 2.4 1.5 5.2l.3.3c2-3.3-1.5-5.9-1.5-6l-.3.5zm-9.2.4s-.5 1.7 2 2.3c0 0-2.3 0-2.5-.6-.1-.6 0-1.9.5-1.7zm7.5 2c0 .2-.2.3-.3.3a.3.3 0 0 1-.3-.2c0-.2.1-.3.3-.3.1 0 .3.1.3.3zm.2 1.2c0 .1 0 .2-.2.2a.3.3 0 0 1-.3-.2.3.3 0 0 1 .3-.3c.1 0 .2.1.2.3z" />
          <Circle cx={848} cy={177.8} r={0.3} />
          <Path d="M848.8 179.4a.3.3 0 1 1-.6 0c0-.1.1-.2.3-.2l.3.2zm-7.1-7.3a.3.3 0 0 1-.6 0 .3.3 0 0 1 .5 0z" />
          <Circle cx={841.6} cy={173.2} r={0.3} />
          <Circle cx={840.1} cy={172.7} r={0.3} />
          <Path d="M840.8 174.3a.3.3 0 0 1-.2.3.3.3 0 0 1 0-.6.3.3 0 0 1 .2.3zm4.8-9.6s3.5 2.2.1 6.3c0 0 1.7-1.3 1.8-3.4.2-2.1-1.2-3.8-2-2.9zm13.5 5.9c-1.2.6-2.8-.5-3.6-1.5-.8-1-2.5-1.3-3.6.6-1 1.8-2.5 2.5-2.5 2.5s1.5-.8 3-2.5c1.5-1.6 2.4-.3 3.9.5 1.4.8 1.7 1 2.7.5v-.1z" />
          <Path d="M858.8 170.9a1.7 1.7 0 0 1-2.2-.1c-1-.8-1.7-1.8-2.8-1.2-1.2.6-3.3 2.2-3.3 2.2s3.5-2.4 4.2-1.8c.6.5 2.2 1.8 3.1 1.4l1-.5z" />
          <Path d="M856.1 172.3c-1.1-.8-2.2 1-3.1.8-1-.2-1.7-1.8-1.7-1.8s.8 1.6 2 1.3c1.3-.4 2.1-1.2 2.9-.6.7.6-.1.3-.1.3z" />
          <Path d="M854.4 172.6a2 2 0 0 1-2.4-1.9s.7 1.8 2.6 1.5l-.2.4z" />
          <Path d="M854.3 171.2c.1.5.1.8-.5.8s-1-.2-1-.8c0-.5 1.4-.4 1.5 0zm-7.8-3a.7.7 0 0 1-.7.6c-.4 0-.5-.2-.5-.6s0-.7.5-.7.7.3.7.7z" />
          <Path d="M844 165.7s3.8 0 2 4.7c0 0 1.4-2.3.5-4-1-1.6-2.3-1.2-2.3-1.2s-.4.3-.2.5z" />
          <Path d="M844 167.6c0 1 .6 1.9 1.8 2.9l.3-.4c-1.1-.9-1.7-1.7-1.7-2.5s.6-1.3.6-1.3l-.3-.3s-.7.6-.8 1.6z" />
          <Path d="M844.8 168.4c.1.5.6 1 1.2 1.2l.2-.4c-.5-.2-.9-.6-1-1-.2-.8.4-1.7.4-1.7l-.4-.3s-.7 1.2-.4 2.2zm5.1 2.6s.7 1.5-.3 3.1l-1 1.6s1.2-2.3.7-3.2c-.4-1 .6-1.5.6-1.5zm14.6 15.8c3.8.7 12.5 7.5 12.5 7.5l.5-.6c-.3-.3-8.9-7-12.9-7.7l-.2.8zm3.4 9.5c.2 3.5 4 5.6 4 5.7l.5-.7s-3.5-2-3.7-5h-.8zm-9.3.8c0 3.8 3.6 8.4 3.8 8.6l.6-.5s-3.6-4.6-3.6-8.1h-.8zm-12.1.4c.6 1.3.6 1.9.4 2.2-.2.4-.6.4-.6.4l.1.8c.3 0 .9-.2 1.2-.8.4-.7.3-1.7-.4-3l-.7.4z" />
        </G>
        <G fill="#fff" stroke="#000" strokeWidth={0.2}>
          <Path d="M429.6 216.3s.1 1.7 1.4 2.7c0 0-.1-1.8.3-2.6 0 0-.7-.8-1.7-.1zm2.6 1s.3 1.6 1.2 2.3l.6-.1s.2-2 .5-2.2c.3-.2-1.3.7-2.3 0z" />
          <Path d="m434.5 217.3 1 1.6 1.2-.7-.2-1.8s-.7-.2-2 .9zm4.7.3-1.3 1.1s-.7-.5-1.2-.5l.2-1.7s1-.7 2.3 1.1zm-9.3 16s-.2-2.4 0-2.5c0 0 1 .3 1.4 0 0 0 .5 1.8.4 2.6-.2.8-1.1.5-1.8 0zm6-2.4s-.1-2 .2-2.3c0 0 2 .3 2.4-.8l.7 2s-2.1-.3-3.4 1z" />
          <Path d="M433.8 231.6s.3-2.1.7-2.2c0 0 1 .3 1.3-.1v2.6s0-1.1-2-.3zm-2.3.3s.5-1.9.8-1.9 1 .5 1.4.2v1.4s-1.6-.4-1.9 1.9l-.3-1.6z" />
        </G>
      </G>
      <G fill="#00a651" stroke="#000" strokeWidth={0.8}>
        <Path
          strokeWidth={0.5}
          d="M461.7 270.4s5.2 4.9 3.9 9.2c0 0 3.3-7.3-.3-9.5-3.6-2-3.7-.5-3.6.3z"
        />
        <Path
          fill="#964b36"
          strokeWidth={0.5}
          d="M455 275.1s-1.3 2 .2 3.3c0 0-1.7 2.4-.4 4.4 0 0-1 2.1-.8 4.4 0 0-.8 3.5 1 5.1 0 0 2 1 3 .1 0 0 1.7-2.6.6-5.3 0 0 1.2-2.3-.2-5.2 0 0 .4-1.6-.7-3.5 0 0 .7-1.2.1-2.2 0 0-2.5-2.7-2.8-1z"
        />
        <Path
          strokeWidth={0.5}
          d="M456.5 269s-6.2-12-10.6-12.5c-4.4-.5-4.6-4.8-4.6-4.8s.5 2 4 2 10.2 5 11 8.7c.7 3.7 1.5 3.2 1.5 3.2l-1.3 3.4z"
        />
        <Path
          strokeWidth={0.5}
          d="M456.5 268.1s2.3-15.1 12.2-15.4c9.9-.2 6.6.8 9-.8 0 0-6.6 3.4-10.7 4-4.2.4-7.6 8.5-7.4 10 0 1.5-2.3 4.4-3.4 3.4-1.2-1 .3-1.2.3-1.2z"
        />
        <Path
          strokeWidth={0.5}
          d="M458.8 273.8s2.3-6 6.1-4c0 0-3-5.8-8.4-.8 0 0 2.4 3.3 2.3 4.8zm-7.5-6s3.2 13.4-1.8 17.5c0 0 .2-6.9-2.9-11-3-4.2 3-8.7 4.7-6.5z"
        />
        <Path
          strokeWidth={0.5}
          d="M451.7 270.1s5.9 5.7 6.2 7.6c.4 1.8 1.8-5.7-1-7.8s-5.7-2.5-5.7-2.5l.5 2.8z"
        />
        <Path
          fill="#964b36"
          strokeWidth={0.5}
          d="M440.8 285s.5 2.3 2 2.8c0 0 0 1.7 1.4 2.2 0 0-.7 1.5.4 2.4 0 0-.2 3 .8 3.5 0 0 2.7-.1 3.6-.9 0 0 .5-1.9-1-3.8 0 0 .3-1.8-1.2-2.8 0 0 .5-2.5-1.4-3.4 0 0-.3-2-1.4-3 0 0-2.2 3.1-3.2 3z"
        />
        <Path
          strokeWidth={0.5}
          d="M443.7 282s-7.7-2.8-12 1.2c0 0 6.6 1 7.4 2.3.8 1.3 4.9-2.2 4.6-3.5z"
        />
        <Path
          strokeWidth={0.5}
          d="m441.3 286.8-1.4-1c-.7-.6-7.2-2.3-8.1 4 0 0-2.4-6.3 1-7 3.5-1 6.2 1 8.5 4m-5-12.8s2.3 5.2 3.2 5.4c.9.3 1.5-.6 1.5-.6s-3.1-4.6-4.8-4.8zm-1.8-7.9s-2-6.6-4.4-4.8c-2.4 1.7-1.8 6.5-1.8 6.5s-4.7-5-2-8.8c2.8-3.9 8.2.4 8.2 7.1z"
        />
        <Path
          fill="#964b36"
          strokeWidth={0.5}
          d="M439.9 279.8s0 1.3.9 1.6c.8.4 2.5 1 2.5.3s-1.3-3.7-1.8-3.3c-.5.4-1.4.4-1.6 1.4z"
        />
        <Path
          strokeWidth={0.5}
          d="M438.4 272s-.3-5.7 3.5-7.9c0 0 .7.2 1.1-1 0 0-3 7.3-2.1 11l-.1.4"
        />
        <Path
          strokeWidth={0.5}
          d="M439.1 265s6.8-14 15-9.1c0 0-8.6 1.7-11.7 7.9l-3.1 4.6-.2-3.4z"
        />
        <Path
          strokeWidth={0.5}
          d="M435.5 270.1s-2-9.4-3.3-10.6c-1.2-1.3-3.3-2.6-5.9-.5 0 0 4.4-3.9 9-.6 4.7 3.2 3.7 8.4 3.7 8.4l-.5 6.5-3.1-2.9"
        />
        <Path
          strokeWidth={0.5}
          d="M442.8 281.3s-8.3-15.7-13.7-4.5c0 0-1 2.9.1 4 0 0-3-2.3-1.6-7.8s10.5-3 13.2 1.5c2.6 4.5 3.3 6.8 3 7-.4.3-1-.2-1-.2zm23.3 4.5s6-12.4 9.5-6.8c0 0 1 2.8-.5 4 0 0-2.4-3-4.5.6-2.2 3.5-1.3 3.2-1.3 3.2s-2.2.6-3.2-1z"
        />
        <Path
          strokeWidth={0.5}
          d="M475 283s3.3 1.7 2.2 5.2c0 0 4.4-8.4-1.6-9.2 0 0 1.1 2.7-.5 4zm.5-8.6s7.9 2.3 8.1 5.7c0 0 1.4-6.6-3.1-8.6 0 0-5.4 1-5 3z"
        />
        <Path
          strokeWidth={0.5}
          d="M479 264c3.4-6.6 7.6 2.1 7.6 2.1s1.5-6.9-2.7-8.1c-4.3-1.3-7 14.7-7 14.7l-5 1s1.3-13.8 8.8-15h1"
        />
        <Path
          strokeWidth={0.5}
          d="M473 268s-4.8-9.8-8-10.8 1.7-2.5 3.7-.6 5.8 4.3 5.4 9.3L473 268zm-5 13.4s1.4-6.6 5.2-8.6c3.8-2 7.3-1.3 7.3-1.3s-4.5 1-5.3 3.3c-.7 2.2-2 2.4-2 2.4l-5.1 4.2z"
        />
        <Path
          fill="#964b36"
          strokeWidth={0.5}
          d="M466 285.8s-2 4-1.6 4.6c0 0-2.2 3.3-1.3 5 0 0 2.2 1.7 3.2 1 0 0 2.6-3.7 1.9-5.7 0 0 1.8-2.4 1.1-3.9 0 0-2.6.1-3.2-1z"
        />
        <Path
          fill="#000"
          stroke="none"
          d="M455 278.6c.2.1 1.5.7 2.3.4l.6-.5-.5-.2c-.3.6-1.7.1-2.1-.1l-.2.4zm-.1 4-.2.5c.1 0 2.7.5 3.9-.6l-.4-.4c-1 .9-3.3.4-3.4.4zm-.7 4.4-.3.4s3 2.1 4.9-.2l-.5-.3c-1.5 1.9-4 .2-4.1 0zm-11.5.6.1.3c.1 0 2.6-1 2.8-2.9h-.3c-.1 1.6-2.5 2.6-2.6 2.6zm1.4 2.3v.3c.2 0 2.5-.2 2.9-1.8h-.3c-.4 1.3-2.5 1.5-2.6 1.5zm.5 2.4v.3c.1 0 2.7.1 3.6-1.3l-.3-.2c-.8 1.3-3.3 1.2-3.3 1.2zm19.7-1.7s1.1 1.2 2.4 1.1a2.3 2.3 0 0 0 1.7-.8l-.4-.4c-.4.5-.8.7-1.3.7-1 0-2-1-2-1l-.4.4z"
        />
      </G>
      <G fill="#964b36" stroke="#000" strokeWidth={0.3}>
        <Path d="M542 299.8a1.1 1.1 0 0 0-.3.3l.4-.3zm9.3-2.3c-.1-.2-.2-.1-.3-.2l-.4-.8h-.3l-.7-1.4a.4.4 0 0 0 0-.3 7.6 7.6 0 0 0 0-.4s-.2 0-.3-.2v-1.6l-.1-.5a2 2 0 0 1-.3-1.1v-1c.1-.4-.1-.6-.1-1l.1-.9v-5.4l-.1-1-.1-.4v-1.6 2.6l-.2-4.3-3.4-1.6s-.3 6.2-.2 7c0 .9.4 6.7.2 7.4l-.5 4.3s-1.6 1.2-2.2 2.4c-.7 1.3-.5 1.7-.7 1.7l1.5-.2-1.1.8a.7.7 0 0 1 .7.1l.2.2.2-.2c.3 0 .5.4.7.3l.4-.2.2-.4c.1-.1.3 0 .4 0h.7c.3 0 .6-.5.9-.7.2-.2.4-.3.7-.3.3 0 .6.3 1 .3.2 0 .3 0 .5-.2l.4-.6.8-.1.4.1h.6l.3.2.2-.4-.1-.4z" />
        <Path d="M544.5 299.7h.6v.2a.2.2 0 0 0 .2 0l.3.2h.3l.4.1c.2.1.4 0 .6-.1.2-.2.3 0 .6.2.1.1.1.1.2 0l.1-.1.3-.1.3-.1.4-.2.4.2a.8.8 0 0 1 .2 0l.7-.5c.3-.2.5 0 .7 0h.3c.1-.1.2 0 .4 0 0-.1 0-.2.2-.3l.7.4c.1.1.7.2.6-.2 0-.4-.4-.1-.5-.4v-.6a.7.7 0 0 0-.3-.4c-.2 0-.2.1-.4 0l-.2-.6-.3.2c-.2 0-.2-.1-.3-.3-.3-.3-.4.2-.7.1-.2 0-.4-.5-.5-.7-.1-.1-.3-.5-.5-.4-.2.1 0 .5 0 .7h-.5c-.2 0-.2 0-.3.2-.2.4-.3.7-.7.6-.1 0-.3-.1-.4 0l-.5.2a1 1 0 0 1-.4 0l-.4-.4a.1.1 0 0 0-.2 0 8.7 8.7 0 0 0-.1-.2c-.2 0-.2 0-.3.3l-.1.5-.3.4-.4.1c-.2 0-.4.3-.4 0-.2-.4.3-1.1-.2-1-.1 0-.2 0-.3.2v.7c-.1.3-.7.8-.6 1 0 .3.4 0 .4 0l.2.4c.2.3.7-.4.7 0m-2.1-2.7v-.2l-.4-.1c-.2 0-.4.3-.5.4-.2.4-.2 1-.6 1h-.5v1s-.2 0-.2.2c-.1.4.2.2.4.2h1l.5-.1c.2 0 .4 0 .5-.2a2.2 2.2 0 0 0 .2-.4v-.4c0-.2.3-.1.3-.4.1-.7-.6-.2-.5-.9" />
      </G>
      <G stroke="#000" strokeWidth={0.5}>
        <Path d="M550.8 277.9c0 .9-.6 1.6-1.4 1.6-.7 0-1.4-.7-1.4-1.6 0-.9.7-1.6 1.4-1.6.8 0 1.4.7 1.4 1.6zm-4.5-2c0 .9-.6 1.6-1.4 1.6s-1.4-.7-1.4-1.6c0-1 .7-1.6 1.4-1.6s1.4.7 1.4 1.6z" />
        <Path d="M548.7 276.5c0 1-.6 1.6-1.4 1.6-.8 0-1.4-.7-1.4-1.6 0-.9.6-1.6 1.4-1.6.8 0 1.4.7 1.4 1.6z" />
        <Path d="M546.4 278c0 .9-.6 1.6-1.4 1.6-.8 0-1.4-.7-1.4-1.6 0-.9.6-1.6 1.4-1.6.8 0 1.4.7 1.4 1.6z" />
        <Path d="M548.5 279.3c0 .8-.6 1.6-1.4 1.6-.7 0-1.4-.7-1.4-1.6 0-1 .7-1.7 1.4-1.7.8 0 1.4.7 1.4 1.6z" />
      </G>
      <Path
        fill="#00a651"
        stroke="#000"
        strokeWidth={0.5}
        d="M549.2 261.5s13.9-19.4 28.8.7c0 0 .1 2-1.3 4.2l-.3-1.7-1 .3-.2-1-1.6-.1.5-2.2-1.7 1.4.2-1.5-2 2 .3-4.3-2.2 3.7.3-2.5-.8 1.1-.4-1.5-.7 1.5-1-.7v1l-1.8-1.5-.6 2-.9-2.2-.2 1.5-.9-1.7-.1 1.9-2.9-1.3.6 1.8-1.3-1 .2 1-1.9-.4.2 1.1-2-.4.3 1-2.7-.3 1 1-.3.6s15-5 16 13.8l-2.7 1.3.8-1.5-.8-.5-2.3-1.7.7-2.4-.8.3-.1-1.4-.4.2-.9-1.3-.2.5-.6-1.7-.7 1.2-.3-2.8-1 1.8-.2-1-.3.6-1.3-1.5-.4 1-.5-.8-.3 1-1.4-1.4v1l-1-.7-.3.5-2.1-1.1-.1 1-1.2-1-.3 1s13.6 7.8 9.4 20.4l-.8 1.6-.2-4.2-1.3 2.2.9-4.9-.9 1-.1-2-1.1 2-.4-2.2-.5.6-.8-3.2-.6 1.3-1-3.6-.8 1.5-.5-3.1-.5 1.9-1.5-2.8-.2 1.1-.9-2.2-.5.7s-2.5-.1-3.3-.7c-.7-.7-2.8 3.7-2.8 3.7l.2-2.6-.9 1.8v-1.8l-1.6 5.3-.4-3.8-.8 3.3-.4-1-.3 1.3-.5-.5-.4 1.5-.8-.6v2l-.8-1-.6 3-.4-1.2v1.3l-.6-.7-.6 3-1-1.3v2.2l.3 1.6-1-.5.4 2.6s-3.9-7.2.8-14.2c4.6-7 10.9-9 10.9-9l-.7-.6v-.6l-3.8 1.9v-1.1l-1 .8-.2-1.2-.6 1.1-.1-.5-1 1.4-.4-2-.6 2.4-.6-1.7-1.3 3.5V270l-1 2.8-.4-3-.7 3.4v-3l-1.2 3-.7-3-.5 3-.8-2.3-.7 3.4-1.2-3-.6 4.5-.7-1.8-.2 3.3-.8-2 .8 4.2-1-1.6.3 2.6-1.6-2.9v3.4l-.8-1.1-.4 1.3s-.3-13 8.6-15.6c8.9-2.5 14.6.8 14.6.8l-3.4-2.8.4-.9h-1.2l.5-1-2.7.1.8-1-2 .3v-.6l-1.3 1 .5-1.2-1.7 1.2-.1-1.7-1 1.4-.4-1.5-4 4 1-4.1-.7.9-.1-1-1.1 1.8-.3-1.2-.5 1.5-.4-1.8-.8 1.8-1-1.6-.3 2.1-.6-1.1-.8 1.6-1-1v1l-2-.9.4 1.5-1.5-1.2-.4 2-.8-1-.7 2.5-.6-2.4-.6 1.9s7.8-20.2 27.6-7c0 0 2.2 2.1 2.7 3.6s.1.2.1.2l-.4-13.9.8 6 .5-2-.1 3 2-4.3s-2.4 7.2-1.5 9.9c0 0 .9-8.4 3.9-9.4l-2.8 6 .9-.1-.6 1.2h.7l-.9 2-.5 1 .5 1 .8-.7z"
      />
      <Path d="m547.1 269.6.4.4s1.3-1.4 3.4.4l.3-.4c-2.5-2.1-4-.4-4-.4zm-.6-6.8v.5l.9-.4-.7 1.2 1.5-.5-1.8 2.3.4.3 2.9-3.7-1.8.6.8-1.3-1.6.6.3-1.9h-.5l-.4 2.3z" />
      <Path d="m543.9 263 .6 1.3-1-.4 2.9 5.2.4-.5-.6 1.5.5.2 1.2-3.2-.4-.3-1 1.3-1.8-3.1.8.3-.8-1.7 1.1.6v-1.9h-.5v1l-1.8-1.1.4.8zm-1.9 6.4.2.5c.8-.3 1.5-.4 2-.2.5.3.7.9.7 1l.5-.2s-.2-.9-1-1.2c-.6-.3-1.4-.3-2.4.1zm2.3 5.4-.5-2.8h.6l.4 2.7zm3.8-.4-.7-2.2.5-.1.7 2zm1.4 1.5-.5-2.1.5-.1.6 2.1z" />
      <Path
        fill="#00a651"
        stroke="#000"
        strokeWidth={0.5}
        d="M442.6 340.2s-2.4-1-3.5-.2c-1 .7-.9 1.9-1.8 1.8 0 0 3.6.8 4.3-.1l1-1.2m.4.7s-1.6 2-1 3.3c.5 1.2 1.7 1.3 1.4 2.2 0 0 1.5-3.3.8-4.3s-1-1.1-1-1.1m-2.8-5.8s-2.5.8-2.8 2c-.2 1.4.6 2.1-.1 2.7 0 0 3.2-1.8 3.1-3v-1.5m1.2.7s1.2-2.3.5-3.4c-.8-1.2-2-1-1.8-2 0 0-1 3.5 0 4.4l1.1 1m-2.2-.9s0-2.6-1-3.2c-1.2-.7-2.2-.1-2.5-1 0 0 .7 3.6 1.8 4l1.5.3m4.4 4.2s2.7-1 3 2c.2 3-.2 2-.2 2s-1.4-3.2-3-3.7l.2-.3z"
      />
      <Path d="m443 341.3.2 2.2h.4l-.3-2.2 1-4.9h-.4l-1 4.9z" />
      <Path d="m440.5 340.6-.1.3c1.3.5 3-1 3.1-1l-.2-.3s-1.7 1.3-2.8 1zm3.4-2.9-6-3 .2-.5 6 3z" />
      <Path d="m439.5 337-.4-.4 1.2-1.2.4.4zm2.1-.6-1.3-2.8.5-.2 1.3 2.8zm1.8 3.4v.6c1.7-.1 2 1 2 1l.6-.2c0-.3-.7-1.5-2.6-1.4z" />
      <Path
        fill="#fff"
        stroke="#000"
        strokeWidth={0.7}
        d="M471.2 341c2-1 2.4-5 2.4-5-.5 1.4-4.2 2.9-4.2 2.9 2.7-1.7 6-9.4 6-9.4-.8 2.7-8 5-12.6 7.6-4.6 2.6-2.2 10-2.2 10-1.3-.9-3.8-4.8-4.3-8.3-.5-3.5-1.8-4.9-5-5.3-3.1-.4-5 3.2-5 3.2l-4.7 2.4 4.8.2s3.4 1.1 3.4 3.8c0 2.6-3 13.3 2 19.3 3.3 4.1 16 6.5 16 6.5"
      />
      <Path
        fill="#fff"
        stroke="#000"
        strokeWidth={0.7}
        d="M461.9 349.3s1-4.8 4.1-4.6c3.1.2 4-3.6 5.9-4.1 1.9-.6 11.5-3.2 12.5-7.8 0 0-.9 7.6-9.7 11.4 0 0 7.1-2.3 8-3.9 0 0-3.2 6.8-10.9 7.9 0 0 7.2-.6 8.2-2.5 0 0-3.2 4.2-8.5 4.8 0 0 5 2 6.2.3 0 0-2.7 3.2-6 3.4l1 .2s-3.2 3.8-6.7 1.3-3.6.6-3.6.6"
      />
      <Path
        fill="#fff"
        stroke="#000"
        strokeWidth={0.7}
        d="M469 356.5s4.1 6.8 4.5 10.4c0 0 7.8 8.5 10.7 9 0 0-1.4.6-4-1.5 0 0 2.2 2.2 2.6 2.3.4 0-1.7-.2-2-.8a6 6 0 0 0 1.4 1.5l-.5-.2s-1-.1-1.6-.5c-.5-.4-.1 1-.1 1s-1.2-.3-1.6-.7c-.4-.4.1.9.1.9l-1-.3-.8.5s0 .5-.5 0c-.5-.3-1.4 0-1.4 0s-.6.6-1 .2c-.3-.4-1.5 1.6-1.5 1.6l-5-12.3"
      />
      <Path d="m473.9 378.7-6.4-12.2.6-.4 6.4 12.3zm5.6-.8-11-12.3.6-.5 11 12.3zm2.5-1L469.5 365l.5-.5 12.5 11.7z" />
      <G transform="translate(-96.9 97.5) scale(.66486)">
        <Path d="M823.4 360.8s-1.2-2.2-2.3-1.3c-1 .8-1.6 1-1.8.9 0 0 1 0 1.7-.5.6-.6 1.6-.3 2.4 1zm-6.6-1 .7 1.4-.8 2.3.6.2.7-2.5-.7-1.6-.5.2z" />
        <Path d="M823.2 360.5s-1 1-2.2.8l-1.3-.3h1.8c.7 0 1.6-.3 1.7-.5z" />
        <Path d="M822.9 360.7s-1.2-1.2-2-.8c0 0 1.4-.5 2.2.7l-.2.1z" />
        <Path d="M822.7 360.5s-1.3.9-2.7 0l-.1-.2h.2s1.7.7 2.6.2z" />
        <Circle cx={821.6} cy={360.3} r={0.4} />
      </G>
      <Path d="M450 359.6s-.7 1.2-.3 2c.3.7 2 1 2.1 2 .2 1 .8 1 1.5 1l.9-.3s-3.1-1.6-4-4.3l-.2-.4z" />
      <G fill="#964b36" stroke="#000" strokeWidth={0.5}>
        <Path
          strokeWidth={0.3}
          d="M549.4 334.8s5.6-7.4 10.6-5.5c5 2 8.1 3 8.1 3s.1 4.9-2.5 4.9-5.2-5-7.6-3.5a13 13 0 0 0-4.5 4.2c-.1.7-6.3.8-4.1-3.1z"
        />
        <Path d="M528.2 370.4s-1.6 1.6-.9 2c.7.4 2.1 0 2.1-.6s-1-1.6-1.2-1.4z" />
        <Path d="M527 372s-3-1.7-5.2 2.2c-2.3 3.8-4.1 10.1-5.4 11-1.3.8 12.8-6.2 13-9.2 0 0 .9-3.8-.6-3.7-1.5 0-1.6.2-1.9-.4z" />
        <Path
          strokeWidth={0.3}
          d="M527.3 372.4s-3 .7-3.6 4.9c-.6 4.2-4.7 6.3-5 6.5m49.4-51.6s-4.4 1.6-3.7 4.7"
        />
      </G>
      <Path
        fill="#fff200"
        stroke="#000"
        strokeWidth={0.3}
        d="M533.7 341.3s.2-10.6 8.9-10.2c1.6.2.8 2.1.8 2.1s2-1.3 2.8.8c0 0 2.7-1.2 3 1.5 0 0 3-.4 2.6 2 0 0 2-.5 2 1.2 0 0 2.3-.9 2 1.5 0 0 2.6-1.7 2.3 1.4 0 0 2.6-1.9 3.5 1.2 1 3.2-2.6 9.8-6.1 11.5"
      />
      <Path d="M557.9 342s1.1 8.2-3.5 11.3l.1.2c4.9-3 3.7-11.5 3.7-11.6h-.3zm-5.7 9 .2.2c3-2.9 3.7-10.6 3.7-11h-.3s-.7 8-3.6 10.8zm-2.7-1.9h.3a26 26 0 0 1 4.1-10.3l-.2-.1s-3.8 5.5-4.2 10.4zm-2.2-1.4h.3c.5-5.7 4.4-10 4.4-10.1l-.2-.2s-4 4.5-4.5 10.3zm-3-2h.3c.3-6.7 4.8-10 4.8-10l-.2-.3s-4.6 3.4-5 10.4zm-2.8-1.6h.3c-.2-6.2 4.5-10 4.6-10l-.2-.2s-5 3.8-4.7 10.2zm-5-2.3h.3a10.2 10.2 0 0 1 6.8-8.4v-.3a10.5 10.5 0 0 0-7.1 8.7z" />
      <Path
        fill="#00a651"
        stroke="#000"
        strokeWidth={0.3}
        d="M528.6 354.2s-1.5-9.9 4.4-13c0 0 1.1-.2 1.7 1.2 0 0 3.1-1.3 3.2 1.3 0 0 1.6-1.2 2 .5 0 0 3.3-.7 2.7 1.8 0 0 2.8-.8 2.5 1.6 0 0 2.8-1 2.4 1 0 0 3-.6 2.2 1.8 0 0 3.7-.4 2.6 2.1 0 0 2.7-.7 2 1.4 0 0 3.6.7 2 3a24.1 24.1 0 0 1-9.8 7"
      />
      <Path
        fill="#00a651"
        stroke="#000"
        strokeWidth={0.3}
        d="M525.4 364.1s-2.4-8.2 2.2-10.3c0 0 .9-.2 1 .6 0 0 1-1.3 1.8-.1 0 0 2.3-1.1 2.9.6 0 0 1.5-1.3 2.3.6 0 0 1.5-.6 1.5 1 0 0 2-1 2 1 0 0 2-.8 1.5 1.2 0 0 3 .5 2.1 1.9 0 0 2.7.7 1.7 1.8 0 0 2.8-.3 1.3 1.6 0 0 2.2-.7 1 1.7-1.3 2.4-5.2 5-8 5.4"
      />
      <Path
        fill="#00a651"
        stroke="#000"
        strokeWidth={0.3}
        d="M528.3 370.6s-5.1-5-2.7-6.4c0 0 1 .3 1.5 1.4 0 0 1.2-1.8 2 0 0 0 1.8-.6 1.8.7l1.4 1s1.7-.1 1.4 1c0 0 1.9-.3 1.8.7 0 0 1.6.1 1.5 1.2 0 0 2.8.5 1.5 1.9 0 0-4.8 1-8.3-.4 0 0-1.7-.6-1.9-1.1z"
      />
      <Path d="M545.9 362.4v.3a36 36 0 0 0 8.6-8.7l-.3-.2c0 .1-5.4 7.5-8.3 8.6zm-1.8-1.3.2.3c2.6-1.5 7.9-8.5 8-8.8l-.1-.2c-.1.1-5.5 7.2-8 8.7zm-1.5-.6.2.2a48 48 0 0 0 7-10.3l-.2-.1s-4.2 7.9-7 10.2zm-1.3-1.8h.3c.5-3.8 6-9.9 6-10l-.3-.1c-.2.2-5.5 6.2-6 10.1zm-10.9-4.7h.3c-.4-5.5 4.1-11.5 4.2-11.5l-.3-.2s-4.7 6.2-4.2 11.7zm2.9.5h.3c-.8-4.4 4.4-10.6 4.4-10.7l-.2-.2c-.2.3-5.3 6.4-4.5 10.9zm4.4 1.6h.3c-.2-5 4.6-10 4.7-10l-.2-.3c0 .1-5 5.2-4.8 10.3zm-10.5 9h.3c-1.8-4.7 1.2-10.6 1.3-10.6l-.3-.2s-3.1 6.1-1.3 10.9zm2 .4.3-.1c-1.6-4.7 1-11 1-11l-.2-.2s-2.7 6.5-1.1 11.3zm8.3 4.7v.2c5-1.7 8.3-6.3 8.3-6.3l-.3-.2s-3.2 4.5-8 6.3zm-1-1.1v.3c4-1.8 7.7-6.8 7.7-6.8l-.2-.2s-3.7 5-7.5 6.7zm-1-.4.2.3c3-2.3 7-8 7-8l-.2-.2s-4 5.7-7 7.9zm-5-2.9h.4a21 21 0 0 1 2.5-10.9l-.3-.1s-3.2 6-2.5 11zm2.2 1.4.2.2c3.2-2.9 4.3-10.6 4.3-11h-.3s-1 8-4.2 10.8zm2.2.8.2.3a17 17 0 0 0 5.7-9.5h-.3s-1.2 6-5.6 9.3zm.5-13.4v.9l-3.4 11 .3.1 3.4-11c-.5-5.4 4.2-11.3 4.3-11.3l-.3-.2s-4.3 5.3-4.3 10.5z" />
      <Path d="M539 357.3c0 .2-1.1 7.7-5.2 10.5l.2.3c4.2-2.9 5.2-10.3 5.2-10.7 1.8-2.1 6-9.7 6-9.7l-.2-.2s-4.2 7.6-6 9.8zm-12 8.3c0 .1.6 4 1.4 5.2l.3-.1c-.8-1.3-1.5-5.1-1.5-5.2l-.3.1zm1.9 0-.1 5.3h.3v-5.3h-.2z" />
      <Path d="m529 371 .3.1c1.3-2.8 1.7-4.8 1.7-4.8h-.3s-.4 1.9-1.7 4.7zm.3.1.2.3a6.6 6.6 0 0 0 3-4h-.3s-.6 2.4-2.9 3.7zm.5.2v.3c2.4-.2 4-3.1 4-3.3h-.2s-1.6 2.8-3.8 3z" />
      <Path d="M530 371.5v.3c3.9-.3 5.6-2.6 5.6-2.7l-.2-.1s-1.7 2.2-5.4 2.5z" />
      <Path d="M530.3 371.5v.3c.1 0 5 1.1 6.7-1.4l-.3-.2c-1.5 2.4-6.4 1.4-6.4 1.3z" />
      <Path
        fill="none"
        stroke="#000"
        strokeWidth={2.8}
        d="M420.9 193.2v136.4c0 44.6 80.6 71 80.6 71s80.5-26.4 80.5-71V193.2z"
      />
    </G>
    <Path fill="#012169" d="M0 0h320v240H0z" />
    <Path
      fill="#FFF"
      d="m37.5 0 122 90.5L281 0h39v31l-120 89.5 120 89V240h-40l-120-89.5L40.5 240H0v-30l119.5-89L0 32V0z"
    />
    <Path
      fill="#C8102E"
      d="M212 140.5 320 220v20l-135.5-99.5zm-92 10 3 17.5-96 72H0zM320 0v1.5l-124.5 94 1-22L295 0zM0 0l119.5 88h-30L0 21z"
    />
    <Path fill="#FFF" d="M120.5 0v240h80V0zM0 80v80h320V80z" />
    <Path fill="#C8102E" d="M0 96.5v48h320v-48zM136.5 0v240h48V0z" />
  </Svg>
);
export default SvgFj;
