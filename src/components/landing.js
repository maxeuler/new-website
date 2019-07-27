import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const Landing = () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
  >
    <h1
      css={css`
        font-size: 14rem;
        font-weight: 300;
        text-align: center;
        margin-bottom: 0;
        @media (max-width: 700px) {
          font-size: 10rem;
        }
      `}
    >
      hello 👋🏼
    </h1>
    <p
      css={css`
        margin-top: 0;
        margin-bottom: 10rem;
        font-size: 5rem;
        text-align: center;
        font-weight: 300;

        @media (max-width: 700px) {
          margin-bottom: 5rem;
        }
      `}
    >
      i'm max, web developer
    </p>
    <Link
      css={css`
        color: #555;
        text-decoration: none;
        font-size: 2.5rem;
        font-weight: 300;
        border: 1px solid #555;
        border-radius: 3px;
        padding: 1rem 2rem;
        :hover {
          color: #000;
          border-color: #000;
        }
      `}
    >
      projects
    </Link>
  </div>
);

export default Landing;
