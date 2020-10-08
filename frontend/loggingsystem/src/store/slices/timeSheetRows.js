import { createSlice } from "@reduxjs/toolkit";
import { getTimeSheetRowsForTimeSheet } from "src/api";
import {
  createTimeSheetRow,
  deleteRow,
  updateTimeSheetRow,
} from "../../api/timeSheetRows";

const initialState = {
  timesheetsRows: [],
  isLoading: false,
  isUpdating: false,
  error: null,
  messages: {},
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
    createtimesheetsRowFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    updatetimesheetRowStart: (state) => {
      state.isLoading = true;
    },
    updatetimesheetRowSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;

      for (let i = 0; i < state.timesheetsRows.length; i++) {
        const timesheetRow = state.timesheetsRows[i];

        if (timesheetRow.id === action.payload.timesheetRowId) {
          timesheetRow.projectId = action.payload.timesheetRow.projectId;
          timesheetRow.taskId = action.payload.timesheetRow.taskId;
          timesheetRow.mondayHours = action.payload.timesheetRow.mondayHours;
          timesheetRow.tuesdayHours = action.payload.timesheetRow.tuesdayHours;
          timesheetRow.wednesdayHours =
            action.payload.timesheetRow.wednesdayHours;
          timesheetRow.thursdayHours =
            action.payload.timesheetRow.thursdayHours;
          timesheetRow.fridayHours = action.payload.timesheetRow.fridayHours;
          timesheetRow.saturdayHours =
            action.payload.timesheetRow.saturdayHours;
          timesheetRow.sundayHours = action.payload.timesheetRow.sundayHours;
          break;
        }
      }
      state.messages.updateRow = "Row updated!";
      state.isUpdating = true;
    },
    updatetimesheetRowFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isUpdating = false;
    },

    deleterowStart: (state) => {
      state.isLoading = true;
    },
    deleterowSuccess: (state, action) => {
      state.isLoading = false;
      state.timesheetsRows = state.timesheetsRows.filter(
        (row) => row.id !== action.payload
      );
      state.error = null;
    },
    deleterowFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    resetMessages: (state) => {
      state.messages = {};
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
      const createdrow = await createTimeSheetRow({
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
      dispatch(actions.createtimesheetsRowsuccess(createdrow));
    } catch (err) {
      dispatch(
        actions.createtimesheetsRowFailure(err?.response?.data?.message)
      );
    }
  };
};

export const updateTheRow = ({
  id,
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
      dispatch(actions.updatetimesheetRowStart());
      const createdrow = await updateTimeSheetRow({
        id,
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
      dispatch(actions.updatetimesheetRowSuccess(createdrow));
    } catch (err) {
      dispatch(actions.updatetimesheetRowFailure(err?.response?.data?.message));
    }
  };
};

export const deleteTheRow = (rowId) => {
  return async (dispatch) => {
    try {
      dispatch(actions.deleterowStart());
      await deleteRow(rowId);
      dispatch(actions.deleterowSuccess(rowId));
    } catch (err) {
      dispatch(actions.deleterowFailure(err?.response?.data?.message));
    }
  };
};

export const resetRoWMessages = () => {
  return async (dispatch) => {
    dispatch(actions.resetMessages());
  };
};

export const resetTimesheetsRow = actions.reset;
