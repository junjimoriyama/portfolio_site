// style
import "./Skills.scss";

export const Skills = () => {
  return (
    <div className="skills">
      <div className="skillsTitle">できること</div>
      <ul className="skillsList">
          {/* HTML */}
        <li className="skillsItem">
          <p  className="skillName">HTML</p>
          <img className="skillImage" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
          
          <p className="skillDescription">
          基本的なマークアップに加え、SEO対策を意識したコーディングが可能です。<br />
          また、フォームのバリデーション、アクセシビリティ対応、data属性を活用したJSとの連携といった応用的な実装にも対応できます。
          </p>
        </li>
          {/* CSS */}
        <li className="skillsItem">
          <p  className="skillName">CSS</p>
          
          
          <img className="skillImage" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
          
          
          <p className="skillDescription">
          CSSによる基本的なスタイリングから、レイアウト設計、レスポンシブ対応、アニメーション表現、効率的な設計まで幅広く対応できます。
          </p>
        </li>
        <li className="skillsItem">
          <p  className="skillName">JavaScript</p>
          <img className="skillImage" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
          <p className="skillDescription">
          JavaScriptで、ユーザー操作に応じたアニメーションの制御や、APIを使った非同期通信、ローカルストレージへのデータ保存、イベント処理による動的なUIの実装など、基本から応用まで幅広く対応できます。
          </p>
        </li>
      </ul>
    </div>
  );
};
