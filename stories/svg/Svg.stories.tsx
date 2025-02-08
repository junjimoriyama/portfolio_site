// import { AstronautSvg } from "@/assets/svg/Astronaut";

import { AstronautSvg, MarseSvg, RocketSvg, SaturnSvg } from "./Svg";

const Meta = {
  component: AstronautSvg,
  title: "SVG",
  tags: ["autodocs"]
}

export default Meta;

export const Astronaut = {
  render: () => <AstronautSvg />,

}
export const Saturn = {
  render: () => <SaturnSvg />,
}

export const Marse = {
  render: () => <MarseSvg />,
}

export const Rocket = {
  render: () => <RocketSvg/>,
}