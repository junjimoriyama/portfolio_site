"use client";

import { PcSvg } from "@/assets/svg/PcSvg";
import "./Creation.scss";
import Image from "next/image";
import { useSwitchContext } from "@/components/context/switchProvider";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Creation = () => {
  const { isSwitchOn, setIsSwitchOn } = useSwitchContext();

  // 初めはImageタグの追加クラスは空にする
  const [imageState, setImageState] = useState("");

  // const [isOffMessage, setIsOffMessage] = useState(false);

  useEffect(() => {
    // もしスイッチがONであれば
    if (isSwitchOn) {
      setImageState("isOn");
      // もしスイッチがONであればOFFを実行できる
    } else if (imageState === "isOn") {
      setImageState("isOff");
    }
  }, [isSwitchOn]);

  return (
    <div className="creation">
      <div className="creation_item photo_site">
        <PcSvg />
        <div className="creation_item_image">
          <Link
            href="https://junji-moriyama.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={`photo_site_img ${imageState}`}
              src="/images/photosite.png"
              alt="photo_site画像"
              width={302}
              height={170}
              // onMouseEnter={() => setIsOffMessage(true)}
              // onMouseLeave={() => setIsOffMessage(false)}
            />
            {/* <p className="creation_item_off">電源OFF</p> */}
          </Link>
        </div>
        <div className="creation_item_about">
          <p className="creation_item_item">写真ギャラリー PHOTO SITE</p>
          {/* <p className="creation_item_description"></p> */}
        </div>
      </div>

      <div className="creation_item todo_app">
        <PcSvg />
        <div className="creation_item_image">
        {isSwitchOn && (
          <Image
            className={`photo_site_img ${isSwitchOn ? "isOn" : ""}`}
            src="/images/todo.png"
            alt="photo_site画像"
            width={302}
            height={170}
          />
        )}

        </div>
      </div>
      <div className="creation_item todo_app">
        <div className="creation_item_image">
        <PcSvg />
        {isSwitchOn && (
          <Image
            className={`photo_site_img ${isSwitchOn ? "isOn" : ""}`}
            src="/images/supermarket.png"
            alt="photo_site画像"
            width={302}
            height={170}
          />
        )}
        </div>
      </div>
    </div>
  );
};
