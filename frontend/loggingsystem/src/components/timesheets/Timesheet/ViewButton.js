import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  font-size: 14px;
  font-weight: bold;
  border-radius: 0.5rem;
  margin: 0.5rem;
  padding: 0 1rem;
`;

const ViewButton = () => {
  return (
    <Container>
      <Button>View</Button>
    </Container>
  );
};

export { ViewButton };
