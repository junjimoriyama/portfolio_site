// import { AstronautSvg } from "@/assets/svg/Astronaut";

import { parameter } from "three/tsl";
import { AstronautSvg, MarseSvg, RocketSvg, SaturnSvg, UFOSvg, EarthSvg, NeptuneSvg, AlienSvg } from "./Svg";

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