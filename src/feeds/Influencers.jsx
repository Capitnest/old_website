import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { influencers } from "./influencers";

import { Layout } from "../components/Layout";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = influencers.find((blog) => blog.id === id);
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      <Layout>{blog.name}</Layout>
    </>
  );
};

export default Blog;
