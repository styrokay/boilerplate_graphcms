import Head from "next/head";
import Image from "next/image";
import { getPageData } from "../lib/data";
import Link from "next/link";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="NextJS Boilerplate" />
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

export const getStaticProps = async () => {
  const data = await getPageData();
  return {
    props: {
      data,
    },
  };
};
