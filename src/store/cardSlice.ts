import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CardState {
  clicks: Record<string, number>;
}

const initialState: CardState = {
  clicks: {}
};

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    incrementClick: (state, action: PayloadAction<string>) => {
      if (state.clicks[action.payload]) {
        state.clicks[action.payload] += 1;
      } else {
        state.clicks[action.payload] = 1;
      }
    }
  }
});

export const { incrementClick } = cardSlice.actions;
export default cardSlice.reducer;
