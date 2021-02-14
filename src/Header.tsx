import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const Header = () => {
  return (
    <header className="text-center w-100 d-flex">
      <Row>
        <Col>
          <h1>Chuck Jokes</h1>
        </Col>

        <Col>
          <Button className="mt-3">Add Random Jokes</Button>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
