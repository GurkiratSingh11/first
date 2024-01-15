
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
};

const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { setOpen } = drawerSlice.actions;
export const selectDrawerOpen = (state) => state.drawer.open;

export default drawerSlice.reducer;
