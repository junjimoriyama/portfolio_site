"use client"

import React from 'react'
import { HeroTitle } from './HeroTitle/HeroTitle'
import { Light } from './Light/Light'
import { useSwitchContext } from '@/components/context/switchProvider'

export const FirstView = () => {

  // const {isSwitchOn, setIsSwitchOn} = useSwitchContext()

  console.log(useSwitchContext())

  return (
    <div className='first_view'>
      <HeroTitle/>
      <Light />
    </div>
  )
}
