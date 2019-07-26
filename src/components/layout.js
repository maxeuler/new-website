import React from 'react';
import { Global, css } from '@emotion/core';
import Header from './header';

const Layout = ({ children }) => (
  <>
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
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
          color: #555;
        }
        main {
          max-width: 1300px;
          margin: 0 auto;
        }
      `}
    ></Global>
    <Header></Header>
    <main>{children}</main>
  </>
);

export default Layout;
