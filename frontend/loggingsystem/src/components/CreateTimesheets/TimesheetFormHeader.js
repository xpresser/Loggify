import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { updateTimesheet } from "src/api/timesheets";
import { getCurrentUser } from "src/api/users";
import { fetchCurrentTimeSheet } from "src/store/slices/timesheets";
import { fetchCurrentUser } from "src/store/slices/auth";
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

  const dispatch = useDispatch();
  const timesheetState = useSelector((state) => state.timesheets.updateSheet);
  const testSheet = timesheetState?.[0] || [];
  const user = useSelector((state) => state.auth.user.username);
  const testUserState = useSelector((state) => state?.auth.users);
  const testUser = testUserState?.[0] || [];
  const isLoading = testUserState?.isLoading ?? false;
  console.log(user);
  console.log(testUser);
  const currentUser = user.toString();
  console.log(currentUser);
  React.useEffect(() => {
    dispatch(fetchCurrentUser(currentUser));
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(fetchCurrentTimeSheet(test));
  }, [dispatch]);

  console.log(testSheet);
  const sheetId = testSheet.id;
  const totalHours = testSheet.totalHours;
  const testId = testUser.id;

  console.log(testId);

  console.log(sheetId);
  console.log(totalHours);
  console.log(testId);

  return (
    <SubContainer>
      <TimeSheetInfo>
        <h5>Timesheet for week : {testSheet.startingDate}</h5>
      </TimeSheetInfo>
      <ButtoneLayout>
        <Button style={DeleteButtonStyled}>DELETE</Button>
        <Button style={SaveButtonStyled}>SAVE</Button>
        <Button
          onClick={() => {
            updateTimesheet(
              {
                timesheetId: testSheet.id,
                status: "SUBMITTED",
                authorId: testUser.id,
                totalHours: totalHours,
                startingDate: testSheet.startingDate,
              },
              (window.location.href = "/timesheets")
            );
          }}
          style={SubmitButtonStyled}
        >
          SUBMIT
        </Button>
      </ButtoneLayout>
    </SubContainer>
  );
};

export { TimesheetHeader };
