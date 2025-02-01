"use client";

import React from 'react'
import { SwitchProvider } from '../context/switchProvider'
import { FirstView } from './FirstView/FirstView';
import { Creation } from './Creation/Creation';
import { Light } from './FirstView/Light/Light';
import { Switch } from './Switch/Switch';

export const ContextPage = () => {
  return (
    <SwitchProvider>
      <FirstView />
      <Creation />
      <Switch />
    </SwitchProvider>
  )
}
