import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@auth0/auth0-react';
import { RootState } from './store';

export interface CounterState {
  value: User | null;
}

const initialState: CounterState = {
  value: null,
};

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.value = action.payload;
    },
    removeUser: (state) => {
      state.value = null;
    },
  },
});

export const selectUser = (state: RootState) => state.user.value;
export const selectUserName = (state: RootState) => selectUser(state)?.name;

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
