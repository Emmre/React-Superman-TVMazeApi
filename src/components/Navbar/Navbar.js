import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import s from "./Navbar.module.css";

const Navbars = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Movie</Navbar.Brand>
        <Nav className="mr-auto">
          <Link className={s.navbarLink} to="/Home">
            Home
          </Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Navbars;
