import Image from "next/image";
import styles from "./page.module.css";
import Main from "./Main"; // ✅ This is the correct way

export default function Home() {
  return (
    <div>
      <Main />
    </div>
  );
}