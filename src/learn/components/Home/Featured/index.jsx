import { Hide } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import { Card } from "../../common/Card";

export function Featured() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Title>Trending Topics</Title>

      <Center>
        <Posts>
          <Card
            title="How crypto is being stolen"
            time="6"
            topic="security"
            img="/images/learn/how-crypto-gets-stolen-and-how-to-protect-your-crypto.png "
          />

          <Card
            title="How crypto is being stolenvdsvdsvdsvsd sdvs vds sdv sd vsd vds"
            time="6"
            topic="security"
            img="/images/learn/how-crypto-gets-stolen-and-how-to-protect-your-crypto.png "
          />

          <Hide breakpoint="(max-width: 850px)">
            <Card
              title="How crypto is being stolen"
              time="6"
              topic="security"
              img="/images/learn/how-crypto-gets-stolen-and-how-to-protect-your-crypto.png "
            />
          </Hide>
        </Posts>
      </Center>
    </>
  );
}

const Center = styled.div`
  @media (max-width: 580px) {
    display: flex;
    justify-content: center;
  }
`;

const Posts = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
    justify-content: space-between;
  }

  @media (max-width: 580px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  margin-top: 100px;
  margin: 10px;
`;
