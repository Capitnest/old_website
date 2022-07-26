import React from "react";
import styled from "styled-components";
import { Wrap, Flex, useColorMode } from "@chakra-ui/react";
import Footer from "rc-footer";
import "rc-footer/assets/index.css";
import {
  BsTelegram,
  BsDiscord,
  BsInstagram,
  BsGithub,
  BsTwitter,
} from "react-icons/bs";

export default function Footerr() {
  const { colorMode, toggleColorMode } = useColorMode();

  // choose the background color in
  function backgroundClr() {
    if (colorMode == "light") {
      return "#e2e2e2";
    } else {
      return "rgb(18, 22, 31)";
    }
  }

  return (
    <Footer
      columns={[
        {
          title: "Account",
          items: [
            {
              title: "Dashboard",
              url: "/dashboard",
            },
            {
              title: "Profile",
              url: "/profile",
            },
            {
              title: "Forgot Password",
              url: "/forgot-password",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              title: "Manifesto",
              url: "/manifesto",
            },
            {
              title: "Advertise & Sponsors",
              url: "/advertise",
            },
            {
              title: "Team",
              url: "/team",
            },
            {
              title: "Contact Us",
              url: "/contact",
            },
          ],
        },
        {
          title: "Legal",

          items: [
            {
              title: "Terms & Conditions",
              url: "/terms.txt",
              openExternal: true,
            },
            {
              title: "Privacy",
              url: "/privacy.txt",
              openExternal: true,
            },
          ],
        },
        {
          icon: (
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
              alt="more products"
            />
          ),
          title: "Follow Us",
          items: [
            // {
            //   icon: (
            //     <img
            //       src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fendix-expo.com%2Fwp-content%2Fuploads%2F2020%2F12%2Fdiscord-white-icon-13.png&f=1&nofb=1"
            //       alt="discord"
            //     />
            //   ),
            //   title: "Discord",
            //   url: "https://discord.gg/6rmB5W8Wuq",
            //   openExternal: true,
            // },
            {
              icon: <BsTelegram size={25} />,
              title: "Telegram",
              url: "https://t.me/+avFFPwsc6b01N2Zk",
              openExternal: true,
            },
            {
              icon: <BsTwitter size={25} />,
              title: "Twitter",
              url: "https://www.twitter.com/thecapitnest",
              openExternal: true,
            },
            {
              icon: <BsInstagram size={25} />,
              title: "Instagram",
              url: "https://www.instagram.com/capitnest",
              openExternal: true,
            },
            {
              icon: <BsGithub size={25} />,
              title: "Github",
              url: "https://www.github.com/capitnest",
              openExternal: true,
            },
            {
              icon: (
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.eclipseeducation.com.au%2Fimages%2FTrustpilot_logo.png&f=1&nofb=1"
                  alt="discord"
                />
              ),
              title: "Trustpilot",
              url: "https://www.trustpilot.com/review/capitnest.com",
              openExternal: true,
            },
          ],
        },
      ]}
      title="Capitnest"
      backgroundColor={backgroundClr}
      bottom={
        <>
          © 2022 Capitnest.com | All rights reserved.
          <br />
          <br />
          Disclaimer: NOTHING ON THIS WEBSITE IS FINANCIAL NOR INVESTMENT
          ADVICE.
          <br /> Only you are responsible for any capital-related decisions you
          make and only you are accountable for the results.
        </>
      }
    />
  );
}

const Content = styled.div`
  display: flex;
  justify-content: center;

  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  position: relative;
  color: white;
  text-align: center;

  flex-direction: column;

  h1 {
    font-size: 18px;
    font-weight: 600;
  }
`;

const Image = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  margin-left: 10px;
  margin-top: 20px;
`;
