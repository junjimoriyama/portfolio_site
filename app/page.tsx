import Image from "next/image";
import styles from "./page.module.css";
import { Creation } from "@/components/ContextPage/Creation/Creation";
import { FirstView } from "@/components/ContextPage/FirstView/FirstView";
import { ContextPage } from "@/components/ContextPage/ContextPage";

export default function Home() {
  return (
    <>
    <ContextPage />
    </>
  );
}
