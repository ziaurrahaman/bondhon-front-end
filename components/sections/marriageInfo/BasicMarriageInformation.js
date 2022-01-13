import React from "react";
import Title from "../../shared/others/Title";
import Address from "../../shared/others/addressNew";
import {
  Container,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
  TextField,
  Grid,
  Stack,
  Typography,
} from "@mui/material";


const BasicMarriageInformation = () => {
  const [isHusbandPerfomDevorce, setIsHunbandPerformDevorec] =
    React.useState(false);
  const [
    isHusbandTakenPrmissionFromCurrentWife,
    setHusbandTakenPermissionFromCurrentWife,
  ] = React.useState(false);

  const [isDevorcy, setIsDevorcy] = React.useState(false);

  const [isAlimonyGiven, setIsAlimonyGiven] = React.useState(false);

  function maritalStatusChangeHandler(event) {
    if (event.target.value === "devorcy") {
      setIsDevorcy(true);
    } else {
      setIsDevorcy(false);
      setIsAlimonyGiven(false);
    }
  }

  function isHusbandPerfomDevorceChangeHandler(event) {
    console.log(event.target.value);
    if (event.target.value === "bride") {
      setIsHunbandPerformDevorec(true);
    }
    if (event.target.value === "groom") {
      setIsHunbandPerformDevorec(false);
    }
    if (isHusbandTakenPrmissionFromCurrentWife === true) {
      setHusbandTakenPermissionFromCurrentWife(false);
    }
    // value = !value;
    // setIsHunbandPerformDevorec(value);
    // console.log(value);
  }
  function isHusbandTakenPermissonFromWifeHandler(event) {
    if (event.target.value === "takenPermission") {
      setHusbandTakenPermissionFromCurrentWife(true);
    }
  }

  function husbandsRightRevokedChangeHandler(event) {
    if (event.target.value === "khorposhEvidence") {
      setIsAlimonyGiven(true);
    }
  }

  return (
    <>
      <Container>
        <Paper
          sx={{ my: { xs: 2, md: 4 }, p: { xs: 1, md: 2 } }}
          elevation={3}
          square
        >
          <Address title={"বিবাহ নিবন্ধনের স্থান"} />
          <br />
          <Title>
            <Typography variant="h6">বিবাহ সম্পর্কে অন্যান্য তথ্য</Typography>
          </Title>

          <Grid container spacing={2} px={2}>
            <Grid item xs={12} sm={12} md={3}>
              <Stack>
                <TextField
                  id="marriageFiexedOn"
                  label="বিয়ে ঠিক হয়েছে"
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
            <Grid item xs={12} sm={12} md={3}>
              <Stack>
                <TextField
                  id="marriageDate"
                  label="  বিয়ের তারিখ"
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
            <Grid item xs={12} sm={12} md={3}>
              <Stack>
                <TextField
                  id="marriageRegistrationDate"
                  label="বিবাহ নিবন্ধনের তারিখ"
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
            <Grid item xs={12} sm={12} md={3}>
              <TextField
                required
                id="mohorAmmount"
                name="mohorAmount"
                label="দেন মোহরের পরিমাণ"
                fullWidth
                size="small"
                autoComplete="given-name"
                variant="outlined"
                type={"number"}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={2.7}>
              <TextField
                required
                id="mohorMoazzol"
                name="mohorMoazzol"
                label="দেন মোহর মুয়াজ্জল"
                fullWidth
                size="small"
                autoComplete="given-name"
                variant="outlined"
                type={"text"}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={2.7}>
              <TextField
                required
                id="mohorMoazzol"
                name="mohorMoazzol"
                label="দেন মোহর মু'অজ্জিল"
                fullWidth
                size="small"
                autoComplete="given-name"
                variant="outlined"
                type={"text"}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3.1}>
              <FormControl component="fieldset">
                {/* <FormLabel component="legend">লিঙ্গ</FormLabel> */}
                <RadioGroup
                  row
                  aria-label="gender"
                  name="controlled-radio-buttons-group"
                  size="small"
                //   value={value}
                //   onChange={handleChange}
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="দেন মোহর প্রদান হয়েছি কি?"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={3.5}>
              <TextField
                required
                id="mohorMoazzol"
                name="mohorMoazzol"
                label="পরিশোধিত দেনমোহরের পরিমাণ"
                fullWidth
                size="small"
                autoComplete="given-name"
                variant="outlined"
                type={"number"}
              />
            </Grid>
          </Grid>
          <br />
          <Grid container style={{ display: "flex", justifyContent: "space-between" }}>
            <Grid item sm={12} md={5.8} xs={12}>
              <Title>
                <Typography variant="h6">কনের বিশেষ তথ্য</Typography>
              </Title>
              <Grid container spacing={1.5} px={2}>
                <Grid item xs={12} sm={12} md={12}>
                  <FormControl component="fieldset">
                    <RadioGroup
                      row
                      aria-label="position"
                      name="userType"
                      defaultValue="top"
                      onChange={(e) => maritalStatusChangeHandler(e)}
                    >
                      <FormControlLabel
                        value="groom"
                        control={<Radio color="primary" />}
                        label="কনে কুমারী"
                      />
                      <FormControlLabel
                        value="bride"
                        control={<Radio color="success" />}
                        label="বিধবা"
                      />
                      <FormControlLabel
                        value="devorcy"
                        control={<Radio color="secondary" />}
                        label="তালাকপ্রাপ্ত নারী"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                {isDevorcy && (
                  <>
                    <Grid item xs={12} sm={12} md={12}>
                      <TextField
                        name="marriageDate"
                        label="তালাক প্রাপ্ত হওয়ার শর্ত"
                        fullWidth
                        size="small"
                        type="text"
                        defaultValue="2021-12-27"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                      <FormControl component="fieldset">
                        <RadioGroup
                          row
                          aria-label="position"
                          name="devorcy"
                          onChange={(e) => { husbandsRightRevokedChangeHandler(e); }}
                        >
                          <FormControlLabel
                            value="rightRevoked"
                            control={<Radio color="primary"></Radio>}
                            label={"স্বামীর অধিকার বাতিল"}
                          ></FormControlLabel>
                          <FormControlLabel
                            value={"khorposhEvidence"}
                            label={"খোরপোশের প্রমাণ"}
                            control={<Radio color="primary" />}
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                  </>
                )}
                {isAlimonyGiven && (
                  <Grid item xs={12} sm={12} md={12}>
                    <TextField
                      id="marriageDate"
                      label="খোরপোশের শর্ত"
                      fullWidth
                      size="small"
                      type="text"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                )}
              </Grid>
            </Grid>
            <Grid item sm={12} md={5.8} xs={12}>
              <Title>
                <Typography variant="h6">বরের বিশেষ তথ্য</Typography>
              </Title>
              <Grid container spacing={1.5} px={2}>
                <Grid item xs={12} sm={12} md={12}>
                  <FormControl component="fieldset">
                    <RadioGroup
                      row
                      aria-label="position"
                      name="userType"
                      defaultValue="top"
                      onChange={(e) => isHusbandPerfomDevorceChangeHandler(e)}
                    >
                      <FormControlLabel
                        value="groom"
                        control={<Radio color="primary" />}
                        label="অবিবাহিত"
                      />
                      <FormControlLabel
                        value="bride"
                        control={<Radio color="success" />}
                        label="বিবাহিত"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                {isHusbandPerfomDevorce && (
                  <>
                    <Grid item sm={12} md={12} xs={12}>
                      <FormControl component="fieldset">
                        <RadioGroup
                          row
                          aria-label="position"
                          name="userType"
                          defaultValue="top"
                          onChange={(e) =>
                            isHusbandTakenPermissonFromWifeHandler(e)
                          }
                        >
                          <FormControlLabel
                            value="takenPermission"
                            control={<Radio />}
                            label="
                        স্ত্রীর কাছ থেকে অনুমতি নিয়েছে"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                  </>
                )}
                {isHusbandTakenPrmissionFromCurrentWife &&
                  isHusbandPerfomDevorce && (
                    <>
                      <Grid item xs={12} sm={12} md={6}>
                        <TextField
                          id="marriageDate"
                          label="  অনুমতি নম্বর"
                          fullWidth
                          size="small"
                          type="number"
                          defaultValue="2021-12-27"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6}>
                        <Stack>
                          <TextField
                            id="marriageDate"
                            label=" অনুমতি নেওয়ার তারিখ"
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
                    </>
                  )}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default BasicMarriageInformation;

