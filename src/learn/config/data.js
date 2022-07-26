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
        <BigTitle>What is the Beacon Chain?</BigTitle>
        <br />
        The Beacon Chain is a new chain at the core of the ‘new’ Ethereum. It’s
        already live and launched back in 2020. This upgrade brought the
        proof-of-stake consensus mechanism and therefore staking to Ethereum,
        laying the basis for future upgrades.
        <br />
        <br />
        As we mentioned above, proof of stake is much more secure and
        environmentally friendly than the proof of work mechanism that the main
        Ethereum network still uses.
        <br />
        <br />
        With proof of stake, holders stake their ETH to validate transactions
        and create new blocks. The network rewards validators for processing
        transactions, but it also ‘slashes’ their stake if they try to attack
        it, ensuring good behaviour. Proof of stake, also makes it easier for
        more users and not just large miners to participate in the network.
        <br />
        <br />
        The Beacon Chain will eventually lead Ethereum’s new system and lays the
        foundation for the rest of Ethereum’s planned upgrades.
        <br />
        <br />
        Right now, the Beacon Chain exists separately from the main Ethereum
        network we use today. Holders can already stake their ETH on the Beacon
        Chain, but can’t currently do anything else on it. But eventually, the
        two chains will be ‘merged’ or connected so the main Ethereum network
        moves to the Beacon Chain. Once the ‘Merge’ is complete, Ethereum will
        no longer use proof of work.
        <br />
        <br />
        When the main Ethereum network has merged with the Beacon Chain, the
        next update will introduce what’s known as ‘shard chains’ to the
        network.
        <br />
        <br />
        <BigTitle>How does staking on The Beacon Chain actually work?</BigTitle>
        <br />
        As we mentioned above, the Beacon Chain is already live and runs
        parallel to the main Ethereum chain. (The main Ethereum network still
        currently uses the proof-of-work consensus mechanism). Right now, users
        can’t do anything but stake ETH on the Beacon Chain. However, holders
        can stake as much ETH as they like to become a validator and secure the
        Beacon Chain and earn rewards in returns.
        <br />
        <br />
        Note that at the moment, staking on Ethereum is a one-way street. Once
        you’ve staked your ETH, there’s no option to unstake it until The Merge
        is complete.
        <br />
        <br />
        Eventually, when the main Ethereum network merges with the Beacon Chain,
        stakers will help secure all of Ethereum.
        <br />
        <br />
        <BigTitle>What is the Merge?</BigTitle>
        <br />
        The existing main Ethereum chain will need to ‘merge’ with the Beacon
        Chain. This update will bring staking to the whole Ethereum network. It
        will also mark the end of energy-intensive Ethereum mining. This upgrade
        is known as The Merge and is expected in Q3/Q4 2022.
        <br />
        <br />
        Why the Merge? Well, the Merge will preserve the history and
        functionality of the old Ethereum network, while importantly switching
        its consensus mechanism from proof of work to proof of stake.
        <br />
        <br />
        Note that the Merge won’t resolve Ethereum’s scalability issues straight
        away. This is where the next upgrade comes in: sharding, which we’ll
        discuss below.
        <br />
        <br />
        <BigTitle>What do the upgrades mean for ETH holders?</BigTitle>
        <br />
        ETH holders don’t need to do anything to prepare for the upgrades. There
        is no ETH 2.0 token and your ETH won’t need changing or upgrading after
        the Merge. (Note: anything telling you otherwise is likely a scam, so be
        careful).
      </>
    ),
    cover: "/images/learn/ethereum_merge.jpeg",
  },
];
