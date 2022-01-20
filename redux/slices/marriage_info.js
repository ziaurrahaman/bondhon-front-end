import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import { bridesBasicInfo } from "../../url/ApiList";
import { bridesAddressInfo } from "../../url/ApiList";

// const regGroomWithPost = createAsyncThunk("groom/postGroom", async () => {
//   const response = await userAPI.fetchById(userId);
//   return response.data;
// });

export const marriageInfoSlice = createSlice({
  name: "mrgInfo",
  initialState: {
    gb_id: 123456,
    district_id: "",
    upazila_id: "",
    union_id: "",
    post_code: "",
    detail_address: "",
    fixed_on: "",
    marriage_date: "",
    reg_date: "",
    denmohor: "",
    paid_denmohor: "",
    muazzol: "",
    muazzil: "",
    mrg_id: 123456,
    whom: "",
    mrg_status: "",
    devorce_con: "",
    revoke_per: "",
    alimony_pr: "",
    per_no: 222222,
    per_date: "2022-5-20",
  },
  reducers: {
    SetMarriageInfoPayloadAction: (state, action) => {
      (state.gb_id = 123456),
        (state.district_id = action.payload.district_id),
        (state.upazila_id = action.payload.upazila_id),
        (state.union_id = action.payload.union_id),
        (state.post_code = action.payload.post_code),
        (state.detail_address = action.payload.detail_address),
        (state.fixed_on = action.payload.fixed_on),
        (state.marriage_date = action.payload.marriage_date),
        (state.reg_date = action.payload.reg_date),
        (state.denmohor = action.payload.denmohor),
        (state.paid_denmohor = action.payload.paid_denmohor),
        (state.muazzol = action.payload.muazzol),
        (state.muazzil = action.payload.muazzil),
        (state.mrg_id = 123456),
        (state.whom = action.payload.whom),
        (state.mrg_status = action.payload.mrg_status),
        (state.devorce_con = action.payload.devorce_con),
        (state.revoke_per = action.payload.revoke_per),
        (state.alimony_pr = action.payload.alimony_pr),
        (state.per_no = 2222222),
        (state.per_date = "2022-5-20");
    },
  },
});
