"use client";

// react
import { createContext, useContext, useState } from "react";

const switchContext = createContext<{
  isSwitchOn: boolean;
  setIsSwitchOn: (value: boolean) => void;
}>({
  isSwitchOn: true,
  setIsSwitchOn: () => {},
});

export const SwitchProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(true);

  return (
    <switchContext.Provider
      value={{
        isSwitchOn,
        setIsSwitchOn,
      }}
    >
      {children}
    </switchContext.Provider>
  );
};

export const useSwitchContext = () => useContext(switchContext);
