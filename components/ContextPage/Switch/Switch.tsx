"use client"

// react
import { useRef } from 'react'
// components
import { useSwitchContext } from '@/components/context/switchProvider'
// style
import './Switch.scss'

export const Switch = () => {

  const { isSwitchOn, setIsSwitchOn} = useSwitchContext()
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
    <div className="switchBtn"></div>
  </div>
  )
}
