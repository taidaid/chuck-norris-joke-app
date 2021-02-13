import React from "react";
import { Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <header className="text-center w-100 mt-1">
      <Row>
        <Col>
          <h1>Chuck Jokes</h1>
        </Col>

        <Col>
          <button className="btn btn-primary">Add Random Jokes</button>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
