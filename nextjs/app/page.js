import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
const inter = Inter({ subsets: ["latin"] });
//

import Hero from "../components/Hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Card from "../components/Card/Card";
import Projects from "../components/Projects";

//
//

const getData = async () => {
  const data = await fetch("https://www.reddit.com/.json");
  return data.json();
};

//
export default async function Home() {
  const data = await getData();
  const post = data.data.children[1].data.title;
  return (
    <main className={styles.main}>
      <Hero />
      <Card />
      <Projects />
    </main>
  );
}
