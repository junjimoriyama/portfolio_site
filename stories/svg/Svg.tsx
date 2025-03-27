import React from "react";

// 地球
export const EarthSvg = () => {
  return (
    <svg
      className="earth_svg"
      data-name="レイヤー_1"
      xmlns="http://www.w3.org/2000/svg"
      width="1280"
      height="229.5"
      version="1.1"
      viewBox="0 0 1280 229.5"
    >
      <path
        className="earth_path"
        d="M.6,230C172,97.7,391.3,17.4,631,15.1c242.9-2.3,474,82.3,649,214.4"
        fill="#c0f2ff"
      />
      <path
        className="earth_path"
        d="M779.6,24.4s13.1,72.7,27.2,77,40.4-4.3,55.3,0,42,90.4,74,99.6,111.7-35.8,125.2-35.6,20.1,45.7,72.6,48.9c1.4,0,97.4-19.3,97.4-19.3,0,0-115.4-78.2-238.7-119-155.7-51.5-213.1-51.5-213.1-51.5Z"
        fill="#80b9ad"
      />
      <path
        className="earth_path"
        d="M816.9,229.5s-42.9-77.8-85.9-86-70.7-5.9-91.1-1.8-67.5,21.9-84.8,26-14.2,21.9-27,28.8-69.9,10.5-77.7,17.8-9.6,15.2-9.6,15.2h376Z"
        fill="#80b9ad"
      />
      <path
        className="earth_path"
        d="M612.2,15.6s-119.6,2-236.8,31.4-231,90.4-231,90.4c0,0,55.1,39.8,72.2,39.8s112.4,4.3,134.6-8.2,6.5-8,17.5-33.6c10.9-25.6,133.6-11.1,156.6-15.4,22.9-4.3,0-28.2,10.3-45.6s47.7-28.9,75-28.4,1.6-30.4,1.6-30.4Z"
        fill="#80b9ad"
      />
    </svg>
  );
};
// 海王星
export const NeptuneSvg = () => {
  return (
    <svg
      id="neptune_svg"
      className="neptune_svg"
      data-name="neptune_svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 234.3 234.3"
    >
      <defs>
        <clipPath id="clippath">
          <ellipse cx="117.2" cy="117.2" rx="117.2" ry="117.2" fill="none" />
        </clipPath>
        <linearGradient
          id="gradation_neptune_1"
          data-name="gradation_neptune_1"
          x1="0"
          y1="117.2"
          x2="234.3"
          y2="117.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#9dd8f2" />
          <stop offset=".4" stopColor="#6ac4eb" />
          <stop offset=".8" stopColor="#3bb2e4" />
          <stop offset="1" stopColor="#29abe2" />
        </linearGradient>
        <linearGradient
          id="gradation_neptune_2"
          data-name="gradation_neptune_2"
          x1="56.1"
          y1="15"
          x2="176.5"
          y2="15"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#9dd8f2" />
          <stop offset=".5" stopColor="#49a1d5" />
          <stop offset=".8" stopColor="#147ec3" />
          <stop offset="1" stopColor="#0071bc" />
        </linearGradient>
        <linearGradient
          id="gradation_neptune_3"
          data-name="gradation_neptune_3"
          x1="0"
          y1="95.3"
          x2="234.3"
          y2="95.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#36bdff" />
          <stop offset="1" stopColor="#01a3ff" />
        </linearGradient>
        <linearGradient
          id="gradation_neptune_4"
          data-name="gradation_neptune_4"
          x1="11.3"
          y1="198.6"
          x2="225.1"
          y2="198.6"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#9dd8f2" />
          <stop offset=".5" stopColor="#49a1d5" />
          <stop offset=".8" stopColor="#147ec3" />
          <stop offset="1" stopColor="#0071bc" />
        </linearGradient>
      </defs>
      <g clipPath="url(#clippath)">
        <g>
          <path
            d="M212.4,50.1c-21.2,16.5-56.3,27.3-96.1,27.3s-74-10.4-95.2-26.9c8.2-11.8,18.6-22.3,30.5-30.4,1.5-1,2.9-1.9,4.5-2.9C73.9,6.3,94,0,116.3,0s41.5,5.7,58.7,15.8c14.8,8.6,27.6,20.3,37.4,34.3Z"
            fill="#fff"
          />
          <path
            d="M234.3,117.2c0,64.7-52.5,117.2-117.2,117.2S0,181.9,0,117.2,20.5,41.1,51.7,20c1.5-1,2.9-1.9,4.5-2.9C73.9,6.3,94.8,0,117.2,0s41.5,5.7,58.7,15.8c35,20.3,58.5,58.1,58.5,101.4Z"
            fill="url(#gradation_neptune_1)"
          />
          <path
            d="M176.5,16.1c-17.8,9.1-39.1,14-61.6,14s-41.6-4.7-58.8-12.9C73.9,6.3,95.1,0,117.5,0s41.7,6.1,59,16.1Z"
            fill="url(#gradation_neptune_2)"
          />
          <path
            d="M234.3,117.5c0,.5,0,1.1,0,1.6-31.7,13.3-72.6,21.3-117.2,21.3S31.7,132.4,0,119.1C0,118.6,0,118,0,117.5,0,92.5,7.7,69.2,21,50.2c21.2,16.5,56.4,27.4,96.2,27.4s74.9-10.8,96.1-27.3c13.3,19,21.1,42.1,21.1,67.1Z"
            fill="url(#gradation_neptune_3)"
          />
          <path
            d="M225.1,162.8c-18,41.6-58.3,71.5-106.5,71.5S29.9,207,11.3,166.8c27.8,19.9,65.6,31.4,106.1,31.4s79.5-14,107.7-35.4Z"
            fill="url(#gradation_neptune_4)"
          />
          <circle cx="40.6" cy="87.5" r="7.9" fill="#fff" />
          <circle cx="57.8" cy="107.7" r="3.9" fill="#fff" />
          <circle cx="175" cy="163.7" r="10.1" fill="#fff" />
          <circle cx="183.7" cy="196.4" r="5.1" fill="#fff" />
        </g>
      </g>
    </svg>
  );
};
// 土星
export const SaturnSvg = () => {
  return (
    <svg
      className="saturn_svg"
      width="300"
      height="300"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      viewBox="0 0 300 300"
    >
      <defs>
        <linearGradient
          id="gradation_saturn"
          data-name="gradation_saturn 722"
          x1="3.9"
          y1="150.4"
          x2="290.3"
          y2="150.4"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ffbb94" />
          <stop offset="0" stopColor="#fdbd83" />
          <stop offset=".4" stopColor="#dca676" />
          <stop offset="1" stopColor="#99775c" />
        </linearGradient>
      </defs>
      <g>
        <g id="_レイヤー_2" data-name="レイヤー_2">
          <g>
            <g>
              <g>
                <path
                  d="M231.6,152.9c0,44.5-36.1,80.5-80.5,80.5-4.7,0-9.4-.4-13.9-1.2,37.9-6.6,66.6-39.6,66.7-79.3,0-39.7-28.7-72.7-66.6-79.3,4.5-.8,9.1-1.2,13.9-1.2,44.5,0,80.5,36.1,80.5,80.5Z"
                  fill="#b28866"
                />
                <path
                  d="M203.8,152.9c0,39.7-28.8,72.7-66.7,79.3-37.9-6.6-66.6-39.6-66.6-79.3,0-39.7,28.8-72.7,66.7-79.3,37.8,6.6,66.6,39.6,66.6,79.3Z"
                  fill="#dbb289"
                />
                <circle cx="125.7" cy="114.7" r="5.8" fill="#b28866" />
                <circle cx="162.8" cy="151.8" r="8.9" fill="#b28866" />
                <circle cx="125.7" cy="163.5" r="5.1" fill="#b28866" />
                <circle cx="153.8" cy="205.8" r="3.3" fill="#b28866" />
                <circle cx="96.3" cy="134.9" r="5.8" fill="#b28866" />
                <circle cx="160.4" cy="92.8" r="3.3" fill="#b28866" />
                <circle cx="107.1" cy="196.9" r="8.9" fill="#b28866" />
                <circle
                  cx="199.3"
                  cy="126.3"
                  r="5.8"
                  fill="#b28866"
                  stroke="#dbb289"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                />
                <circle
                  cx="191.8"
                  cy="195.9"
                  r="9.9"
                  fill="#b28866"
                  stroke="#dbb289"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                />
                <ellipse
                  cx="94.1"
                  cy="96"
                  rx="8.3"
                  ry="5.8"
                  transform="translate(-40.3 94.6) rotate(-45)"
                  fill="#b28866"
                  stroke="#dbb289"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                />
                <ellipse
                  cx="75.9"
                  cy="176.2"
                  rx="6.1"
                  ry="10"
                  transform="translate(-53.2 34.2) rotate(-19)"
                  fill="#b28866"
                  stroke="#dbb289"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                />
                <circle
                  cx="140.7"
                  cy="227.6"
                  r="5.8"
                  fill="#b28866"
                  stroke="#dbb289"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                />
                <ellipse
                  cx="209.1"
                  cy="100.8"
                  rx="5.8"
                  ry="9.2"
                  transform="translate(-16.6 155.2) rotate(-39.3)"
                  fill="#b28866"
                />
              </g>
              <ellipse
                cx="220"
                cy="186"
                rx="9.2"
                ry="5.8"
                transform="translate(-42.6 304.6) rotate(-64.5)"
                fill="#b28866"
              />
            </g>
            <path
              d="M216.8,104.9c1.4,2.2,3.2,4.6,4.4,7,10.1-1,16.7-1.2,17.7,1.7,1,2.9-3.2,7.4-11.4,12.8-15,10-43.1,23-76.3,34.7-29.5,10.4-56.5,17.4-74.7,20-13.5,1.9-22.2,1.4-23.4-2.1s5.2-9.1,17.3-16.2c-.3-4.3-.3-3.7-.4-7.8C28.2,174.1,1.1,192.1,4.1,200.5c3,8.5,35,5.6,79.8-5.8,21.4-5.4,45.7-12.8,71.2-21.8,28.3-10,54.2-20.5,75.6-30.6,38.4-18.1,62.3-34.4,59.4-42.5-2.8-8-32.3-4.8-73.3,5.1Z"
              fill="url(#gradation_saturn)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
// 火星
export const MarseSvg = () => {
  return (
    <svg
      className="mars_svg"
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      viewBox="0 0 200 200"
    >
      <defs>
        <radialGradient
          id="gradation_mars"
          data-name="gradation_mars"
          cx="100"
          cy="100"
          fx="100"
          fy="100"
          r="89.1"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#db7d00" />
          <stop offset=".3" stopColor="#db7a00" />
          <stop offset=".6" stopColor="#dd7100" />
          <stop offset=".7" stopColor="#e06300" />
          <stop offset=".9" stopColor="#e44e00" />
          <stop offset="1" stopColor="#e83c00" />
        </radialGradient>
      </defs>
      <g>
        <g id="_レイヤー_2" data-name="レイヤー_2">
          <g id="RUiTz0">
            <image
              id="RUiTz0-2"
              data-name="RUiTz0"
              width="225"
              height="225"
              transform="translate(294.2 13.5)"
              xmlnsXlink="mars-1.png"
            />
          </g>
          <circle cx="-36.4" cy="447.1" r="120.8" fill="#99775c" />
          <circle cx="100" cy="100" r="89.1" fill="url(#gradation_mars)" />
          <path
            d="M104.3,28.6c-5.4-6.5,15.8-1.4,15.8-1.4,0,0,13,5,14.2,10.3s4.5,15.4,0,18.6-21.6,12.2-21,3.3-9.6-12.8-11.6-16.1,1.1-4.5,4.8-4.9,3.3-3.3-2.1-9.8Z"
            fill="#d83e1a"
          />
          <path
            d="M188.9,100c0,49.1-39.8,88.9-88.9,88.9s-25-9.8-5.5-33.2c9.3-11.2,37.3,2.1,48.5-7.4s5.1-33.4,11.5-37.2c15-9,34.4-25.2,34.4-11.1Z"
            fill="#d83e1a"
          />
          <path
            d="M37,163.1C2.2,128.4,2.2,72.1,37,37.4c13.9-13.9,51.7-25.7,43.6-2.5s-20.2,22.1-30.8,31.9,25.7,24.7,24.2,39.4-9.3,23.8-20.5,24.7c-17.4,1.4-6.6,42.2-16.5,32.2Z"
            fill="#d83e1a"
          />
          <path
            d="M94.9,100.2c4.1-8.6,37.7-1.9,39.7,6.5s1.5,26.4-10.2,28.1-22.2,1.5-17.8-7.9-6.9-12.2-11.7-14.7-4.1-3.4,0-12Z"
            fill="#d83e1a"
          />
          <path
            d="M81.7,60.1s5.8-.9,9.9,3.2,3.9,5.4-2.7,9.5-15.4,9.5-16.4,0,9.3-12.7,9.3-12.7Z"
            fill="#d83e1a"
          />
          <path
            d="M155.9,74.7s4.1-.8,7,2.7c2.9,3.4,2.7,4.5-1.9,8s-10.9,8-11.6,0,6.5-10.6,6.5-10.6Z"
            fill="#d83e1a"
          />
        </g>
      </g>
    </svg>
  );
};
// ロケット
export const RocketSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48.9"
      height="100"
      version="1.1"
      viewBox="0 0 48.9 100"
    >
      <g>
        <g id="rocket_svg" className="rocket_svg" data-name="rocket_svg">
          <g>
            <path
              className="rocket_fire"
              d="M16.3,70.9l11.8,2.2s5,7.6,1,13.7l-1.7-1.1s-1.1,7.8-3,7.7l-2.1-2.7s-2.9,6.3-4.3,6.1-3.1-7.5-3.1-7.5c0,0-1.5,1.6-2.6,1.7s-1.5-3.4-.2-8c0,0-1.8,1.1-2.1.9,0,0-1-10.3,6.3-12.9Z"
              fill="#f9a858"
              // fill="#f9a858"
            />
            <path
              className="rocket_fire"
              d="M25.1,73.7s3.3,9.8.6,8.6c-1.8-.8-1.7-1.1-2.3-1s-2,8.3-4.4,7.6c-2.3-.8-1.7-8.2-1.6-8.8s-.4.6-2.3,0,3.4-7.5,3.4-7.5l6.7,1.1Z"
              fill="#f9ea64"
            />
          </g>
          <path
            d="M17.1,61.4"
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
          />
          <path
            d="M38.1,45.2s6.9,10,7,10.9-3.2,22-4.5,22.2-6.1-13.8-6.1-13.8l3.6-19.2Z"
            fill="#3f3f3f"
          />
          <path
            d="M17,41.1s-10.1,6.7-10.5,7.4-5.2,21.6-4.1,22.2c1.1.7,10.8-10.5,10.8-10.5l3.8-19.2Z"
            fill="#3f3f3f"
          />
          <path
            d="M12.5,63.7h21.7v2.1c0,.2-.2.4-.4.4H12.9c-.2,0-.4-.2-.4-.4v-2.1h0Z"
            transform="translate(12.2 -3.2) rotate(10.5)"
            fill="#9e9e9e"
          />
          <path
            d="M15.4,66.2h14.4v5.3c0,.3-.2.5-.5.5h-13.5c-.3,0-.5-.2-.5-.5v-5.3h0Z"
            transform="translate(13 -3) rotate(10.5)"
            fill="#565656"
          />
          <path
            d="M12.9,61.8l21.3,3.9s13.7-61,.4-63.4C21.2,0,12.9,61.8,12.9,61.8Z"
            fill="#e5e3e3"
          />
          <circle cx="31.7" cy="19.6" r="4.5" fill="#80b9ad" />
          <rect
            x="22.9"
            y="44.7"
            width="2.7"
            height="31.1"
            rx=".5"
            ry=".5"
            transform="translate(11.4 -3.4) rotate(10.5)"
            fill="#3f3f3f"
          />
          <ellipse
            cx="26.8"
            cy="45.7"
            rx="3.4"
            ry="2"
            transform="translate(-22.9 63.7) rotate(-79.5)"
            fill="#3f3f3f"
          />
          <path
            d="M25.4,10.9l14.8,2.7s-.3-10.4-5.6-11.3-9.2,8.6-9.2,8.6Z"
            fill="#3f3f3f"
          />
        </g>
      </g>
    </svg>
  );
};
// UFO
export const UFOSvg = () => {
  return (
    <svg
      id="ufo_svg"
      className="ufo_svg"
      data-name="ufo_svg"
      width="60"
      height="60"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 100 100"
    >
      <g>
        <path
          d="M27.6,37.3s4.1,9.8,23.9,18.7c19.8,8.9,31.3,7.5,31.3,7.5,0,0,11.7-31.3-13.4-42.9-25.2-11.7-41.8,16.7-41.8,16.7Z"
          fill="#e5e3e3"
        />
        <g>
          <path
            d="M68.6,24.7s-.9.2-2.2-.4-2.2-1.7-2.2-1.7l4.9-6.4,1.8.8-2.3,7.6Z"
            fill="#3f3f3f"
          />
          <circle cx="71.2" cy="14.2" r="3.1" fill="#3f3f3f" />
        </g>
        <path
          d="M27.6,37.3s-15.1-3.5-20.4,7c0,0,6.6,15.6,36.7,29.9,30.2,14.3,46.2,9.7,46.2,9.7,0,0,1.3-7.7-.6-12.7s-6.6-7.8-6.6-7.8c0,0-10.5,1.4-31.3-7.5-20.9-8.9-23.9-18.7-23.9-18.7"
          fill="#565656"
        />
        <path
          className="ufo_light"
          d="M15.4,55.2s-1.9,5.5,4.7,9.9,12.5,3.2,12.5,3.2c0,0-6-4-9.5-6.7s-7.7-6.4-7.7-6.4Z"
          fill="#b3e2a7"
        />
        <path
          className="ufo_light"
          d="M32.6,68.3s-1.7,7.7,8.3,12.2c10,4.5,14.7-1.3,14.7-1.3,0,0-7.8-3.1-11.7-4.9-3.9-1.8-11.3-6-11.3-6Z"
          fill="#b3e2a7"
        />
        <circle cx="58.7" cy="43.1" r="10.5" fill="#538392" />
        <path
          d="M85.2,42.5s-11.1-5.1-12.8,8c-1.8,13,11.5,10,11.5,10,0,0,1.5-4.8,1.7-8.9.2-4.1-.4-9-.4-9Z"
          fill="#538392"
        />
        <path
          d="M42.6,22.3s11,5.4,2,15c-9,9.6-15-2.6-15-2.6,0,0,2.8-4.2,5.8-6.9s7.2-5.4,7.2-5.4Z"
          fill="#538392"
        />
        <path
          className="ufo_light"
          d="M76.7,84.3s-3.2,5.1-10.8,2.8c-7.5-2.4-10.3-7.9-10.3-7.9,0,0,6.8,2.1,11.1,3.2,4.3,1.1,9.9,1.9,9.9,1.9Z"
          fill="#b3e2a7"
        />
      </g>
    </svg>
  );
};
// 宇宙飛行士
export const AstronautSvg = () => {
  return (
    <svg
      className="astronaut_Svg"
      xmlns="http://www.w3.org/2000/svg"
      width="131.1"
      height="129.1"
      version="1.1"
      viewBox="0 0 131.1 129.1"
    >
      <g>
        <path
          d="M2.1,79"
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth=".2"
        />
      </g>
      <g>
        <g>
          <path
            d="M57.1,93.3s-1.1,10.1-.5,11.9,8.3,3.2,10.6,3.3,5.9-.6,6.2-3.9c.3-3.3-6.6-3.1-6.9-3.7s1.4-5.1,1.4-5.1l-10.8-2.6Z"
            fill="#3f3f3f"
          />
          <path
            d="M46.1,71.6s2.3,4.2,4.4,5.8c2.1,1.6,10.3,3.5,12.1,4.7s10.7,5.1,5,14.9c0,0-18.9-5.5-23.4-6.8s-7.2-4.1-9.1-9.2,2-10.3,2-10.3c0,0,3.7,3.8,4.8,3.6s4.3-2.7,4.3-2.7Z"
            fill="#fff"
          />
          <g>
            <path
              d="M46,72.2l18.1-13.6s6.8,3.4,11.4,7.1c4.6,3.7,8.3,11.5,8.3,11.5,0,.2.3.4.6.7l-9.4,8.3c-.3-.4-.6-.9-.9-1.4-1.7-2.6-3.8-5.9-4.8-6.1-1.6-.3-5.1,4.2-5.1,4.2-1.6-1.1-12-4.6-13.7-5.4s-4.5-5.4-4.5-5.4"
              fill="#3f3f3f"
            />
            <path
              d="M74.2,85.2c.6.8,1,1.6,1.4,1.9,1.6,1.3,11.1,10.6,15.6,4.6,2.2-3.1-1.2-4.7-.8-5.3s1.8.5,1.9-.9-6.5-6.4-8.6-8.5c0,0-1.2,2.6-4,5.2s-5.4,3-5.4,3Z"
              fill="#ccc"
            />
          </g>
          <g>
            <path
              d="M66,57.2s-6.4,4.7-12.5,9.2c-5.6,4.2-10.9,8.2-11.8,8.1-1.8-.2-8.3-6.2-8.2-10.3s17.8-16.9,22.1-17.5c4.3-.7,10.4,10.5,10.4,10.5Z"
              fill="#fff"
            />
            <path
              d="M37,70.9s20.6-15.5,22.6-17.2,3.7-.8,3.7-.8c0,0,1,1.3,1.3,1.9s1.3,2.4,1.3,2.4c0,0-20.2,16.3-24.3,17.3-1.7-.3-3.8-2.6-4.8-3.6Z"
              fill="#e6e6e6"
            />
          </g>
          <path
            d="M40.3,63.5"
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth=".3"
          />
          <g>
            <ellipse cx="75.2" cy="41.4" rx="20.3" ry="20.9" fill="#3f3f3f" />
            <circle cx="78" cy="43.2" r="19.6" fill="#fff" />
          </g>
          <g>
            <ellipse
              cx="64.6"
              cy="30.6"
              rx="8.5"
              ry="7.8"
              transform="translate(1.4 64.1) rotate(-53.3)"
              fill="#b3b3b3"
            />
            <path
              d="M58.3,25.9c2.7-3.6,7.2-4.7,10-2.6s2.9,6.7.2,10.2-7.1,4.8-9.9,2.7-3-6.8-.3-10.3Z"
              fill="#3f3f3f"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

type AlienProps = {
  variant: "deepGreen" | "green" | "lightgreen";
};

// 宇宙人
export const AlienSvg = ({ variant }: AlienProps) => {
  let bodyColor;

  switch (variant) {
    case "deepGreen":
      bodyColor = "#538392";
      break;
    case "green":
      bodyColor = "#80b9ad";
      break;
    case "lightgreen":
      bodyColor = "#b3e2a7";
      break
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="alien_svg"
      width="100"
      height="100"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      viewBox="0 0 50 50"
    >
      <g>
        <path
          className="alien_path"
          d="M24.9,25.7c.2,0,6.8,0,8.8-9.2,0,0,1.1-11.4-8.8-11.4s-8.6,11.5-8.6,11.5c0,0,1.1,7.7,8.6,9.2Z"
          fill={bodyColor}
        />
        <path
          className="alien_path"
          d="M29.6,44.7c-1.5,0-1.9-3-1.9-3-.5-1.9.7-12.9.9-13.4.2-.4.9,1.9,1.2,3.5.2,1.6-1.1,2.8-.6,3,.5.2.6-.3.9-.2.3.1-.6,1.8,0,1.9.5,0,1.6-3.9,1.5-5.7,0-1.9-2.5-6.5-3.1-6.8-.5-.2-2.6.6-3.5,1-.8-.4-2.9-1.2-3.5-1-.7.3-3.1,4.9-3.1,6.8,0,1.9,1,5.8,1.5,5.7.5,0-.3-1.8,0-1.9.3-.1.4.4.9.2s-.8-1.4-.6-3,1-4,1.2-3.5c.2.4,1.4,11.5.9,13.4,0,0-.4,3-1.9,3s-.8,1.1-.1,1.4c.7.3,3.8.5,4-2.2.2-2.7-.2-8,.2-8.5.4-.6.4-.6.4-.6,0,0,0,0,.5.6.4.6,0,5.9.2,8.5.2,2.7,3.3,2.4,4,2.2s1.4-1.3-.1-1.4Z"
          fill={bodyColor}
        />
        <g>
          <ellipse
            cx="29.2"
            cy="15.2"
            rx="3.6"
            ry="2.6"
            transform="translate(2.1 33.8) rotate(-61.9)"
            fill="#4d4d4d"
          />
          <ellipse
            cx="27.5"
            cy="15.6"
            rx="1.1"
            ry=".7"
            transform="translate(2.1 34.4) rotate(-66)"
            fill="#fff"
          />
        </g>
        <g>
          <ellipse
            cx="20.8"
            cy="15.2"
            rx="2.6"
            ry="3.6"
            transform="translate(-3.5 6.7) rotate(-16.9)"
            fill="#4d4d4d"
          />
          <ellipse
            cx="22.5"
            cy="15.3"
            rx=".7"
            ry="1.1"
            transform="translate(-3.1 6.1) rotate(-14.4)"
            fill="#fff"
          />
        </g>
        <ellipse
          cx="25.8"
          cy="21.2"
          rx=".5"
          ry=".2"
          transform="translate(-5.4 32.9) rotate(-60)"
        />
        <path d="M26,22.7c0,.6-.5,1.1-1,1.1s-1-.5-1-1.1h2Z" fill="#efb4cf" />
        <path
          d="M21.1,24.2s2.6,1.6,3.8,1.6,4.1-1.6,4.1-1.6c0,0-1.2,2.3-4.1,2.3s-3.8-2.3-3.8-2.3Z"
          fill="#666"
        />
        <ellipse
          cx="24.3"
          cy="21.2"
          rx=".2"
          ry=".5"
          transform="translate(-7.3 15) rotate(-30)"
        />
      </g>
    </svg>
  );
};

// pc
export const PcSvg = () => {
  return (
    <svg
    id="pc_svg"
    className="pc_svg"
    data-name="pc_svg"
    xmlns="http://www.w3.org/2000/svg"
    width="345.8"
    height="303.8"
    version="1.1"
    viewBox="0 0 345.8 303.8"
  >
    <g>
      <rect
        x="-439.1"
        y="103.1"
        width="311.6"
        height="208.5"
        rx="24.1"
        ry="24.1"
        fill="#999"
        stroke="#999"
        strokeMiterlimit="10"
        strokeWidth="14.1"
      ></rect>
      <path
        d="M-414.7,103.1H-151.9c13.5,0,24.4,11.1,24.4,24.7v6.8h-311.5v-6.8c0-13.6,10.9-24.7,24.4-24.7h0Z"
        fill="#999"
      ></path>
      <path
        d="M-151.8,311.6h-262.8c-13.5,0-24.4-11.1-24.4-24.7v-6.8H-127.5v6.8c0,13.6-10.9,24.7-24.4,24.7h0Z"
        fill="#999"
      ></path>
    </g>
    <rect
      x="-408.8"
      y="344.3"
      width="300"
      height="168.8"
      fill="#fff"
      stroke="#fff"
      strokeMiterlimit="10"
    ></rect>
    <g>
      <path
        d="M317.2,213H28.1c-11.2,0-20.3-9.1-20.3-20.3V28.2c0-11.2,9.1-20.3,20.3-20.3h289.1c11.2,0,20.3,9.1,20.3,20.3v164.4c0,11.2-9.1,20.3-20.3,20.3ZM322.7,25.2H22.7v168.8h300V25.2Z"
        fill="#999"
        // stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth=".8"
      ></path>
      <rect
        x="124.4"
        y="201.4"
        width="96.6"
        height="59.2"
        fill="#999"
      ></rect>
      <path
        d="M284.3,295.9H58c-2.3,0-3.4-3.3-1.6-5l40-37.5c1.4-1.3,3.4-2.1,5.3-2.1l142.4.2c2.1,0,4.1.8,5.6,2.3l36.2,37.1c1.7,1.7.6,4.9-1.7,4.9Z"
        fill="#999"
      ></path>
      <circle cx="172.7" cy="233.9" r="11.5" fill="#fff"></circle>
    </g>
  </svg>
  )
}
