"use client"

import { PcSvg } from "@/assets/svg/PcSvg";
import "./Creation.scss";
import Image from 'next/image';

export const Creation = () => {
  return (
    <div className="creation">
      <div className="photo_site">
      <PcSvg />
      <img className="photo_site_img" src="/images/photosite.png" alt="photo_site画像" width={302} height={170}/>
      </div>
    </div>
  );
};
