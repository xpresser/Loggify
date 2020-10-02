import { combineReducers } from "redux";
import { authReducer } from "./slices/auth";
import { timesheetRowReducer } from "./slices/timeSheetRows";

export const appReducer = combineReducers({
  auth: authReducer,
  timesheetRows: timesheetRowReducer,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
