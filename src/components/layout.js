import * as React from "react";
import HeaderDesktop from "./headerDesktop";
import SocialNetwork from "./socialNetwork";
import { Container, Row, Col } from "react-bootstrap";

import { column, profile, layoutMain } from "./layout.module.css";

import "bootstrap/dist/css/bootstrap.min.css";

const Layout = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Col xs={3} className={profile}>
          <HeaderDesktop />
        </Col>
        <Col className={column}>
          <main className={layoutMain}>{children}</main>
        </Col>
        <Col xs={1}>
          <SocialNetwork />
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
