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
import { set, setMilliseconds } from "date-fns";
import { NotificationManager } from "react-notifications";
import { useDispatch, useSelector } from "react-redux";
import {
  // SetGroomRegPayloadAction,
  RegisterGroom,
} from "../../../redux/actions/groom_action";
import { SetMarriageInfoPayloadAction } from "../../../redux/actions/mrg_info";

const BasicMarriageInformation = () => {
  // const [addressType, setAddressType] = useState("");
  // const [division, setDivision] = useState("");
  // const [district, setDistrict] = useState("");
  // const [upazila, setUpazila] = useState("");
  // const [union, setUnion] = useState("");

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
  const dispatch = useDispatch();
  const mrgInfoPayload = useSelector((state) => state.mrgInfo);

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
    if (event.target.value === "married") {
      setIsHunbandPerformDevorec(true);
    }
    if (event.target.value === "unmarried") {
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
    district_id:
      mrgInfoPayload.district_id !== undefined
        ? mrgInfoPayload.district_id
        : "",
    upazila_id:
      mrgInfoPayload.upazila_id !== undefined ? mrgInfoPayload.upazila_id : "",
    union_id:
      mrgInfoPayload.union_id !== undefined ? mrgInfoPayload.union_id : "",
    post_code:
      mrgInfoPayload.post_code !== undefined ? mrgInfoPayload.post_code : "",
    detail_address:
      mrgInfoPayload.detail_address !== undefined
        ? mrgInfoPayload.detail_address
        : "",
    fixed_on:
      mrgInfoPayload.fixed_on !== undefined ? mrgInfoPayload.fixed_on : "",
    marriage_date:
      mrgInfoPayload.marriage_date !== undefined
        ? mrgInfoPayload.marriage_date
        : "",
    reg_date:
      mrgInfoPayload.reg_date !== undefined ? mrgInfoPayload.reg_date : "",
    denmohor:
      mrgInfoPayload.denmohor !== undefined ? mrgInfoPayload.denmohor : "",
    paid_denmohor:
      mrgInfoPayload.paid_denmohor !== undefined
        ? mrgInfoPayload.paid_denmohor
        : "",
    muazzol: mrgInfoPayload.muazzol !== undefined ? mrgInfoPayload.muazzol : "",
    muazzil: mrgInfoPayload.muazzil !== undefined ? mrgInfoPayload.muazzil : "",
    mrg_id: mrgInfoPayload.whom !== undefined ? mrgInfoPayload.whom : "",
    whom:
      mrgInfoPayload.district_id !== undefined
        ? mrgInfoPayload.district_id
        : "",
    mrg_status:
      mrgInfoPayload.mrg_status !== undefined ? mrgInfoPayload.mrg_status : "",
    devorce_con:
      mrgInfoPayload.devorce_con !== undefined
        ? mrgInfoPayload.devorce_con
        : "",
    revoke_per:
      mrgInfoPayload.revoke_per !== undefined ? mrgInfoPayload.revoke_per : "",
    alimony_pr:
      mrgInfoPayload.alimony_pr !== undefined ? mrgInfoPayload.alimony_pr : "",
    per_no: mrgInfoPayload.per_no !== undefined ? mrgInfoPayload.per_no : "",
    per_date:
      mrgInfoPayload.per_date !== undefined ? mrgInfoPayload.per_date : "",
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
    dispatch(SetMarriageInfoPayloadAction(marriageInfo));
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setMarriageInfo({
      ...marriageInfo,
      [name]: e.target.value,
    });
    // switch (name) {
    //   case "district_id":
    //     setMarriageInfo({ ...marriageInfo, [name]: value });
    //     formErrors.district_id = value === "" && "???????????? ???????????????????????? ????????????";
    //     break;
    //   case "upazila_id":
    //     setMarriageInfo({ ...marriageInfo, [name]: value });
    //     formErrors.district_id = value === "" && "?????????????????? ???????????????????????? ????????????";
    //     break;

    //   case "union_id":
    //     setMarriageInfo({ ...marriageInfo, [name]: value });
    //     formErrors.district_id =
    //       value === "" && "?????????????????? ???????????? ?????????????????? ???????????????????????? ????????????";
    //     break;
    //   case "post_code":
    //     setMarriageInfo({ ...marriageInfo, [name]: value });
    //     formErrors.district_id = value === "" && "??????????????? ???????????? ???????????????????????? ????????????";
    //     break;
    //   case "detail_address":
    //     setMarriageInfo({ ...marriageInfo, [name]: value });
    //     formErrors.detail_address = value === "" && "??????????????????????????? ?????????????????? ?????????";
    //     break;
    //   case "fixed_on":
    //     setMarriageInfo({ ...marriageInfo, [name]: value });
    //     formErrors.fixed_on = value === "" && "??????????????? ?????????";
    //     break;
    //   case "marriage_date":
    //     setMarriageInfo({ ...marriageInfo, [name]: value });
    //     formErrors.marriage_date = value === "" && "??????????????? ?????????";
    //     break;
    //   case "reg_date":
    //     setMarriageInfo({ ...marriageInfo, [name]: value });
    //     formErrors.reg_date = value === "" && "??????????????? ?????????";
    //     break;
    //   case "denmohor":
    //     setMarriageInfo({ ...marriageInfo, [name]: value });
    //     formErrors.denmohor = value === "" && "??????????????????????????? ?????????????????? ?????????";
    //     break;
    //   case "muazzol":
    //     setMarriageInfo({ ...marriageInfo, [name]: value });
    //     formErrors.denmohor = value === "" && "???????????????????????? ?????????????????? ?????????";
    //     break;
    //   case "muazzil":
    //     setMarriageInfo({ ...marriageInfo, [name]: value });

    //     formErrors.denmohor = value === "" && "??????????????????????????? ?????????????????? ?????????";
    //     break;
    //   case "paid_denmohor":
    //     setMarriageInfo({ ...marriageInfo, [name]: value });
    //     formErrors.denmohor = value === "" && "???????????????????????????????????????????????? ?????????????????? ?????????";
    //     break;
    //   case "whom":
    //     setMarriageInfo({ ...marriageInfo, [name]: value });
    //     break;
    //   case "mrg_status":
    //     setMarriageInfo({ ...marriageInfo.mrg_status, [name]: value });
    //     console.log("mrg_vlu", value);
    //     break;
    //   case "devorce_con":
    //     marriageInfo.devorce_con = value;
    //     // setMarriageInfo({ ...marriageInfo.devorce_con, [name]: value });
    //     console.log("omg", e.target.name);
    //     console.log("omg", e.target.value);
    //     break;
    //   case "revoke_per":
    //     setMarriageInfo({ ...marriageInfo.revoke_per, [name]: value });
    //     break;
    //   case "khorposh_pr":
    //     // setMarriageInfo({ ...marriageInfo.revoke_per, [name]: value });
    //     break;
    //   case "alimony_pr":
    //     setMarriageInfo({ ...marriageInfo.alimony_pr, [name]: value });
    //     break;
    //   case "wohom":
    //     setMarriageInfo({ ...marriageInfo.whom, [name]: value });
    //     break;
    //   case "per_no":
    //     setMarriageInfo({ ...marriageInfo.per_no, [name]: value });
    //     break;
    //   case "per_date":
    //     setMarriageInfo({ ...marriageInfo.per_date, [name]: value });

    //     break;
    // }
  };
  // console.log("State of my====", marriageInfo);
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

      mrg_id: 23456,
      whom: marriageInfo.whom,
      mrg_status: marriageInfo.mrg_status,
      devorce_con: marriageInfo.devorce_con,
      revoke_per: marriageInfo.revoke_per,
      alimony_prv: marriageInfo.alimony_pr,
      per_no: marriageInfo.per_no,
      per_date: marriageInfo.per_date,
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
              <Typography variant="h6">??????????????? ????????????</Typography>
            </Title>
            <Grid container spacing={3} px={2}>
              <Grid item xs={12} md={4} sm={12}>
                <TextField
                  fullWidth
                  label="????????????"
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
                  <option>- ???????????????????????? ???????????? -</option>
                  <option value={10}>????????????</option>
                  <option value={20}>??????????????????????????????</option>
                </TextField>
              </Grid>

              <Grid item xs={12} md={4} sm={12}>
                <TextField
                  fullWidth
                  label="??????????????????/????????????"
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
                  <option>- ???????????????????????? ???????????? -</option>
                  <option value={10}>??????????????????</option>
                  <option value={20}>???????????????</option>
                </TextField>
              </Grid>
              <Grid item xs={12} md={4} sm={12}>
                <TextField
                  fullWidth
                  label="?????????????????????/??????????????????"
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
                  <option>- ???????????????????????? ???????????? -</option>
                  <option value={10}>??????????????????-3</option>
                  <option value={20}>??????????????????-9</option>
                </TextField>
              </Grid>
              <Grid item xs={12} md={4} sm={12}>
                <TextField
                  fullWidth
                  label="??????????????? ????????????"
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
                  <option>- ???????????????????????? ???????????? -</option>
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
                  label="???????????? ??????, ?????????????????? ??????, ???????????????/?????????????????? ???????????????"
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
            <Typography variant="h6">??????????????? ???????????????????????? ???????????????????????? ????????????</Typography>
          </Title>

          <Grid container spacing={2} px={2}>
            <Grid item xs={12} sm={12} md={3}>
              <Stack>
                <TextField
                  value={marriageInfo.fixed_on}
                  name="fixed_on"
                  id="marriageFiexedOn"
                  label="??????????????? ????????? ??????????????????"
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
                  label="  ?????????????????? ???????????????"
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
                  label="??????????????? ??????????????????????????? ???????????????"
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
                label="????????? ?????????????????? ??????????????????"
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
                label="????????? ???????????? ???????????????????????????"
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
                label="????????? ???????????? ??????'??????????????????"
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
                {/* <FormLabel component="legend">???????????????</FormLabel> */}
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
                    label="????????? ???????????? ?????????????????? ??????????????? ???????"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={3.5}>
              <TextField
                required
                id="mohorMoazzol"
                name="paid_denmohor"
                label="???????????????????????? ??????????????????????????? ??????????????????"
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
                <Typography variant="h6">???????????? ??????????????? ????????????</Typography>
              </Title>
              <Grid container spacing={1.5} px={2}>
                <Grid item xs={12} sm={12} md={12}>
                  <FormControl component="fieldset">
                    <RadioGroup
                      row
                      aria-label="position"
                      name="mrg_status"
                      onClick={hadnleChange}
                      onChange={(e) => {
                        console.log("e", e.target.name);
                        console.log("e", e.target.value);
                        console.log(marriageInfo);

                        maritalStatusChangeHandler(e);
                      }}
                    >
                      <FormControlLabel
                        value="unmarried"
                        control={<Radio color="primary" />}
                        label="????????? ??????????????????"
                      />
                      <FormControlLabel
                        value="widow"
                        control={<Radio color="success" />}
                        label="???????????????"
                      />
                      <FormControlLabel
                        value="devorcy"
                        control={<Radio color="secondary" />}
                        label="???????????????????????????????????? ????????????"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                {isDevorcy && (
                  <>
                    <Grid item xs={12} sm={12} md={12}>
                      <TextField
                        name="devorce_con"
                        label="??????????????? ????????????????????? ??????????????? ????????????"
                        onChange={(e) => {
                          console.log("e", e.target.name);
                          setMarriageInfo({ ...marriageInfo });
                          hadnleChange(e);
                        }}
                        fullWidth
                        size="small"
                        type="text"
                        value={marriageInfo.devorce_con}
                        variant="outlined"
                        required
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
                          }}
                        >
                          <FormControlLabel
                            value="rightRevoked"
                            control={<Radio color="primary"></Radio>}
                            label={"????????????????????? ?????????????????? ???????????????"}
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
                            husbandsRightRevokedChangeHandler(e);
                          }}
                        >
                          <FormControlLabel
                            value="khorposhEvidence"
                            label="???????????????????????? ??????????????????"
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
                      label="???????????????????????? ????????????"
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
                <Typography variant="h6">???????????? ??????????????? ????????????</Typography>
              </Title>
              <Grid container spacing={1.5} px={2}>
                <Grid item xs={12} sm={12} md={12}>
                  <FormControl component="fieldset">
                    <RadioGroup
                      row
                      aria-label="position"
                      name="whom"
                      defaultValue="top"
                      onClick={hadnleChange}
                      onChange={(e) => {
                        isHusbandPerfomDevorceChangeHandler(e);
                      }}
                    >
                      <FormControlLabel
                        value="unmarried"
                        control={<Radio color="primary" />}
                        label="????????????????????????"
                      />
                      <FormControlLabel
                        value="married"
                        control={<Radio color="success" />}
                        label="?????????????????????"
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
                        ????????????????????? ????????? ???????????? ?????????????????? ?????????????????????"
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
                          label="  ?????????????????? ???????????????"
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
                            onChange={hadnleChange}
                            value={marriageInfo.per_date}
                            name="per_date"
                            id="marriageDate"
                            label=" ?????????????????? ????????????????????? ???????????????"
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
              <Tooltip title="???????????? ???????????????">
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ mr: 1 }}
                  startIcon={<SaveIcon />}
                  onClick={onSubmitData}
                  // disabled={checkFormError()}
                >
                  &nbsp; ????????? ?????????
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
