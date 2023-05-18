import * as React from "react";
import { SVGProps } from "react";

const Headshot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={375}
    height={375}
    viewBox="0 0 375 375"
    {...props}
  >
    <path fill="#fff" d="M-37.5-37.5h450v450h-450z" />
    <path fill="#fff" d="M-37.5-37.5h450v450h-450z" />
    <path fill="#fff" d="M-37.5-37.5h450v450h-450z" />
    <image
      width={1139}
      height={645}
      transform="matrix(.60316 0 0 .60349 -170.174 0)"
    />
  </svg>
);
export default Headshot;