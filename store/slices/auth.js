import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoding: false,
    userEmail: null,
  },
  reducers: {
    setUserOpject(state) {
      state.isLoding = true;
      console.log(state.isLoding);
    },
    logOut(state) {
      state.isLoding = false;
    },
    UserLogIn(state, { payload }) {
      // https://vue-e-commerce-databse.herokuapp.com/users?id=1
      state.userEmail = payload.email;
      console.log(payload.email, payload);
      state.isLoding = true;
    },
  },
});
//action
export const { setUserOpject, logOut, UserLogIn } = authSlice.actions;
// thunk
export const adduser = (body) => async (dispatch) => {
  const data = await fetch(" http://localhost:3001/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
  dispatch(setUserOpject(data));
};

export default authSlice.reducer;
