import React from "react";

import {
  Paper,
  Button,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Avatar,
  Box,
  Container,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import BasicMarriageInformation from "./BasicMarriageInformation";
import Groom from "../groom/Groom";
import Bride from "../bride/Bride";
import Review from "../../shared/others/review";
import LawyerFatherAndWitness from "../lawyer-witness/Lawyer_Witness";
import { useDispatch, useSelector } from "react-redux";
import {
  // SetGroomRegPayloadAction,
  RegisterGroom,
} from "../../../redux/actions/groom_action";
import { RegisterBrideAction } from "../../../redux/actions/bride_action";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import { bridesBasicInfo } from "../../../url/ApiList";
import { bridesAddressInfo } from "../../../url/ApiList";

// ------------ Stepper Steps -------------
const steps = [
  "বরের তথ্যাদি",
  "কনের তথ্যাদি",
  "বিবাহের তথ্য",
  "উকিল ও সাক্ষীর তথ্যাদি",
  "বিবাহের চূড়ান্ত তথ্য",
];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Groom title={"MarriageInfo"} />;
    case 1:
      return <Bride title={"MarriageInfo"} />;
    case 2:
      return <BasicMarriageInformation />;
    case 3:
      return <LawyerFatherAndWitness />;
    case 4:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

const bearer = (data) => {};

const FinalStep = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Thank you for your order.
      </Typography>
      <Typography variant="subtitle1">
        Your order number is #2001539. We have emailed your order confirmation,
        and will send you an update when your order has shipped.
      </Typography>
    </>
  );
};

const MarriageInformation = () => {
  const groomDispatch = useDispatch();
  const [activeStep, setActiveStep] = React.useState(0);
  const groomPayload = useSelector((state) => state.groomReg);
  // const bridePayload = useSelector((state) => state.brideReg);
  // console.log("groompayloadddddddd", groomPayload);
  // console.log("bridepayloadddddddd", bridePayload);

  const handleNext = async () => {
    console.log("groompayloadddddddd", groomPayload);
    try {
      console.log(` url1 ${bridesBasicInfo} `);
      // console.log("token", config);
      const brideBasicData = await axios.post(bridesBasicInfo, groomPayload);
      const brideAddressData = await axios.post(bridesAddressInfo, {
        address_type: action.payload.address_type,
        user_type: "Groom",
        district_id: groomPayload.district_id,
        upazila_id: groomPayload.upazila_id,
        union_id: groomPayload.union_id,
        post_code: groomPayload.post_code,
        details_address: groomPayload.details_address,
      });

      console.log("pay", brideBasicData.data.message);
      console.log("pay", brideAddressData.data.message);
      NotificationManager.success(brideBasicData.data.message, "Success", 5000);

      //router.push({ pathname: "/coop/income-expense" });
    } catch (error) {
      if (error.response) {
        let message = error.response.data.errors[0].message;
        NotificationManager.error(message, "Error", 5000);
      } else if (error.request) {
        NotificationManager.error("Error Connecting...", "Error", 5000);
      } else if (error) {
        // NotificationManager.error(error.toString(), "Error", 5000);
      }
    }
    // groomDispatch(RegisterGroom(groomPayload));
    // console.log("bridePayloadddddddd", bridePayload);
    setActiveStep(activeStep + 1);
    // if (activeStep === 0) {
    //   groomDispatch(RegisterGroom(groomPayload));
    // } else if (activeStep == 1) {
    //   groomDispatch(RegisterBrideAction(bridePayload));
    // }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ textAlign: "center", m: 2, bgcolor: "error.main" }}>
            <FavoriteIcon />
          </Avatar>
          <Typography component="h1" variant="h5" color="secondary">
            বিবাহ নিবন্ধন
          </Typography>
          <br />
        </Box>
        <Stepper activeStep={activeStep} sx={{ pb: 2 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <>
          {activeStep === steps.length ? (
            <FinalStep />
          ) : (
            <>
              {getStepContent(activeStep)}
              <Container>
                <Paper
                  sx={{ my: { xs: 1, md: 1 }, p: { xs: 1, md: 1 } }}
                  elevation={3}
                  square
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {activeStep !== 0 && (
                      <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<ArrowBackIosNewIcon />}
                        onClick={handleBack}
                        mx={1}
                      >
                        আগের পাতায়
                      </Button>
                    )}

                    <Button
                      variant="contained"
                      endIcon={<SendIcon />}
                      onClick={
                        handleNext
                        // switch (activeStep) {
                        //   case 0:
                        //     console.log("groomPayloadsss", groomPayload);
                        //     groomDispatch(RegisterGroom(groomPayload));
                        //     break;
                        //   case 1:
                        //     // groomDispatch(RegisterGroom(groomPayload)) ;
                        //     break;
                        //   case 2:
                        //     // groomDispatch(RegisterGroom(groomPayload)) ;
                        //     break;
                        //   case 3:
                        //     // groomDispatch(RegisterGroom(groomPayload)) ;
                        //     break;
                        //   case 4:
                        //     // groomDispatch(RegisterGroom(groomPayload)) ;
                        //     break;
                        // }
                      }
                    >
                      {activeStep === steps.length - 1
                        ? "জমা দিন"
                        : "পরবর্তী পাতায়"}
                    </Button>
                  </Box>
                </Paper>
              </Container>
            </>
          )}
        </>
      </Container>
    </>
  );
};

export default MarriageInformation;
