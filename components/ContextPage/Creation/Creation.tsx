"use client";

// next
import Image from "next/image";
import Link from "next/link";
// react
import { useSwitchContext } from "@/components/context/switchProvider";
import { useEffect, useState } from "react";
// svg
import { PcSvg } from "@/assets/svg/PcSvg";
// style
import "./Creation.scss";

export const Creation = () => {
  const { isSwitchOn } = useSwitchContext();

  // 初めはImageタグの追加クラスは空にする
  const [imageState, setImageState] = useState("");


  useEffect(() => {
    // もしスイッチがONであれば
    if (isSwitchOn) {
      setImageState("isOn");
      // もしスイッチがONであればOFFを実行できる
    } else if (imageState === "isOn") {
      setImageState("isOff");
    }
  }, [isSwitchOn, imageState]);

  return (
    <div className="creation">

       {/* stuttering_job */}
      <div className="creation_item">
        <PcSvg />
        <div className={`creation_item_image ${isSwitchOn ? "isSwitchOn" : ""}`}>
          <Link
            href="https://stuttering-job-web.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={`thumbnail_img ${imageState}`}
              src="/images/stuttering.png"
              alt="photo_site画像"
              width={310}
              height={173}
              quality={100}
            />
          </Link>
        </div>
        <p className={`creation_item_visit ${isSwitchOn ? "isVisible" : ""}`}>VISIT</p>
        <div className="creation_item_about">
          <div className="creation_item_title">
          吃音と仕事DATABASE
          </div>
          <div className="creation_item_type">
            <span>SITE</span>
            <span>APPLICATION</span>
            <span>レスポンシブ</span>
          </div>
          <div className="creation_item_description">
           働く吃音ある方の体験談集
          </div>
        </div>
      </div>

      {/* PHOTO SITE */}
      <div className="creation_item">
        <PcSvg />
        <div className={`creation_item_image ${isSwitchOn ? "isSwitchOn" : ""}`}>
          <Link
            href="https://junji-moriyama.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={`thumbnail_img ${imageState}`}
              src="/images/photosite.png"
              alt="photo_site画像"
              width={310}
              height={173}
              quality={100}
            />
          </Link>
        </div>
        <p className={`creation_item_visit ${isSwitchOn ? "isVisible" : ""}`}>VISIT</p>
        <div className="creation_item_about">
          <div className="creation_item_title">
          PHOTO SITE
          </div>
          <div className="creation_item_type">
            <span>SITE</span>
            <span>レスポンシブ</span>
          </div>
          <div className="creation_item_description">
            個人で撮影した写真ギャラリーサイト
          </div>
        </div>
      </div>

      {/* Todo　App */}
      <div className="creation_item">
        <PcSvg />
        <div className={`creation_item_image ${isSwitchOn ? "isSwitchOn" : ""}`}>
        <Link
            href="https://task-management-lake-nine.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={`thumbnail_img ${imageState}`}
              src="/images/todo.png"
              alt="todoの画像"
              width={310}
              height={173}
            />
          </Link>
        </div>
        <p className={`creation_item_visit ${isSwitchOn ? "isVisible" : ""}`}>VISIT</p>
        <div className="creation_item_about">
        <div className="creation_item_title">
        TODO APP
          </div>
          <div className="creation_item_type">
            <span>APPLICATION</span>
          </div>
          <div className="creation_item_description">
          TODOリスト管理アプリ
          </div>
        </div>
      </div>

      {/* SUPER MARKET */}
      <div className="creation_item">
        <PcSvg />
        <div className={`creation_item_image ${isSwitchOn ? "isSwitchOn" : ""}`}>
        <Link
            href="https://shopping-app-next-ten.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={`thumbnail_img ${imageState}`}
              src="/images/superMarket.png"
              alt="SUPER MARKETの画像"
              width={310}
              height={173}
            />
          </Link>
        </div>
        <p className={`creation_item_visit ${isSwitchOn ? "isVisible" : ""}`}>VISIT</p>
        <div className="creation_item_about">
        <div className="creation_item_title">
        SUPER MARKET
          </div>
          <div className="creation_item_type">
            <span>APPLICATION</span>
          </div>
          <div className="creation_item_description">
          仮想ショッピングサイト
          </div>
        </div>
      </div>

    </div>
  );
};