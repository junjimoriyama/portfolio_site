"use client";

import React from 'react'
import { SwitchProvider } from '../context/switchProvider'
import { FirstView } from './FirstView/FirstView';
import { Creation } from './Creation/Creation';
import { Light } from './FirstView/Light/Light';

export const ContextPage = () => {
  return (
    <SwitchProvider>
      <FirstView />
      <Creation />
      <Light />
    </SwitchProvider>
  )
}
