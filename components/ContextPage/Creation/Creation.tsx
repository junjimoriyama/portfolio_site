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
import { ArrowSvg } from "@/assets/svg/arrow";

export const Creation = () => {
  const { isSwitchOn } = useSwitchContext();

  // 初めはImageタグの追加クラスは空にする
  const [imageState, setImageState] = useState("");

  // アーキテクチャ見せるか
  const [imgVisible, setImgVisible] = useState(false);

  useEffect(() => {
    // もしスイッチがONであれば
    if (isSwitchOn) {
      setImageState("isOn");
      // もしスイッチがONであればOFFを実行できる
    } else if (imageState === "isOn") {
      setImageState("isOff");
    }
  }, [isSwitchOn, imageState]);

  // title
  const creationTitle = "ポートフォリオ".split("");

  // refs
  const refs = {
    photoSiteRef: useRef<HTMLLIElement | null>(null),
    stutteringJobRef: useRef<HTMLLIElement | null>(null),
    todoRef: useRef<HTMLLIElement | null>(null),
    superMarketRef: useRef<HTMLLIElement | null>(null),
    kPhotoRef: useRef<HTMLLIElement | null>(null),
    drumRef: useRef<HTMLLIElement | null>(null),
    quizRef: useRef<HTMLLIElement | null>(null),
    titleRef: useRef<HTMLDivElement | null>(null),
  };

  // state
  const [isPhotoSiteVisible, setIsPhotoSiteVisible] = useState(false);
  const [isStutteringVisible, setIsStutteringJobVisible] = useState(false);
  const [isTodoVisible, setIsTodoVisible] = useState(false);
  const [isSuperMarketVisible, setIsSuperMarketVisible] = useState(false);
  const [isKPhotoVisible, setIsKPhotoVisibleVisible] = useState(false);
  const [isDrumVisible, setIsDrumVisible] = useState(false);
  const [isQuizVisible, setIsQuizVisible] = useState(false);
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  // intersectionObserver
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
  useIntersectionObserver(refs.quizRef, setIsQuizVisible, {
    threshold: 0.5,
  });
  useIntersectionObserver(refs.titleRef, setIsTitleVisible, {
    threshold: 0.5,
  });

  return (
    <div className="creation">
      <img
        className={`creation_architecture_img ${
          imgVisible ? "isVisible" : ""
        } `}
        src="images/stuttering_job_architecture.png"
        alt="アーキテクチャ"
      />
      <div
        className={`creation_architecture_mask ${
          imgVisible ? "isVisible" : ""
        } `}
        onClick={() => setImgVisible(false)}
      ></div>
      <div
        className={`creation_architecture_mask_btn ${
          imgVisible ? "isVisible" : ""
        } `}
        onClick={() => setImgVisible(false)}
      >
        close
      </div>

      <div
        className={`creation_title ${isTitleVisible ? "isVisible" : ""}`}
        ref={refs.titleRef}
      >
        {creationTitle.map((word, index) => {
          return (
            <span
              className={`creation_title_word ${
                (index + 1) % 2 !== 0 ? "odd" : "even"
              }`}
              key={`${word}-${index}`}
            >
              {word}
            </span>
          );
        })}
      </div>
      <ul className="creation_list">
        {/* stuttering_job */}
        <li
          className={`creation_item ${isStutteringVisible ? "isVisible" : ""}`}
          ref={refs.stutteringJobRef}
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
            <div className="creation_item_skills">
              <span>TypeScript</span>
              <span>Next.js</span>
              <span>React</span>
              <span>RubyOnRails</span>
            </div>
            <div className="creation_item_description">
              働く吃音ある方の体験談集<span>(テスト運用中)</span>
            </div>
            <div
              className="creation_item_architecture"
              onClick={() => setImgVisible(!imgVisible)}
            >
              アーキテクチャ
              <span><ArrowSvg/></span>
            </div>
            <div className="creation_item_git">
              <Link
                href="https://github.com/junjimoriyama/stuttering-job"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <GitIcon /> */}
              </Link>
            </div>
          </div>
        </li>
        {/* PHOTO SITE */}
        <li
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
            <div className="creation_item_skills">
              <span>TypeScript</span>
              <span>React</span>
            </div>
            <div className="creation_item_description">
              個人で撮影した写真ギャラリーサイト
            </div>
            <div className="creation_item_git">
              <Link
                href="https://github.com/junjimoriyama/photo_website"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <GitIcon /> */}
              </Link>
            </div>
          </div>
        </li>

        {/* SUPER MARKET */}
        <li
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
            <div className="creation_item_skills">
              <span>TypeScript</span>
              <span>Next.js</span>
              <span>React</span>
            </div>
            <div className="creation_item_description">
              仮想ショッピングページ<span>(個人開発・学習用)</span>
            </div>
            <div className="creation_item_git">
              <Link
                href="https://github.com/junjimoriyama/shopping-app-NEXT"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <GitIcon /> */}
              </Link>
            </div>
          </div>
        </li>

        {/* web quiz */}
        <li
          className={`creation_item ${isQuizVisible ? "isVisible" : ""}`}
          ref={refs.quizRef}
        >
          {}
          {!isSwitchOn && <AlienSvg_LG />}
          <PcSvg />
          <div
            className={`creation_item_image ${isSwitchOn ? "isSwitchOn" : ""}`}
          >
            <Link
              href="http://quiz-app-laravel-moriyama.xyz/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={`thumbnail_img ${imageState}`}
                src="/images/webQuiz.png"
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
            <div className="creation_item_title">WEB QUIZ</div>
            <div className="creation_item_type">
              <span>APPLICATION</span>
              <span>レスポンシブ</span>
            </div>
            <div className="creation_item_skills">
              <span>PHP</span>
              <span>Laravel</span>
            </div>
            <div className="creation_item_description">
              webクイズアプリ<span>(個人開発・学習用)</span>
            </div>
          </div>
        </li>

        {/* K photo */}
        <li
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
            <div className="creation_item_skills">
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
            <div className="creation_item_description">
              フォトグラファー紹介サイト
            </div>
          </div>
        </li>

        {/* drum school */}
        <li
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
            <div className="creation_item_skills">
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
            <div className="creation_item_description">
              ドラムスクールサイト
            </div>
          </div>
        </li>

        {/* Todo　App */}
        <li
          className={`creation_item ${isTodoVisible ? "isVisible" : ""}`}
          ref={refs.todoRef}
        >
          {!isSwitchOn && <AlienSvg_DG />}
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
            <div className="creation_item_skills">
              <span>TypeScript</span>
              <span>Nuxt.js</span>
              <span>Vue.js</span>
            </div>
            <div className="creation_item_description">
              TODOリスト管理アプリ<span>(個人開発・学習用)</span>
            </div>
            <div className="creation_item_git">
              <Link
                href="https://github.com/junjimoriyama/task_management"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <GitIcon /> */}
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
