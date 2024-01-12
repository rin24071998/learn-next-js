import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  admin: false,
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    authend: (state) => {
      state.admin = true;
    },
  },
});

export const { authend } = adminSlice.actions;
export default adminSlice.reducer;