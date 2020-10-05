import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  color: black;
`;

const ViewButton = ({ timesheet }) => {
  return (
    <Container>
      <Button
        variant={"success"}
        className={"m-1"}
        style={{ border: "1px solid black" }}
        as={Link}
        to={{ pathname: `/timesheet/${timesheet.id}` }}
      >
        View
      </Button>
    </Container>
  );
};

export { ViewButton };
