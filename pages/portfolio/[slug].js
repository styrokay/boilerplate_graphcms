import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { getPortfolioItems, getPortfolioItem } from "../../lib/data";
import Link from "next/link";
import { useRouter } from "next/router";

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const portfolioItem = await getPortfolioItem(params.slug);
  return {
    props: {
      portfolioItem: portfolioItem.portfolios[0],
    },
  };
};

export default function Home({ portfolioItem }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>LOADING</div>;
  }
  console.log(portfolioItem.title);
  return (
    <div>
      <Head>
        <title>{portfolioItem.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{portfolioItem.title}</h1>
    </div>
  );
}