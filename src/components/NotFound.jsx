import React, { Fragment } from "react";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image";
import SadFace from "../assets/img/SadFace.png";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <Fragment>
      <Container style={{ height: "90vh" }} className="text-center pt-5">
        <h1>
          <strong>404</strong>
        </h1>
        <h2>
          <strong>Página no encontrada</strong>
        </h2>
        <Image style={{ width: "40%" }} src={SadFace} rounded />
        <NavLink to="/" style={{display: 'flex'}} className="text-decoration-none justify-content-center">
          <h5><strong>Haz click aquí para volver a la página principal</strong></h5>
        </NavLink>
      </Container>
    </Fragment>
  );
};

export default NotFound;
