import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';

const Project = () => {
  const { allProjectsJson, allImageSharp } = useStaticQuery(graphql`
    query {
      allProjectsJson {
        nodes {
          name
          description
          image
          git_url
          demo_url
          stack
        }
      }
      allImageSharp {
        nodes {
          fluid {
            originalName
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const ProjectCard = styled('article')`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 300px;
    margin: 5rem auto;
    max-width: 1000px;
    border: 1px solid #eee;
    box-shadow: 1px 1px 4px 2px #eee;
    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 0 2rem;
    }
    h3 {
      font-size: 4rem;
      font-weight: 300;
      margin: 2rem 0;
    }
    p {
      font-weight: 300;
      font-size: 1.8rem;
      flex-grow: 1;
    }
    a {
      font-size: 2rem;
      text-decoration: none;
      color: #555;
      font-weight: 300;
      padding-bottom: 2rem;
      margin: 0 auto;
      cursor: pointer;
      :hover {
        color: #000;
      }
    }
  `;

  return (
    <>
      {allProjectsJson.nodes.map(project => (
        <ProjectCard key={project.git_url}>
          <Image
            fluid={
              allImageSharp.nodes.find(
                image => image.fluid.originalName == project.image
              ).fluid
            }
          ></Image>
          <section className="content">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href="">GitHub</a>
          </section>
        </ProjectCard>
      ))}
    </>
  );
};

export default Project;
