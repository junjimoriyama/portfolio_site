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
import { AlienSvg_DG, AlienSvg_G, AlienSvg_LG } from "@/assets/svg/Alien";

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

  const refs = {
    photoSiteRef: useRef<HTMLDivElement | null>(null),
    stutteringJobRef: useRef<HTMLDivElement | null>(null),
    todoRef: useRef<HTMLDivElement | null>(null),
    superMarketRef: useRef<HTMLDivElement | null>(null),
    kPhotoRef: useRef<HTMLDivElement | null>(null),
    drumRef: useRef<HTMLDivElement | null>(null),
  };

  const [isPhotoSiteVisible, setIsPhotoSiteVisible] = useState(false);
  const [isStutteringVisible, setIsStutteringJobVisible] = useState(false);
  const [isTodoVisible, setIsTodoVisible] = useState(false);
  const [isSuperMarketVisible, setIsSuperMarketVisible] = useState(false);
  const [isKPhotoVisible, setIsKPhotoVisibleVisible] = useState(false);
  const [isDrumVisible, setIsDrumVisible] = useState(false);

  useIntersectionObserver(refs.stutteringJobRef, setIsStutteringJobVisible, {
    threshold: 0.5,
  });
  useIntersectionObserver(refs.photoSiteRef, setIsPhotoSiteVisible, {
    threshold: 0.5,
  });
  useIntersectionObserver(refs.todoRef, setIsTodoVisible, {
    threshold: 0.5,
  });
  useIntersectionObserver(refs.superMarketRef, setIsSuperMarketVisible, {
    threshold: 0.5,
  });
  useIntersectionObserver(refs.kPhotoRef, setIsKPhotoVisibleVisible, {
    threshold: 0.5,
  });
  useIntersectionObserver(refs.drumRef, setIsDrumVisible, {
    threshold: 0.5,
  });

  return (
    <div className="creation">
      {/* stuttering_job */}
      <div
        className={`creation_item ${isStutteringVisible ? "isVisible" : ""}`}
        ref={refs.stutteringJobRef}
        // "creation_item"
      >
        <PcSvg />
        {!isSwitchOn && <AlienSvg_DG />}
        <div
          className={`creation_item_image ${isSwitchOn ? "isSwitchOn" : ""}`}
        >
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
        <p className={`creation_item_visit ${isSwitchOn ? "isVisible" : ""}`}>
          VISIT
        </p>
        <div className="creation_item_about">
          <div className="creation_item_title">吃音と仕事DATABASE</div>
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
      <div
        className={`creation_item ${isPhotoSiteVisible ? "isVisible" : ""}`}
        ref={refs.photoSiteRef}
      >
        <PcSvg />
        {!isSwitchOn && <AlienSvg_G />}
        <div
          className={`creation_item_image ${isSwitchOn ? "isSwitchOn" : ""}`}
        >
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
        <p className={`creation_item_visit ${isSwitchOn ? "isVisible" : ""}`}>
          VISIT
        </p>
        <div className="creation_item_about">
          <div className="creation_item_title">PHOTO SITE</div>
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
      <div
        className={`creation_item ${isTodoVisible ? "isVisible" : ""}`}
        ref={refs.todoRef}
      >
        {!isSwitchOn && <AlienSvg_LG />}
        <PcSvg />
        <div
          className={`creation_item_image ${isSwitchOn ? "isSwitchOn" : ""}`}
        >
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
        <p className={`creation_item_visit ${isSwitchOn ? "isVisible" : ""}`}>
          VISIT
        </p>
        <div className="creation_item_about">
          <div className="creation_item_title">TODO APP</div>
          <div className="creation_item_type">
            <span>APPLICATION</span>
          </div>
          <div className="creation_item_description">TODOリスト管理アプリ</div>
        </div>
      </div>

      {/* SUPER MARKET */}
      <div
        className={`creation_item ${isSuperMarketVisible ? "isVisible" : ""}`}
        ref={refs.superMarketRef}
      >
        {!isSwitchOn && <AlienSvg_DG />}
        <PcSvg />
        <div
          className={`creation_item_image ${isSwitchOn ? "isSwitchOn" : ""}`}
        >
          <Link
            href="https://shopping-app-next-ten.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={`thumbnail_img ${imageState}`}
              src="/images/market.png"
              alt="SUPER MARKETの画像"
              width={310}
              height={173}
            />
          </Link>
        </div>
        <p className={`creation_item_visit ${isSwitchOn ? "isVisible" : ""}`}>
          VISIT
        </p>
        <div className="creation_item_about">
          <div className="creation_item_title">SUPER MARKET</div>
          <div className="creation_item_type">
            <span>APPLICATION</span>
          </div>
          <div className="creation_item_description">
            仮想ショッピングページ
          </div>
        </div>
      </div>

      {/* K photo */}
      <div
        className={`creation_item ${isKPhotoVisible ? "isVisible" : ""}`}
        ref={refs.kPhotoRef}
      >
        {!isSwitchOn && <AlienSvg_G />}
        <PcSvg />
        <div
          className={`creation_item_image ${isSwitchOn ? "isSwitchOn" : ""}`}
        >
          <Link
            href="https://hiroshiphotography.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={`thumbnail_img ${imageState}`}
              src="/images/k_photo.png"
              alt="写真サイトの画像"
              width={310}
              height={173}
            />
          </Link>
        </div>
        <p className={`creation_item_visit ${isSwitchOn ? "isVisible" : ""}`}>
          VISIT
        </p>
        <div className="creation_item_about">
          <div className="creation_item_title">KIKUCH HIROSHI</div>
          <div className="creation_item_type">
            <span>SITE</span>
            <span>レスポンシブ</span>
          </div>
          <div className="creation_item_description">
            フォトグラファー紹介サイト
          </div>
        </div>
      </div>

      {/* drum school */}
      <div
        className={`creation_item ${isDrumVisible ? "isVisible" : ""}`}
        ref={refs.drumRef}
      >
        {}
        {!isSwitchOn && <AlienSvg_LG />}
        <PcSvg />
        <div
          className={`creation_item_image ${isSwitchOn ? "isSwitchOn" : ""}`}
        >
          <Link
            href="https://yamagraphy.info/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={`thumbnail_img ${imageState}`}
              src="/images/drumSchool.png"
              alt="写真サイトの画像"
              width={310}
              height={173}
            />
          </Link>
        </div>
        <p className={`creation_item_visit ${isSwitchOn ? "isVisible" : ""}`}>
          VISIT
        </p>
        <div className="creation_item_about">
          <div className="creation_item_title">LITE YAMAMOTO</div>
          <div className="creation_item_type">
            <span>SITE</span>
            <span>レスポンシブ</span>
          </div>
          <div className="creation_item_description">ドラムスクールサイト</div>
        </div>
      </div>
    </div>
  );
};

// "use client";

// // next
// import Image from "next/image";
// import Link from "next/link";
// // react
// import { useSwitchContext } from "@/components/context/switchProvider";
// import { useEffect, useRef, useState } from "react";
// // functions
// import useIntersectionObserver from "@/functions/functions";
// // svg
// import { PcSvg } from "@/assets/svg/PcSvg";
// // style
// import "./Creation.scss";

// export const Creation = () => {
//   const { isSwitchOn } = useSwitchContext();

//   // 初めはImageタグの追加クラスは空にする
//   const [imageState, setImageState] = useState("");

//   useEffect(() => {
//     // もしスイッチがONであれば
//     if (isSwitchOn) {
//       setImageState("isOn");
//       // もしスイッチがONであればOFFを実行できる
//     } else if (imageState === "isOn") {
//       setImageState("isOff");
//     }
//   }, [isSwitchOn, imageState]);

//   const items = [
//     {
//       ref: useRef<HTMLDivElement | null>(null),
//       state: useState(false),
//       link: "https://stuttering-job-web.vercel.app/",
//       image: "/images/stuttering.png",
//       title: "吃音と仕事DATABASE",
//       description: "働く吃音ある方の体験談集",
//       tags: ["SITE", "APPLICATION", "レスポンシブ"]
//     },
//     {
//       ref: useRef<HTMLDivElement | null>(null),
//       state: useState(false),
//       link: "https://junji-moriyama.com/",
//       image: "/images/photosite.png",
//       title: "PHOTO SITE",
//       description: "個人で撮影した写真ギャラリーサイト",
//       tags: ["SITE", "レスポンシブ"]
//     },
//     {
//       ref: useRef<HTMLDivElement | null>(null),
//       state: useState(false),
//       link: "https://task-management-lake-nine.vercel.app/",
//       image:  "/images/todo.png",
//       title: "TODO APP",
//       description: "TODOリスト管理アプリ",
//       tags: ["APPLICATION"]
//     },
//     {
//       ref: useRef<HTMLDivElement | null>(null),
//       state: useState(false),
//       link: "https://shopping-app-next-ten.vercel.app/",
//       image:  "/images/superMarket.png",
//       title: "SUPER MARKET",
//       description: "仮想ショッピングサイト",
//       tags: ["APPLICATION"]
//     },
//   ];

//   useEffect(() => {
//     items.forEach(({ ref, state }) => {
//       const [, setIsVisible] = state;
//       if (ref.current) {
//         useIntersectionObserver(ref, setIsVisible, { threshold: 0.2 });
//       }
//     });
//   }, [items]);

//   return (
//     <div className="creation">
//     {items.map(({ ref, state, link, image, title, description, tags }, index) => {
//       const [isVisible] = state;
//       return (
//         <div
//           key={index}
//           className={`creation_item ${isVisible ? "isVisible" : ""}`}
//           ref={ref}
//         >
//           <PcSvg />
//           <div className={`creation_item_image ${isSwitchOn ? "isSwitchOn" : ""}`}>
//             <Link href={link} target="_blank" rel="noopener noreferrer">
//               <Image className={`thumbnail_img ${imageState}`} src={image} alt={`${title}画像`} width={310} height={173} />
//             </Link>
//           </div>
//           <p className={`creation_item_visit ${isSwitchOn ? "isVisible" : ""}`}>VISIT</p>
//           <div className="creation_item_about">
//             <div className="creation_item_title">{title}</div>
//             <div className="creation_item_type">
//               {tags.map((tag, idx) => <span key={idx}>{tag}</span>)}
//             </div>
//             <div className="creation_item_description">{description}</div>
//           </div>
//         </div>
//       );
//     })}
//   </div>
//   );
// };
