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
import { Ad } from "../../components/common/Ad";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === id);

    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      <Layout>
        <div style={{ height: "20px" }} />
        <Link
          to="/learn/articles"
          style={{ marginTop: "10px", fontFamily: "'Inter', sans-serif" }}
        >
          <span> &#8592;</span> <span>Go Back</span>
        </Link>
        {blog ? (
          <>
            <Helmet>
              <title>{blog.title} | Capitnest Learn</title>
              <meta name="description" content={blog.description} />

              <meta property="og:image" content={blog.cover} />
            </Helmet>
            <header style={{ textAlign: "center" }}>
              <Header>
                <Badge colorScheme="green" fontSize="14px">
                  {blog.topic}
                </Badge>
                <h1>{blog.title}</h1>
                <p>
                  by
                  <Link to={`/team/${blog.authorUsername}`}>
                    {" "}
                    {blog.author}
                  </Link>
                </p>
              </Header>
              <Image>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src={blog.cover}
                    alt="cover"
                    style={{ borderRadius: "10px" }}
                  />
                </div>

                {blog.imageSource !== null || blog.imageSource !== "" ? (
                  <>
                    <p style={{ textAlign: "center" }}>
                      Image source: {blog.imageSource}
                    </p>
                  </>
                ) : (
                  <></>
                )}
              </Image>
            </header>

            <Description>{blog.description}</Description>

            <Text>{blog.text}</Text>
          </>
        ) : (
          <EmptyList />
        )}
      </Layout>
      <Footerr />
    </>
  );
};

const Description = styled.p`
  margin-top: 50px;
  font-size: 18px;
  font-family: "Inter", sans-serif;
`;

const Text = styled.p`
  margin-top: 50px;
  font-size: 18px;
  font-family: "Inter", sans-serif;
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
    width: 700px;
  }

  p {
    margin-top: 5px;
    font-family: "Inter", sans-serif;
    font-style: italic;
  }
`;

export default Blog;
