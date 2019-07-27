import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { css } from '@emotion/core';
import Img from 'gatsby-image';
import useSiteMetadata from '../hooks/use-siteMetadata';

const Footer = () => {
  const { author } = useSiteMetadata();

  const { github, xing, linkedin } = useStaticQuery(graphql`
    query {
      github: file(relativePath: { eq: "github.png" }) {
        childImageSharp {
          fluid(maxWidth: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      xing: file(relativePath: { eq: "xing.png" }) {
        childImageSharp {
          fluid(maxWidth: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      linkedin: file(relativePath: { eq: "linkedin.png" }) {
        childImageSharp {
          fluid(maxWidth: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <footer
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #eee;
        background: #eee;
        padding: 1rem 3rem;

        p {
          font-size: 2rem;
          font-weight: 200;
        }

        @media (max-width: 700px) {
          flex-direction: column-reverse;
          > * {
            margin: 0;
          }
        }
      `}
    >
      <p>created by {author} © 2019</p>
      <section
        css={css`
          display: flex;
          > * {
            width: 40px;
            height: 40px;
            margin: 1rem 2rem;
            &:last-child {
              margin-right: 0;
            }
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
      </section>
    </footer>
  );
};

export default Footer;
