import { React, useState } from "react";
import { Grid, Typography, Stack, InputAdornment, TextField, Container, Paper, Tooltip, Button } from "@mui/material";
import Title from "../../shared/others/Title";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AbcIcon from '@mui/icons-material/Abc';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PercentIcon from '@mui/icons-material/Percent';
import EmojiSymbolsIcon from '@mui/icons-material/EmojiSymbols';
import TitleIcon from '@mui/icons-material/Title';
import SaveIcon  from '@mui/icons-material/Save';

const CoatFee = () => {
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
            <Typography variant="h6">কোর্ট ফি</Typography>
          </Title>

          <Grid container spacing={3} px={2}>

            <Grid item xs={12} sm={12} md={4}>
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
            <Grid item xs={12} sm={12} md={4}>
              <TextField
                required
                name="nikahNo"
                label="নিকাহানামা নং"
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
            <Grid item xs={12} sm={12} md={4}>
              <TextField
                required
                name="regNo"
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
            <Grid item xs={12} sm={12} md={4}>
              <TextField
                required
                name="denMohor"
                label="দেনমোহরের পরিমাণ"
                fullWidth
                size="small"
                autoComplete="given-name"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <ConfirmationNumberIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <TextField
                required
                name="denMohor"
                label="শতকরায় দেনমোহর"
                fullWidth
                size="small"
                autoComplete="given-name"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PercentIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <TextField
                required
                name="denMohor"
                label="মোট কোর্ট ফি"
                fullWidth
                size="small"
                autoComplete="given-name"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmojiSymbolsIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                required
                name="nid"
                label="কথায়"
                fullWidth
                size="small"
                autoComplete="family-name"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <TitleIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              sm={12}
              mx={3}
              my={2}
              sx={{ textAlign: "center" }}
            >
              <Tooltip title="আগের পাতায়">
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ mr: 1 }}
                  startIcon={<SaveIcon />}
                >
                  {" "}
                  জমা দিন
                </Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  )
}

export default CoatFee
