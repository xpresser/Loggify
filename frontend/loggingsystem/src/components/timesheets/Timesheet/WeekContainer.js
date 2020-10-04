import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 0.5rem;
`;

const WeekContainer = ({ timesheet }) => {
  return <Container>Week {timesheet.startingDate}</Container>;
};

export { WeekContainer };
