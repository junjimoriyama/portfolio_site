"use client";

// next
import Image from "next/image";
import Link from "next/link";
// react
import { useSwitchContext } from "@/components/context/switchProvider";
import { useEffect, useRef, useState } from "react";
// functions
import useIntersectionObserver from "@/functions/functions";
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


  const items = [
    {
      ref: useRef<HTMLDivElement | null>(null),
      state: useState(false),
      link: "https://stuttering-job-web.vercel.app/",
      image: "/images/stuttering.png",
      title: "吃音と仕事DATABASE",
      description: "働く吃音ある方の体験談集",
      tags: ["SITE", "APPLICATION", "レスポンシブ"]
    },
    {
      ref: useRef<HTMLDivElement | null>(null),
      state: useState(false),
      link: "https://junji-moriyama.com/",
      image: "/images/photosite.png",
      title: "PHOTO SITE",
      description: "個人で撮影した写真ギャラリーサイト",
      tags: ["SITE", "レスポンシブ"]
    },
    {
      ref: useRef<HTMLDivElement | null>(null),
      state: useState(false),
      link: "https://task-management-lake-nine.vercel.app/",
      image:  "/images/todo.png",
      title: "TODO APP",
      description: "TODOリスト管理アプリ",
      tags: ["APPLICATION"]
    },
    {
      ref: useRef<HTMLDivElement | null>(null),
      state: useState(false),
      link: "https://shopping-app-next-ten.vercel.app/",
      image:  "/images/superMarket.png",
      title: "SUPER MARKET",
      description: "仮想ショッピングサイト",
      tags: ["APPLICATION"]
    },
  ];

  
  items.forEach(({ ref, state }) => {
    const [ isVisible, setIsVisible ] = state;
    useIntersectionObserver(ref, setIsVisible, { threshold: 0.2 });
  });


  return (
    <div className="creation">
    {items.map(({ ref, state, link, image, title, description, tags }, index) => {
      const [isVisible] = state;
      return (
        <div 
          key={index}
          className={`creation_item ${isVisible ? "isVisible" : ""}`}
          ref={ref}
        >
          <PcSvg />
          <div className={`creation_item_image ${isSwitchOn ? "isSwitchOn" : ""}`}>
            <Link href={link} target="_blank" rel="noopener noreferrer">
              <Image className={`thumbnail_img ${imageState}`} src={image} alt={`${title}画像`} width={310} height={173} />
            </Link>
          </div>
          <p className={`creation_item_visit ${isSwitchOn ? "isVisible" : ""}`}>VISIT</p>
          <div className="creation_item_about">
            <div className="creation_item_title">{title}</div>
            <div className="creation_item_type">
              {tags.map((tag, idx) => <span key={idx}>{tag}</span>)}
            </div>
            <div className="creation_item_description">{description}</div>
          </div>
        </div>
      );
    })}
  </div>
  );
};
