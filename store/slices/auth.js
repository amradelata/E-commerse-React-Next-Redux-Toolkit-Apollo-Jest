import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogIn: false,
    user: null,
    showErorr: null,
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
      // console.log(payload);
    },
    chickOutDone(state) {
      state.Payment = false;
      state.Shipping = false;
    },
    setUserOpject(state, { payload }) {
      // console.log(payload);
      if (payload.accessToken) {
        state.isLogIn = true;
        state.user = payload.user.email;
        document.getElementById("signIn").style.display = "none";
        document.getElementById("dropdown-content").style.display = "none";
        // document.getElementById("errorNotefecation").style.display = "none";
      }
      if (!payload.accessToken) {
        state.isLogIn = false;
        state.ErorrMass = payload;
      }
    },

    UserLogIn(state, { payload }) {
      console.log(payload);
      if (payload.accessToken) {
        state.isLogIn = true;

        console.log("user here");
        state.user = payload.user.email;
        document.getElementById("login").style.display = "none";
        document.getElementById("dropdown-content").style.display = "none";
        // document.getElementById("errorNotefecation").style.display = "none";
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
  setUserOpject,
  logOut,
  UserLogIn,
  chickOutShipping,
  chickOutPayment,
  chickOutDone,
} = authSlice.actions;
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
