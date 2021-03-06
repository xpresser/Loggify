import axios from "axios";
import { REACT_APP_API_URL } from "src/constants/mainConstants";

export const getTimesheetById = async (timesheetId) => {
  const res = await axios.get(
    `${REACT_APP_API_URL}/api/v1/timesheets/${timesheetId}`
  );

  return res.data;
};

export const getUserTimesheets = async ({ userId, page, pageSize }) => {
  const res = await axios.get(`${REACT_APP_API_URL}/api/v1/timesheets/`, {
    params: { userId, page, pageSize },
  });

  return res.data;
};

export const getTimesheetRows = async ({ timesheetId }) => {
  const res = await axios.get(
    `${REACT_APP_API_URL}/api/v1/timesheets/${timesheetId}/rows`
  );

  return res.data;
};

export const createNewTimesheet = async ({
  status,
  totalHours,
  startingDate,
  authorId,
}) => {
  const res = await axios.post(`${REACT_APP_API_URL}/api/v1/timesheets/`, {
    status,
    totalHours,
    startingDate,
    authorId,
  });

  return res.data;
};

export const updateTimesheet = async ({
  timesheetId,
  status,
  totalHours,
  startingDate,
  authorId,
}) => {
  const res = await axios.put(
    `${REACT_APP_API_URL}/api/v1/timesheets/${timesheetId}`,
    {
      status,
      totalHours,
      startingDate,
      authorId,
    }
  );

  return res.data;
};

export const deleteTimesheetById = async ({ timesheetId }) => {
  const res = await axios.delete(
    `${REACT_APP_API_URL}/api/v1/timesheets/${timesheetId}`
  );

  return res.data;
};

export const getAllTasks = async () => {
  const res = await axios.get(`${REACT_APP_API_URL}/api/v1/tasks`);

  return res.data;
};

export const getAllProjects = async () => {
  const res = await axios.get(`${REACT_APP_API_URL}/api/v1/projects`);

  return res.data;
};
