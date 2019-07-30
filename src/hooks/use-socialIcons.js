import { graphql, useStaticQuery } from 'gatsby';

const useSocialIcons = () => {
  const data = useStaticQuery(graphql`
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
      js: file(relativePath: { eq: "js.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      react: file(relativePath: { eq: "react.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      node: file(relativePath: { eq: "node.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return data;
};

export default useSocialIcons;
