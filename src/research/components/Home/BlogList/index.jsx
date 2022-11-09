import React from "react";
import { BlogItem } from "./BlogItem";
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
  margin-top: 20px;
`;

const Item = styled.div``;
