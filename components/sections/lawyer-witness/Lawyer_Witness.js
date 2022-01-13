import { React, useState } from 'react';
import { Grid, Typography, Stack, InputAdornment, TextField, Container, Paper } from "@mui/material";
import Title from "../../shared/others/Title";
import Address from "../../shared/others/addressNew";
import WitnessForm from "./WitnessForm";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MaleIcon from '@mui/icons-material/Male';

const LawyerWitness = (props) => {
  return (
    <>
      <Container>
        <Paper
          sx={{ my: { xs: 2, md: 4 }, p: { xs: 1, md: 2 } }}
          elevation={3}
          square
          style={{ marginTop: "3%" }}
        >
          <Title>
            <Typography variant="h6">উকিল বাবার তথ্য</Typography>
          </Title>

          <Grid container spacing={2} px={2}>

            <Grid item xs={12} sm={4} md={4}>
              <TextField
                required
                id="nid"
                name="nid"
                label="জাতীয় আইডি নম্বর"
                fullWidth
                size="small"
                autoComplete="family-name"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CreditCardIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Stack>
                <TextField
                  id="date"
                  label="জন্ম তারিখ"
                  fullWidth
                  size="small"
                  type="date"
                  defaultValue="2021-12-27"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                required
                id="Name"
                name="Name"
                label="নাম"
                fullWidth
                size="small"
                autoComplete="given-name"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MaleIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Grid sm={12} md={12} xs={12} spacing={2} style={{ marginTop: "2%" }}>
              <Address title={"ঠিকানা"}></Address>
            </Grid>
          </Grid>

          <div style={{ marginTop: "4%" }}>
            <WitnessForm></WitnessForm>
          </div>
        </Paper>
      </Container>
    </>
  );
};
export default LawyerWitness;
