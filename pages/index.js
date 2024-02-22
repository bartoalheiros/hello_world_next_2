import { Inter } from "next/font/google";
  import styles from "@/styles/Home.module.css";

import Head from 'next/head'  

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Head>
      <title>Página Principal</title>
      <meta name="keywords" content="Roupas, Calçados, Boné"></meta>
      <meta 
        name="description"
        content="Encontre a melhor roupa para você"
      ></meta>
    </Head>
    <main>
      <h1 className={styles.title}>Hello World Next.js</h1>
    </main>
    </>
  );
}
