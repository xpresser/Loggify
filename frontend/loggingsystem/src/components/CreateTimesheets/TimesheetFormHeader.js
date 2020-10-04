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
    border: "none",
    borderRradius: "3px",
    float: "right",
    backgroundColor: "green",
  };

  const SaveButtonStyled = {
    fontSize: "1rem",
    margin: "1rem",
    padding: "0.25rem 1rem",
    border: "none",
    borderRradius: "3px",
    float: "right",
    color: "black",
    backgroundColor: "yellow",
  };

  const DeleteButtonStyled = {
    fontSize: "1rem",
    margin: "1rem",
    padding: "0.25rem 1rem",
    border: "none",
    borderRradius: "3px",
    float: "right",
    backgroundColor: "red",
  };

  const {
    params: { id },
  } = useRouteMatch();
  console.log(id);
  let test = id;

  // const initialFormState = {
  //     timesheetId: timesheets.id,
  //     status: "SUBMITTED", totalHours:
  //     timesheets.totalHours,
  //     authorId : timesheets.authorId
  // };

  const timesheetState = useSelector(
    (state) => state.timesheets.updateSheet.results
  );

  console.log(timesheetState);
  const dispatch = useDispatch();
  // let timesheets = [];
  // if(timesheetState !== null){
  //     timesheets = timesheetState
  // }
  React.useEffect(() => {
    dispatch(fetchCurrentTimeSheet(test));
  }, [dispatch]);

  console.log(timesheetState.totalHours);

  return (
    <SubContainer>
      <TimeSheetInfo>
        <h5>Timesheet for Week 20.04.2020</h5>
      </TimeSheetInfo>
      <ButtoneLayout>
        <Button style={DeleteButtonStyled}>DELETE</Button>
        <Button
          onClick={() => {
            updateTimesheet({
              timesheetId: id,
              status: "OPEN",
              authorId: timesheetState.authorId,
              totalHours: timesheetState.totalHours,
            });
          }}
          style={SaveButtonStyled}
        >
          SAVE
        </Button>
        <Button style={SubmitButtonStyled}>SUBMIT</Button>
      </ButtoneLayout>
    </SubContainer>
  );
};

export { TimesheetHeader };
