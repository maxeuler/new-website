import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import useSocialIcons from '../hooks/use-socialIcons';

const Landing = () => {
  var { js, react, node, salesforce } = useSocialIcons();

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 3rem 0;
        margin-top: 1rem;
        height: 75vh;

        .icon {
          width: 100px;
          height: 100px;
          /* TODO logo rot */
          @media (max-width: 700px) {
            width: 50px;
            height: 50px;
          }
        }
      `}
    >
      <h1
        css={css`
          font-size: 12rem;
          font-weight: 300;
          text-align: center;
          margin: 0;
          user-select: none;
          @media (max-width: 700px) {
            font-size: 10rem;
          }
        `}
      >
        hello. 👋🏼
      </h1>
      <p
        css={css`
          margin: 0;
          font-size: 5rem;
          text-align: center;
          font-weight: 300;
          user-select: none;
          span {
            color: #5b0931;
            font-weight: 600;
          }
          @media (max-width: 700px) {
            margin-bottom: 0rem;
          }
        `}
      >
        i'm <span>max</span>, web developer.
      </p>
      <article
        css={css`
          width: 60%;
          display: flex;
          justify-content: space-around;
          margin: 2rem auto;
          user-select: none;
        `}
      >
        <Img className="icon" fluid={js.childImageSharp.fluid}></Img>
        <Img className="icon" fluid={node.childImageSharp.fluid}></Img>
        <Img className="icon" fluid={react.childImageSharp.fluid}></Img>
        <Img className="icon" fluid={salesforce.childImageSharp.fluid}></Img>
      </article>
      <Link
        to="/projects"
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
        projects
      </Link>
    </div>
  );
};

export default Landing;
