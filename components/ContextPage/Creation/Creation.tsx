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
      <div className="creation_item photo_site">
        <PcSvg />
        <div className="creation_item_image">
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
      <div className="creation_item photo_site">
        <PcSvg />
        <div className="creation_item_image">
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

      <div className="creation_item todo_app">
        <PcSvg />
        <div className="creation_item_image">
        <Link
            href="https://junji-moriyama.com/"
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



      {/* <div className="creation_item todo_app">
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
      </div> */}
    </div>
  );
};