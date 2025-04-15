"use client";

// react
import { useRef, useState } from "react";
// functions
import useIntersectionObserver from "@/functions/functions";
// style
import "./Skills.scss";

export const Skills = () => {
  // refs
  const refs = {
    HTMLRef: useRef<HTMLLIElement | null>(null),
    CSSRef: useRef<HTMLLIElement | null>(null),
    javaScriptRef: useRef<HTMLLIElement | null>(null),
    SCSSRef: useRef<HTMLLIElement | null>(null),
    ReactRef: useRef<HTMLLIElement | null>(null),
    NextRef: useRef<HTMLLIElement | null>(null),
    PHPRef: useRef<HTMLLIElement | null>(null),
    DesignRef: useRef<HTMLLIElement | null>(null),
    GitHubRef: useRef<HTMLLIElement | null>(null),
  };

  // state
  const [isHTMLVisible, setIsHTMLVisible] = useState(false);
  const [isCSSVisible, setIsCSSVisible] = useState(false);
  const [isJavaScriptVisible, setIsJavaScriptVisible] = useState(false);
  const [isSCSSVisible, setIsSCSSVisible] = useState(false);
  const [isReactVisible, setIsReactVisible] = useState(false);
  const [isNextVisible, setIsNextVisible] = useState(false);
  const [isPHPVisible, setIsPHPVisible] = useState(false);
  const [isDesignVisible, setIsDesignVisible] = useState(false);
  const [isGitHubVisible, setIsGitHubVisible] = useState(false);

  // intersectionObserver
  useIntersectionObserver(refs.HTMLRef, setIsHTMLVisible, {
    threshold: 0.5,
  });
  useIntersectionObserver(refs.CSSRef, setIsCSSVisible, {
    threshold: 0.5,
  });
  useIntersectionObserver(refs.javaScriptRef, setIsJavaScriptVisible, {
    threshold: 0.5,
  });
  useIntersectionObserver(refs.SCSSRef, setIsSCSSVisible, {
    threshold: 0.5,
  });
  useIntersectionObserver(refs.ReactRef, setIsReactVisible, {
    threshold: 0.5,
  });
  useIntersectionObserver(refs.NextRef, setIsNextVisible, {
    threshold: 0.5,
  });
  useIntersectionObserver(refs.PHPRef, setIsPHPVisible, {
    threshold: 0.5,
  });
  useIntersectionObserver(refs.DesignRef, setIsDesignVisible, {
    threshold: 0.5,
  });
  useIntersectionObserver(refs.GitHubRef, setIsGitHubVisible, {
    threshold: 0.5,
  });

  return (
    <div className="skills">
      <div className="skills_title">できること</div>
      <ul className="skills_list">
        {/* HTML */}
        <li
          className={`skills_item ${isHTMLVisible ? "isVisible" : ""}`}
          ref={refs.HTMLRef}
        >
          <p className="skill_name">HTML</p>
          <img
            className="skill_image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
          />
          <p className="skill_description">
            基本的なマークアップに加え、SEO対策を意識したコーディングが可能です。
            <br />
            また、フォームのバリデーション、アクセシビリティ対応、data属性を活用したJSとの連携といった応用的な実装にも対応できます。
          </p>
        </li>

        {/* CSS */}
        <li
          className={`skills_item ${isCSSVisible ? "isVisible" : ""}`}
          ref={refs.CSSRef}
        >
          <p className="skill_name">CSS / SCSS</p>
          <div className="skill_images">
            <img
              className="skill_image"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            />
            <img
              className="skill_image"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
            />
          </div>
          <p className="skill_description">
            CSSは基本的なスタイリングからレイアウト、レスポンシブ、アニメーションまで幅広く対応でき、CSS変数で保守性の高い設計も可能です。SCSSでは、変数管理やネスト、ミックスインを活用して、より効率的で再利用性の高いスタイル設計が行えます。
          </p>
        </li>

        {/* JavaScript/TypeScript */}
        <li
          className={`skills_item ${isJavaScriptVisible ? "isVisible" : ""}`}
          ref={refs.javaScriptRef}
        >
          <p className="skill_name">JavaScript / TypeScript</p>
          <div className="skill_images">
            <img
              className="skill_image"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            />
            <img
              className="skill_image"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            />
          </div>
          <p className="skill_description">
            ユーザー操作に応じたアニメーションの制御や、APIを使った非同期通信、ローカルストレージへのデータ保存、イベント処理による動的なUIの実装など、基本から応用まで幅広く対応できます。また、型定義によって、安全性と保守性の高いコード設計にも対応しています。
          </p>
        </li>

        {/* React */}
        <li
          className={`skills_item ${isReactVisible ? "isVisible" : ""}`}
          ref={refs.ReactRef}
        >
          <p className="skill_name">React</p>
          <img
            className="skill_image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          />
          <p className="skill_description">
            コンポーネントの設計や状態管理などの基本からHooksを使ったデータ管理やイベント処理、API連携、Reduxによるグローバルな状態管理まで、実践的なアプリ開発に必要な機能を一通り実装できます。
          </p>
        </li>

        {/* Next.js */}
        <li
          className={`skills_item ${isNextVisible ? "isVisible" : ""}`}
          ref={refs.NextRef}
        >
          <p className="skill_name">Next.js</p>
          <img
            className="skill_image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
          />
          <p className="skill_description">
            ページの切り替えやAPIの作成などの基本機能、サーバーサイドでのデータ取得やページごとのレイアウトの切り替え、動的なURLのルーティングなど、Next.jsの機能を使った実用的なサイトやアプリケーション作りにも対応できます。
          </p>
        </li>

        {/* PHP */}
        <li
          className={`skills_item ${isPHPVisible ? "isVisible" : ""}`}
          ref={refs.PHPRef}
        >
          <p className="skill_name">PHP / Laravel</p>
          <div className="skill_images">
            <img
              className="skill_image"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
            />
            <img
              className="skill_image"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
            />
          </div>

          <p className="skill_description">
            PHPの基本的な文法に加えて、Laravelを用いたルーティングやコントローラーの実装、データベースとの連携を通じたCRUD処理（登録・表示・更新・削除）にも対応できます。(Ruby on Railsも対応可です。)
          </p>
        </li>

        {/* Illustrator / Photoshop */}
        <li
          className={`skills_item ${isDesignVisible ? "isVisible" : ""}`}
          ref={refs.DesignRef}
        >
          <p className="skill_name">Illustrator / Photoshop</p>
          <div className="skill_images">
            <img
              className="skill_image"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-line.svg"
            />
            <img
              className="skill_image"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg"
            />
          </div>
          <p className="skill_description">
            Illustratorでは、アイコンの作成や図形・文字の配置など基本的な操作に対応でき、前職ではチラシ制作も行ってきました。
            <br />{" "}
            Photoshopでは、写真の色味・明るさの調整など、基本的な画像加工が可能です。
          </p>
        </li>

        {/* SCSS */}
        <li
          className={`skills_item ${isSCSSVisible ? "isVisible" : ""}`}
          ref={refs.SCSSRef}
        >
          <p className="skill_name">Docker</p>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg"
            className="skill_image"
          />

          <p className="skill_description">
            Dockerの基本的なコマンド操作に加えて、コンテナの起動・停止、ボリュームやネットワークの設定、Docker
            Composeを用いた開発環境の構築にも対応できます。
          </p>
        </li>

        {/* GitHub */}
        <li
          className={`skills_item ${isGitHubVisible ? "isVisible" : ""}`}
          ref={refs.GitHubRef}
        >
          <p className="skill_name">GitHub</p>
          <i className="devicon-github-original"></i>
          <p className="skill_description">
            個人開発や受託案件でGitを使っており、リポジトリのクローンから、ファイルの変更管理、コミット、リモートリポジトリへのプッシュといった基本的な操作に対応できます。
          </p>
        </li>
      </ul>
    </div>
  );
};

{
  /* CSS */
}
//    <li
//    className={`skills_item ${isCSSVisible ? "isVisible" : ""}`}
//    ref={refs.CSSRef}
//  >
//    <p className="skill_name">CSS</p>
//    <img
//      className="skill_image"
//      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
//    />
//    <p className="skill_description">
//      CSSによる基本的なスタイリングから、レイアウト設計、レスポンシブ対応、アニメーション表現、効率的な設計まで幅広く対応できます。さらに、CSS変数を活用することで、スタイルの一括管理や保守性の高い設計にも対応しています。
//    </p>
//  </li>

{
  /* <li
className={`skills_item ${isSCSSVisible ? "isVisible" : ""}`}
ref={refs.SCSSRef}
>
<p className="skill_name">SCSS</p>
<img
  className="skill_image"
  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
/>
<p className="skill_description">
  SCSSでは、色やサイズを変数でまとめて管理したり、スタイルを繰り返し自動生成することができます。また、ネストを使って階層構造をわかりやすく整理したり、ミックスインで共通スタイルを使い回すこともでき、効率よくスタイルを組み立てられます。
</p>
</li> */
}
