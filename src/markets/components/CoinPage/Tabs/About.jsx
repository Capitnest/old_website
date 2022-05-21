import React from "react";
import { Stat, StatLabel, StatNumber, Wrap } from "@chakra-ui/react";
import { BsTwitter, BsReddit, BsFacebook } from "react-icons/bs";

export default function About(props) {
  const coins = props.data;

  return (
    <div>
      <h1
        style={{
          fontSize: "25px",
          fontWeight: "700",
          marginBottom: "10px",
          marginTop: "15px",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        About {coins.name}
      </h1>
      <Wrap marginTop="20px">
        <Stat>
          <StatLabel>Name</StatLabel>
          <StatNumber fontSize="18px">
            {coins.name} ({coins.symbol})
          </StatNumber>
        </Stat>

        <Stat>
          <StatLabel>Website</StatLabel>
          <StatNumber fontSize="18px">
            <a href={coins.links.homepage[0]} target="_blank">
              {coins.links.homepage[0]}
            </a>
          </StatNumber>
        </Stat>

        <Stat>
          <StatLabel>Forum</StatLabel>
          <StatNumber fontSize="18px">
            <a href={coins.links.official_forum_url[0]} target="_blank">
              {coins.links.official_forum_url[0]}
            </a>
          </StatNumber>
        </Stat>
      </Wrap>

      <Stat marginTop="20px">
        <StatLabel marginBottom="10px" fontSize="18px">
          Links
        </StatLabel>
        <StatNumber
          fontSize="15px"
          flexDirection="column"
          display="flex"
          color="#4299E1"
        >
          {coins.links.twitter_screen_name === "" ? (
            <></>
          ) : (
            <div style={{ display: "flex" }}>
              <BsTwitter size={20} style={{ marginRight: "5px" }} />
              <a
                href={`https://www.twitter.com/${coins.links.twitter_screen_name}`}
                target="_blank"
              >
                {`https://www.twitter.com/${coins.links.twitter_screen_name}`}
              </a>
            </div>
          )}

          {coins.links.facebook_username === "" ? (
            <></>
          ) : (
            <div style={{ display: "flex" }}>
              <BsFacebook size={20} style={{ marginRight: "5px" }} />
              <a
                href={`https://www.facebook.com/${coins.links.facebook_username}`}
                target="_blank"
              >
                {`https://www.facebook.com/${coins.links.facebook_username}`}
              </a>
            </div>
          )}

          {coins.links.subreddit_url === "" ? (
            <></>
          ) : (
            <div style={{ display: "flex" }}>
              <BsReddit size={20} style={{ marginRight: "5px" }} />
              <a href={coins.links.subreddit_url} target="_blank">
                {coins.links.subreddit_url}
              </a>
            </div>
          )}
        </StatNumber>
      </Stat>
    </div>
  );
}
