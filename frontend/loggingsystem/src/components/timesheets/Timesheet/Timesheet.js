import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { WeekContainer } from "./WeekContainer";
import { StatusContainer } from "./StatusContainer";
import { ViewButton } from "./ViewButton";
import { EditButton } from "./EditButton";
import { DeleteButton } from "./DeleteButton";

const CustomCol = styled(Col)`
  border: 1px solid grey;
`;

const Timesheet = ({ user, timesheet }) => {
  return (
    <Row>
      <CustomCol sm="4" xs="4">
        <WeekContainer timesheet={timesheet} />
      </CustomCol>
      <CustomCol sm="3" xs="3">
        <StatusContainer timesheet={timesheet} />
      </CustomCol>
      <CustomCol sm="2" xs="2">
        {timesheet.status === "Open" ? (
          <EditButton />
        ) : (
          <ViewButton timesheet={timesheet} />
        )}
      </CustomCol>
      <CustomCol sm="2" xs="3">
        <DeleteButton user={user} timesheet={timesheet} />
      </CustomCol>
    </Row>
  );
};

export { Timesheet };
