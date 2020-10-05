import { createSlice } from "@reduxjs/toolkit";
import { getAllByRole } from "@testing-library/react";
import { getAllProjects, getAllTasks } from "src/api/timesheets";

const initialState = {
  projects: [],
  tasks: [],
  isLoading: false,
  error: null,
};

const { reducer: seedsReducer, actions } = createSlice({
  name: "seeds",
  initialState,
  reducers: {
    fetchProjectStart: (state) => {
      state.isLoading = true;
    },
    fetchProjectSuccess: (state, action) => {
      state.isLoading = false;
      state.projects.unshift(action.payload);
      state.error = null;
    },
    fetchProjectFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    fetchTasksStart: (state) => {
      state.isLoading = true;
    },
    fetchTasksSuccess: (state, action) => {
      state.isLoading = false;
      state.tasks.unshift(action.payload);
      state.error = null;
    },
    fetchTasksFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export { seedsReducer };

export const fetchProjects = () => {
  return async (dispatch) => {
    try {
      dispatch(actions.fetchProjectStart());
      {
        console.log("test");
      }
      const results = await getAllProjects();
      console.log(results);
      dispatch(actions.fetchProjectSuccess(results));
    } catch (err) {
      dispatch(actions.fetchProjectFailure(err?.response?.data?.message));
    }
  };
};

export const fetchTasks = () => {
  return async (dispatch) => {
    try {
      dispatch(actions.fetchTasksStart());
      const results = await getAllTasks();
      console.log(results);
      dispatch(actions.fetchTasksSuccess(results));
    } catch (err) {
      dispatch(actions.fetchProjectFailure(err?.response?.data?.message));
    }
  };
};
