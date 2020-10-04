import { createSlice } from "@reduxjs/toolkit";
import { createNewTimesheet, getTimesheetById } from "src/api/timesheets";

const initialState = {
  timesheets: [],
  updateSheet: [],
  isLoading: false,
  isGetting: false,
  error: null,
  isCreating: false,
  creationError: null,
};

const { reducer: timesheetReducer, actions } = createSlice({
  name: "timesheets",
  initialState,
  reducers: {
    createTimesheetStart: (state) => {
      state.isLoading = true;
    },
    createTimesheetSuccess: (state, action) => {
      state.isLoading = false;
      state.timesheets.unshift(action.payload);
      state.error = null;
    },
    createTimesheetFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    fetchTimesheetStart: (state) => {
      state.isGetting = true;
    },
    fetchTimesheetSuccess: (state, action) => {
      state.isGetting = false;
      state.updateSheet.unshift(action.payload);
      state.error = null;
    },
    fetchTimesheetFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export { timesheetReducer };

export const createTimesheet = ({
  status,
  totalHours,
  startingDate,
  authorId,
}) => {
  return async (dispatch) => {
    try {
      dispatch(actions.createTimesheetStart());
      const createdPost = await createNewTimesheet({
        status,
        totalHours,
        startingDate,
        authorId,
      });
      dispatch(actions.createTimesheetSuccess(createdPost));
    } catch (err) {
      dispatch(actions.createTimesheetFailure(err?.response?.data?.message));
    }
  };
};

export const fetchCurrentTimeSheet = (timesheetId) => {
  return async (dispatch) => {
    try {
      dispatch(actions.fetchTimesheetStart());
      console.log(timesheetId);
      const results = await getTimesheetById({ timesheetId });
      console.log(results);
      dispatch(actions.fetchTimesheetSuccess({ results }));
    } catch (err) {
      dispatch(actions.fetchTimesheetFailure(err.response.data.message));
    }
  };
};
