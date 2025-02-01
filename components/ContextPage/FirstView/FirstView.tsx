"use client"

import { HeroTitle } from './HeroTitle/HeroTitle'
import { Light } from './Light/Light'
import { useSwitchContext } from '@/components/context/switchProvider'
// style
import './FirstView.scss'

export const FirstView = () => {

  return (
    <div className='first_view'>
      <HeroTitle/>
      <Light />
    </div>
  )
}
