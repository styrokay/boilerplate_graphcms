import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { getPageData } from "../lib/data";
import Link from "next/link";

export const getStaticProps = async () => {
  const data = await getPageData();
  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Portfolio Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Portfolio Test Page</h1>

      <div>
        <h1>Portfolio</h1>
        {data.portfolios.map((e) => {
          return (
            <div key={e.slug}>
              <Link href={`/portfolio/${e.slug}`}>{e.title}</Link>
              <p>{e.content}</p>
            </div>
          );
        })}
        <h1>Blog</h1>
        {data.posts.map((e) => {
          return (
            <div key={e.slug}>
              <Link href={`/blog/${e.slug}`}>{e.title}</Link>
              <p>{e.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
