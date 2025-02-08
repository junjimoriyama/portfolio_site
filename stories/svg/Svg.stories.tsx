// import { AstronautSvg } from "@/assets/svg/Astronaut";

import { AstronautSvg, MarseSvg, RocketSvg, SaturnSvg, UFOSvg, EarthSvg } from "./Svg";

const Meta = {
  component: AstronautSvg,
  title: "SVG",
  tags: ["autodocs"]
}

export default Meta;

// 地球
export const Earth = {
  render: () => <EarthSvg/>,
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
export const Astronaut = {
  render: () => <AstronautSvg />,
}
