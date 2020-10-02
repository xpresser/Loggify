import { createSlice } from "@reduxjs/toolkit";
import { signIn } from "../../api/auth";

const initialState = {
  user: null,
  error: null,
  isLoading: null,
};

const { reducer: authReducer, actions } = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authStart: (state) => {
      state.isLoading = true;
    },
    authSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    },
    authFailure: (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.error = action.payload;
    },
  },
});

export { authReducer };

export const login = ({ username, password }) => {
  return async (dispatch, getState) => {
    const isLoading = getState().auth.isLoading;
    if (isLoading) {
      return;
    }

    try {
      dispatch(actions.authStart());
      const user = await signIn({ username, password });
      dispatch(actions.authSuccess(user));
    } catch (err) {
      dispatch(actions.authFailure(err));
    }
  };
};
