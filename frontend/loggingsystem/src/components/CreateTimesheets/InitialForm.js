import React from "react";
import styled from "styled-components";
import moment from "moment";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
import { createTimesheet } from "src/store/slices/timesheets.js";
import { getCurrentUser } from "src/api/users";

const Container = styled.div`
  width: 1200px;
  margin: 100px auto;
  height: 20rem;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const SubContainer = styled.div`
  padding-top: 5rem;
  width: 100%;
  height: 5rem;
`;

const StyledNext = {
  marginTop: "2rem",
};

const InitialForm = () => {
  const date = new Date();
  const user = useSelector((state) => state.auth.user.username);
  const currentUser = user.toString();
  const getLoggedUser = getCurrentUser(currentUser);
  const current = [];
  getLoggedUser.then((value) => {
    let content = value;
    current.push(value);
  });

  const currentDay = date.getDay();
  const dispatch = useDispatch();
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
              await createTimesheet(values)(dispatch);
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

              <Button type="submit" style={StyledNext}>
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
        <SubContainer>
          <Formik
            initialValues={initialFormState}
            onSubmit={async (values) => {
              await createTimesheet(values)(dispatch);
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
              <Button type="submit" style={StyledNext}>
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
