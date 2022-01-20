import { combineReducers } from "@reduxjs/toolkit";
import { brideGroomSlice } from "../redux/slices/bride_slice";
import { groomSlice } from "../redux/slices/groom_slice";
import { marriageInfoSlice } from "../redux/slices/marriage_info";

export const rootReducer = combineReducers({
  brideReg: brideGroomSlice.reducer,
  groomReg: groomSlice.reducer,
  mrgInfo: marriageInfoSlice.reducer,
});
