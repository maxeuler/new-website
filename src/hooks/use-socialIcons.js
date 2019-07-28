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
    }
  `);

  return data;
};

export default useSocialIcons;
