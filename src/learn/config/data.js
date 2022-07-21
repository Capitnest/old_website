import styled from "styled-components";

const Bold = styled.span`
  font-weight: bold;
`;

const SmallTitle = styled.h1`
  font-weight: bold;
  font-size: 22px;
`;

const BigTitle = styled.h1`
  font-weight: bold;
  font-size: 30px;
`;

const Italic = styled.span`
  font-style: italic;
`;

export const blogList = [
  {
    id: "the-ethereum-merge",
    title: "GUIDE: The Ethereum Merge",
    topic: "security",
    author: "Timnik",
    authorUsername: "timnik",
    date: "14 July 2022",
    time: "6",
    imageSource: "cointelegraph.com",
    description: (
      <>
        A lot of people in the crypto world now hearded about{" "}
        <Bold>The Ethereum Merge</Bold>, but many still don't know what it
        means. Here is a simple explanation and breakdown of Ethereum's plans.
      </>
    ),
    text: (
      <>
        <BigTitle>What is The Ethereum Merge?</BigTitle>
        <br />
        The Ethereum Merge is multi-phased upgrade to the existing Ethereum
        blockchain, in Ethereum’s own words is designed for:
        <br />
        <br />
        <Italic>
          "Upgrading Ethereum to radical new heights…The vision is to bring
          Ethereum into the mainstream and serve all of humanity, we have to
          make Ethereum more scalable, secure and sustainable."
        </Italic>
        <br />
        <br />
        <SmallTitle>Why Ethereum upgrades his blockchain?</SmallTitle>
        <br />
        From 2015, when Ethereum was launched, to now, Ethereum has seen a lot
        of success, but from the start, it's been expected that a few upgrades
        to the blockchain will be necessary for the network to reach its full
        potential.
        <br />
        <br />
        The recently crypto-boom created a high demand for the blockchain and
        bringed more new users. This drived the transaction fees (gas fees) up
        and caused congestion on Ethereum. This means that right now, ETH
        transactions are extremely expensive and slow.
        <br />
        <br />
        Another problem of the current version of Ethereum is that the
        proof-of-work consensus mechanism, that is currently validating ETH
        transactions & keeps the network secure has a bad environmental impact.
        <br />
        <br />
        This upgrade plans to fix these problems and make the network more
        scalable, secure, and environmentally friendly.
        <br />
        <br />
        <BigTitle>Let's take a closer look at the future of Ethereum</BigTitle>
        <br />
        <SmallTitle>More environmentally friendly & sustainable</SmallTitle>
        <br />
        As part of what's known as 'The Merge', Ethereum will switch from
        proof-of-work to a proof-of-stake mechanism, which will more
        energy-eficient and better for the environment.
        <br />
        <br />
        With the current proof-of-work mechanism, transactions are processed by
        a network of computers that solve mathematical puzzles, in return for
        rewards in ETH. This mechanism is unfortunately, extremly
        energy-intesive and involves a lot of unnecessary computation work.
      </>
    ),
    cover: "/images/learn/ethereum_merge.jpeg",
  },
  {
    id: "how-crypto-gets-stooolen-and-how-protect-your-crypto",
    title: "How Crypto gets vdsvsdstolen and how to protect your crypto",
    topic: "security",
    time: "6",
    shortDescription: (
      <>
        Finitism is a philosophy of mathematics that accepts the existence only
        of finite mathematical objects. It is best understood in comparison to
        the mainstream philosophy of mathematics where infinite mathematical
        objects (e.g., infinite sets) are accepted as legitimate.
      </>
    ),
    description: <></>,
    cover:
      "/images/learn/how-crypto-gets-stolen-and-how-to-protect-your-crypto.png",
  },
  {
    id: "how-crypto-gets-stooolen-and-how-protect-your-crypto",
    title: "How Crypto gets vdsvsdstolen and how to protect your crypto",
    topic: "security",
    time: "6",
    shortDescription: (
      <>
        Finitism is a philosophy of mathematics that accepts the existence only
        of finite mathematical objects. It is best understood in comparison to
        the mainstream philosophy of mathematics where infinite mathematical
        objects (e.g., infinite sets) are accepted as legitimate.
      </>
    ),
    description: <></>,
    cover:
      "/images/learn/how-cryvdsvdsvpto-gets-stolen-and-how-to-protect-your-crypto.png",
  },
];
