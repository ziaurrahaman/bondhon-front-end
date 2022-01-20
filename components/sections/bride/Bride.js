import { useState } from "react";
import React from "react";
import {
  Grid,
  Typography,
  Box,
  Modal,
  Container,
  Paper,
  Tooltip,
  Button,
} from "@mui/material";
import Title from "../../shared/others/Title";
import Basic from "../../shared/others/basic";
import Address from "../../shared/others/address";
import AddressDetails from "../../shared/others/addressDetails";
import Image from "next/image";
import SaveIcon from "@mui/icons-material/Save";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import CreditCardIcon from "@mui/icons-material/CreditCard";
import InputAdornment from "@mui/material/InputAdornment";
import MaleIcon from "@mui/icons-material/Male";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import userInput from "../../hooks/userInput";
import FormControl from "@mui/material/FormControl";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { bridesBasicInfo } from "../../../url/ApiList";
import { bridesAddressInfo } from "../../../url/ApiList";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SendIcon from "@mui/icons-material/Send";
import Capture from "../camera/Capture";
import { useDispatch, useSelector } from "react-redux";
import {
  SetBrideRegPayloadAction,
  RegisterBrideAction,
} from "../../../redux/actions/bride_action";

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

function createAddressData(
  addType,
  division,
  district,
  upazila,
  union,
  postalCode,
  village
) {
  return { addType, division, district, upazila, union, postalCode, village };
}
const rows = [
  createAddressData(
    "বর্তমান ঠিকানা",
    "চট্টগ্রাম",
    "কুমিল্লা",
    "বরুড়া",
    "আড্ডা",
    "3500",
    "রাজাপাড়া"
  ),
];

const Bride = (props) => {
  const dispatch = useDispatch();
  const [openPic, setOpenPic] = useState(false);
  const [openRight, setOpenRight] = useState(false);
  const [openLeft, setOpenLeft] = useState(false);
  const handleOpenPic = () => setOpenPic(true);
  const handleOpenRight = () => setOpenRight(true);
  const handleOpenLeft = () => setOpenLeft(true);
  const handleClosePic = () => setOpenPic(false);
  const handleCloseRight = () => setOpenRight(false);
  const handleCloseLeft = () => setOpenLeft(false);
  const [openCamera, setOpenCamera] = useState(false);
  const handleCloseCamera = () => setOpenCamera(false);
  const handleOpenCamera = () => setOpenCamera(true);
  const groomPayload = useSelector((state) => state.brideReg);

  // Begin Image Brows For Groom
  const [bridePic, setBridePic] = useState({
    brideImage: "",
    mimetypeback: "",
  });

  const [bridePicSubmit, setBridePicSubmit] = useState({});

  const [flagForImage, setFlagForImage] = useState("data:image/jpg;base64,");
  let bridePicture = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      let file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsBinaryString(file);
      setBridePic(file);
      reader.onload = () => {
        let base64Image = btoa(reader.result);
        setBridePic((prevState) => ({
          ...prevState,
          brideImage: base64Image,
          mimetypeback: file.type,
        }));
      };
    }
  };

  //   Submit Button Click on Modal
  const handleOnSubmitPic = () => {
    setBridePicSubmit(bridePic);
    handleClosePic(true);
  };

  // Submit Right Finger
  const [RightFP, setRightFP] = useState(false);
  const handleOnSubmitRightFP = () => {
    setRightFP(true);
    handleCloseRight(true);
  };

  //Submit Left Finger
  const [LeftFP, setLeftFP] = useState(false);
  const handleOnSubmitLeftFP = () => {
    setLeftFP(true);
    handleCloseLeft(true);
  };
  //Capture Image
  let onImageConfirm = (base64Image) => {
    if (base64Image != "") {
      setOpenCamera(false);
    }
    setGroomPic(() => ({
      groomImage: base64Image,
      mimetypeback: ".png",
    }));
  };

  const ImageModalRegion = () => {
    return (
      <>
        <Grid sm={12} md={12} xs={12}>
          <Grid sm={12} md={12} xs={12}>
            <Title>
              <Typography variant="h6">কনের ছবি সংগ্রহ</Typography>
            </Title>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                src={
                  bridePic.brideImage
                    ? flagForImage + bridePic.brideImage
                    : "/bride.png"
                }
                alt="Bride Picture"
                width={160}
                height={160}
              />
            </Box>
          </Grid>
          <Grid
            sm={12}
            md={12}
            xs={12}
            sx={{ display: "flex", justifyContent: "space-around" }}
          >
            <Grid sm={12} md={6} xs={12}>
              <TextField
                sx={{ marginTop: 3 }}
                required
                id="bridePic"
                name="bridePic"
                label="ছবি নির্বাচন করুন"
                fullWidth
                size="small"
                variant="outlined"
                type="file"
                focused
                onChange={bridePicture}
                onClick={(event) => (event.target.value = null)}
              />
            </Grid>
            <Grid sm={12} md={5} xs={12}>
              <Button
                sx={{ marginTop: 3 }}
                variant="outlined"
                fullWidth
                startIcon={<CameraAltIcon />}
              >
                ছবি তুলুন
              </Button>
            </Grid>
          </Grid>
          <Grid sm={12} md={12} xs={12}>
            <Modal
              // open={openPic}
              // onClose={handleClosePic}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <ImageModalRegion />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    sx={{ marginTop: 3 }}
                    variant="outlined"
                    startIcon={<SendIcon />}
                    onClick={handleOnSubmitPic}
                  >
                    জমা দিন
                  </Button>
                </Box>
              </Box>
            </Modal>
          </Grid>
        </Grid>
      </>
    );
  };
  //End Image Brows For Groom

  //Begin Right Finger
  const FingerRightRegion = () => {
    return (
      <>
        <Grid sm={12} md={12} xs={12}>
          <Grid sm={12} md={12} xs={12}>
            <Title>
              <Typography variant="h6">আঙুলের ছাপ (ডান হাত)</Typography>
            </Title>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                src="/righthand.png"
                alt="Bride Picture"
                width={230}
                height={230}
              />
            </Box>
          </Grid>
        </Grid>
      </>
    );
  };

  //Begin Left Finger
  const FingerLeftRegion = () => {
    return (
      <>
        <Grid sm={12} md={12} xs={12}>
          <Grid sm={12} md={12} xs={12}>
            <Title>
              <Typography variant="h6">আঙুলের ছাপ (বাম হাত)</Typography>
            </Title>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                src="/lefthand.PNG"
                alt="Bride Picture"
                width={230}
                height={230}
              />
            </Box>
          </Grid>
        </Grid>
      </>
    );
  };

  const emailRegex = RegExp(
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
  );
  const mobileRegex = RegExp(/(^(01){1}[3456789]{1}(\d){8})$/);
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
  const [brideInfo, setBrideInfo] = useState({
    nid: groomPayload.nid !== undefined ? groomPayload.nid : "",
    name: groomPayload.name !== undefined ? groomPayload.name : "",
    dob: groomPayload.dob !== undefined ? groomPayload.dob : "",
    mobile_no:
      groomPayload.mobile_no !== undefined ? groomPayload.mobile_no : "",
    email: groomPayload.email !== undefined ? groomPayload.email : "",
    relegion: groomPayload.relegion !== undefined ? groomPayload.relegion : "",
    father_name:
      groomPayload.father_name !== undefined ? groomPayload.father_name : "",
    father_nid:
      groomPayload.father_nid !== undefined ? groomPayload.father_nid : "",
    mother_name:
      groomPayload.mother_name !== undefined ? groomPayload.mother_name : "",
    mother_nid:
      groomPayload.mother_nid !== undefined ? groomPayload.mother_nid : "",
    address_type:
      groomPayload.address_type !== undefined ? groomPayload.address_type : "",
    user_type:
      groomPayload.user_type !== undefined ? groomPayload.user_type : "",
    district_id:
      groomPayload.district_id !== undefined ? groomPayload.district_id : "",
    upazila_id:
      groomPayload.upazila_id !== undefined ? groomPayload.upazila_id : "",
    union_id: groomPayload.union_id !== undefined ? groomPayload.union_id : "",
    post_code: groomPayload.union_id !== undefined ? groomPayload.union_id : "",
    details_address:
      groomPayload.details_address !== undefined
        ? groomPayload.details_address
        : "",
  });

  const [formErrors, setFormErrors] = useState({
    nid: "",
    name: "",
    dob: "",
    mobile_no: "",
    email: "",
    relegion: "",
    father_name: "",
    father_nid: "",
    mother_name: "",
    mother_nid: "",
    address_type: "",
    user_type: "",
    district_id: "",
    upazila_id: "",
    union_id: "",
    post_code: "",
    details_address: "",
  });

  //   const handleChange = (event) => {
  //     setReligion(event.target.value);
  //   };

  const handleChange = (e) => {
    dispatch(SetBrideRegPayloadAction(brideInfo));
    const { name, value } = e.target;
    switch (name) {
      case "nid":
        setBrideInfo({
          ...brideInfo,
          [e.target.name]: e.target.value,
        });
        console.log(`brideinfoTest: ${brideInfo}`);

        formErrors.nid =
          value.length == 13 ||
          value.length == 10 ||
          value.length == 17 ||
          value.length == 0
            ? ""
            : "আপনার সঠিক এনআইডি প্রদান করুন";

        console.log(`nidError: ${formErrors.nid}`);
        console.log(`citnid: ${brideInfo}`);
        break;
      case "name":
        setBrideInfo({
          ...brideInfo,
          [e.target.name]: e.target.value,
        });
        formErrors.name =
          value.length < 6 && value.length > 0
            ? "সর্বনিন্ম ৬টি অক্ষর প্রদান"
            : "";
        break;
      case "email":
        setBrideInfo({
          ...brideInfo,
          [e.target.name]: e.target.value,
        });
        formErrors.email =
          emailRegex.test(value) || value.length == 0
            ? ""
            : "আপনার সঠিক ইমেইল প্রদান করুন";
        break;
      case "mobile_no":
        setBrideInfo({
          ...brideInfo,
          [e.target.name]: e.target.value,
        });
        formErrors.mobile_no =
          mobileRegex.test(value) || value.length == 0
            ? ""
            : "আপনার সঠিক মোবাইল নং প্রদান করুন";
        break;

      case "dob":
        setBrideInfo({
          ...brideInfo,
          [e.target.name]: e.target.value,
        });
        formErrors.dob = value === "" && "জন্ম তারিখ দিন";
        break;

      case "relegion":
        setBrideInfo({
          ...brideInfo,
          [e.target.name]: e.target.value,
        });
        formErrors.relegion = value === "" && "ধর্ম নির্বাচন করুন";
        break;
      //   case "user_type":
      //     formErrors.userType = value === "" && "ইউসার এর ধরণ নির্বাচন করুন";
      //     break;
      case "father_name":
        setBrideInfo({
          ...brideInfo,
          [e.target.name]: e.target.value,
        });
        formErrors.father_name =
          value.length < 6 && value.length > 0
            ? "সর্বনিন্ম ৬টি অক্ষর প্রদান"
            : "";
        break;
      case "father_nid":
        setBrideInfo({
          ...brideInfo,
          [e.target.name]: e.target.value,
        });
        formErrors.father_nid =
          value.length == 13 ||
          value.length == 10 ||
          value.length == 17 ||
          value.length == 0
            ? ""
            : "আপনার সঠিক এনআইডি প্রদান করুন";
        break;
      case "mother_name":
        setBrideInfo({
          ...brideInfo,
          [e.target.name]: e.target.value,
        });
        formErrors.mother_name =
          value.length < 6 && value.length > 0
            ? "সর্বনিন্ম ৬টি অক্ষর প্রদান"
            : "";
        break;
      case "mother_nid":
        setBrideInfo({
          ...brideInfo,
          [e.target.name]: e.target.value,
        });
        formErrors.mother_nid =
          value.length == 13 ||
          value.length == 10 ||
          value.length == 17 ||
          value.length == 0
            ? ""
            : "আপনার সঠিক এনআইডি প্রদান করুন";
        break;
      case "address_type":
        setBrideInfo({
          ...brideInfo,
          [e.target.name]: e.target.value,
        });
        formErrors.address_type = value === "" && "ঠিকানা এর ধরণ নির্বাচন করুন";
        break;

      case "user_type":
        setBrideInfo({
          ...brideInfo,
          [e.target.name]: e.target.value,
        });
        formErrors.user_type = value === "" && "ঠিকানা এর ধরণ নির্বাচন করুন";
        break;
      case "district_id":
        setBrideInfo({
          ...brideInfo,
          [e.target.name]: e.target.value,
        });
        formErrors.district_id = value === "" && "জেলা এর ধরণ নির্বাচন করুন";
        break;
      case "upazila_id":
        setBrideInfo({
          ...brideInfo,
          [e.target.name]: e.target.value,
        });

        formErrors.upazila_id = value === "" && "উপজেলা নির্বাচন করুন";
        break;
      case "union_id":
        setBrideInfo({
          ...brideInfo,
          [e.target.name]: e.target.value,
        });
        formErrors.union_id = value === "" && "ইউনিয়ন নির্বাচন করুন";
        break;
      case "post_code":
        setBrideInfo({
          ...brideInfo,
          [e.target.name]: e.target.value,
        });
        formErrors.post_code = value === "" && "ইউনিয়ন নির্বাচন করুন";
        break;
      case "details_address":
        setBrideInfo({
          ...brideInfo,
          [e.target.name]: e.target.value,
        });
        formErrors.details_address = value === "" && "ইউনিয়ন নির্বাচন করুন";
        break;
    }
  };

  let onSubmitData = async (e) => {
    dispatch(RegisterBrideAction(brideInfo));
    // console.log(`formErrro: ${formErrors}`);
    // e.preventDefault();
    // let payloadForAddress = {
    //   address_type: brideInfo.address_type,
    //   user_type: "Bride",
    //   district_id: brideInfo.district_id,
    //   upazila_id: brideInfo.upazila_id,
    //   union_id: brideInfo.union_id,
    //   post_code: brideInfo.post_code,
    //   details_address: brideInfo.details_address,
    // };
    // let payloadForBrideBasic = {
    //   nid: brideInfo.nid,
    //   name: brideInfo.name,
    //   dob: brideInfo.dob,
    //   mobile_no: brideInfo.mobile_no,
    //   email: brideInfo.email,
    //   relegion: brideInfo.relegion,
    //   father_name: brideInfo.father_name,
    //   father_nid: brideInfo.father_nid,
    //   mother_name: brideInfo.mother_name,
    //   mother_nid: brideInfo.mother_nid,
    // };
    // console.log("payload value after clicking", payloadForBrideBasic);
    // console.log("payload value after clicking", payloadForAddress);
    // try {
    //   console.log(` url1 ${bridesBasicInfo} `);
    //   // console.log("token", config);
    //   const brideBasicData = await axios.post(
    //     bridesBasicInfo,
    //     payloadForBrideBasic
    //   );
    //   const brideAddressData = await axios.post(
    //     bridesAddressInfo,
    //     payloadForAddress
    //   );

    //   console.log("pay", brideBasicData.data.message);
    //   console.log("pay", brideAddressData.data.message);
    //   NotificationManager.success(brideBasicData.data.message, "Success", 5000);
    //   NotificationManager.success(
    //     brideAddressData.data.message,
    //     "Success",
    //     5000
    //   );

    //   //router.push({ pathname: "/coop/income-expense" });
    // } catch (error) {
    //   if (error.response) {
    //     let message = error.response.data.errors[0].message;
    //     NotificationManager.error(message, "Error", 5000);
    //   } else if (error.request) {
    //     NotificationManager.error("Error Connecting...", "Error", 5000);
    //   } else if (error) {
    //     // NotificationManager.error(error.toString(), "Error", 5000);
    //   }
    // }
  };

  return (
    <>
      <Container>
        <Paper
          sx={{ my: { xs: 2, md: 4 }, p: { xs: 1, md: 2 } }}
          elevation={3}
          square
          style={{ marginTop: "3%" }}
        >
          <Grid
            container
            sx={{ display: "flex", justifyContent: "space-around" }}
          >
            <Grid sm={9} md={9} xs={12} spacing={2}>
              <Grid sm={12} md={12}>
                <>
                  <Title>
                    <Typography variant="h6">মৌলিক তথ্য</Typography>
                  </Title>

                  <Grid container spacing={2.5} px={2}>
                    <Grid item xs={12} md={6} sm={12}>
                      <TextField
                        required
                        id="userNid"
                        name="nid"
                        label="জাতীয় আইডি নম্বর"
                        fullWidth
                        size="small"
                        variant="outlined"
                        value={brideInfo.nid}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <CreditCardIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                      {formErrors.nid.length > 0 && (
                        <span style={{ color: "red" }}>{formErrors.nid}</span>
                      )}
                    </Grid>

                    <Grid item xs={12} md={6} sm={12}>
                      <TextField
                        required
                        id="userName"
                        name="name"
                        label="নাম"
                        fullWidth
                        size="small"
                        variant="outlined"
                        value={brideInfo.name}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <MaleIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                      {formErrors.name.length > 0 && (
                        <span style={{ color: "red" }}>{formErrors.name}</span>
                      )}
                    </Grid>
                    <Grid item xs={12} md={4} sm={12}>
                      <Stack>
                        <TextField
                          name="dob"
                          id="date"
                          label="জন্ম তারিখ"
                          fullWidth
                          size="small"
                          type="date"
                          onChange={handleChange}
                          // defaultValue="2021-12-27"
                          value={brideInfo.dob}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                        {formErrors.dob.length > 0 && (
                          <span style={{ color: "red" }}>{formErrors.dob}</span>
                        )}
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={4} sm={12}>
                      <TextField
                        required
                        id="userMobile"
                        name="mobile_no"
                        label="মোবাইল নম্বর"
                        fullWidth
                        size="small"
                        variant="outlined"
                        value={brideInfo.mobile_no}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <MobileScreenShareIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                      {formErrors.mobile_no.length > 0 && (
                        <span style={{ color: "red" }}>
                          {formErrors.mobile_no}
                        </span>
                      )}
                    </Grid>
                    <Grid item xs={12} md={4} sm={12}>
                      <TextField
                        required
                        id="email"
                        name="email"
                        label="ইমেইল"
                        fullWidth
                        size="small"
                        variant="outlined"
                        value={brideInfo.email}
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
                        name="relegion"
                        //onChange={handleChange}
                        required
                        select
                        SelectProps={{ native: true }}
                        //value={commInfo.committeeType}
                        variant="outlined"
                        size="small"
                        value={brideInfo.relegion}
                        onChange={handleChange}
                      >
                        {" "}
                        <option>- নির্বাচন করুন -</option>
                        <option value={10}>ইসলাম</option>
                        <option value={20}>হিন্দু</option>
                        <option value={20}>বৌদ্ধ</option>
                        <option value={20}>খ্রিষ্টান</option>
                      </TextField>
                      {formErrors.relegion.length > 0 && (
                        <span style={{ color: "red" }}>
                          {formErrors.relegion}
                        </span>
                      )}
                    </Grid>

                    <Grid item xs={12} md={4} sm={12}>
                      <TextField
                        required
                        name="father_name"
                        label="পিতার নাম"
                        type="text"
                        fullWidth
                        size="small"
                        variant="outlined"
                        value={brideInfo.father_name}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonOutlineIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                      {formErrors.father_name.length > 0 && (
                        <span style={{ color: "red" }}>
                          {formErrors.father_name}
                        </span>
                      )}
                    </Grid>
                    <Grid item xs={12} md={4} sm={12}>
                      <TextField
                        required
                        id="fathersNid"
                        name="father_nid"
                        label="পিতার জাতীয় আইডি নম্বর"
                        fullWidth
                        size="small"
                        variant="outlined"
                        value={brideInfo.father_nid}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <CreditCardIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                      {formErrors.father_nid.length > 0 && (
                        <span style={{ color: "red" }}>
                          {formErrors.father_nid}
                        </span>
                      )}
                    </Grid>
                    <Grid item xs={12} md={4} sm={12}>
                      <TextField
                        required
                        name="mother_name"
                        label="মাতার নাম"
                        type="text"
                        fullWidth
                        size="small"
                        variant="outlined"
                        value={brideInfo.mother_name}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonOutlineIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                      {formErrors.mother_name.length > 0 && (
                        <span style={{ color: "red" }}>
                          {formErrors.mother_name}
                        </span>
                      )}
                    </Grid>
                    <Grid item xs={12} md={4} sm={12}>
                      <TextField
                        required
                        id="mothersNid"
                        name="mother_nid"
                        label="মাতার জাতীয় আইডি নম্বর"
                        fullWidth
                        size="small"
                        variant="outlined"
                        value={brideInfo.mother_nid}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <CreditCardIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                      {formErrors.mother_nid.length > 0 && (
                        <span style={{ color: "red" }}>
                          {formErrors.mother_nid}
                        </span>
                      )}
                    </Grid>
                  </Grid>
                </>
              </Grid>
              <Grid sm={12} md={12} sx={{ marginTop: 3 }}>
                <>
                  <Title>
                    <Typography variant="h6">ঠিকানা</Typography>
                  </Title>
                  <Grid container spacing={3} px={2}>
                    <Grid item xs={12} md={4} sm={12}>
                      <TextField
                        fullWidth
                        label="ঠিকানার ধরন"
                        name="address_type"
                        //onChange={handleChange}
                        required
                        select
                        SelectProps={{ native: true }}
                        //value={commInfo.committeeType}
                        variant="outlined"
                        size="small"
                        value={brideInfo.address_type}
                        onChange={handleChange}
                      >
                        {" "}
                        <option>- নির্বাচন করুন -</option>
                        <option value={10}>বর্তমান ঠিকানা</option>
                        <option value={20}>স্থায়ী ঠিকানা</option>
                      </TextField>
                      {formErrors.address_type.length > 0 && (
                        <span style={{ color: "red" }}>
                          {formErrors.address_type}
                        </span>
                      )}
                      {/* <TextField
            fullWidth
            label="ঠিকানার ধরন"
            name="addressType"
            //onChange={handleChange}
            required
            select
            SelectProps={{ native: true }}
            //value={commInfo.committeeType}
            variant="outlined"
            size="small"
          >
            {" "}
            <option>- নির্বাচন করুন -</option>
            <option value={10}>বর্তমান ঠিকানা</option>
            <option value={20}>স্থায়ী ঠিকানা</option>
          </TextField> */}
                    </Grid>
                    <Grid item xs={12} md={4} sm={12}>
                      <TextField
                        fullWidth
                        label="জেলা"
                        name="district_id"
                        //onChange={handleChange}
                        required
                        select
                        SelectProps={{ native: true }}
                        //value={commInfo.committeeType}
                        variant="outlined"
                        size="small"
                        value={brideInfo.district_id}
                        onChange={handleChange}
                      >
                        {" "}
                        <option>- নির্বাচন করুন -</option>
                        <option value={10}>ঢাকা</option>
                        <option value={20}>মুন্সীগঞ্জ</option>
                      </TextField>
                      {formErrors.district_id.length > 0 && (
                        <span style={{ color: "red" }}>
                          {formErrors.district_id}
                        </span>
                      )}
                      {/* <TextField
            fullWidth
            label="জেলা"
            name="district"
            //onChange={handleChange}
            required
            select
            SelectProps={{ native: true }}
            //value={commInfo.committeeType}
            variant="outlined"
            size="small"
            value={selectedAddressType}
            onChange={enteredAddressTypeChangeHandler}
            onBlur={addressInputOnBlurHandler}
          >
            {" "}
            <option>- নির্বাচন করুন -</option>
            <option value={10}>ঢাকা</option>
            <option value={20}>মুন্সীগঞ্জ</option>
          </TextField> */}
                      {/* {addressTypeInputHasError && (
            <span style={{ color: "red" }}>আপনার ধর্ম নির্বাচন করুন</span>
          )} */}
                      {/* <TextField
            fullWidth
            label="জেলা"
            name="district"
            //onChange={handleChange}
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
          </TextField> */}
                    </Grid>

                    <Grid item xs={12} md={4} sm={12}>
                      <TextField
                        fullWidth
                        label="উপজেলা/থানা"
                        name="upazila_id"
                        //onChange={handleChange}
                        required
                        select
                        SelectProps={{ native: true }}
                        //value={commInfo.committeeType}
                        variant="outlined"
                        size="small"
                        value={brideInfo.upazila_id}
                        onChange={handleChange}
                      >
                        {" "}
                        <option>- নির্বাচন করুন -</option>
                        <option value={10}>মিরপুর</option>
                        <option value={20}>তুরাগ</option>
                      </TextField>
                      {formErrors.upazila_id.length > 0 && (
                        <span style={{ color: "red" }}>
                          {formErrors.upazila_id}
                        </span>
                      )}
                      {/* <TextField
            fullWidth
            label="উপজেলা/থানা"
            name="unionWard"
            //onChange={handleChange}
            required
            select
            SelectProps={{ native: true }}
            //value={commInfo.committeeType}
            variant="outlined"
            size="small"
          >
            {" "}
            <option>- নির্বাচন করুন -</option>
            <option value={10}>মিরপুর</option>
            <option value={20}>তুরাগ</option>
          </TextField> */}
                    </Grid>
                    <Grid item xs={12} md={4} sm={12}>
                      {/* <TextField
            fullWidth
            label="ইউনিয়ন/ওয়ার্ড"
            name="unionWard"
            //onChange={handleChange}
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
          </TextField> */}

                      <TextField
                        fullWidth
                        label="ইউনিয়ন/ওয়ার্ড"
                        name="union_id"
                        //onChange={handleChange}
                        required
                        select
                        SelectProps={{ native: true }}
                        //value={commInfo.committeeType}
                        variant="outlined"
                        size="small"
                        value={brideInfo.union_id}
                        onChange={handleChange}
                      >
                        {" "}
                        <option>- নির্বাচন করুন -</option>
                        <option value={10}>ওয়ার্ড-3</option>
                        <option value={20}>ওয়ার্ড-9</option>
                      </TextField>
                      {formErrors.union_id.length > 0 && (
                        <span style={{ color: "red" }}>
                          {formErrors.union_id}
                        </span>
                      )}
                    </Grid>
                    <Grid item xs={12} md={4} sm={12}>
                      <TextField
                        fullWidth
                        label="পোস্ট অফিস"
                        name="post_code"
                        //onChange={handleChange}
                        required
                        select
                        SelectProps={{ native: true }}
                        //value={commInfo.committeeType}
                        variant="outlined"
                        size="small"
                        value={brideInfo.post_code}
                        onChange={handleChange}
                      >
                        {" "}
                        <option>- নির্বাচন করুন -</option>
                        <option value={10}>1216</option>
                        <option value={20}>1000</option>
                      </TextField>
                      {formErrors.post_code.length > 0 && (
                        <span style={{ color: "red" }}>
                          {formErrors.post_code}
                        </span>
                      )}
                      {/* <TextField
            fullWidth
            label="পোস্ট অফিস"
            name="postOffice"
            //onChange={handleChange}
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
          </TextField> */}
                    </Grid>
                    <Grid item xs={12} md={4} sm={12}>
                      <TextField
                        required
                        id="houseRoadVillage"
                        name="details_address"
                        label="নাম"
                        fullWidth
                        size="small"
                        variant="outlined"
                        value={brideInfo.details_address}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <MaleIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                      {formErrors.details_address.length > 0 && (
                        <span style={{ color: "red" }}>
                          {formErrors.details_address}
                        </span>
                      )}
                      {/* <TextField
            required
            id="village"
            name="village"
            type="text"
            label="বাড়ি নং, রাস্তা নং, গ্রাম/মহল্লা লিখুন"
            fullWidth
            size="small"
            variant="outlined"
          /> */}
                    </Grid>
                  </Grid>
                </>
              </Grid>
              <Grid sm={12} md={12} sx={{ marginTop: 3 }}>
                <AddressDetails title="তথ্য পুনঃমূল্যায়ন" />
              </Grid>
            </Grid>
            <Grid sm={2} md={2.5} xs={12} sx={{ textAlign: "center" }}>
              <Grid sm={12} md={12} xs={12}>
                <Title>
                  <Typography variant="h6">কনের ছবি</Typography>
                </Title>
                <Image
                  onClick={handleOpenPic}
                  src={
                    bridePicSubmit.brideImage
                      ? flagForImage + bridePicSubmit.brideImage
                      : "/bride.png"
                  }
                  alt="Bride Picture"
                  width={160}
                  height={160}
                />
              </Grid>

              <Modal
                open={openPic}
                onClose={handleClosePic}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <ImageModalRegion />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      sx={{ marginTop: 3 }}
                      variant="outlined"
                      startIcon={<SendIcon />}
                      onClick={handleOnSubmitPic}
                    >
                      জমা দিন
                    </Button>
                  </Box>
                </Box>
              </Modal>
              <Grid sm={12} md={12} xs={12} sx={{ marginTop: 3 }}>
                <Title>
                  <Typography variant="h6">আঙুলের ছাপ (ডান হাত)</Typography>
                </Title>
                <Image
                  onClick={handleOpenRight}
                  src={RightFP ? "/success2.png" : "/fng.png"}
                  alt="Bride Finger Right"
                  width={120}
                  height={120}
                />
              </Grid>
              <Modal
                open={openRight}
                onClose={handleCloseRight}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <FingerRightRegion />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      sx={{ marginTop: 3 }}
                      variant="outlined"
                      startIcon={<SendIcon />}
                      onClick={handleOnSubmitRightFP}
                    >
                      জমা দিন
                    </Button>
                  </Box>
                </Box>
              </Modal>
              <Grid sm={12} md={12} xs={12} sx={{ marginTop: 3 }}>
                <Title>
                  <Typography variant="h6">আঙুলের ছাপ (বাম হাত)</Typography>
                </Title>
                <Image
                  onClick={handleOpenLeft}
                  src={LeftFP ? "/success2.png" : "/fng.png"}
                  alt="Bride Finger Left"
                  width={120}
                  height={120}
                />
              </Grid>
              <Modal
                open={openLeft}
                onClose={handleCloseLeft}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <FingerLeftRegion />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      sx={{ marginTop: 3 }}
                      variant="outlined"
                      startIcon={<SendIcon />}
                      onClick={handleOnSubmitLeftFP}
                    >
                      জমা দিন
                    </Button>
                  </Box>
                </Box>
              </Modal>
            </Grid>

            {props.title !== "MarriageInfo" && (
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
            )}
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default Bride;
