"use client"

// react
import { useRef } from 'react';
// components
import { useSwitchContext } from '@/components/context/switchProvider';
// style
import './Switch.scss';

export const Switch = () => {

  const { isSwitchOn, setIsSwitchOn} = useSwitchContext();
  // switchボタン
  const switchRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
    className={`switch ${isSwitchOn ? "switchOn" : ""}`}
    ref={switchRef}
    onClick={() => {
      setIsSwitchOn(!isSwitchOn);
    }}
  >
    <p className={`on_text  ${isSwitchOn ? "switchOn" : ""}`}>ON</p>
    <p className={`off_text  ${!isSwitchOn ? "switchOff" : ""}`}>OFF</p>
    <div className="switchBtn"></div>
  </div>
  )
}
