import AbcIcon from "@mui/icons-material/Abc";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  Container,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { React, useState } from "react";
import Title from "../../shared/others/Title";

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

const Nikahnama = () => {
  const [nikahnamaSearch, setNikahnamaSearch] = useState(false);

  const handleSubmit = () => {
    setNikahnamaSearch(true);
  };

  return (
    <>
      <Container>
        <Grid xs={12} sm={12} md={12}>
          <Paper
            sx={{ my: { xs: 2, md: 4 }, p: { xs: 1, md: 2 } }}
            elevation={3}
            square
            style={{ marginTop: "3%" }}
          >
            <Title>
              <Typography variant="h6">নিকাহনামার তথ্য</Typography>
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
                  label="নিকাহনামা নং"
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
                <Tooltip title="নিকাহনামা খুঁজুন">
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ mr: 1 }}
                    onClick={handleSubmit}
                    startIcon={<SearchIcon />}
                  >
                    {" "}
                    নিকাহনামা
                  </Button>
                </Tooltip>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={12}
          // sx={{display:{nikahnamaSearch}}}
          style={{ display: nikahnamaSearch ? "block" : "none" }}
        >
          <Paper
            sx={{ my: { xs: 2, md: 4 }, p: { xs: 1, md: 2 } }}
            elevation={3}
            square
          >
            <Title>
              <Typography variant="h6">নিকাহনামা</Typography>
            </Title>
            <Grid xs={12} sm={12} md={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/nikahnama.jpg"
                  alt="Bride Picture"
                  width={400}
                  height={550}
                />
              </Box>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </>
  );
};

export default Nikahnama;
