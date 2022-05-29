import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Cards = () => {
  return(
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "18rem", margin: "auto" }}>
            <StaticImage src="../images/logogregorycode.png" />
            <Card.Body>
              <Card.Title>Gregory Vicent Code</Card.Title>
              <Card.Text>
                Aquí hay un montón de proyectos basados en código y actividades
                entretenidas.
              </Card.Text>
              <a
                href="https://www.youtube.com/channel/UCSEdxq0M1N_NpoFvbdWOjkg"
                target="_black"
              >
                <Button variant="primary">Ir al canal</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem", margin: "auto" }}>
            <StaticImage src="../images/logogregorytech.png" />
            <Card.Body>
              <Card.Title>Gregory Vicent Dev</Card.Title>
              <Card.Text>
                De este otro lado hablamos de un dev a otro. Todos somos humanos
                al final del día.
              </Card.Text>
              <a
                href="https://www.youtube.com/channel/UCFGDdLOjVt6woSvbF1s1ibg"
                target="_black"
              >
                <Button variant="primary">Ir al canal</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cards;
