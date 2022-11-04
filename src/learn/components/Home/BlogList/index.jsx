import React from "react";
import BlogItem from "./BlogItem";
import styled from "styled-components";

const BlogList = ({ blogs }) => {
  return (
    <List>
      {blogs.map((blog) => (
        <BlogItem blog={blog} />
      ))}
    </List>
  );
};

export default BlogList;

const List = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Item = styled.div`
  list-style: none;
  flex: 0 0 33.333333%;
`;
