import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';

import { Inter } from "next/font/google";
  import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="container">
      <ul>
        <li>
          <Link href="/products">
            Produtos
          </Link>       
        </li>
        <li>
          <Link href="/about">
            Sobre nós
          </Link>       
        </li>
      </ul>
      <h1>Hello World Next.js</h1>
    </main>
  );
}
