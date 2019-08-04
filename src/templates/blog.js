import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(fromNow: true)
      body {
        json
      }
    }
  }
`;

const Blog = ({
  data: {
    contentfulBlogPost: { title, publishedDate, body },
  },
}) => (
  <Layout>
    <h1>{title}</h1>
    <p>{publishedDate}</p>
  </Layout>
);

export default Blog;
