import React from "react";
import { Flex, Box, Wrap, Center } from "@chakra-ui/react";
import NumberFormat from "react-number-format";
import { BsTwitter, BsReddit, BsTelegram, BsFacebook } from "react-icons/bs";

export default function Social(props) {
  const coins = props.data;

  return (
    <>
      <h1
        style={{
          fontSize: "22px",
          fontWeight: 700,
          marginBottom: "10px",
          marginTop: "10px",
        }}
      >
        Social Statistics
      </h1>
      <Wrap>
        <Box
          padding="10px"
          borderWidth="2px"
          borderRadius="12px"
          maxWidth="180px"
        >
          <Flex flexDirection="column" textAlign="center">
            <Center>
              <BsFacebook size={50} />
            </Center>
            <p>Facebook Likes</p>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>
              {coins.community_data.facebook_likes === null ? (
                <p>?</p>
              ) : (
                <NumberFormat
                  thousandSeparator={true}
                  value={coins.community_data.facebook_likes}
                  displayType="text"
                  decimalScale={1}
                />
              )}
            </p>
          </Flex>
        </Box>
        <Box
          padding="10px"
          borderWidth="2px"
          borderRadius="12px"
          maxWidth="180px"
        >
          <Flex flexDirection="column" textAlign="center">
            <Center>
              <BsTwitter size={50} />
            </Center>
            <p>Twitter Followers</p>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>
              <NumberFormat
                thousandSeparator={true}
                value={coins.community_data.twitter_followers}
                displayType="text"
                decimalScale={1}
              />
            </p>
          </Flex>
        </Box>
        <Box
          padding="10px"
          borderWidth="2px"
          borderRadius="12px"
          maxWidth="180px"
        >
          <Flex flexDirection="column" textAlign="center">
            <Center>
              <BsReddit size={50} />
            </Center>
            <p>Reddit Average Posts 48h</p>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>
              <NumberFormat
                thousandSeparator={true}
                value={coins.community_data.reddit_average_posts_48h}
                displayType="text"
                decimalScale={1}
              />
            </p>
          </Flex>
        </Box>
        <Box
          padding="10px"
          borderWidth="2px"
          borderRadius="12px"
          maxWidth="180px"
        >
          <Flex flexDirection="column" textAlign="center">
            <Center>
              <BsReddit size={50} />
            </Center>
            <p>Reddit Average Comments 48h</p>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>
              <NumberFormat
                thousandSeparator={true}
                value={coins.community_data.reddit_average_comments_48h}
                displayType="text"
                decimalScale={1}
              />
            </p>
          </Flex>
        </Box>
        <Box
          padding="10px"
          borderWidth="2px"
          borderRadius="12px"
          maxWidth="180px"
        >
          <Flex flexDirection="column" textAlign="center">
            <Center>
              <BsReddit size={50} />
            </Center>
            <p> Reddit Subscribers</p>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>
              <NumberFormat
                thousandSeparator={true}
                value={coins.community_data.reddit_subscribers}
                displayType="text"
                decimalScale={1}
              />
            </p>
          </Flex>
        </Box>
        <Box
          padding="10px"
          borderWidth="2px"
          borderRadius="12px"
          maxWidth="180px"
        >
          <Flex flexDirection="column" textAlign="center">
            <Center>
              <BsReddit size={50} />
            </Center>
            <p> Reddit Accounts Active 48h </p>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>
              <NumberFormat
                thousandSeparator={true}
                value={coins.community_data.reddit_accounts_active_48h}
                displayType="text"
                decimalScale={1}
              />
            </p>
          </Flex>
        </Box>

        <Box
          padding="10px"
          borderWidth="2px"
          borderRadius="12px"
          maxWidth="180px"
        >
          <Flex flexDirection="column" textAlign="center">
            <Center>
              <BsTelegram size={50} />
            </Center>
            <p> Telegram Channels </p>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>
              {coins.community_data.telegram_channel_user_count === null ? (
                <p>0</p>
              ) : (
                <NumberFormat
                  thousandSeparator={true}
                  value={coins.community_data.telegram_channel_user_count}
                  displayType="text"
                  decimalScale={1}
                />
              )}
            </p>
          </Flex>
        </Box>
      </Wrap>
    </>
  );
}
