import Image from "next/image";
import styles from "./page.module.css";
import { FirstView } from "@/components/FirstVeiw/FirstView";
import { Creation } from "@/components/Creation/Creation";

export default function Home() {
  return (
    <>
    <FirstView />
    <Creation />
    </>
  );
}
