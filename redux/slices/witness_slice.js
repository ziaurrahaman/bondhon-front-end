import { createSlice } from "@reduxjs/toolkit";

export const witnessSlice = createSlice({
  name: "witnessSlice",
  initialState: [
    { name: "", dob: "", detailAddress: "", behalf: "", nid: "", createBy: "" },
  ],
  reducers: {
    WitnessAdd: (state) => {
      state.push({
        name: "",
        dob: "",
        detailAddress: "",
        behalf: "",
        nid: "",
        createBy: "",
      });
    },
    WitnessDelete: (state) => {
      state.pop();
    },
    WitnessDataUpdate: (state, action) => {
      console.log("Actions", action.payload);
      const index = action.payload.index;
      state[index][state.name] = action.payload.name;
      state[index][state.dob] = action.payload.dob;
      state[index][state.detailAddress] = action.payload.detailAddress;
      state[index][state.behalf] = action.payload.behalf;
      state[index][state.nid] = action.payload.nid;
      state[index][state.createBy] = "admin";

      console.log("witstate", action.payload.name);
    },
  },
  //   reducers: {
  //     setWitness: (state, action) => state.push(action.payload),
  //   },
});
