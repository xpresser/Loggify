import { createSlice } from "@reduxjs/toolkit";
import { signIn, signUp, signOut } from "src/api/auth";
import { getMe } from "src/api/users";

const initialState = {
  user: null,
  error: null,
  isLoading: null,
  isSessionChecked: false,
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
    markSessionChecked: (state) => {
      state.isSessionChecked = true;
    },
    logOut: () => ({ ...initialState, isSessionChecked: true }),
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

export const register = ({ fullName, username, email, password }) => {
  return async (dispatch, getState) => {
    const isLoading = getState().auth.isLoading;

    if (isLoading) {
      return;
    }

    try {
      dispatch(actions.authStart());

      const user = await signUp({
        fullName,
        username,
        email,
        password,
      });
      dispatch(actions.authSuccess(user));
    } catch (err) {
      dispatch(actions.authFailure(err?.response?.data?.message));
    }
  };
};

export const checkSession = () => {
  return async (dispatch) => {
    try {
      const user = await getMe();
      dispatch(actions.authSuccess(user));
    } catch (err) {}

    dispatch(actions.markSessionChecked());
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch(actions.logOut());

    try {
      await signOut();
    } catch (ok) {}
  };
};

export const { logOut } = actions;
