import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Navbarr from "../components/Navbar/Navbarr";
import { auth, database } from "../firebase";
import styled from "styled-components";
import { Banner } from "../components/Articles/Banner";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [username, setUsername] = useState("");

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  useEffect(() => {
    if (auth.currentUser !== null) {
      database
        .ref("users/" + auth.currentUser.uid + "/username")
        .on("value", (snapshot) => {
          const data = snapshot.val();
          setUsername(data);
        });
    }
  }, []);

  return (
    <>
      <Navbarr />

      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Welcome>Welcome, {username}!</Welcome>
      </div>

      <Today>
        <TodayTitle>See What Happened Today</TodayTitle>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TodayArticles>
            <Banner
              title={"The price of Dogecoin Skyrockets"}
              description={
                "The price of dogecoin skyrocks because Tesla now accepts payments using dogecoin."
              }
              link={"/"}
              image={
                "https://www.tectalk.co/wp-content/uploads/2021/04/602d5f1231eb0600197c3c4b-scaled.jpg"
              }
            />
            <Banner
              title={"The price of Dogecoin Skyrockets"}
              description={
                "The price of dogecoin skyrocks because Tesla now accepts payments using dogecoin."
              }
              link={"/"}
              image={
                "https://www.tectalk.co/wp-content/uploads/2021/04/602d5f1231eb0600197c3c4b-scaled.jpg"
              }
            />
            <Banner
              title={"The price of Dogecoin Skyrockets"}
              description={
                "The price of dogecoin skyrocks because Tesla now accepts payments using dogecoin."
              }
              link={"/"}
              image={
                "https://www.tectalk.co/wp-content/uploads/2021/04/602d5f1231eb0600197c3c4b-scaled.jpg"
              }
            />
          </TodayArticles>
        </div>
      </Today>
    </>
  );
}

const TodayArticles = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Today = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
  margin-right: 10%;
  margin-left: 10%;
`;

const TodayTitle = styled.h1`
  font-family: "Inter", sans-serif;
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  color: rgb(73, 84, 90);
`;

const Welcome = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 45px;
  font-weight: 600;
  color: rgb(73, 84, 90);
`;
