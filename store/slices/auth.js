import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    isLogIn: false,
    user: [],
    ErrorMassage: "",
    Shipping: false,
    Payment: false,
  },
  reducers: {
    checkoutShipping(state, { payload }) {
      state.Shipping = payload;
    },
    checkoutPayment(state, { payload }) {
      state.Payment = payload;
    },
    checkoutDone(state) {
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
        state.ErrorMassage = payload;
      }
    },

    setLogIn(state, { payload }) {
      if (payload.accessToken) {
        state.isLogIn = true;

        state.user = payload.user.email;
      }
      if (payload === "Cannot find user") {
        state.isLogIn = false;

        state.ErrorMassage = payload;
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
  checkoutShipping,
  checkoutPayment,
  checkoutDone,
} = AuthSlice.actions;
// thunk
export const addUser = (body) => async (dispatch) => {
  const data = await fetch("http://localhost:3001/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());

  dispatch(setSignIn(data));
};

export const loginData = (body) => async (dispatch) => {
  const UserLoginData = await fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());

  dispatch(setLogIn(UserLoginData));
};

export default AuthSlice.reducer;
