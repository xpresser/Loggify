import React from "react";
import { Container } from "react-bootstrap";

const MainContent = ({ children }) => {
  return (
    <Container
      fluid
      style={{ paddingTop: "5em", height: "120vh", backgroundColor: "#f0f0ff" }}
    >
      {children}
    </Container>
  );
};

export { MainContent };
