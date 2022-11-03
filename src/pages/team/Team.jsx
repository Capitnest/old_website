import React from "react";
import { Layout } from "../../components/Layout";
import { members } from "./members";
import styled from "styled-components";
import Footerr from "../../components/Footer";
import { Link } from "react-router-dom";

export default function Team() {
  return (
    <>
      <Layout>
        <Text>
          <h2>Meet Our Team</h2>
        </Text>

        <div style={{ display: "flex", justifyContent: "center" }}>
          {members.map((member) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                flexWrap: "wrap",
                marginRight: "10px",
                marginLeft: "10px",
              }}
            >
              <Image>
                <img src={member.profilePic} alt="avatar" />
              </Image>

              <Text>
                <Link to={`/team/${member.id}`}>
                  <h1>{member.username}</h1>
                </Link>

                <p>{member.position}</p>
              </Text>
            </div>
          ))}
        </div>
      </Layout>
      <Footerr />
    </>
  );
}

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

  h2 {
    text-align: center;
    margin-top: 20px;
    font-size: 45px;
    font-weight: 900;
    font-family: "Inter", sans-serif;
    margin-bottom: 40px;
  }
`;
