import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const NavLink = styled(Link)`
  text-decoration: none;
  color: #666;
  padding: 1rem 2rem;
  :hover {
    color: #000;
  }

  &.title {
    font-size: 3rem;
    font-weight: 300;
  }

  @media (max-width: 700px) {
    padding: 1rem;
  }
`;

const Header = () => (
  <header
    css={css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 2rem;
      padding: 1rem 2rem;
      border-bottom: 1px solid #eee;

      @media (max-width: 700px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1.6rem;
        padding: 1rem;
      }
    `}
  >
    <NavLink className="title">max euler</NavLink>
    <nav
      css={css`
        display: flex;
        vertical-align: center;
        justify-content: space-around;

        @media (max-width: 700px) {
          width: 100%;
        }
      `}
    >
      <NavLink>projects</NavLink>
      <NavLink>about</NavLink>
      <NavLink>blog</NavLink>
      <NavLink>contact</NavLink>
    </nav>
  </header>
);

export default Header;
