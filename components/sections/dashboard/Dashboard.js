/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import Bors from "./Bor";
import FullMarriages from "./FullMarriage";
import Kones from "./Kone";
import PendingMarriages from "./PendingMarriage";
import CoatFees from "./CoatFee";
import Nikahnamas from "./Nikahnama";
import Registrations from "./Registation";
import Profiles from "./Profile";
import Link from 'next/link'


const Dashboard = () => {
  let [stepId, setStepId] = useState(0);
  useEffect(() => {
    dataStore();
  }, [stepId])
  const dataStore = () => {
    let stepfoundId = (localStorage && localStorage.stepId) ? (localStorage.stepId) : null;
    console.log("step id found", stepfoundId);
    if (stepfoundId == null) {
      localStorage.setItem("stepId", JSON.stringify(stepId));
    }
  }
  // let token= localStorage.getItem('x-auth-token');
  return (
    <>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
        }}
      >
        <Container maxWidth={false}>
          <Grid
            container
            spacing={2}
            p={3}
            mt={1}
          >
            <Link href="/user/userProfile" pasHref>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <Profiles />
            </Grid>
            </Link>
            
            <Link href="/groom/groomIndex" pasHref>
              <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
              >
                <Bors />
              </Grid>
            </Link>
            <Link href="/bride/brideIndex" pasHref>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <Kones />
            </Grid>
            </Link>
            <Link href="/marriageInfo/marriageIndex" pasHref>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <FullMarriages />
            </Grid>
            </Link>
            <Link href="/marriageInfo" passHref>
              <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
              >
                <PendingMarriages />
              </Grid>
            </Link>
            <Link href="/coatFee" passHref>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <CoatFees />
            </Grid>
            </Link>
            <Link href="/nikahnama" passHref>
              <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
              >
                <Nikahnamas />
              </Grid>
            </Link>
            <Link href="/certificate" passHref>
              <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
              >
                <Registrations />
              </Grid>
            </Link>

          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Dashboard