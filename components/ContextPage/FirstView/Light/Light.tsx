"use client"

import { useRef, useState } from "react";
import "./Light.scss";
import { useSwitchContext } from "@/components/context/switchProvider";

export const Light = () => {

  const { isSwitchOn, setIsSwitchOn} = useSwitchContext()

  console.log(isSwitchOn)
  console.log(useSwitchContext());


  // switchボタン
  const switchRef = useRef<null | HTMLDivElement>(null);
  return (
    <div  className="light">
    <div className="wire"></div>
    <div className={`light_bulb ${!isSwitchOn ? "lightOff" : ""}`}>
      <span></span>
      <span></span>
    </div>
    <div
      className={`switch ${isSwitchOn ? "switchOn" : ""}`}
      ref={switchRef}
      onClick={() => {
        setIsSwitchOn(!isSwitchOn);
      }}
    >
      <div className="btn"></div>
    </div>

    </div>
  );
};
