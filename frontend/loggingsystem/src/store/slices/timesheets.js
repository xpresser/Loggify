import { createSlice } from "@reduxjs/toolkit";
import { createNewTimesheet } from "src/api/timesheets";

const initialState = {
  timesheets: [],
  isLoading: false,
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
