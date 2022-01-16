import * as React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { userLoginUrl } from "../../../url/ApiList";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import { useRouter } from "next/router";
import avbc from "../../../pages/dashboard";

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

const theme = createTheme();

export default function SignInSide() {
  const [formErros, setFormErrors] = React.useState({
    emailMobileOrNid: "",
    password: "",
  });
  const router = useRouter();

  const emailRegex = RegExp(
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
  );
  const mobileRegex = RegExp(/(^(01){1}[3456789]{1}(\d){8})$/);
  // const [email, setEmail] = React.useState("");
  // const [mobile_no, setMobileNo] = React.useState("");
  // const [nid, setNid] = React.useState("");
  // const [password, setPassword] = React.useState("");

  const [loginInfo, setLoginInfo] = React.useState({
    emailPasswordOrMobile: "",
    password: "",
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
    console.log(`valueLength: ${value.length}`);

    switch (name) {
      case "emailPasswordOrMobile":
        setLoginInfo({ ...loginInfo, [name]: value });
        break;
      case "password":
        setLoginInfo({ ...loginInfo, [name]: value });
        break;
    }

    // switch (name) {
    //   case name === textFieldName:
    //     setLoginInfo({ ...loginInfo, textFieldName: e.target.value });
    //     break;
    //   case name === "password":
    //     setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
    // }
  };
  const onSubmit = async () => {
    // event.preventDefault();

    // console.log(`formErrro: ${formErrors}`);
    if (
      loginInfo.emailPasswordOrMobile.length === 10 ||
      loginInfo.emailPasswordOrMobile.length === 13 ||
      loginInfo.emailPasswordOrMobile.length === 17
    ) {
      let payload = {
        nid: loginInfo.emailPasswordOrMobile,
        password: loginInfo.password,
      };
      console.log("payload value after clicking", payload);
      try {
        //router.push({ pathname: "/coop/income-expense" });
        //router.push({ pathname: "/coop/income-expense" });
        // console.log(userLoginUrl);
        const result = await axios.post(userLoginUrl, payload);
        // console.log(`type: ${result.data}`);
        // console.log(result.status);
        if (result.status === 200) {
          if (result.data.data.user_type === "kazi") {
            console.log(result.data.data.user_type);
            router.push("./dashboard");
          } else if (result.data.data.user_type === "groom") {
            router.push("./groom");
          } else if (result.data.data.user_type === "bride") {
            console.log(result.data.data.user_type);
            router.push("./bride");
          }
        }
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
    } else if (mobileRegex.test(loginInfo.emailPasswordOrMobile)) {
      let payload = {
        mobile_no: loginInfo.emailPasswordOrMobile,
        password: loginInfo.password,
      };
      console.log("payload value after clicking", payload);
      try {
        //router.push({ pathname: "/coop/income-expense" });
        // console.log(userLoginUrl);
        const result = await axios.post(userLoginUrl, payload);
        // console.log(`type: ${result.data}`);
        // console.log(result.status);
        if (result.status === 200) {
          if (result.data.data.user_type === "kazi") {
            console.log(result.data.data.user_type);
            router.push("http://localhost:3001/dashboard");
          } else if (result.data.data.user_type === "groom") {
            router.push("http://localhost:3001/groom");
          } else if (result.data.data.user_type === "bride") {
            console.log(result.data.data.user_type);
            router.push("http://localhost:3001/bride");
          }
        }

        console.log(result.data.data.user_type);
      } catch (error) {
        if (error.response) {
          let message = error.response.data.message;
          NotificationManager.error(message, "Error", 5000);
          console.log(`err: ${message}`);
        } else if (error.request) {
          NotificationManager.error("Error Connecting...", "Error", 5000);
        } else if (error) {
          console.log(`error:${error}`);
          // NotificationManager.error(error.toString(), "Error", 5000);
        }
      }
    } else if (emailRegex.test(loginInfo.emailPasswordOrMobile)) {
      let payload = {
        email: loginInfo.emailPasswordOrMobile,
        password: loginInfo.password,
      };
      console.log("payload value after clicking", payload);
      try {
        //router.push({ pathname: "/coop/income-expense" });
        // console.log(userLoginUrl);
        const result = await axios.post(userLoginUrl, payload);
        // console.log(`type: ${result.data}`);
        // console.log(result.status);
        if (result.status === 200) {
          if (result.data.data.user_type === "kazi") {
            console.log(result.data.data.user_type);
            router.push("http://localhost:3001/dashboard");
          } else if (result.data.data.user_type === "groom") {
            router.push("http://localhost:3001/groom");
          } else if (result.data.data.user_type === "bride") {
            console.log(result.data.data.user_type);
            router.push("http://localhost:3001/bride");
          }
        }
      } catch (error) {
        if (error.response) {
          let message = error.response.data.message;
          NotificationManager.error(message, "Error", 5000);
        } else if (error.request) {
          NotificationManager.error("Error Connecting...", "Error", 5000);
        } else if (error) {
          // NotificationManager.error(error.toString(), "Error", 5000);
        }
      }
    }

    // const data = new FormData(event.currentTarget);
    // // eslint-disable-next-line no-console
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" style={{ marginTop: "7%" }}>
        <CssBaseline />
        <Grid item xs={false} sm={8} md={4} />
        <Grid
          item
          xs={false}
          sm={8}
          md={4}
          component={Paper}
          elevation={8}
          square
        >
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "error.main" }}>
              <FavoriteIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              সাইন ইন
            </Typography>
            <br />
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                value={loginInfo.emailPasswordOrMobile}
                name="emailPasswordOrMobile"
                margin="normal"
                required
                fullWidth
                id="email"
                label="ই-মেইল/মোবাইল নং/এনআইডি"
                onChange={handleChange}
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                value={loginInfo.password}
                name="password"
                label="পাসওয়ার্ড"
                type="password"
                id="password"
                size="small"
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VpnKeyIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" />}
                label="আমাকে মনে রাখুন"
              />

              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={onSubmit}
              >
                সাইন ইন
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link color="secondary" href="#" variant="body2">
                    পাসওয়ার্ড ভুলে গেছেন?
                  </Link>
                </Grid>
                <Grid item>
                  <Link color="secondary" href="/user/" variant="body2">
                    {"অ্যাকাউন্ট নেই? নিবন্ধন করুন"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={false} sm={8} md={4} />
      </Grid>
    </ThemeProvider>
  );
}
