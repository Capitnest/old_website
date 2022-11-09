import styled from "styled-components";

const Bold = styled.span`
  font-weight: bold;
`;

const SmallTitle = styled.h1`
  font-weight: bold;
  font-size: 20px;
  font-weight: 600;
`;

const BigTitle = styled.h1`
  font-weight: bold;
  font-size: 24px;
`;

const Italic = styled.span`
  font-style: italic;
`;

const Content = styled.div`
  ul {
    margin-left: 20px;
  }

  p {
    font-size: 18px;
  }
`;

export const blogList = [
  {
    id: "ethereum-the-merge",
    title: "Ethereum: The Merge",
    tags: ["technical-analysis"],
    author: "Timnik",
    authorId: "timnik",
    authorUsername: "Timnik",
    authorName: "timnik",
    isVerified: true,
    date: "21 Sep 2022",
    imageSource: "",
    notionId: "def2748f4d3b416a91c0b5155505d475",
    description: <></>,
    text: <></>,
    cover: "/images/research/ethereum-the-merge.jpg",
  },
];
