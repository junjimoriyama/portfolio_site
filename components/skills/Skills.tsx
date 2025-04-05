// style
import "./Skills.scss";

export const Skills = () => {
  return (
    <div className="skills">
      <div className="skillsTitle">主にできること</div>
      <ul className="skillsList">
        {/* HTML */}
        <li className="skillsItem">
          <p className="skillName">HTML</p>
          <img
            className="skillImage"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
          />

          <p className="skillDescription">
            基本的なマークアップに加え、SEO対策を意識したコーディングが可能です。
            <br />
            また、フォームのバリデーション、アクセシビリティ対応、data属性を活用したJSとの連携といった応用的な実装にも対応できます。
          </p>
        </li>

        {/* CSS */}
        <li className="skillsItem">
          <p className="skillName">CSS</p>
          <img
            className="skillImage"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
          />
          <p className="skillDescription">
            CSSによる基本的なスタイリングから、レイアウト設計、レスポンシブ対応、アニメーション表現、効率的な設計まで幅広く対応できます。さらに、CSS変数を活用することで、スタイルの一括管理や保守性の高い設計にも対応しています。
          </p>
        </li>

        {/* JavaScript */}
        <li className="skillsItem">
          <p className="skillName">JavaScript</p>
          <img
            className="skillImage"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          />
          <p className="skillDescription">
            JavaScriptで、ユーザー操作に応じたアニメーションの制御や、APIを使った非同期通信、ローカルストレージへのデータ保存、イベント処理による動的なUIの実装など、基本から応用まで幅広く対応できます。
          </p>
        </li>

        {/* SCSS */}
        <li className="skillsItem">
          <p className="skillName">SCSS</p>
          <img
            className="skillImage"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
          />

          <p className="skillDescription">
            SCSSでは、色やサイズを変数でまとめて管理したり、スタイルを繰り返し自動生成することができます。また、ネストを使って階層構造をわかりやすく整理したり、ミックスインで共通スタイルを使い回すこともでき、効率よくスタイルを組み立てられます。
          </p>
        </li>

        {/* React */}
        <li className="skillsItem">
          <p className="skillName">React</p>

          <img
            className="skillImage"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          />

          <p className="skillDescription">
            コンポーネントの設計や状態管理などの基本からHooksを使ったデータ管理やイベント処理、API連携、Reduxによるグローバルな状態管理まで、実践的なアプリ開発に必要な機能を一通り実装できます。
          </p>
        </li>

        {/* Next.js */}
        <li className="skillsItem">
          <p className="skillName">Next.js</p>
          <img
            className="skillImage"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
          />
          <p className="skillDescription">
            ページの切り替えやAPIの作成などの基本機能、サーバーサイドでのデータ取得やページごとのレイアウトの切り替え、動的なURLのルーティングなど、Next.jsの機能を使った実用的なサイトやアプリケーション作りにも対応できます。
          </p>
        </li>

        {/* PHP */}
        <li className="skillsItem">
          <p className="skillName">PHP</p>
          <img
            className="skillImage"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
          />
          <p className="skillDescription">
            PHPの基本的な文法に加えて、Laravelを用いたルーティングやコントローラーの実装、データベースとの連携を通じたCRUD処理（登録・表示・更新・削除）にも対応できます。
          </p>
        </li>

        {/* PHP */}
        <li className="skillsItem">
          <p className="skillName">Illustrator / Photoshop</p>
          <div className="skillImages">
            <img
              className="skillImage"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-line.svg"
            />

            <img
              className="skillImage"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg"
            />
          </div>

          <p className="skillDescription">
          llustratorでは、アイコンの作成や図形・文字の配置など基本的な操作に対応でき、前職ではチラシ制作も行ってきました。<br /> Photoshopでは、写真の色味・明るさの調整など、基本的な画像加工が可能です。
          </p>
        </li>

        {/* github */}
        <li className="skillsItem">
          <p className="skillName">github</p>
          <i className="devicon-github-original"></i>
          <p className="skillDescription">
          個人開発や受託案件でGitを使っており、リポジトリのクローンから、ファイルの変更管理、コミット、リモートリポジトリへのプッシュといった基本的な操作に対応できます。
          </p>
        </li>
      </ul>
    </div>
  );
};
