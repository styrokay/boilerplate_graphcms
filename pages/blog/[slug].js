import Head from "next/head";

import { getAllPostsSlug, getBlogItem } from "../../lib/data";

export const getStaticProps = async ({ params }) => {
  const blogItem = await getBlogItem(params.slug);
  return {
    props: {
      blogItem: blogItem.posts[0],
    },
  };
};

export async function getStaticPaths() {
  const { posts } = await getAllPostsSlug();

  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export default function Home({ blogItem }) {
  return (
    <div>
      <Head>
        <title>{blogItem.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{blogItem.title}</h1>
    </div>
  );
}
