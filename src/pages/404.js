import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import Layout from '../components/layout';

const NotFound = () => (
  <Layout>
    <div
      css={css`
        max-width: 900px;
        height: 50vh;
        margin: 0 auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
      `}
    >
      <h1
        css={css`
          font-size: 5rem;
          text-align: center;
          font-weight: 300;
          margin: 0;
        `}
      >
        Oooooooopppss 😮
      </h1>
      <p
        css={css`
          font-size: 2.5rem;
          font-weight: 300;
        `}
      >
        This page doesn't exist 🤷🏼‍♂️
      </p>
      <Link
        to="/"
        css={css`
          color: #555;
          text-decoration: none;
          font-size: 2.5rem;
          font-weight: 300;
          border: 1px solid #555;
          border-radius: 3px;
          padding: 1rem 2rem;
          :hover {
            color: #5b0931;
            border-color: #5b0931;
          }
        `}
      >
        👈🏼 🏃🏼‍♂️ Come back home
      </Link>
    </div>
  </Layout>
);

export default NotFound;
