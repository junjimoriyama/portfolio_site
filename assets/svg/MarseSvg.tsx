import React from 'react'

export const MarseSvg = () => {
  return (
    <svg 
    className='mars_svg'
    xmlns="http://www.w3.org/2000/svg" width="200" height="200" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 200 200">
    <defs>
      <radialGradient id="gradation_mars" data-name="gradation_mars" cx="100" cy="100" fx="100" fy="100" r="89.1" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#db7d00"/>
        <stop offset=".3" stopColor="#db7a00"/>
        <stop offset=".6" stopColor="#dd7100"/>
        <stop offset=".7" stopColor="#e06300"/>
        <stop offset=".9" stopColor="#e44e00"/>
        <stop offset="1" stopColor="#e83c00"/>
      </radialGradient>
    </defs>
    <g>
      <g id="_レイヤー_2" data-name="レイヤー_2">
        <g id="RUiTz0">
          <image id="RUiTz0-2" data-name="RUiTz0" width="225" height="225" transform="translate(294.2 13.5)" xmlnsXlink="mars-1.png"/>
        </g>
        <circle cx="-36.4" cy="447.1" r="120.8" fill="#99775c"/>
        <circle cx="100" cy="100" r="89.1" fill="url(#gradation_mars)"/>
        <path d="M104.3,28.6c-5.4-6.5,15.8-1.4,15.8-1.4,0,0,13,5,14.2,10.3s4.5,15.4,0,18.6-21.6,12.2-21,3.3-9.6-12.8-11.6-16.1,1.1-4.5,4.8-4.9,3.3-3.3-2.1-9.8Z" fill="#d83e1a"/>
        <path d="M188.9,100c0,49.1-39.8,88.9-88.9,88.9s-25-9.8-5.5-33.2c9.3-11.2,37.3,2.1,48.5-7.4s5.1-33.4,11.5-37.2c15-9,34.4-25.2,34.4-11.1Z" fill="#d83e1a"/>
        <path d="M37,163.1C2.2,128.4,2.2,72.1,37,37.4c13.9-13.9,51.7-25.7,43.6-2.5s-20.2,22.1-30.8,31.9,25.7,24.7,24.2,39.4-9.3,23.8-20.5,24.7c-17.4,1.4-6.6,42.2-16.5,32.2Z" fill="#d83e1a"/>
        <path d="M94.9,100.2c4.1-8.6,37.7-1.9,39.7,6.5s1.5,26.4-10.2,28.1-22.2,1.5-17.8-7.9-6.9-12.2-11.7-14.7-4.1-3.4,0-12Z" fill="#d83e1a"/>
        <path d="M81.7,60.1s5.8-.9,9.9,3.2,3.9,5.4-2.7,9.5-15.4,9.5-16.4,0,9.3-12.7,9.3-12.7Z" fill="#d83e1a"/>
        <path d="M155.9,74.7s4.1-.8,7,2.7c2.9,3.4,2.7,4.5-1.9,8s-10.9,8-11.6,0,6.5-10.6,6.5-10.6Z" fill="#d83e1a"/>
      </g>
    </g>
  </svg>
  )
}
