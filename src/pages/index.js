import * as React from "react";
import Layout from "../components/layout";
import Cards from "../components/cards"
import { Link } from "gatsby";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

import { indexBoxTitle, indexTitleGif, indexSmall } from "./index.module.css";
import { H1, H2, H3, text } from "../css/style.module.css";

const Home = () => {
  return (
    <Layout>
      <title>Home | Gregory Vicent</title>
      <div className={indexBoxTitle}>
        <div style={{ marginBottom: "2rem" }}>
          <h1 style={{ marginBottom: "0px" }} className={H1}>
            Gregory Vicent
          </h1>
          <small className={indexSmall}>
            Web Developer y futuro Data Scientist
          </small>
        </div>
        <img
          src="https://emojis.slackmojis.com/emojis/images/1563480763/5999/meow_party.gif?1563480763"
          alt="emoji cat"
          className={indexTitleGif}
        />
      </div>
      <section>
        <p className={text}>
          Hola mi querido ser del otro lado de la pantalla, te doy la bienvenida
          a este mi pequeño espacio en internet. Como salta a simple vista mi
          nombre es <strong>Gregory Vicent</strong>, un apasionado desarrollador
          de software y amante del código que mueve nuestro mundo.
        </p>
        <h2 className={H2}>¿En que me especializo? 👨‍💻</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>FastAPI</li>
          <li>PHP</li>
        </ul>
        <p className={text}>
          No soy fan de las listas demasido largas asi que me detendre aquí ya
          que la cantidad de tecnologías que se suelen usar en el Desarrollo Web
          son muchas (ya ni se diga en el desarrollo de software en general).
          Pero con esto doy a conocer mi afinidad por el mundo de la Web al que
          me dedico en la actualidad.{" "}
          <b>
            Si quieres saber más sobre mis habilidades como programador te
            invito a descargar mi CV.
          </b>
        </p>
        <h2 className={H2}>"Futuro Data Scientist" 📊</h2>
        <p className={text}>
          A día de hoy me encuentro dando un pequeño giro a mi enfoque como
          programador más dirigido a la <strong>Ciencia de Datos</strong>, campo
          que cada vez me parece más y más fascinante. Esto hace que mi meta
          personal actual sea formarme lo suficiente para poder contribuir con
          proyectos relacionados a este tema (vamos un paso a la vez).
        </p>
        <h2 className={H2}>Tambien creo contenido online 🎥</h2>
        <h3 className={H3}>Mi Blog</h3>
        <p className={text}>
          En este mismo sitio web esta <Link to="/blog">mi blog</Link> donde
          escribo temas de mi interes (frecuentemente relacionados al mundo
          Tech) y relatos de la vida. Te invito a darle un vistazo, seguro algo
          capta tu atención ;)
        </p>
        <h3 className={H3}>Canales en Youtube</h3>

        <Cards />
        
        <h2 className={H2}>Contactame 😉</h2>
        <p className={text}>
          Si quieres que realicemos algun proyecto juntos o deceas tratar
          cualquier tema conmigo contactame, es gratis y seguro construiremos
          cosas increibles.
        </p>
        <Container>
          <Row>
            <Col style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
              <h3 className={H3}>Teléfonos</h3>
              <p><b>+58 4265191440</b></p>
            </Col>
            <Col style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
              <h3 className={H3}>E-mail</h3>
              <p><b>gregoryvicent.dev@gmail.com</b></p>
              <Form action="mailto:greoryvicent.dev@gmail.com">
                <Button variant="primary" type="submit">
                  Email
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Home;
