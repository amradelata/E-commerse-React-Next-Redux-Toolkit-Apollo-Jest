import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogIn: false,
    user: null,
    showErorr: null,
    ErorrMass: "",
  },
  reducers: {
    setUserOpject(state, { payload }) {
      // console.log(payload);
      if (payload.accessToken) {
        state.isLogIn = true;
        state.user = payload.user.email;
      }
      if (!payload.accessToken) {
        state.isLogIn = false;
        state.ErorrMass = payload;
      }
    },
    logOut(state) {
      state.isLogIn = false;
    },
    UserLogIn(state, { payload }) {
      console.log(payload);
      if (payload.accessToken) {
        state.isLogIn = true;

        console.log("user here");
        state.user = payload.user.email;
        document.getElementById("login").style.display = "none";
        document.getElementById("dropdown-content").style.display = "none";
      }
      if (payload === "Cannot find user") {
        state.isLogIn = false;

        state.ErorrMass = payload;
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
