import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    isLogIn: false,
    user: [],
    ErorrMass: "",
    Shipping: false,
    Payment: false,
  },
  reducers: {
    chickOutShipping(state, { payload }) {
      state.Shipping = payload;
    },
    chickOutPayment(state, { payload }) {
      state.Payment = payload;
    },
    chickOutDone(state) {
      state.Payment = false;
      state.Shipping = false;
    },
    setSignIn(state, { payload }) {
      if (payload.accessToken) {
        state.isLogIn = true;
        state.user = payload.user.email;
      }
      if (!payload.accessToken) {
        state.isLogIn = false;
        state.ErorrMass = payload;
      }
    },

    setLogIn(state, { payload }) {
      if (payload.accessToken) {
        state.isLogIn = true;

        state.user = payload.user.email;
      }
      if (payload === "Cannot find user") {
        state.isLogIn = false;

        state.ErorrMass = payload;
      }
    },
    logOut(state) {
      state.isLogIn = false;
    },
  },
});

//action
export const {
  setSignIn,
  logOut,
  setLogIn,
  chickOutShipping,
  chickOutPayment,
  chickOutDone,
} = AuthSlice.actions;
// thunk
export const adduser = (body) => async (dispatch) => {
  const data = await fetch("http://localhost:3001/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());

  dispatch(setSignIn(data));
};

export const logindata = (body) => async (dispatch) => {
  const UserLogIndata = await fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());

  dispatch(setLogIn(UserLogIndata));
};

export default AuthSlice.reducer;
