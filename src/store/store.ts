import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { discountReducer } from './slices/discountSlice';

const rootReducer = combineReducers({
  discount: discountReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
