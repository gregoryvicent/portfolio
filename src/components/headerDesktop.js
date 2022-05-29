import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Figure, Card } from "react-bootstrap";

import {
  headerDesktop,
  headerDesktopImg,
  headerDesktopFigure,
  headerDesktopItem,
  headerDesktopProfile
} from "./headerDesktop.module.css";
import { linkAlignCenter } from "../css/style.module.css"

import CV from "../assets/Gregory_CV_2022.pdf"

const HeaderDesktop = () => {
  return (
    <header className={headerDesktop}>
      <div className={headerDesktopProfile}>
        <Figure className={headerDesktopFigure}>
          <StaticImage
            src="../images/gregory_vicent.jpg"
            alt="Gregory Vicent"
            title="Gregory Vicent"
            className={headerDesktopImg}
          />
          <Figure.Caption>Gregory Vicent</Figure.Caption>
        </Figure>
        <a href={CV} className={linkAlignCenter} target="_blank">Descargar CV</a>
      </div>
      <nav>
        <ul>
          <li className={headerDesktopItem}>
            <Link to="/">
              <Card bg="light" border="primary">
                <Card.Body>
                  <Card.Title>Home</Card.Title>
                  <Card.Text>
                    Bienvenido a mi sitio web y portafolio personal
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </li>
          <li className={headerDesktopItem}>
            <Link to="/portafolio">
              <Card bg="light" border="primary">
                <Card.Body>
                  <Card.Title>Portafolio</Card.Title>
                  <Card.Text>
                    Conoce un poco más sobre los proyectos que me apasionan 
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </li>
          <li className={headerDesktopItem}>
            <Link to="/blog">
              <Card bg="light" border="primary">
                <Card.Body>
                  <Card.Title>Blog</Card.Title>
                  <Card.Text>
                    Aquí un pequeño blog donde cuento lo que pasa por mi cabeza
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderDesktop;
