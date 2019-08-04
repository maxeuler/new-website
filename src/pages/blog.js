import React from 'react';
import Layout from '../components/layout';
import BlogList from '../components/blogList';

const Blog = () => (
  <Layout>
    <h1 className="pageTitle">blog ✍️</h1>
    <BlogList></BlogList>
  </Layout>
);

export default Blog;
