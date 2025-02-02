"use client";

// react
import React from 'react'
import { SwitchProvider } from '../context/switchProvider'
// components
import { FirstView } from './FirstView/FirstView';
import { Creation } from './Creation/Creation';
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
