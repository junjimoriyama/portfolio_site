"use client"

// react
import { useSwitchContext } from "@/components/context/switchProvider";
// style
import "./Light.scss";

export const Light = () => {

  // ライトの状態
  const { isSwitchOn } = useSwitchContext();
  
  return (
    <div  className="light">
    <div className="wire"></div>
    <div className={`light_bulb ${isSwitchOn ? "isLightOn" : ""}`}>
      <span></span>
      <span></span>
    </div>
    </div>
  );
};
