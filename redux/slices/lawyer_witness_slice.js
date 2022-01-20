import { createSlice } from "@reduxjs/toolkit";

export const lawyerWitnessSlice = createSlice({
  name: "lawyerWitness",
  initialState: {
    lawFatherName: "",
    lawNid: "",
    dob: "",
    addressType: "PRS",
    userType: "Law",
    districtId: "",
    upazila: "",
    union: "",
    postOfc: "",
    addDetails: "",
    createBy: "Admin",
  },
  reducers: {
    SetLawyerAction: (state, action) => {
      (state.lawFatherName = action.payload.lawFatherName),
        (state.lawNid = action.payload.lawNid),
        (state.dob = action.payload.dob),
        (state.addressType = action.payload.addressType),
        (state.userType = action.payload.userType),
        (state.districtId = action.payload.districtId),
        (state.upazila = action.payload.upazila),
        (state.union = action.payload.union),
        (state.postOfc = action.payload.postOfc),
        (state.addDetails = action.payload.addDetails),
        (state.createBy = action.payload.createBy);
    },
  },
});
