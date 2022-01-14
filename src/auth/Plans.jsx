import React from "react";
import Navbarr from "../components/Navbar/Navbarr";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
import { PricingTable, PricingSlot, PricingDetail } from "react-pricing-tables";
import { Button, Nav } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Plans() {
  return (
    <>
      <Navbarr />
      <br />
      <div
        style={{
          marginRight: "20%",
          marginLeft: "20%",
          display: "flex",
          justifyContent: "center",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <Nav variant="tabs" defaultActiveKey="/signup/plans">
          <Nav.Item>
            <Nav.Link href="/signup/plans">Choose Your Plan</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/signup/monthly/create-account" disabled>
              Create a Account
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <Content>
        {/* Title of the Section - Choose Your Plan */}
        <Title>Choose Your Plan</Title>
        {/*
        <Pricing Table>
        */}
        <Cards>
          <MonthlyCard>
            <Label>1-Month Plan</Label>
            <Price>$1.99/mo</Price>
            <Description>$1.99 billed every month</Description>
            <Submit>
              <div style={{ marginTop: "10px" }}>
                <Button
                  style={{
                    backgroundColor: "#04d192",
                    borderColor: "#04d192",
                    fontFamily: "Inter, sans-serif",
                  }}
                  href="/signup/monthly/create-account"
                >
                  <AiOutlineArrowRight />
                  Select Plan
                </Button>
              </div>
            </Submit>
          </MonthlyCard>
          <YearlyyCard>
            <Label>1-Year Plan</Label>
            <Price>$0.99/mo</Price>
            <Description>$11.88$ billed every year</Description>
            <Submit>
              <div style={{ marginTop: "10px" }}>
                <Button
                  style={{
                    backgroundColor: "#04d192",
                    borderColor: "#04d192",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  <AiOutlineArrowRight /> Select Plan
                </Button>
              </div>
            </Submit>
          </YearlyyCard>
        </Cards>
        {/*
        </Pricing Table>
        */}
        <br /> <br /> <br /> <br />
        {/* 
        <FAQ Section> 
        */}
        <br /> <br /> <br />
        <SubTitle>Frequently Asked Questions:</SubTitle>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Accordion>
              <AccordionSummary>
                What do I get with the subscription?
              </AccordionSummary>
              gdsvkdsvmksd vsdkvnsdnvs vnsdvjnsdjkvns dv
            </Accordion>
            <Accordion>
              <AccordionSummary>
                When do I receive the newsletter?
              </AccordionSummary>
              gdsvkdsvmksd vsdkvnsdnvs vnsdvjnsdjkvns dv
            </Accordion>
            <Accordion>
              <AccordionSummary>
                I have more questions, who can I talk to?
              </AccordionSummary>
              gdsvkdsvmksd vsdkvnsdnvs vnsdvjnsdjkvns dv
            </Accordion>
          </div>
        </div>
        {/*
        </FAQ Section>
        */}
      </Content>
      <br /> <br /> <br /> <br />
      <Footer />
    </>
  );
}

const Content = styled.div`
  margin-right: 20%;
  margin-left: 20%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 20px;
`;

const Cards = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  flex-direction: row;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const MonthlyCard = styled.div`
  border-radius: 25px;
  padding: 20px;
  background-color: rgb(255, 255, 255);
  width: 350px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  box-sizing: border-box;
  border-color: rgb(237, 242, 247);
  border-left-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-radius: 8px;
  border-top-color: rgb(79, 209, 197);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 8px;
  border-top-style: solid;

  margin-right: 15px;

  @media (max-width: 800px) {
    margin-right: 0px;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 8px 10px 0.5px,
      rgba(0, 0, 0, 0.06) 0px 6px 8px 5px;
    position: relative;
    top: -2px;
  }
`;

const YearlyyCard = styled.div`
  border-radius: 25px;
  padding: 20px;
  background-color: rgb(255, 255, 255);
  width: 350px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  box-sizing: border-box;
  border-color: rgb(237, 242, 247);
  border-left-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-radius: 8px;
  border-top-color: rgb(49, 151, 149);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 8px;
  border-top-style: solid;
  margin-left: 15px;

  @media (max-width: 800px) {
    margin-left: 0px;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 8px 10px 0.5px,
      rgba(0, 0, 0, 0.06) 0px 6px 8px 5px;
    position: relative;
    top: -2px;
  }
`;

const Accordion = styled.details`
  font-family: "Inter", sans-serif;
  font-size: 17px;
  font-weight: 500;
  color: rgb(73, 84, 90);

  margin-top: 10px;
`;

const AccordionSummary = styled.summary`
  font-family: "Inter", sans-serif;

  font-size: 16px;
  font-weight: 500;
  color: rgb(73, 84, 90);

  border-radius: 25px;
  padding: 20px;
  background-color: rgb(255, 255, 255);
  width: 500px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  box-sizing: border-box;
  border-color: rgb(237, 242, 247);
  border-left-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-radius: 8px;
  border-top-color: #04d192;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 8px;
  border-top-style: solid;

  margin-right: 15px;

  @media (max-width: 800px) {
    width: 350px;
  }
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  font-family: "Inter", sans-serif;
  color: rgb(160, 174, 192);
`;

const SubTitle = styled.div`
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  font-family: "Inter", sans-serif;
  color: rgb(73, 84, 90);
`;

const Label = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 28px;
  font-weight: 500;
  color: rgb(73, 84, 90);
`;

const Price = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 25px;
  font-weight: 600;
  color: rgb(73, 84, 90);
`;

const Description = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
  font-style: italic;
  color: rgb(73, 84, 90);

  margin-top: 4px;
`;

const Submit = styled.div`
  button {
    &:hover {
      color: black;
    }
  }
`;
