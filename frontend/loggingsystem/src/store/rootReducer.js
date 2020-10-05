import { combineReducers } from "redux";
import { authReducer } from "./slices/auth";
import { seedsReducer } from "./slices/seeds";
import { timesheetRowReducer } from "./slices/timeSheetRows";
import { timesheetReducer } from "./slices/timesheets";

export const appReducer = combineReducers({
  auth: authReducer,
  timesheetRows: timesheetRowReducer,
  timesheets: timesheetReducer,
  seeds: seedsReducer,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
