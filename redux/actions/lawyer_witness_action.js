import { lawyerWitnessSlice } from "../slices/lawyer_witness_slice";

const { actions: lawyerWitnessSlicee } = lawyerWitnessSlice;

export const SetLawyerWitnessPayloadAction = (payload) => (dispatch) => {
  dispatch(lawyerWitnessSlicee.SetLawyerAction(payload));
};
// export const RegisterGroom = (payload) => (dispatch) => {
//   dispatch(groomSlicee.RegisterGroom(payload));
//   s;
// };
