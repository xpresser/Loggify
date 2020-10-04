import { combineReducers } from "redux";
import { authReducer } from "./slices/auth";
import { timesheetRowReducer } from "./slices/timeSheetRows";
import { timesheetReducer } from "./slices/timesheets";

export const appReducer = combineReducers({
  auth: authReducer,
  timesheetRows: timesheetRowReducer,
  timesheets: timesheetReducer,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
