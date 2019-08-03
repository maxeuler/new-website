import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const NavLink = styled(Link)`
  text-decoration: none;
  color: #666;
  /* spadding: 0 2rem; */
  padding: 2rem;
  height: 100%;
  position: relative;

  :after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #5b0931;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  :hover:after {
    width: 100%;
    left: 0;
  }

  :hover {
    color: #5b0931;
  }

  &.title {
    /* font-size: 3rem; */
    font-weight: 600;
  }

  &.active {
    color: #5b0931;
    :after {
      width: 100%;
      left: 0;
    }
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
    <NavLink to="/" className="title" activeClassName="active">
      max euler
    </NavLink>
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
      <NavLink to="/projects" activeClassName="active">
        projects
      </NavLink>
      <NavLink to="/about" activeClassName="active">
        about
      </NavLink>
      <NavLink to="/blog" activeClassName="active">
        blog
      </NavLink>
      <NavLink to="/contact" activeClassName="active">
        contact
      </NavLink>
    </nav>
  </header>
);

export default Header;
