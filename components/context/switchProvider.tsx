"use client";

// react
import { createContext, useContext, useState } from "react";

const switchContext = createContext<{
  isSwitchOn: boolean;
  setIsSwitchOn: (value: boolean) => void;
}>({
  isSwitchOn: false,
  setIsSwitchOn: () => {}
})

export const SwitchProvider = ({children} : { children: React.ReactNode}) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  return (
    <switchContext.Provider
     value={{
      isSwitchOn,
      setIsSwitchOn
     }}
    >
      {children}
    </switchContext.Provider>
  )
}

export const useSwitchContext = () => useContext(switchContext)