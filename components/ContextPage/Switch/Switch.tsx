"use client"

import { useSwitchContext } from '@/components/context/switchProvider'
import { useRef } from 'react'
import './Switch.scss'

export const Switch = () => {

  const { isSwitchOn, setIsSwitchOn} = useSwitchContext()
  // switchボタン
    const switchRef = useRef<null | HTMLDivElement>(null);

  return (
    <div
    className={`switch ${isSwitchOn ? "switchOn" : ""}`}
    ref={switchRef}
    onClick={() => {
      setIsSwitchOn(!isSwitchOn);
    }}
  >
    <div className="switchBtn"></div>
  </div>
  )
}
