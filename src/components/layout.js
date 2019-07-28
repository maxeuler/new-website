import React from 'react';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet';
import Header from './header';
import Footer from './footer';
import useSiteMedata from '../hooks/use-siteMetadata';

const Layout = ({ children }) => {
  const { title } = useSiteMedata();

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      `}
    >
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          *:before,
          *:after {
            box-sizing: inherit;
          }
          html,
          body {
            margin: 0;
            padding: 0;
            font-size: 10px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Helvetica, Arial, sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji', 'Segoe UI Symbol';
            color: #555;
          }
          main {
            max-width: 1300px;
            margin: 0 auto;
          }
        `}
      ></Global>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <section
        css={css`
          flex-grow: 1;
        `}
      >
        <Header></Header>
        <main
          css={css`
            max-width: 90%;
          `}
        >
          {children}
        </main>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
