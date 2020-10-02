import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 0.5rem;
`;

const StatusContainer = ({ timesheet }) => {
  return <Container>{timesheet.status}</Container>;
};

export { StatusContainer };
