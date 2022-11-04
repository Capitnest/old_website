import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import { categories } from "../../config/categories";
import { Link } from "react-router-dom";
import { Layout } from "./../../../components/Layout";
import { blogList } from "../../config/data";
import BlogList from "../../components/Home/BlogList";

export default function Explore() {
  return (
    <>
      <Layout>
        <Content>
          <Header>
            <img src="/images/learn/explore/articles.png" />

            <img src="/images/learn/explore/videos.png" />

            <img src="/images/learn/explore/courses.png" />
          </Header>

          <h1>Articles</h1>

          {!blogList.length ? (
            <>Nothing</>
          ) : (
            <BlogList blogs={blogList.slice(0, 3)} />
          )}

          <h1>Videos</h1>

          <h1>Courses</h1>
        </Content>
      </Layout>
    </>
  );
}

const Content = styled.span`
  font-family: "Inter", sans-serif;

  h1 {
    font-size: 24px;
    font-weight: 600;
    margin-top: 15px;
    margin-bottom: 10px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 320px;
    height: 160px;
    border-radius: 8px;
  }
`;
