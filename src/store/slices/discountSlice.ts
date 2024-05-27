import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IDiscount } from '../../interfaces/discount.interface';
import { IInitialState } from '../../interfaces/initial.state.interface';
import { FormValues } from '../../validators/schema.validator';

const initialState: IInitialState = {
  discounts: [],
  loading: false,
  error: null,
};

export const discountSlice = createSlice({
  name: 'discount',
  initialState,
  reducers: {
    setNewDiscount(state, action: PayloadAction<FormValues>) {
      state.loading = true;
      const newDiscount: IDiscount = { ...action.payload, id: new Date().getTime() };
      state.discounts.push(newDiscount);
      state.loading = false;
    },
  },
});

export const { setNewDiscount } = discountSlice.actions;
export const discountReducer = discountSlice.reducer;
