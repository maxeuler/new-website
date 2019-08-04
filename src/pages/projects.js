import React from 'react';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import Project from '../components/project';

const Projects = () => (
  <Layout>
    <h1 className="pageTitle">projects 🚀</h1>
    <p
      css={css`
        font-size: 2rem;
        font-weight: 300;
        text-align: center;
      `}
    >
      no production ready applications, just stuff built with my stack to learn
      new things 💃🏼
    </p>
    <Project></Project>
  </Layout>
);

export default Projects;
