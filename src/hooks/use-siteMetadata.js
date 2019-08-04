import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  var data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
