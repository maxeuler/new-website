import React from 'react';
import { css } from '@emotion/core';
import Img from 'gatsby-image';
import useSocialIcons from '../hooks/use-socialIcons';

const ContactCard = () => {
  const { github, xing, linkedin } = useSocialIcons();
  return (
    <article
      css={css`
        max-width: 700px;
        margin: 8rem auto;
        display: grid;
        grid-auto-rows: 1fr 1fr;
        border: 1px solid #eee;
        box-shadow: 1px 1px 4px 2px #eee;
        h3 {
          text-align: center;
          font-size: 5rem;
          font-weight: 300;
        }
        span {
          color: #5b0931;
          font-weight: 400;
        }
      `}
    >
      <h3>
        feel free to <span>contact</span> me 🤝
      </h3>
      <div
        css={css`
          display: flex;
          justify-content: space-around;
          align-items: center;
          > * {
            width: 40px;
            height: 40px;
          }
        `}
      >
        <a
          href="https://github.com/maxeuler"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img fluid={github.childImageSharp.fluid}></Img>
        </a>
        <a
          href="https://www.xing.com/profile/Max_Euler4/cv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img fluid={xing.childImageSharp.fluid}></Img>
        </a>
        <a
          href="https://www.linkedin.com/in/max-euler-79933218a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img fluid={linkedin.childImageSharp.fluid}></Img>
        </a>
      </div>
    </article>
  );
};

export default ContactCard;
