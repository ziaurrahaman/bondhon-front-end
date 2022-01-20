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
      const index = action.payload.index;
      state[index].name = action.payload.name;
      state[index].dob = action.payload.dob;
      state[index].detailAddress = action.payload.detailAddress;
      state[index].behalf = action.payload.behalf;
      state[index].nid = action.payload.nid;
      state[index].createBy = "admin";

      console.log("witstate", state);
    },
  },
  //   reducers: {
  //     setWitness: (state, action) => state.push(action.payload),
  //   },
});
