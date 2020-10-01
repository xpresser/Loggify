import React from "react";
import { Container } from "react-bootstrap";

const MainContent = ({ children }) => {
  return (
    <Container fluid style={{ paddingTop: "5em" }}>
      {children}
    </Container>
  );
};

export { MainContent };
