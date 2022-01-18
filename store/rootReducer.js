import { combineReducers } from "@reduxjs/toolkit";
import { brideGroomSlice } from "../redux/slices/bride_slice";
import { groomSlice } from "../redux/slices/groom_slice";

export const rootReducer = combineReducers({
  brideReg: brideGroomSlice.reducer,
  groomReg: groomSlice.reducer,
});
