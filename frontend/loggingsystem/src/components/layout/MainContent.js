import React from "react";
import { Container } from "react-bootstrap";

const MainContent = ({ children }) => {
  return (
    <Container
      fluid
      style={{ paddingTop: "5em", height: "120vh", backgroundColor: "#F5F5F5" }}
    >
      {children}
    </Container>
  );
};

export { MainContent };
