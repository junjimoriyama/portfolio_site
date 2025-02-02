"use client";

// react
import React, { useEffect } from 'react'
import { SwitchProvider, useSwitchContext } from '../context/switchProvider'
// components
import { FirstView } from './FirstView/FirstView';
import { Creation } from './Creation/Creation';
import { Switch } from './Switch/Switch';
import {Background} from './BackGround/BackGround';

export const ContextPage = () => {
  return (
    <SwitchProvider>
      <Background />
      <FirstView />
      <Creation />
      <Switch />
    </SwitchProvider>
  )
}
