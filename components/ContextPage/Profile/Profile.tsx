"use client";

// functions
import useIntersectionObserver from "@/functions/functions";
// componetnents
import { useSwitchContext } from "@/components/context/switchProvider";
// svg
import { CameraSvg } from "@/assets/svg/CameraSvg";
// style
import "./Profile.scss";
import { useRef, useState } from "react";

export const Profile = () => {
  const { isSwitchOn } = useSwitchContext();

  const refs = {
    myName: useRef(null),
    description: useRef(null),
  };

  const [isMyNameVisible, setIsMyNameVisible] = useState(false);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  useIntersectionObserver(refs.myName, setIsMyNameVisible, {
    threshold: 0.5,
  });
  useIntersectionObserver(refs.description, setIsDescriptionVisible, {
    threshold: 0.5,
  });

  return (
    <div className={`profile ${isSwitchOn ? "isSwitchOn" : ""}`}>
      <div className="profile_wrap">
      <div className="profile_heading">
        <div
          className={`profile_myName ${isMyNameVisible ? "isVisible" : ""}`}
          ref={refs.myName}
        >
          森山順司
        </div>
        <CameraSvg />
      </div>

        <div
          className={`profile_description ${
            isDescriptionVisible ? "isVisible" : ""
          }`}
          ref={refs.description}
        >
          <p>フロントエンドに惹かれて3年。</p>
          <p>日々、コツコツ、楽しんで開発していて、デザインから実装まで行っています。</p>
          <p>写真を撮るのが趣味です。</p>
        </div>
      </div>
    </div>
  );
};
