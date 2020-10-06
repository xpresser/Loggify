import { createSlice } from "@reduxjs/toolkit";
import { getTimeSheetRowsForTimeSheet } from "src/api";
import { createTimeSheetRow } from "../../api/timeSheetRows";

const initialState = {
  timesheetsRows: [],
  isLoading: false,
  error: null,
};

const { reducer: timesheetRowReducer, actions } = createSlice({
  name: "timesheetRows",
  initialState,
  reducers: {
    fetchrowsStart: (state) => {
      state.isLoading = true;
    },
    fetchrowsSuccess: (state, action) => {
      state.isLoading = false;
      state.timesheetsRows.push(
        ...action.payload.results.filter(
          (x) =>
            !state.timesheetsRows.some(
              (timesheetsRow) => timesheetsRow.id === x.id
            )
        )
      );
      state.error = null;
      state.cursor = action.payload.cursor;
    },
    fetchrowsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    createtimesheetsRowstart: (state) => {
      state.isLoading = true;
    },
    createtimesheetsRowsuccess: (state, action) => {
      state.isLoading = false;
      state.timesheetsRows.push(action.payload);
      state.error = null;
    },
    createPostFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    reset: () => initialState,
  },
});

export { timesheetRowReducer };

export const fetchRowsPerTimeSheet = (timesheetId) => {
  return async (dispatch) => {
    try {
      dispatch(actions.fetchrowsStart());
      const results = await getTimeSheetRowsForTimeSheet({ timesheetId });
      dispatch(actions.fetchrowsSuccess({ results }));
    } catch (err) {
      dispatch(actions.fetchrowsFailure(err?.response?.data?.message));
    }
  };
};

export const createTheRow = ({
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
  return async (dispatch) => {
    try {
      dispatch(actions.createtimesheetsRowstart());
      const createdPost = await createTimeSheetRow({
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
      });
      dispatch(actions.createtimesheetsRowsuccess(createdPost));
    } catch (err) {
      dispatch(actions.createPostFailure(err?.response?.data?.message));
    }
  };
};

export const resetTimesheetsRow = actions.reset;
