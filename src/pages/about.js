import React from 'react';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import AboutText from '../components/aboutText';

const About = () => (
  <Layout>
    <h1
      css={css`
        font-size: 5rem;
        font-weight: 300;
        text-align: center;
      `}
    >
      about 🙌🏼
    </h1>
    <AboutText></AboutText>
  </Layout>
);

export default About;
