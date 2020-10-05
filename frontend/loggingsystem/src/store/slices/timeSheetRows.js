import { createSlice } from "@reduxjs/toolkit";
import { getTimeSheetRowsForTimeSheet } from "src/api";

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
      dispatch(actions.fetchrowsFailure(err?.response.data.message));
    }
  };
};
