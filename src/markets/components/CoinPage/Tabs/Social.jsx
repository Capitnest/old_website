import React from "react";
import {
  Flex,
  Box,
  Wrap,
  Center,
  Hide,
  Show,
  useColorMode,
} from "@chakra-ui/react";
import NumberFormat from "react-number-format";
import { BsTwitter, BsReddit, BsTelegram, BsFacebook } from "react-icons/bs";

export default function Social(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const coins = props.data;

  // choose the border color
  function borderClr() {
    if (colorMode == "light") {
      return "rgba(0, 0, 0, 0.80)";
    } else {
      return "rgba(0, 0, 0, 0.24)";
    }
  }

  // choose the background color
  function backgroundClr() {
    if (colorMode == "light") {
      return "rgba(0, 0, 0, 0.08)";
    } else {
      return "#2D3748";
    }
  }

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

      {/* Desktop Desgin */}
      <Hide breakpoint="(max-width: 650px)">
        <Wrap>
          <Box
            padding="10px"
            borderWidth="2px"
            borderRadius="12px"
            width="180px"
            borderColor={borderClr}
            backgroundColor={backgroundClr}
          >
            <Flex flexDirection="column" textAlign="center">
              <Center>
                <BsFacebook size={50} />
              </Center>
              <p>Facebook Likes</p>
              <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                {coins.community_data.facebook_likes === null ? (
                  <p>-</p>
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
            width="180px"
            borderColor={borderClr}
            backgroundColor={backgroundClr}
          >
            <Flex flexDirection="column" textAlign="center">
              <Center>
                <BsTwitter size={50} />
              </Center>
              <p>Twitter Followers</p>
              <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                {coins.community_data.twitter_followers === null ? (
                  <p>-</p>
                ) : (
                  <NumberFormat
                    thousandSeparator={true}
                    value={coins.community_data.twitter_followers}
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
            width="180px"
            borderColor={borderClr}
            backgroundColor={backgroundClr}
          >
            <Flex flexDirection="column" textAlign="center">
              <Center>
                <BsReddit size={50} />
              </Center>
              <p>Reddit Average Posts 48h</p>
              <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                {coins.community_data.reddit_average_posts_48h === null ? (
                  <p>-</p>
                ) : (
                  <NumberFormat
                    thousandSeparator={true}
                    value={coins.community_data.reddit_average_posts_48h}
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
            width="180px"
            borderColor={borderClr}
            backgroundColor={backgroundClr}
          >
            <Flex flexDirection="column" textAlign="center">
              <Center>
                <BsReddit size={50} />
              </Center>
              <p>Reddit Average Comments 48h</p>
              <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                {coins.community_data.reddit_average_comments_48h === null ? (
                  <p>-</p>
                ) : (
                  <NumberFormat
                    thousandSeparator={true}
                    value={coins.community_data.reddit_average_comments_48h}
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
            width="180px"
            borderColor={borderClr}
            backgroundColor={backgroundClr}
          >
            <Flex flexDirection="column" textAlign="center">
              <Center>
                <BsReddit size={50} />
              </Center>
              <p> Reddit Subscribers</p>
              <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                {coins.community_data.reddit_subscribers === null ? (
                  <p>-</p>
                ) : (
                  <NumberFormat
                    thousandSeparator={true}
                    value={coins.community_data.reddit_subscribers}
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
            width="180px"
            borderColor={borderClr}
            backgroundColor={backgroundClr}
          >
            <Flex flexDirection="column" textAlign="center">
              <Center>
                <BsReddit size={50} />
              </Center>
              <p> Reddit Accounts Active 48h </p>
              <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                {coins.community_data.reddit_accounts_active_48h === null ? (
                  <p>-</p>
                ) : (
                  <NumberFormat
                    thousandSeparator={true}
                    value={coins.community_data.reddit_accounts_active_48h}
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
            width="180px"
            borderColor={borderClr}
            backgroundColor={backgroundClr}
          >
            <Flex flexDirection="column" textAlign="center">
              <Center>
                <BsTelegram size={50} />
              </Center>
              <p> Telegram Members </p>
              <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                {coins.community_data.telegram_channel_user_count === null ? (
                  <p>-</p>
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
      </Hide>

      {/* Mobile Desgin */}
      <Show breakpoint="(max-width: 650px)">
        <Flex flexDirection="column">
          <Flex>
            <Box
              padding="10px"
              borderWidth="2px"
              borderTopLeftRadius="12px"
              width="50%"
              borderColor={borderClr}
              backgroundColor={backgroundClr}
            >
              <Flex flexDirection="column" textAlign="center">
                <Center>
                  <BsFacebook size={50} />
                </Center>
                <p>Facebook Likes</p>
                <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                  {coins.community_data.facebook_likes === null ? (
                    <p>-</p>
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
              borderTopRightRadius="12px"
              width="50%"
              borderColor={borderClr}
              backgroundColor={backgroundClr}
            >
              <Flex flexDirection="column" textAlign="center">
                <Center>
                  <BsTwitter size={50} />
                </Center>
                <p>Twitter Followers</p>
                <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                  {coins.community_data.twitter_followers === null ? (
                    <p>-</p>
                  ) : (
                    <NumberFormat
                      thousandSeparator={true}
                      value={coins.community_data.twitter_followers}
                      displayType="text"
                      decimalScale={1}
                    />
                  )}
                </p>
              </Flex>
            </Box>
          </Flex>

          <Flex>
            <Box
              padding="10px"
              borderWidth="2px"
              width="50%"
              borderColor={borderClr}
              backgroundColor={backgroundClr}
            >
              <Flex flexDirection="column" textAlign="center">
                <Center>
                  <BsReddit size={50} />
                </Center>
                <p>Reddit Average Posts 48h</p>
                <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                  {coins.community_data.reddit_average_posts_48h === null ? (
                    <p>-</p>
                  ) : (
                    <NumberFormat
                      thousandSeparator={true}
                      value={coins.community_data.reddit_average_posts_48h}
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
              width="50%"
              borderColor={borderClr}
              backgroundColor={backgroundClr}
            >
              <Flex flexDirection="column" textAlign="center">
                <Center>
                  <BsReddit size={50} />
                </Center>
                <p>Reddit Average Comments 48h</p>
                <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                  {coins.community_data.reddit_average_comments_48h === null ? (
                    <p>-</p>
                  ) : (
                    <NumberFormat
                      thousandSeparator={true}
                      value={coins.community_data.reddit_average_comments_48h}
                      displayType="text"
                      decimalScale={1}
                    />
                  )}
                </p>
              </Flex>
            </Box>
          </Flex>
          <Flex>
            <Box
              padding="10px"
              borderWidth="2px"
              width="50%"
              borderColor={borderClr}
              backgroundColor={backgroundClr}
            >
              <Flex flexDirection="column" textAlign="center">
                <Center>
                  <BsReddit size={50} />
                </Center>
                <p> Reddit Subscribers</p>
                <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                  {coins.community_data.reddit_subscribers === null ? (
                    <p>-</p>
                  ) : (
                    <NumberFormat
                      thousandSeparator={true}
                      value={coins.community_data.reddit_subscribers}
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
              width="50%"
              borderColor={borderClr}
              backgroundColor={backgroundClr}
            >
              <Flex flexDirection="column" textAlign="center">
                <Center>
                  <BsReddit size={50} />
                </Center>
                <p> Reddit Accounts Active 48h </p>
                <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                  {coins.community_data.reddit_accounts_active_48h === null ? (
                    <p>-</p>
                  ) : (
                    <NumberFormat
                      thousandSeparator={true}
                      value={coins.community_data.reddit_accounts_active_48h}
                      displayType="text"
                      decimalScale={1}
                    />
                  )}
                </p>
              </Flex>
            </Box>
          </Flex>

          <Box
            padding="10px"
            borderWidth="2px"
            borderBottomLeftRadius="12px"
            width="100%"
            borderColor={borderClr}
            backgroundColor={backgroundClr}
          >
            <Flex flexDirection="column" textAlign="center">
              <Center>
                <BsTelegram size={50} />
              </Center>
              <p> Telegram Members </p>
              <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                {coins.community_data.telegram_channel_user_count === null ? (
                  <p>-</p>
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
        </Flex>
      </Show>
    </>
  );
}
