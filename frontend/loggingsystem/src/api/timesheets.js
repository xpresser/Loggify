import axios from "axios";

export const getTimesheetById = async ({ timesheetId }) => {
  const res = await axios.get(
    `http://localhost:8080/api/v1/timesheets/${timesheetId}`
  );

  return res.data;
};

export const deleteTimesheetRows = async ({ timesheetId }) => {
  const res = await axios.get(
    `http://localhost:8080/api/v1/timesheets/${timesheetId}/rows`
  );

  return res.data;
};

export const createNewTimesheet = async ({
  status,
  totalHours,
  startingDate,
}) => {
  const res = await axios.post("http://localhost:8080/api/v1/timesheets/", {
    status,
    totalHours,
    startingDate,
  });

  return res.data;
};

export const updateTimesheet = async ({
  timesheetId,
  status,
  totalHours,
  startingDate,
}) => {
  const res = await axios.put(
    `http://localhost:8080/api/v1/timesheets/${timesheetId}`,
    {
      status,
      totalHours,
      startingDate,
    }
  );

  return res.data;
};

export const deleteTimesheet = async ({ timesheetId }) => {
  const res = await axios.delete(
    `http://localhost:8080/api/v1/timesheets/${timesheetId}`
  );

  return res.data;
};
