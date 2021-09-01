import Head from "next/head";

import { getAllPortfoliosSlug, getPortfolioItem } from "../../lib/data";

export async function getStaticPaths() {
  const { portfolios } = await getAllPortfoliosSlug();

  return {
    paths: portfolios.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  const portfolioItem = await getPortfolioItem(params.slug);
  return {
    props: {
      portfolioItem: portfolioItem.portfolios[0],
    },
  };
};

export default function Home({ portfolioItem }) {
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
