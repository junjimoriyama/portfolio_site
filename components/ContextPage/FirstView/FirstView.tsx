"use client"

// components
import { HeroTitle } from './HeroTitle/HeroTitle'
import { Light } from './Light/Light'
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
