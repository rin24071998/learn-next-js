import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  authed: false,
  accesstoken: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authend: (state, action) => {
      state.authed = true;
      state.accesstoken = action?.payload?.accesstoken
    },
  },
});

export const { authend } = userSlice.actions;
export default userSlice.reducer;