import { createSlice } from "@reduxjs/toolkit";
import { signIn, signUp, signOut } from "src/api/auth";
import { getCurrentUser } from "src/api/users";

const userInitialState = localStorage.getItem("token")
  ? {
      token: localStorage.getItem("token"),
      username: localStorage.getItem("username"),
    }
  : null;

const initialState = {
  users: [],
  user: userInitialState,
  error: null,
  isLoading: null,
  isSessionChecked: false,
};

const { reducer: authReducer, actions } = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authStart: (state) => {
      state.isLoading = false;
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
    logOut: () => ({ ...initialState, user: null }),
    fetchUserStart: (state) => {
      state.isGetting = true;
    },
    fetchfetchUserStartSuccess: (state, action) => {
      state.isGetting = false;
      state.users.unshift(action.payload);
      state.error = null;
    },
    fetchTfetchUserStartFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    reset: () => initialState,
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

      const res = await signIn({ username, password });
      const { token } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);

      dispatch(actions.authSuccess(res.data));
    } catch (err) {
      dispatch(actions.authFailure(err?.response?.data));
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

export const logout = () => {
  return async (dispatch) => {
    try {
      await signOut();
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      dispatch(actions.logOut());
    } catch (ok) {}
  };
};

export const fetchCurrentUser = (userId) => {
  return async (dispatch) => {
    try {
      dispatch(actions.fetchUserStart());
      const results = await getCurrentUser(userId);
      dispatch(actions.fetchfetchUserStartSuccess(results));
    } catch (err) {
      dispatch(
        actions.fetchTfetchUserStartFailure(err?.response?.data?.message)
      );
    }
  };
};

export const { logOut } = actions;

export const resetUser = actions.reset;
