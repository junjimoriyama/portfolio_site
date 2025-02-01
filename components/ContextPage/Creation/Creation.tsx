"use client"

import { PcSvg } from "@/assets/svg/PcSvg";
import "./Creation.scss";
import Image from 'next/image';
import { useSwitchContext } from "@/components/context/switchProvider";

export const Creation = () => {

  const {isSwitchOn, setIsSwitchOn} = useSwitchContext()

  return (
    <div className="creation">
      <div className="photo_site">
      <PcSvg />
      {/* <Image className="photo_site_img" src="/images/photosite.png" alt="photo_site画像" width={302} height={170}/> */}
      </div>
      <div className="todo_app">
      <PcSvg />
      {
        isSwitchOn &&
        <Image className={`photo_site_img ${isSwitchOn ? "isOn" : ""}`} src="/images/todo.png" alt="photo_site画像" width={302} height={170}/>

      }
      </div>
    </div>
  );
};
