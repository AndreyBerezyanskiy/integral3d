import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface UserState {
  name: string;
  age: number;
}

const initialState: UserState = {
  name: 'John Doe',
  age: 30
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
  },
});

export const { setName, setAge } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;