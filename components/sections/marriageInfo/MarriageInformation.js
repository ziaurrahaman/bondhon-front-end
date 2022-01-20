import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SendIcon from "@mui/icons-material/Send";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid, Paper,
  Step,
  StepLabel,
  Stepper,
  Typography
} from "@mui/material";
import axios from "axios";
import Image from "next/image";
import React from "react";
import { NotificationManager } from "react-notifications";
import { useDispatch, useSelector } from "react-redux";
import {
  bridesAddressInfo,
  bridesBasicInfo,
  marriageInfoBasicInfoUrl
} from "../../../url/ApiList";
import Review from "../../shared/others/review";
import Bride from "../bride/Bride";
import Groom from "../groom/Groom";
import LawyerFatherAndWitness from "../lawyer-witness/Lawyer_Witness";
import BasicMarriageInformation from "./BasicMarriageInformation";

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
      <Grid container >
        <Grid xs={12} sm={12} md={12} sx={{mt:3}}>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Paper variant="outlined" sx={{width:800}}>
            <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              padding:2,
            }}
          >
              <Image
                src="/certificate.png"
                alt="Bride Picture"
                width={100}
                height={100}
              />
              </Box>
              <Typography variant="h4" component="h2" sx={{textAlign:"center", color:"#f06292", fontWeight: 'bold'}}>
              অভিনন্দন !!!
              </Typography>
              <Typography variant="h5" component="h2" sx={{textAlign:"center", color:"#1de9b6",fontWeight: 'bold'}}>
              বিবাহ নিবন্ধন সফলভাবে সম্পূর্ণ হয়েছে
              </Typography>
              <Typography variant="h6" component="h2" sx={{textAlign:"center", color:"#1de9b6", fontWeight: 'bold',mb:4}}>
               বিবাহ নিবন্ধন নং : 15874221445
              </Typography>
          </Paper>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

const MarriageInformation = () => {
  const groomDispatch = useDispatch();
  const [activeStep, setActiveStep] = React.useState(0);
  const groomPayload = useSelector((state) => state.groomReg);
  const bridePayload = useSelector((state) => state.brideReg);
  const mrgInfoPayload = useSelector((state) => state.mrgInfo);
  // console.log("groompayloadddddddd", groomPayload);
  // console.log("bridepayloadddddddd", bridePayload);

  const handleNext = async () => {
    // groomDispatch(RegisterGroom(groomPayload));
    // console.log("bridePayloadddddddd", bridePayload);
    setActiveStep(activeStep + 1);
    if (activeStep === 4) {
      console.log("groompayloadddddddd", groomPayload);
      try {
        console.log(` url1 ${bridesBasicInfo} `);
        // console.log("token", config);
        const brideBasicData = await axios.post(bridesBasicInfo, groomPayload);
        const brideAddressData = await axios.post(bridesAddressInfo, {
          address_type: groomPayload.address_type,
          user_type: "Groom",
          district_id: groomPayload.district_id,
          upazila_id: groomPayload.upazila_id,
          union_id: groomPayload.union_id,
          post_code: groomPayload.post_code,
          details_address: groomPayload.details_address,
        });
        console.log(` url1 ${bridesBasicInfo} `);
        // console.log("token", config);
        const groomBasicData = await axios.post(bridesBasicInfo, {
          nid: bridePayload.nid,
          name: bridePayload.name,
          dob: bridePayload.dob,
          mobile_no: bridePayload.mobile_no,
          email: bridePayload.email,
          relegion: bridePayload.relegion,
          father_name: bridePayload.father_name,
          father_nid: bridePayload.father_nid,
          mother_name: bridePayload.mother_name,
          mother_nid: bridePayload.mother_nid,
        });
        const groomAddressData = await axios.post(bridesAddressInfo, {
          address_type: bridePayload.address_type,
          user_type: "Bride",
          district_id: bridePayload.district_id,
          upazila_id: bridePayload.upazila_id,
          union_id: bridePayload.union_id,
          post_code: bridePayload.post_code,
          details_address: bridePayload.details_address,
        });
        const marriageBasicData = await axios.post(
          marriageInfoBasicInfoUrl,
          mrgInfoPayload
        );

        console.log("pay", brideBasicData.data.message);
        console.log("pay", brideAddressData.data.message);
        NotificationManager.success(
          brideBasicData.data.message,
          "Success",
          5000
        );

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
    }
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
