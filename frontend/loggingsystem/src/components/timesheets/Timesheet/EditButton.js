import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const EditButton = ({ timesheetId }) => {
  return (
    <Container>
      <Button
        onClick={(e) => {
          window.location.href = `/createnext/${timesheetId}`;
        }}
        variant={"info"}
        className={"m-1"}
        style={{
          border: "1px solid black",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        Edit
      </Button>
    </Container>
  );
};

export { EditButton };
