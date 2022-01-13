import { React, useState } from "react";
import { Grid, Typography, Stack, InputAdornment, TextField, Container, Paper, Tooltip, Button } from "@mui/material";
import Title from "../../shared/others/Title";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AbcIcon from '@mui/icons-material/Abc';
import SearchIcon from '@mui/icons-material/Search';


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Certificate = () => {
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
            <Typography variant="h6">সনদপত্রের তথ্য</Typography>
          </Title>

          <Grid container spacing={2} px={2}>

            <Grid item xs={12} sm={12} md={4.5}>
              <TextField
                required
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
            <Grid item xs={12} sm={12} md={3}>
              <TextField
                label="জন্ম তারিখ"
                fullWidth
                size="small"
                type="date"
                defaultValue="2021-12-27"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <TextField
                required
                name="nikahno"
                label="সনদপত্র নং"
                fullWidth
                size="small"
                autoComplete="given-name"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AbcIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={1.5}>
              <Tooltip title="সনদপত্র খুঁজুন">
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ mr: 1 }}
                  startIcon={<SearchIcon />}
                > সনদপত্র
                </Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  )
}

export default Certificate
