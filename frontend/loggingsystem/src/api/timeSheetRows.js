import axios from "axios";
import httpClient from "src/config/httpClient";
import { REACT_APP_API_URL } from "src/constants/mainConstants";

// const instance = axios.create({
//     baseURL: "http://localhost:8080/api/v1/timesheets/1/rows",
//     withCredentials: false,
//     headers: {
//       'Access-Control-Allow-Origin' : '*',
//       'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//       }
//   });

export const getTimeSheetRowsForTimeSheet = async ({ timesheetId }) => {
  const res = await httpClient.get(
    `${REACT_APP_API_URL}/api/v1/timesheets/${timesheetId}/rows`
  );
  return res.data;
};

export const createTimeSheetRow = async ({
  timeSheetId,
  projectId,
  taskId,
  mondayHours,
  tuesdayHours,
  wednesdayHours,
  thursdayHours,
  fridayHours,
  saturdayHours,
  sundayHours,
  totalHours,
}) => {
  const res = await httpClient.post(
    `${REACT_APP_API_URL}/api/v1/timesheetrows`,
    {
      timeSheetId,
      projectId,
      taskId,
      mondayHours,
      tuesdayHours,
      wednesdayHours,
      thursdayHours,
      fridayHours,
      saturdayHours,
      sundayHours,
      totalHours,
    }
  );
  return res.data;
};
