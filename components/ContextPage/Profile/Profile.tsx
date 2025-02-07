"use client";

// next
import Link from 'next/link'
// functions
import useIntersectionObserver from "@/functions/functions";
// svg
import { GitIcon } from '@/assets/svg/GitIcon'
// style
import './Profile.scss'
import { useRef, useState } from 'react';
import { useSwitchContext } from '@/components/context/switchProvider';

export const Profile = () => {

  const { isSwitchOn } = useSwitchContext();

  const refs = {
    myName: useRef(null),
    description: useRef(null),
  }

  const [ isMyNameVisible, setIsMyNameVisible  ] = useState(false)
  const [ isDescriptionVisible, setIsDescriptionVisible ] = useState(false)

  useIntersectionObserver(refs.myName, setIsMyNameVisible, {
    threshold : 0.5
  })
  useIntersectionObserver(refs.description, setIsDescriptionVisible, {
    threshold: 0.5
  })


  return (
    <div className={`profile ${isSwitchOn ? "isSwitchOn" : ""}`}>
      <div className="profile_wrap">
      <div 
      className={`profile_myName ${isMyNameVisible ? "isVisible" : ""}`}
      ref={refs.myName}
      >
        森山順司
        <span className='git_link'>
        <Link 
        href="https://github.com/junjimoriyama" 
        target="_blank"
        rel="noopener noreferrer"
        >
          <GitIcon />
        </Link>
        </span>
      </div>
      
      <div 
      className={`profile_description ${isDescriptionVisible ? "isVisible" : ""}`}
      ref={refs.description}
      >
        <p>フロントエンドに惹かれて3年。</p>
        <p>シンプルでストレスのない設計を好み、アニメーションを加えた少し遊び心のあるUI/UXが好きです。</p>
        </div>

      </div>

    </div>
  )
}
