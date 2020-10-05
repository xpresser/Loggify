import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { updateTimesheet } from "src/api/timesheets";
import { fetchCurrentTimeSheet } from "src/store/slices/timesheets";
import styled from "styled-components";

const SubContainer = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
`;

const ButtoneLayout = styled.div`
  float: right;
  width: 50rem;
`;

const TimeSheetInfo = styled.div`
  margin: 1rem;
  width: 30rem;
  padding: 0.25rem 1rem;
`;

const TimesheetHeader = () => {
  const SubmitButtonStyled = {
    fontSize: "1rem",
    margin: "1rem",
    padding: "0.25rem 1rem",
    border: "1px solid black",
    borderRradius: "3px",
    float: "right",
    backgroundColor: "green",
  };

  const SaveButtonStyled = {
    fontSize: "1rem",
    margin: "1rem",
    padding: "0.25rem 1rem",
    borderRradius: "3px",
    float: "right",
    color: "black",
    border: "1px solid black",
    backgroundColor: "yellow",
  };

  const DeleteButtonStyled = {
    fontSize: "1rem",
    margin: "1rem",
    padding: "0.25rem 1rem",
    border: "1px solid black",
    borderRadius: "4px",
    float: "right",
    backgroundColor: "red",
  };

  const {
    params: { id },
  } = useRouteMatch();
  console.log(id);
  let test = id;

  const timesheetState = useSelector((state) => state.timesheets.updateSheet);
  const testSheet = timesheetState?.[0] || [];

  const dispatch = useDispatch();
  // }
  React.useEffect(() => {
    dispatch(fetchCurrentTimeSheet(test));
  }, [dispatch]);

  return (
    <SubContainer>
      <TimeSheetInfo>
        <h5>Timesheet for week : {testSheet.startingDate}</h5>
      </TimeSheetInfo>
      <ButtoneLayout>
        <Button style={DeleteButtonStyled}>DELETE</Button>
        <Button onClick={() => {}} style={SaveButtonStyled}>
          SAVE
        </Button>
        <Button style={SubmitButtonStyled}>SUBMIT</Button>
      </ButtoneLayout>
    </SubContainer>
  );
};

export { TimesheetHeader };
