/* eslint-disable react/display-name */
import React from 'react';
import { graphql, Link } from 'gatsby';
import { css } from '@emotion/core';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
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
}) => {
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const alt = node.data.target.fields.title['en-US'];
        const { url } = node.data.target.fields.file['en-US'];

        return <img alt={alt} src={url} />;
      },
    },
  };
  return (
    <Layout>
      <article
        css={css`
          max-width: 700px;
          margin: 4rem auto;
          margin-bottom: 8rem;
          font-size: 1.8rem;
          line-height: 1.5;
          user-select: none;

          h1 {
            font-size: 5rem;
            font-weight: 300;
            margin: 0;
          }
          h4 {
            margin: 0;
            font-weight: 200;
            text-align: right;
            font-style: italic;
          }
          p {
            text-align: justify;
            font-weight: 300;
          }
        `}
      >
        <Link
          to="/blog"
          css={css`
            text-decoration: none;
            color: #555;
            margin: 0;
            font-weight: 300;
            :hover {
              color: #5b0931;
            }
          `}
        >
          &larr; back
        </Link>
        <h4>{publishedDate}</h4>
        <h1>{title}</h1>
        <hr />
        {documentToReactComponents(body.json, options)}
      </article>
    </Layout>
  );
};

export default Blog;
