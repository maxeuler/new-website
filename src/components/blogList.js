import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { css } from '@emotion/core';

const BlogList = () => {
  var {
    allContentfulBlogPost: { edges },
  } = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(fromNow: true)
          }
        }
      }
    }
  `);

  return (
    <ol
      css={css`
        list-style: none;
        max-width: 600px;
        margin: 2rem auto;
      `}
    >
      {edges.map(post => (
        <li
          key={post.node.slug}
          css={css`
            border: 1px solid #eee;
            box-shadow: 1px 1px 4px 2px #eee;
            margin: 2rem 0;
            :hover {
              background: #eee;
            }
          `}
        >
          <Link
            to={`/blog/${post.node.slug}`}
            css={css`
              text-decoration: none;
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin: 0;
              padding: 2rem;
              h3 {
                font-size: 3rem;
                font-weight: 300;
                color: #5b0931;
                margin: 0;
              }
              p {
                margin: 0;
                padding: 1rem 0;
              }
            `}
          >
            <div>
              <h3>{post.node.title}</h3>
              <p>{post.node.publishedDate}</p>
            </div>
            <p
              css={css`
                font-size: 2rem;
              `}
            >
              &rarr;
            </p>
          </Link>
        </li>
      ))}
    </ol>
  );
};

export default BlogList;
