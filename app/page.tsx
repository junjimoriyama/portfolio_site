import { ContextPage } from "@/components/ContextPage/ContextPage";

import "./home.scss"
import ThreeJSExample from "@/components/BackGround/BackGround";

export default function Home() {
  return (
    <div className="home">
    <ContextPage />
    <ThreeJSExample/>
    </div>
  );
}
