import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./Header.css";

interface Props {
  handleClick: () => void;
  addJokeTimers: ReturnType<typeof setTimeout>[];
}

const Header = ({ handleClick, addJokeTimers }: Props) => {
  return (
    <Row className="text-center mb-md-5">
      <Col xs="12" md={{ offset: "2", span: "8" }}>
        <h1>Chuck Jokes</h1>
      </Col>

      <Col>
        <Button
          className={`my-3 ${addJokeTimers.length && "btn-danger"}`}
          onClick={handleClick}
        >
          {`${
            addJokeTimers.length === 0 ? "Add Random Jokes" : "Clear Timers"
          } `}
        </Button>
      </Col>
    </Row>
  );
};

export default Header;
