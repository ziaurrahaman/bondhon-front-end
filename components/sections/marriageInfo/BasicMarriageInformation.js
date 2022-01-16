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
  Tooltip,
  Button,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { marriageInfoBasicInfoUrl } from "../../../url/ApiList";
import SaveIcon from "@mui/icons-material/Save";
import { set } from "date-fns";

const BasicMarriageInformation = () => {
  const [addressType, setAddressType] = useState("");
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");
  const [union, setUnion] = useState("");

  // const handleAddTypeChange = (event) => {
  //   setAddressType(event.target.value);
  // };

  // const handleDivisionChange = (event) => {
  //   setDivision(event.target.value);
  // };

  // const handleDistrictChange = (event) => {
  //   setDistrict(event.target.value);
  // };

  // const handleUpazilaChange = (event) => {
  //   setUpazila(event.target.value);
  // };

  // const handleUnionChange = (event) => {
  //   setUnion(event.target.value);
  // };

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

  const [marriageInfo, setMarriageInfo] = React.useState({
    gb_id: "",
    district_id: "",
    upazila_id: "",
    union_id: "",
    post_code: "",
    detail_address: "",
    fixed_on: "",
    marriage_date: "",
    reg_date: "",
    denmohor: "",
    paid_denmohor: "",
    muazzol: "",
    muazzil: "",
    mrg_id: "",
    whom: "",
    mrg_status: "",
    devorce_con: "",
    revoke_per: "",
    alimony_pr: "",
    per_no: "",
    per_date: "",
  });

  const [formErrors, setFormErrors] = React.useState({
    gb_id: "",
    district_id: "",
    upazila_id: "",
    union_id: "",
    post_code: "",
    detail_address: "",
    fixed_on: "",
    marriage_date: "",
    reg_date: "",
    denmohor: "",
    paid_denmohor: "",
    muazzol: "",
    muazzil: "",
    mrg_id: "",
    whom: "",
    mrg_status: "",
    devorce_con: "",
    revoke_per: "",
    alimony_pr: "",
    per_no: "",
    per_date: "",
  });
  let checkFormError = () => {
    console.log(`formErrornid:${formErrors.nid}`);
    console.log(`formErrorname:${formErrors.name}`);
    let flag = false;
    for (const key in formErrors) {
      if (formErrors[key].length > 0) {
        flag = true;
      }
    }
    return flag;
  };

  const hadnleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "district_id":
        setMarriageInfo({ ...marriageInfo, [name]: value });
        formErrors.district_id = value === "" && "জেলা নির্বাচন করুন";
        break;
      case "upazila_id":
        setMarriageInfo({ ...marriageInfo, [name]: value });
        formErrors.district_id = value === "" && "উপজেলা নির্বাচন করুন";
        break;

      case "union_id":
        setMarriageInfo({ ...marriageInfo, [name]: value });
        formErrors.district_id =
          value === "" && "ইউনিয়ন অথবা ওয়ার্ড নির্বাচন করুন";
        break;
      case "post_code":
        setMarriageInfo({ ...marriageInfo, [name]: value });
        formErrors.district_id = value === "" && "পোস্ট অফিস নির্বাচন করুন";
        break;
      case "detail_address":
        setMarriageInfo({ ...marriageInfo, [name]: value });
        formErrors.detail_address = value === "" && "বিস্তারিত ঠিকানা দিন";
        break;
      case "fixed_on":
        setMarriageInfo({ ...marriageInfo, [name]: value });
        formErrors.fixed_on = value === "" && "তারিখ দিন";
        break;
      case "marriage_date":
        setMarriageInfo({ ...marriageInfo, [name]: value });
        formErrors.marriage_date = value === "" && "তারিখ দিন";
        break;
      case "reg_date":
        setMarriageInfo({ ...marriageInfo, [name]: value });
        formErrors.reg_date = value === "" && "তারিখ দিন";
        break;
      case "denmohor":
        setMarriageInfo({ ...marriageInfo, [name]: value });
        formErrors.denmohor = value === "" && "দেনমোহরের পরিমাণ দিন";
        break;
      case "muazzol":
        setMarriageInfo({ ...marriageInfo, [name]: value });
        formErrors.denmohor = value === "" && "মুয়াজ্জল পরিমাণ দিন";
        break;
      case "muazzil":
        setMarriageInfo({ ...marriageInfo, [name]: value });

        formErrors.denmohor = value === "" && "মুয়াজ্জিল পরিমাণ দিন";
        break;
      case "paid_denmohor":
        setMarriageInfo({ ...marriageInfo, [name]: value });
        formErrors.denmohor = value === "" && "আদায়কৃতদেনমোহরের পরিমাণ দিন";
        break;
      case "isMarried":
        setMarriageInfo({ ...marriageInfo, [name]: value });
    }
  };

  let onSubmitData = async (e) => {
    e.preventDefault();

    let payload = {
      gb_id: 123456,
      district_id: marriageInfo.district_id,
      upazila_id: marriageInfo.upazila_id,
      union_id: marriageInfo.union_id,
      post_code: marriageInfo.post_code,
      detail_address: marriageInfo.detail_address,
      fixed_on: marriageInfo.fixed_on,
      marriage_date: marriageInfo.marriage_date,
      reg_date: marriageInfo.reg_date,
      denmohor: marriageInfo.denmohor,
      paid_denmohor: marriageInfo.paid_denmohor,
      muazzol: marriageInfo.muazzol,
      muazzil: marriageInfo.muazzil,
      isMarried: marriageInfo.isMarried,
    };
    console.log("marriageINfoPayload:", payload);

    try {
      console.log("urllllll:", marriageInfoBasicInfoUrl);
      const marriageBasicData = await axios.post(
        marriageInfoBasicInfoUrl,
        payload
      );
      console.log("pay", marriageBasicData.data.message);

      NotificationManager.success(
        marriageBasicData.data.message,
        "Success",
        5000
      );
      NotificationManager.success(
        marriageBasicData.data.message,
        "Success",
        5000
      );
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
  };
  return (
    <>
      <Container>
        <Paper
          sx={{ my: { xs: 2, md: 4 }, p: { xs: 1, md: 2 } }}
          elevation={3}
          square
        >
          <>
            <Title>
              <Typography variant="h6">মৌলিক তথ্য</Typography>
            </Title>
            <Grid container spacing={3} px={2}>
              <Grid item xs={12} md={4} sm={12}>
                <TextField
                  fullWidth
                  label="জেলা"
                  name="district_id"
                  value={marriageInfo.district_id}
                  //onChange={handleChange}
                  onChange={hadnleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  //value={commInfo.committeeType}
                  variant="outlined"
                  size="small"
                >
                  {" "}
                  <option>- নির্বাচন করুন -</option>
                  <option value={10}>ঢাকা</option>
                  <option value={20}>মুন্সীগঞ্জ</option>
                </TextField>
              </Grid>

              <Grid item xs={12} md={4} sm={12}>
                <TextField
                  fullWidth
                  label="উপজেলা/থানা"
                  name="upazila_id"
                  //onChange={handleChange}
                  onChange={hadnleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  //value={commInfo.committeeType}
                  value={marriageInfo.upazila_id}
                  variant="outlined"
                  size="small"
                >
                  {" "}
                  <option>- নির্বাচন করুন -</option>
                  <option value={10}>মিরপুর</option>
                  <option value={20}>তুরাগ</option>
                </TextField>
              </Grid>
              <Grid item xs={12} md={4} sm={12}>
                <TextField
                  fullWidth
                  label="ইউনিয়ন/ওয়ার্ড"
                  name="union_id"
                  //onChange={handleChange}
                  value={marriageInfo.union_id}
                  onChange={hadnleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  //value={commInfo.committeeType}
                  variant="outlined"
                  size="small"
                >
                  {" "}
                  <option>- নির্বাচন করুন -</option>
                  <option value={10}>ওয়ার্ড-3</option>
                  <option value={20}>ওয়ার্ড-9</option>
                </TextField>
              </Grid>
              <Grid item xs={12} md={4} sm={12}>
                <TextField
                  fullWidth
                  label="পোস্ট অফিস"
                  name="post_code"
                  //onChange={handleChange}
                  value={marriageInfo.post_code}
                  onChange={hadnleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  //value={commInfo.committeeType}
                  variant="outlined"
                  size="small"
                >
                  {" "}
                  <option>- নির্বাচন করুন -</option>
                  <option value={10}>1216</option>
                  <option value={20}>1000</option>
                </TextField>
              </Grid>
              <Grid item xs={12} md={8} sm={12}>
                <TextField
                  required
                  id="village"
                  name="detail_address"
                  type="text"
                  label="বাড়ি নং, রাস্তা নং, গ্রাম/মহল্লা লিখুন"
                  fullWidth
                  onChange={hadnleChange}
                  size="small"
                  variant="outlined"
                  value={marriageInfo.detail_address}
                />
              </Grid>
            </Grid>
          </>
          <br />
          <Title>
            <Typography variant="h6">বিবাহ সম্পর্কে অন্যান্য তথ্য</Typography>
          </Title>

          <Grid container spacing={2} px={2}>
            <Grid item xs={12} sm={12} md={3}>
              <Stack>
                <TextField
                  value={marriageInfo.fixed_on}
                  name="fixed_on"
                  id="marriageFiexedOn"
                  label="বিয়ে ঠিক হয়েছে"
                  fullWidth
                  size="small"
                  type="date"
                  defaultValue="2021-12-27"
                  onChange={hadnleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <Stack>
                <TextField
                  name="marriage_date"
                  id="marriageDate"
                  label="  বিয়ের তারিখ"
                  fullWidth
                  size="small"
                  onChange={hadnleChange}
                  type="date"
                  defaultValue="2021-12-27"
                  value={marriageInfo.marriage_date}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <Stack>
                <TextField
                  name="reg_date"
                  id="marriageRegistrationDate"
                  label="বিবাহ নিবন্ধনের তারিখ"
                  fullWidth
                  size="small"
                  type="date"
                  defaultValue="2021-12-27"
                  onChange={hadnleChange}
                  value={marriageInfo.reg_date}
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
                name="denmohor"
                label="দেন মোহরের পরিমাণ"
                fullWidth
                size="small"
                autoComplete="given-name"
                onChange={hadnleChange}
                variant="outlined"
                type={"number"}
                value={marriageInfo.denmohor}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={2.7}>
              <TextField
                required
                id="mohorMoazzol"
                name="muazzol"
                label="দেন মোহর মুয়াজ্জল"
                value={marriageInfo.muazzol}
                fullWidth
                size="small"
                autoComplete="given-name"
                onChange={hadnleChange}
                variant="outlined"
                type={"text"}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={2.7}>
              <TextField
                required
                id="mohorMoazzol"
                name="muazzil"
                onChange={hadnleChange}
                label="দেন মোহর মু'অজ্জিল"
                fullWidth
                size="small"
                autoComplete="given-name"
                variant="outlined"
                value={marriageInfo.muazzil}
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
                name="paid_denmohor"
                label="পরিশোধিত দেনমোহরের পরিমাণ"
                fullWidth
                size="small"
                onChange={hadnleChange}
                value={marriageInfo.paid_denmohor}
                autoComplete="given-name"
                variant="outlined"
                type={"number"}
              />
            </Grid>
          </Grid>
          <br />
          <Grid
            container
            style={{ display: "flex", justifyContent: "space-between" }}
          >
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
                      name="mrg_status"
                      defaultValue="top"
                      onChange={(e) => {
                        hadnleChange(e);
                        maritalStatusChangeHandler(e);
                      }}
                    >
                      <FormControlLabel
                        value="unmarried"
                        control={<Radio color="primary" />}
                        label="কনে কুমারী"
                      />
                      <FormControlLabel
                        value="widow"
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
                        name="devorce_con"
                        label="তালাক প্রাপ্ত হওয়ার শর্ত"
                        onChange={hadnleChange}
                        fullWidth
                        size="small"
                        type="text"
                        value={marriageInfo.devorce_con}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <FormControl component="fieldset">
                        <RadioGroup
                          row
                          aria-label="position"
                          name="revoke_per"
                          onChange={(e) => {
                            hadnleChange(e);
                            husbandsRightRevokedChangeHandler(e);
                          }}
                        >
                          <FormControlLabel
                            value="rightRevoked"
                            control={<Radio color="primary"></Radio>}
                            label={"স্বামীর অধিকার বাতিল"}
                          ></FormControlLabel>
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <FormControl component="fieldset">
                        <RadioGroup
                          row
                          aria-label="position"
                          name="khorposh_pr"
                          onChange={(e) => {
                            hadnleChange(e);
                          }}
                        >
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
                      name="alimony_pr"
                      id="marriageDate"
                      label="খোরপোশের শর্ত"
                      fullWidth
                      size="small"
                      onChange={hadnleChange}
                      value={marriageInfo.alimony_pr}
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
                      name="wohom"
                      defaultValue="top"
                      onChange={(e) => {
                        isHusbandPerfomDevorceChangeHandler(e);
                        hadnleChange(e);
                      }}
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
                          onChange={(e) => {
                            hadnleChange(e);
                            isHusbandTakenPermissonFromWifeHandler(e);
                          }}
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
                          name="per_no"
                          value={marriageInfo.per_no}
                          onChange={hadnleChange}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6}>
                        <Stack>
                          <TextField
                            value={marriageInfo.per_date}
                            name="per_date"
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
            {/* <Grid
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
                  onClick={onSubmitData}
                  disabled={checkFormError()}
                >
                  &nbsp; জমা দিন
                </Button>
              </Tooltip>
            </Grid> */}
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default BasicMarriageInformation;
