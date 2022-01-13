import { React, useState } from "react";
import {
  Box,
  Grid,
  Avatar,
  Container,
  Paper,
  Typography,
  Divider,
  Tooltip,
  Button,
  Link,
  TextField,
  InputAdornment,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Stack,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import MaleIcon from "@mui/icons-material/Male";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import SaveIcon from "@mui/icons-material/Save";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import Title from "../../shared/others/Title";
import axios from "axios";

import { useRouter } from "next/router";
import { userSignup } from "../../../url/ApiList";
import { NotificationManager } from "react-notifications";

// ------------ Copyright Components -------------
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="error" href="https://erainfotechbd.com/">
        ERA-InfoTech Ltd
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const emailRegex = RegExp(
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
);
const mobileRegex = RegExp(/(^(01){1}[3456789]{1}(\d){8})$/);

const Registration = (props) => {
  const router = useRouter();

  const [userType, setUserType] = useState("");
  const [religionType, setReligionType] = useState("");
  const [dobvalue, setDobValue] = useState("");
  const [citizen, setCitizen] = useState({
    userNid: "",
    userName: "",
    dateofBirth: "",
    mobile: "",
    email: "",
    religion: "",
    userType: "",
    regNo: "",
    loginName: "",
    password: "",
    confirmpassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    userNid: "",
    userName: "",
    mobile: "",
    email: "",
    dob: "",
    loginName: "",
    religion: "",
    userType: "",
    verify: "",
    password: "",
    confirmpassword: "",
  });
  let checkFormError = () => {
    console.log(`formError:${formErrors}`);
    let flag = false;
    for (const key in formErrors) {
      if (formErrors[key].length > 0) {
        flag = true;
      }
    }
    return flag;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "userNid":
        formErrors.userNid =
          value.length == 13 ||
          value.length == 10 ||
          value.length == 17 ||
          value.length == 0
            ? ""
            : "আপনার সঠিক এনআইডি প্রদান করুন";
        break;
      case "userName":
        formErrors.userName =
          value.length < 6 && value.length > 0
            ? "সর্বনিন্ম ৬টি অক্ষর প্রদান"
            : "";
        break;
      case "email":
        formErrors.email =
          emailRegex.test(value) || value.length == 0
            ? ""
            : "আপনার সঠিক ইমেইল প্রদান করুন";
        break;
      case "mobile":
        setCitizen({
          ...citizen,
          [e.target.name]: e.target.value.replace(/\D/g, ""),
        });

        formErrors.mobile =
          mobileRegex.test(value) || value.length == 0
            ? ""
            : "আপনার সঠিক মোবাইল নং প্রদান করুন";
        break;

      case "dateofBirth":
        formErrors.dob = value === "" && "জন্ম তারিখ দিন";
        break;

      case "religion":
        formErrors.religion = value === "" && "ধর্ম নির্বাচন করুন";
        break;
      case "userType":
        formErrors.userType = value === "" && "ইউসার এর ধরণ নির্বাচন করুন";
        break;
      case "regNo":
        formErrors.verify = value === "" && "রেজিস্ট্রেশন নম্বর প্রদান করুন";
        break;
      case "loginName":
        formErrors.loginName = value === "" && "ইউসার নাম প্রদান করুন";
        break;
      case "password":
        formErrors.password =
          value.length < 6 && value.length > 0
            ? "পাসওয়ার্ড পাঁচ ডিজিটের বেশি হতে হবে"
            : "";
        break;
      case "confirmpassword":
        formErrors.confirmpassword =
          value !== citizen.password ? "পাসওয়ার্ড মিলেনি" : "";
        break;
    }
    if (e.target.name != "mobile") {
      setCitizen({
        ...citizen,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleUserType = (event) => {
    setUserType(event.target.value);
  };

  const handleReligion = (event) => {
    setReligionType(event.target.value);
  };

  const formatDate = (event) => {
    setDobValue(event.target.value);
  };

  let onSubmitData = async (e) => {
    console.log(`formErrro: ${formErrors}`);
    e.preventDefault();
    let payload = {
      name: citizen.userName,
      nid: citizen.userNid,
      dob: dobvalue,
      mobile_no: citizen.mobile,
      email: citizen.email,
      religion: religionType,
      user_type: userType,
      verify: citizen.regNo,
      login_name: citizen.loginName,
      password: citizen.password,
      status: "N",
    };
    console.log("payload value after clicking", payload);
    try {
      // console.log("token", config);
      const userData = await axios.post(userSignup, payload);
      console.log("pay", userData.data.message);
      NotificationManager.success(userData.data.message, "Success", 5000);

      //router.push({ pathname: "/coop/income-expense" });
    } catch (error) {
      if (error.response) {
        let message = error.response.data.errors[0].message;
        NotificationManager.error(message, "Error", 5000);
      } else if (error.request) {
        NotificationManager.error("Error Connecting...", "Error", 5000);
      } else if (error) {
        NotificationManager.error(error.toString(), "Error", 5000);
      }
    }
  };
  return (
    <>
      <Container component="main">
        <Paper
          // variant="outlined"
          sx={{ my: { xs: 3, md: 8 }, p: { xs: 2, md: 3 } }}
          elevation={3}
          square
          style={{ marginTop: "8%" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ textAlign: "center", m: 1, bgcolor: "secondary.main" }}
            >
              <ThumbsUpDownIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {props.title}
            </Typography>
          </Box>
          <br />

          <Title>
            <Typography variant="h6">{props.title}</Typography>
          </Title>

          <Grid container spacing={2.5} px={2}>
            <Grid item xs={12} md={6} sm={12}>
              <TextField
                onBlur={handleChange}
                required
                name="userNid"
                label="জাতীয় আইডি নম্বর"
                fullWidth
                size="small"
                variant="outlined"
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CreditCardIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {formErrors.userNid.length > 0 && (
                <span style={{ color: "red" }}>{formErrors.userNid}</span>
              )}
            </Grid>
            <Grid item xs={12} md={6} sm={12}>
              <TextField
                required
                name="userName"
                label="নাম"
                fullWidth
                size="small"
                variant="outlined"
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MaleIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {formErrors.userName.length > 0 && (
                <span style={{ color: "red" }}>{formErrors.userName}</span>
              )}
            </Grid>
            <Grid item xs={12} md={4} sm={12}>
              <Stack>
                <TextField
                  id="date"
                  name="dateofBirth"
                  label="জন্ম তারিখ"
                  fullWidth
                  size="small"
                  type="date"
                  onChange={formatDate}
                  // defaultValue="2021-12-27"
                  value={dobvalue}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {formErrors.dob.length > 0 && (
                  <span style={{ color: "red" }}>{formErrors.mobile}</span>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12} md={4} sm={12}>
              <TextField
                required
                name="mobile"
                label="মোবাইল নম্বর"
                fullWidth
                size="small"
                variant="outlined"
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MobileScreenShareIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {formErrors.mobile.length > 0 && (
                <span style={{ color: "red" }}>{formErrors.mobile}</span>
              )}
            </Grid>
            <Grid item xs={12} md={4} sm={12}>
              <TextField
                required
                name="email"
                label="ইমেইল"
                fullWidth
                size="small"
                variant="outlined"
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {formErrors.email.length > 0 && (
                <span style={{ color: "red" }}>{formErrors.email}</span>
              )}
            </Grid>
            <Grid item xs={12} md={4} sm={12}>
              <TextField
                fullWidth
                label="ধর্ম"
                name="religion"
                required
                select
                SelectProps={{ native: true }}
                variant="outlined"
                size="small"
                onChange={handleReligion}
              >
                <option>- নির্বাচন করুন -</option>
                <option value={10}>ইসলাম</option>
                <option value={20}>হিন্দু</option>
                <option value={20}>বৌদ্ধ</option>
                <option value={20}>খ্রিষ্টান</option>
              </TextField>
              {formErrors.religion.length > 0 && (
                <span style={{ color: "red" }}>{formErrors.religion}</span>
              )}
            </Grid>
            <Grid item xs={12} md={4} sm={12}>
              <FormControl component="fieldset">
                <RadioGroup
                  row
                  aria-label="position"
                  name="userType"
                  defaultValue="top"
                  onChange={handleUserType}
                >
                  <FormControlLabel
                    value="groom"
                    control={<Radio color="primary" />}
                    label="বর"
                  />
                  <FormControlLabel
                    value="bride"
                    control={<Radio color="success" />}
                    label="কনে"
                  />
                  <FormControlLabel
                    value="kazi"
                    control={<Radio color="secondary" />}
                    label="কাজী"
                  />
                </RadioGroup>
              </FormControl>
              {formErrors.userType.length > 0 && (
                <span style={{ color: "red" }}>{formErrors.userType}</span>
              )}
            </Grid>
            {userType == "kazi" ? (
              <>
                <Grid item xs={12} md={4} sm={12}>
                  <TextField
                    required
                    name="regNo"
                    label="নিবন্ধন নং"
                    onChange={handleChange}
                    type="number"
                    fullWidth
                    size="small"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AppRegistrationIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  {formErrors.verify.length > 0 && (
                    <span style={{ color: "red" }}>{formErrors.verify}</span>
                  )}
                </Grid>
              </>
            ) : (
              ""
            )}
            <Grid item xs={12} md={4} sm={12}>
              <TextField
                required
                name="loginName"
                label="ইউজার নাম"
                type="text"
                fullWidth
                size="small"
                variant="outlined"
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {formErrors.loginName.length > 0 && (
                <span style={{ color: "red" }}>{formErrors.loginName}</span>
              )}
            </Grid>
            <Grid item xs={12} md={4} sm={12}>
              <TextField
                required
                name="password"
                label="পাসওয়ার্ড"
                type="password"
                fullWidth
                size="small"
                variant="outlined"
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VpnKeyIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {formErrors.password.length > 0 && (
                <span style={{ color: "red" }}>{formErrors.password}</span>
              )}
            </Grid>
            <Grid item xs={12} md={4} sm={12}>
              <TextField
                required
                name="confirmpassword"
                label="পাসওয়ার্ড নিশ্চিত করুন"
                type="password"
                fullWidth
                size="small"
                variant="outlined"
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOpenIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {formErrors.confirmpassword.length > 0 && (
                <span style={{ color: "red" }}>
                  {formErrors.confirmpassword}
                </span>
              )}
            </Grid>
          </Grid>
          <Divider />
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
                onClick={onSubmitData}
                disabled={checkFormError()}
              >
                &nbsp; জমা দিন
              </Button>
            </Tooltip>
          </Grid>
        </Paper>
        <Copyright />
      </Container>
    </>
  );
};

export default Registration;
