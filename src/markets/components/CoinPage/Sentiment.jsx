import React from "react";

import {
  Flex,
  Box,
  Slider,
  SliderTrack,
  SliderThumb,
  SliderFilledTrack,
} from "@chakra-ui/react";

export default function Sentiment(props) {
  const coins = props.data;

  return (
    <>
      {coins.sentiment_votes_up_percentage !== null ? (
        <>
          <h1
            style={{
              fontSize: "22px",
              fontWeight: 700,
              marginBottom: "10px",
              marginTop: "20px",
            }}
          >
            Today's {coins.name} Sentiment
          </h1>

          <div style={{ marginBottom: "20px" }}>
            <Flex justifyContent="space-between" width="100%">
              <p>👍 Good</p>
              <p>Bad 👎</p>
            </Flex>

            <Slider
              marginTop="0px"
              defaultValue={coins.sentiment_votes_up_percentage}
              min={0}
              max={100}
              disabled
            >
              <SliderTrack bg="rgb(245, 0, 87)">
                <Box position="relative" right={10} />
                <SliderFilledTrack bg="rgb(4, 209, 146)" />
              </SliderTrack>
              <SliderThumb boxSize={2} />
            </Slider>

            <Flex justifyContent="space-between" width="100%">
              <p>{coins.sentiment_votes_up_percentage}%</p>
              <p>{coins.sentiment_votes_down_percentage}%</p>
            </Flex>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
