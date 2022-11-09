import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { blogList } from "../../config/data";
import Chip from "../../components/common/Chip";
import EmptyList from "../../components/common/EmptyList";
import "./styles.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Layout } from "../../../components/Layout";
import Footerr from "../../../components/Footer";
import styled from "styled-components";
import { Badge } from "@chakra-ui/react";
import { useColorMode, Flex, Avatar } from "@chakra-ui/react";
import { Ad } from "../../components/common/Ad";
import { NotionRenderer } from "react-notion";
import { MdVerified } from "react-icons/md";
import axios from "axios";

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import response from "./../../data/themerge.json";

const Blog = () => {
  const { id } = useParams();
  const { colorMode, toggleColorMode } = useColorMode();
  const [blog, setBlog] = useState(null);
  const [data, setData] = useState({});

  function colorTheme() {
    if (colorMode === "dark") {
      return "white";
    }
    return "black";
  }

  const NotionWhite = styled.div`
    color: white;

    * {
      color: ${colorTheme()};
    }
  `;

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === id);

    // axios
    //   .get(`https://notion-api.splitbee.io/v1/page/${blog.notionId}`)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // fetch(`https://notion-api.splitbee.io/v1/page/${blog.notionId}`)
    //   .then((res) => res.json())
    //   .then((data) => setData(data))
    //   .catch((rejected) => {
    //     console.log(rejected);
    //   });

    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      <Layout>
        <div style={{ height: "20px" }} />
        <Link
          to="/research"
          style={{ marginTop: "10px", fontFamily: "'Inter', sans-serif" }}
        >
          <span> &#8592;</span> <span>Go Back</span>
        </Link>
        {blog ? (
          <>
            <Helmet>
              <title>{blog.title} | Capitnest</title>
              <meta name="description" content={blog.description} />
              <meta property="og:image" content={blog.cover} />
            </Helmet>
            <header style={{ textAlign: "center" }}>
              <Header>
                <Badge colorScheme="green" fontSize="14px">
                  {blog.topic}
                </Badge>
                <h1>{blog.title}</h1>

                <Heade>
                  <Avatar
                    name={blog.authorUsername}
                    src={`/images/team/${blog.authorId}.png`}
                  />
                  <HeaderText>
                    <Flex>
                      <Link to={`/team/${blog.authorId}`}>
                        <h1 style={{ fontSize: "20px" }}>
                          {blog.authorUsername}
                        </h1>
                      </Link>
                      {blog.isVerified ? (
                        <MdVerified
                          style={{ marginLeft: "3px" }}
                          size="20"
                          color="#63b3ed"
                        />
                      ) : (
                        <></>
                      )}
                    </Flex>
                    <p>{blog.date}</p>
                  </HeaderText>
                </Heade>
              </Header>
              <Image>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src={blog.cover}
                    alt="cover"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </Image>
            </header>

            <NotionWhite>
              <NotionRenderer blockMap={response} style={{ color: "white" }} />
            </NotionWhite>
          </>
        ) : (
          <EmptyList />
        )}
      </Layout>
      <Footerr />
    </>
  );
};

const Heade = styled.div`
  margin-top: 20px;
  display: flex;

  h1 {
    font-family: "Inter", sans-serif;
    font-size: 10px;
    font-weight: 700;
  }

  p {
    font-family: "Inter", sans-serif;
    color: gray;
    font-weight: 600;
  }
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7px;
  margin-top: 2px;
`;

const Header = styled.div`
  h1 {
    font-family: "Inter", sans-serif;
    font-size: 40px;
    font-weight: bold;
  }

  margin-bottom: 20px;
`;

const Image = styled.div`
  img {
    width: 100%;
    object-fit: cover;
    height: 350px;
  }

  p {
    margin-top: 5px;
    font-family: "Inter", sans-serif;
    font-style: italic;
  }
`;

export default Blog;
