import { combineReducers } from "@reduxjs/toolkit";
import { brideGroomSlice } from "../redux/slices/bride_slice";
import { groomSlice } from "../redux/slices/groom_slice";
import { marriageInfoSlice } from "../redux/slices/marriage_info";
import { lawyerWitnessSlice } from "../redux/slices/lawyer_witness_slice";
import { witnessSlice } from "../redux/slices/witness_slice";

export const rootReducer = combineReducers({
  brideReg: brideGroomSlice.reducer,
  groomReg: groomSlice.reducer,
  mrgInfo: marriageInfoSlice.reducer,
  lawyerWitness: lawyerWitnessSlice.reducer,
  witnessSlice: witnessSlice.reducer,
});
