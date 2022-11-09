import React, { useEffect } from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import { categories } from "../../config/categories";
import { Link } from "react-router-dom";
import { Layout } from "./../../../components/Layout";
import { blogList } from "../../config/data";
import BlogList from "../../components/Home/BlogList";
import { Button } from "@chakra-ui/react";

export default function Explore() {
  useEffect(() => {
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");

    script1.src = "https://fast.wistia.com/embed/medias/kwcn7vgbt3.jsonp";
    script1.async = true;

    script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);
  }, []);

  return (
    <>
      <Layout>
        <Content>
          <Header>
            <Link to="/learn/articles">
              <img src="/images/learn/explore/articles.png" />
            </Link>

            <Link to="/learn/videos">
              <img src="/images/learn/explore/videos.png" />
            </Link>

            <Link to="/learn/courses">
              <img src="/images/learn/explore/courses.png" />
            </Link>
          </Header>

          <SectionHeader>
            <Link to="/learn/articles">
              <h1>Articles</h1>
            </Link>

            <Link to="/learn/articles">
              <Button colorScheme="green" fontSize="16px" padding="0px 12px">
                See More →
              </Button>
            </Link>
          </SectionHeader>

          {!blogList.length ? (
            <>Nothing</>
          ) : (
            <BlogList blogs={blogList.slice(0, 3)} />
          )}

          <h1>Videos</h1>

          <iframe
            src="//fast.wistia.net/embed/iframe/kwcn7vgbt3"
            allowtransparency="true"
            frameborder="0"
            scrolling="no"
            class="wistia_embed"
            name="wistia_embed"
            allowfullscreen
            mozallowfullscreen
            webkitallowfullscreen
            oallowfullscreen
            msallowfullscreen
            width="640"
            height="360"
          ></iframe>

          <h1>Courses</h1>
        </Content>
      </Layout>
    </>
  );
}

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 15px;

  a {
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  h1 {
    font-size: 24px;
    font-weight: 600;
    margin-top: 5px;
  }
`;

const Content = styled.span`
  font-family: "Inter", sans-serif;
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
