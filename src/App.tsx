import React from "react";
import "bootswatch/dist/darkly/bootstrap.min.css";
import Header from "./Header";
import { Container } from "react-bootstrap";
import Favorites from "./Favorites";

function App() {
  return (
    <Container className="App">
      <Header />
      <Favorites />
    </Container>
  );
}

export default App;
