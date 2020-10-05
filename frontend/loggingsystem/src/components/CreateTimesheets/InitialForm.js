import React from "react";
import styled from "styled-components";
import moment from "moment";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
import { getCurrentUser } from "src/api/users";
import { createNewTimesheet } from "src/api/timesheets";

const Container = styled.div`
  background: white;
  padding: 1rem;
  width: 50rem;
  margin: 4rem auto;
  height: 20rem;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  text-align: center;
  border: none;
  border-radius: 10px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.2);
`;

const SubContainer = styled.div`
  padding-top: 1rem;
  width: 100%;
  height: 5rem;
`;

const StyledNext = {
  marginTop: "2rem",
};

const InitialForm = () => {
  const date = new Date();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user.username);
  if (user === undefined) {
    window.location.reload();
  }
  console.log(user);
  const currentUser = user.toString();
  const getLoggedUser = getCurrentUser(currentUser);
  const current = [];
  getLoggedUser.then((value) => {
    let content = value;
    current.push(value);
  });
  let timesheetId = null;
  let id = null;
  const currentDay = date.getDay();

  const initialFormState = {
    status: "OPEN",
    totalHours: 0,
    startingDate: "",
    authorId: null,
  };
  const monday = 1;
  let daysPassedSinceMonday;

  if (currentDay === monday) {
    const changedDates = [];
    changedDates.push(moment().subtract(14, "days").format("YYYY-MM-DD"));
    changedDates.push(moment().subtract(7, "days").format("YYYY-MM-DD"));
    changedDates.push(moment().format("YYYY-MM-DD"));
    changedDates.push(moment().add(7, "days").format("YYYY-MM-DD"));
    changedDates.push(moment().add(14, "days").format("YYYY-MM-DD"));

    const handleSelect = (e) => {
      initialFormState.startingDate = e.target.value;
      initialFormState.authorId = current[0].id;
      console.log(e);
    };

    const renderDates = [];
    changedDates.forEach(function (element) {
      renderDates.push({ label: element, value: element });
    });

    return (
      <Container>
        <h1 style={{ fontSize: "4rem" }}>Create Timesheet</h1>
        <SubContainer>
          <Formik
            initialValues={initialFormState}
            onSubmit={async (values) => {
              console.log(values);
              timesheetId = await createNewTimesheet(values);
              id = timesheetId.id;
              window.location.href = `createnext/${id}`;
            }}
          >
            <Form>
              <select style={{ width: "100%" }} onChange={handleSelect}>
                <option value="" disabled selected hidden>
                  Select Week...
                </option>
                <option value={renderDates[0].value}>
                  {renderDates[0].value}
                </option>
                <option value={renderDates[1].value}>
                  {renderDates[1].value}
                </option>
                <option value={renderDates[2].value}>
                  {renderDates[2].value}
                </option>
                <option value={renderDates[3].value}>
                  {renderDates[3].value}
                </option>
                <option value={renderDates[4].value}>
                  {renderDates[4].value}
                </option>
              </select>

              <Button block type="submit" style={StyledNext}>
                Next
              </Button>
            </Form>
          </Formik>
        </SubContainer>
      </Container>
    );
  } else {
    daysPassedSinceMonday = currentDay - monday;

    const changedDates = [];
    changedDates.push(
      moment()
        .subtract(14 + daysPassedSinceMonday, "days")
        .format("YYYY-MM-DD")
    );
    changedDates.push(
      moment()
        .subtract(7 + daysPassedSinceMonday, "days")
        .format("YYYY-MM-DD")
    );
    changedDates.push(
      moment().subtract(daysPassedSinceMonday, "days").format("YYYY-MM-DD")
    );
    changedDates.push(
      moment()
        .add(7 - daysPassedSinceMonday, "days")
        .format("YYYY-MM-DD")
    );
    changedDates.push(
      moment()
        .add(14 - daysPassedSinceMonday, "days")
        .format("YYYY-MM-DD")
    );

    const renderDates = [];
    changedDates.forEach(function (element) {
      renderDates.push({ label: element, value: element });
    });

    const handleSelect = (e) => {
      initialFormState.startingDate = e.target.value;
      initialFormState.authorId = current[0].id;
      console.log(e);
    };

    return (
      <Container>
        <h1 style={{ fontSize: "4rem" }}>Create Timesheet</h1>
        <p className="text-center mt-4">Please select a week:</p>
        <SubContainer>
          <Formik
            initialValues={initialFormState}
            onSubmit={async (values) => {
              console.log(values);
              timesheetId = await createNewTimesheet(values);
              id = timesheetId.id;
              window.location.href = `createnext/${id}`;
            }}
          >
            <Form>
              <select style={{ width: "100%" }} onChange={handleSelect}>
                <option value="" disabled selected hidden>
                  Select Week...
                </option>
                <option value={renderDates[0].value}>
                  {renderDates[0].value}
                </option>
                <option value={renderDates[1].value}>
                  {renderDates[1].value}
                </option>
                <option value={renderDates[2].value}>
                  {renderDates[2].value}
                </option>
                <option value={renderDates[3].value}>
                  {renderDates[3].value}
                </option>
                <option value={renderDates[4].value}>
                  {renderDates[4].value}
                </option>
              </select>
              <Button block type="submit" style={StyledNext}>
                Next
              </Button>
            </Form>
          </Formik>
        </SubContainer>
      </Container>
    );
  }
};

export { InitialForm };
