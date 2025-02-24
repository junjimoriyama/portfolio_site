import { SwitchProvider } from "@/components/context/switchProvider";
import { Switch } from "@/components/ContextPage/Switch/Switch";
import React from "react";
import Background from "@/components/ContextPage/BackGround/BackGround";

export const SwitchAndBg = () => {
  return (
    <SwitchProvider>
      <Background />
      <Switch />
    </SwitchProvider>
  );
};
