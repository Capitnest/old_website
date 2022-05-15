import { Layout } from "../../components/Layout";
import React from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";

import styled from "styled-components";

//COMPONENTS
import Profile from "./components/Profile";
import Notifications from "./components/Notifications";

export default function Profilepage() {
  return (
    <>
      <Layout>
        <br />
        <br />
        <br />
        <br />
        <br />

        <h1
          style={{ fontSize: "40px", fontWeight: "bold", marginBottom: "10px" }}
        >
          Settings
        </h1>

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Profile</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Content>
                <Tab.Content>
                  <hr />
                  <br />
                  <Tab.Pane eventKey="first">
                    <Profile />
                  </Tab.Pane>
                </Tab.Content>
              </Content>
            </Col>
          </Row>
        </Tab.Container>
      </Layout>
    </>
  );
}

const Content = styled.div`
  margin-top: -60px;

  @media (max-width: 575px) {
    margin-top: 10px;
  }
`;
