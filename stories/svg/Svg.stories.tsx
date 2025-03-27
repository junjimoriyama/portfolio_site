// storybook
import { Meta, StoryObj } from "@storybook/react";
// component
import { AstronautSvg, MarseSvg, RocketSvg, SaturnSvg, UFOSvg, EarthSvg, NeptuneSvg, AlienSvg, PcSvg } from "./Svg";

const meta: Meta = {
  title: "SVG",
  component: AstronautSvg,
  tags: ["autodocs"]
}

export default meta;

// 地球
export const Earth = () => (
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
)

// 海王星
export const Neptune = {
  render: () => <NeptuneSvg />,
}

// 土星
export const Saturn = {
  render: () => <SaturnSvg />,
}

// 火星
export const Marse = {
  render: () => <MarseSvg />,
}

// ロケット
export const Rocket = {
  render: () => <RocketSvg/>,
}

// UFO
export const UFO = {
  render: () => <UFOSvg/>,
}


// 宇宙飛行士
export const Astronaut = () => <AstronautSvg />;


// 宇宙人
export const Alien = {
  render: () => 
    <div className="groupAlien">
      <AlienSvg variant="deepGreen"/>
      <AlienSvg variant="green"/>
      <AlienSvg variant="lightgreen"/>
    </div>
}

// パソコン
export const Pc = {
  render: () => <PcSvg />
} 
 