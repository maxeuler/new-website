import React, { useState } from 'react';
import axios from 'axios';
import { css } from '@emotion/core';

const AboutText = () => {
  var [advice, setAdvice] = useState('');
  async function getAdvice() {
    var res = await axios.get('https://api.adviceslip.com/advice');
    setAdvice(`"${res.data.slip.advice}"`);
  }

  return (
    <article
      css={css`
        font-size: 1.8rem;
        max-width: 800px;
        margin: 0 auto;
        line-height: 1.5;

        a {
          text-decoration: none;
          color: #555;
          font-weight: 700;
          :hover {
            color: #5b0931;
          }
        }
      `}
    >
      <p>
        I'm a student at{' '}
        <a
          href="https://www.thm.de/site/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Technische Hochschule Mittelhessen
        </a>
        , studying Computer Science. Furthermore I'm working as a{' '}
        <a
          href="https://www.salesforce.com/de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Salesforce
        </a>{' '}
        Developer at{' '}
        <a
          href="https://onivation.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Onivation
        </a>
      </p>
      <p>
        I love learning new JavaScript features, best practices, new tools and
        stay up to date on all the new web technologies.
      </p>
      <span
        css={css`
          display: flex;
          justify-content: center;
          button {
            background: none;
            border: none;
            font-size: 4rem;
            cursor: pointer;
            outline: none;
            :hover {
              animation: rotation 2s infinite linear;
            }
          }
        `}
      >
        <p>Want a random advice? Click this guy 👉🏼</p>
        <button type="button" onClick={getAdvice}>
          🙂
        </button>
      </span>
      <p
        css={css`
          text-align: center;
          color: #5b0931;
          font-style: italic;
        `}
      >
        {advice}
      </p>
    </article>
  );
};

export default AboutText;
