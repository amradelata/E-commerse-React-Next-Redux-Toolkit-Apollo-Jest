import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogIn: false,
    user: {},
  },
  reducers: {
    setUserOpject(state, { payload }) {
      if (payload.accessToken) {
        state.isLogIn = true;
        console.log("add new user");
      } else {
        state.isLogIn = false;
        console.log("cant add new user");
      }
    },
    logOut(state) {
      state.isLogIn = false;
    },
    UserLogIn(state, { payload }) {
      if (payload.accessToken) {
        state.isLogIn = true;
        console.log("user here");
      } else {
        state.isLogIn = false;
        console.log("user not here");
      }
    },
  },
});

//action
export const { setUserOpject, logOut, UserLogIn } = authSlice.actions;
// thunk
export const adduser = (body) => async (dispatch) => {
  const data = await fetch("http://localhost:3001/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());

  dispatch(setUserOpject(data));
};

export const logindata = (body) => async (dispatch) => {
  const UserLogIndata = await fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());

  dispatch(UserLogIn(UserLogIndata));
};

export default authSlice.reducer;
