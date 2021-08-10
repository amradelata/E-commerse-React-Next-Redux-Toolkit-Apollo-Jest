import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoding: false,
  },
  reducers: {
    setUserOpject(state) {
      state.isLoding = true;
      console.log(state.isLoding);
    },
    logOut(state) {
      state.isLoding = false;
    },
  },
});
//action
export const { setUserOpject, logOut } = authSlice.actions;
// thunk
export const adduser = (body) => async (dispatch) => {
  const data = await fetch(
    "https://vue-e-commerce-databse.herokuapp.com/users",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  ).then((res) => res.json());
  dispatch(setUserOpject(data));
};
export default authSlice.reducer;
