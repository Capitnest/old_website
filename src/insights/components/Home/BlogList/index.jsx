import React from "react";
import BlogItem from "./BlogItem";
import styled from "styled-components";

const BlogList = ({ blogs }) => {
  return (
    <List>
      {blogs.map((blog) => (
        <Item>
          <BlogItem blog={blog} />
        </Item>
      ))}
    </List>
  );
};

export default BlogList;

const List = styled.div`
  display: flex;
  padding-left: 0;
  list-style: none;
  flex: 0 0 33.333333%;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Item = styled.div`
  list-style: none;
  flex: 0 0 33.333333%;
`;
