import { GraphQLClient, gql } from "graphql-request";

export const getPageData = async () => {
  const endpoint = `${process.env.ENDPOINT}`;

  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
    {
      portfolios {
        content
        slug
        tags
        title
        description
      }
      posts {
        slug
        tags
        title
        description
        content
      }
    }
  `;
  return await graphQLClient.request(query);
  /*  console.log(JSON.stringify(data, undefined, 2)); */
};

export const getPortfolioItems = async () => {
  const endpoint = `${process.env.ENDPOINT}`;

  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
    {
      portfolios {
        content
        slug
        tags
        title
        description
      }
    }
  `;
  return await graphQLClient.request(query);
  /*  console.log(JSON.stringify(data, undefined, 2)); */
};

export const getPostItems = async () => {
  const endpoint = `${process.env.ENDPOINT}`;

  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
    {
      posts {
        slug
        tags
        title
        description
        content
      }
    }
  `;
  return await graphQLClient.request(query);
  /*  console.log(JSON.stringify(data, undefined, 2)); */
};

export const getPortfolioItem = async (slug) => {
  const endpoint = `${process.env.ENDPOINT}`;

  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
    query MyQuery($slug: String!) {
      portfolios(where: { slug: $slug }) {
        description
        content
        title
      }
    }
  `;

  const variables = {
    slug,
  };
  return await graphQLClient.request(query, variables);
  /*  console.log(JSON.stringify(data, undefined, 2)); */
};

export const getBlogItem = async (slug) => {
  const endpoint = `${process.env.ENDPOINT}`;

  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
    query MyQuery($slug: String!) {
      posts(where: { slug: $slug }) {
        title
        description
        date
      }
    }
  `;

  const variables = {
    slug,
  };
  return await graphQLClient.request(query, variables);
  /*  console.log(JSON.stringify(data, undefined, 2)); */
};

export const getAllPostsSlug = async () => {
  const endpoint = `${process.env.ENDPOINT}`;

  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
    {
      posts {
        slug
      }
    }
  `;
  return await graphQLClient.request(query);
  /*  console.log(JSON.stringify(data, undefined, 2)); */
};

export const getAllPortfoliosSlug = async () => {
  const endpoint = `${process.env.ENDPOINT}`;

  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
    {
      portfolios {
        slug
      }
    }
  `;
  return await graphQLClient.request(query);
  /*  console.log(JSON.stringify(data, undefined, 2)); */
};
