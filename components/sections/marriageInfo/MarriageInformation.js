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
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
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
                      onClick={handleNext}
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
