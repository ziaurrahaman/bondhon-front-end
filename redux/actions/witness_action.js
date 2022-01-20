import { witnessSlice } from "../slices/witness_slice";

const { actions: witnessSlicee } = witnessSlice;

export const WitnessDataUpdate = (payload) => (dispatch) => {
  dispatch(witnessSlicee.WitnessDataUpdate(payload));
};
export const WitnessAdd = () => (dispatch) => {
  dispatch(witnessSlicee.WitnessAdd());
};
export const WitnessDelete = () => (dispatch) => {
  dispatch(witnessSlicee.WitnessDelete());
};
// export const RegisterGroom = (payload) => (dispatch) => {
//   dispatch(groomSlicee.RegisterGroom(payload));
//   s;
// };
