import axios from "axios";

// const instance = axios.create({
//     baseURL: "http://localhost:8080/api/v1/timesheets/1/rows",
//     withCredentials: false,
//     headers: {
//       'Access-Control-Allow-Origin' : '*',
//       'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//       }
//   });

export const getTimeSheetRowsForTimeSheet = async () => {
    const res = await axios.get(`http://localhost:8080/api/v1/timesheets/1/rows`); 
    return res.data;
}