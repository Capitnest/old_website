import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { members } from "./members";
import { Layout } from "../../components/Layout";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsGithub, BsTwitter, BsInstagram, BsMedium } from "react-icons/bs";

const TeamUser = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = members.find((blog) => blog.id === id);

    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <Layout>
      {blog === null ? (
        <>Couldn't find</>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Link to="/team" style={{ display: "flex", justifyContent: "left" }}>
            &#8592; See all the members of our team
          </Link>

          <Image>
            <img src={blog.profilePic} alt="avatar" />
          </Image>

          <Text>
            <h1>{blog.username}</h1>

            <p>{blog.position}</p>
          </Text>

          <SocialMedia>
            {blog.github === "" ? (
              <></>
            ) : (
              <a
                href={`https://www.github.com/${blog.github}`}
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub size={30} />
              </a>
            )}

            {blog.twitter === "" ? (
              <></>
            ) : (
              <a
                href={`https://www.twitter.com/${blog.twitter}`}
                target="_blank"
                rel="noreferrer"
              >
                <BsTwitter size={30} />
              </a>
            )}

            {blog.instagram === "" ? (
              <></>
            ) : (
              <a
                href={`https://www.instagram.com/${blog.instagram}`}
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram size={30} />
              </a>
            )}

            {blog.medium === "" ? (
              <></>
            ) : (
              <a
                href={`https://www.medium.com/@${blog.medium}`}
                target="_blank"
                rel="noreferrer"
              >
                <BsMedium size={30} />
              </a>
            )}
          </SocialMedia>
        </div>
      )}
    </Layout>
  );
};

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  a {
    margin-right: 4px;
    margin-left: 4px;
  }
`;

const Image = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 150px;
    border-radius: 50%;
  }
`;

const Text = styled.div`
  h1 {
    margin-top: 10px;
    font-size: 22px;
    font-weight: bold;
    font-family: "Inter", sans-serif;
  }

  p {
    margin-top: 5px;
  }
`;

export default TeamUser;
