import AccountCircle from "@mui/icons-material/AccountCircle";
import AddIcons from "@mui/icons-material/Add";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import MaleIcon from "@mui/icons-material/Male";
import RemoveIcon from "@mui/icons-material/Remove";
import SaveIcon from "@mui/icons-material/Save";
import {
  Button,
  Container,
  Grid,
  InputAdornment,
  Paper,
  Stack,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
import React, { useState } from "react";
import { NotificationManager } from "react-notifications";
import { lawyerInfoApi, witnessInfoApi } from "../../../url/ApiList";
import Title from "../../shared/others/Title";
import { useSelector, useDispatch } from "react-redux";
import { SetLawyerWitnessPayloadAction } from "../../../redux/actions/lawyer_witness_action";
import {
  WitnessDataUpdate,
  WitnessAdd,
  WitnessDelete,
} from "../../../redux/actions/witness_action";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

const LawyerWitness = (props) => {
  const dispatch = useDispatch();
  const lawWitInfo = useSelector((state) => state.lawyerWitness);
  const witInfo = useSelector((state) => state.witnessSlice);
  let checkFormError = () => {
    let flag = false;
    for (const key in formErrors) {
      if (formErrors[key].length > 0) {
        flag = true;
      }
    }
    return flag;
  };

  //data save for lawyer---------------------------
  const [lawyerInfo, setLawyerInfo] = useState({
    lawFatherName:
      lawWitInfo.lawFatherName !== undefined ? lawWitInfo.lawFatherName : "",
    lawNid: lawWitInfo.lawNid !== undefined ? lawWitInfo.lawNid : "",
    dob: lawWitInfo.dob !== undefined ? lawWitInfo.dob : "",
    addressType:
      lawWitInfo.addressType !== undefined ? lawWitInfo.addressType : "PRS",
    userType: lawWitInfo.userType !== undefined ? lawWitInfo.userType : "Law",
    districtId:
      lawWitInfo.districtId !== undefined ? lawWitInfo.districtId : "",
    upazila: lawWitInfo.upazila !== undefined ? lawWitInfo.upazila : "",
    union: lawWitInfo.union !== undefined ? lawWitInfo.union : "",
    postOfc: lawWitInfo.postOfc !== undefined ? lawWitInfo.postOfc : "",
    addDetails:
      lawWitInfo.addDetails !== undefined ? lawWitInfo.addDetails : "",
    createBy: "Admin",
  });

  const [formErrors, setFormErrors] = useState({
    lawFatherName: "",
    lawNid: "",
    dob: "",
    addressType: "PRS",
    userType: "LAW",
    districtId: 0,
    upazila: 0,
    union: 0,
    postOfc: 0,
    addDetails: "",
    createBy: "Admin",
  });

  const handleChangeLaw = (e) => {
    const { name, value } = e.target;
    dispatch(SetLawyerWitnessPayloadAction(lawyerInfo));
    console.log("lawWitInfo", lawWitInfo);

    switch (name) {
      case "lawNid":
        setLawyerInfo({
          ...lawyerInfo,
          [e.target.name]: e.target.value,
        });
        console.log(lawyerInfo);

        formErrors.lawNid =
          value.length == 13 ||
          value.length == 10 ||
          value.length == 17 ||
          value.length == 0
            ? ""
            : "আপনার সঠিক এনআইডি প্রদান করুন";
        break;

      case "lawFatherName":
        setLawyerInfo({
          ...lawyerInfo,
          [e.target.name]: e.target.value,
        });
        formErrors.lawFatherName =
          value.length < 6 && value.length > 0
            ? "সর্বনিন্ম ৬টি অক্ষর প্রদান"
            : "";
        break;

      case "dob":
        setLawyerInfo({
          ...lawyerInfo,
          [e.target.name]: e.target.value,
        });
        formErrors.dob = value === "" && "জন্ম তারিখ দিন";
        break;

      case "districtId":
        setLawyerInfo({
          ...lawyerInfo,
          [e.target.name]: e.target.value,
        });
        formErrors.districtId = value === "" && "জেলা এর ধরণ নির্বাচন করুন";
        break;

      case "upazila":
        setLawyerInfo({
          ...lawyerInfo,
          [e.target.name]: e.target.value,
        });

        formErrors.upazila = value === "" && "উপজেলা নির্বাচন করুন";
        break;

      case "union":
        setLawyerInfo({
          ...lawyerInfo,
          [e.target.name]: e.target.value,
        });
        formErrors.union = value === "" && "ইউনিয়ন নির্বাচন করুন";
        break;

      case "postOfc":
        setLawyerInfo({
          ...lawyerInfo,
          [e.target.name]: e.target.value,
        });
        formErrors.postOfc = value === "" && "ইউনিয়ন নির্বাচন করুন";
        break;

      case "addDetails":
        setLawyerInfo({
          ...lawyerInfo,
          [e.target.name]: e.target.value,
        });
        formErrors.addDetails = value === "" && "ইউনিয়ন নির্বাচন করুন";
        break;
    }
  };
  //data save for lawyer end ---------------------------
  console.log("witwitwit", witInfo);
  //Witness Start ------------------------------------------------------
  const [inputList, setInputList] = useState([
    {
      name: "",
      dob: "",
      detailAddress: "",
      behalf: "",
      nid: "",
      createBy: "",
    },
  ]);

  const handleInputChange = (index, event) => {
    console.log("witInfo", witInfo);
    dispatch(
      WitnessDataUpdate({
        index: index,
        name: inputList[index].name,
        dob: inputList[index].detailAddress,
        behalf: inputList[index].behalf,
        nid: inputList[index].nid,
        createBy: "admin",
      })
    );
    const values = [...inputList];

    values[index][event.target.name] = event.target.value;
    setInputList(values);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    dispatch(WitnessDelete());
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    dispatch(WitnessAdd());
    setInputList([
      ...inputList,
      {
        name: "",
        dob: "",
        detailAddress: "",
        behalf: "",
        nid: "",
        createBy: "",
      },
    ]);
  };
  // Witness End --------------------------------------------------------------------

  let handleOnsubmitData = async (e) => {
    console.log(lawyerInfo);
    console.log(inputList);

    e.preventDefault();
    let payloadForLawyerInfo = {
      lawFatherName: lawyerInfo.lawFatherName,
      lawNid: lawyerInfo.lawNid,
      dob: lawyerInfo.dob,
      addressType: lawyerInfo.addressType,
      userType: lawyerInfo.userType,
      districtId: lawyerInfo.districtId,
      upazila: lawyerInfo.upazila,
      union: lawyerInfo.union,
      postOfc: lawyerInfo.postOfc,
      addDetails: lawyerInfo.addDetails,
      createBy: lawyerInfo.createBy,
    };

    let payloadForWitness = inputList;

    console.log(`Payload : ${payloadForWitness}`);

    try {
      const lawyerInfoApiCall = await axios.post(
        lawyerInfoApi,
        payloadForLawyerInfo
      );

      const witnessInfoApiCall = await axios.post(
        witnessInfoApi,
        payloadForWitness
      );

      NotificationManager.success(
        lawyerInfoApiCall.data.message,
        "Success",
        5000
      );
      // NotificationManager.success(witnessInfoApiCall.data.message, "Success", 5000);
      console.log("After Api Call : " + lawyerInfoApiCall);
      // console.log("After Api Call : "+witnessInfoApiCall);
    } catch (error) {
      if (error.response) {
        let message = error.response.data.errors[0].message;
        NotificationManager.error(message, "Error", 5000);
      } else if (error.request) {
        NotificationManager.error("Error Connecting...", "Error", 5000);
      } else if (error) {
        NotificationManager.error(error.toString(), "Error", 5000);
      }
      console.log(error);
    }
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
          <Title>
            <Typography variant="h6">উকিল বাবার তথ্য</Typography>
          </Title>

          <Grid container spacing={2} px={2}>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                required
                id="nid"
                name="lawNid"
                value={lawyerInfo.lawNid}
                label="জাতীয় আইডি নম্বর"
                fullWidth
                size="small"
                autoComplete="family-name"
                variant="outlined"
                onChange={handleChangeLaw}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CreditCardIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {formErrors.lawNid.length > 0 && (
                <span style={{ color: "red" }}>{formErrors.lawNid}</span>
              )}
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Stack>
                <TextField
                  id="date"
                  label="জন্ম তারিখ"
                  fullWidth
                  size="small"
                  type="date"
                  name="dob"
                  value={lawyerInfo.dob}
                  defaultValue="yyyy-mm-dd"
                  onChange={handleChangeLaw}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {formErrors.dob.length > 0 && (
                  <span style={{ color: "red" }}>{formErrors.dob}</span>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                required
                id="Name"
                name="lawFatherName"
                value={lawyerInfo.lawFatherName}
                label="নাম"
                fullWidth
                size="small"
                autoComplete="given-name"
                variant="outlined"
                onChange={handleChangeLaw}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MaleIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {formErrors.lawFatherName.length > 0 && (
                <span style={{ color: "red" }}>{formErrors.lawFatherName}</span>
              )}
            </Grid>
          </Grid>
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Grid
              sm={12}
              md={12}
              xs={12}
              spacing={2}
              style={{ marginTop: "2%" }}
            >
              {/* <Address title={"ঠিকানা"}></Address> */}
              <Title>
                <Typography variant="h6">ঠিকানা</Typography>
              </Title>
              <Grid container spacing={3} px={2}>
                <Grid item xs={12} md={4} sm={12}>
                  <TextField
                    fullWidth
                    label="জেলা"
                    name="districtId"
                    value={lawyerInfo.districtId}
                    required
                    select
                    SelectProps={{ native: true }}
                    variant="outlined"
                    size="small"
                    onChange={handleChangeLaw}
                  >
                    {" "}
                    <option>- নির্বাচন করুন -</option>
                    <option value={10}>ঢাকা</option>
                    <option value={20}>মুন্সীগঞ্জ</option>
                  </TextField>
                  {formErrors.districtId.length > 0 && (
                    <span style={{ color: "red" }}>
                      {formErrors.districtId}
                    </span>
                  )}
                </Grid>

                <Grid item xs={12} md={4} sm={12}>
                  <TextField
                    fullWidth
                    label="উপজেলা/থানা"
                    name="upazila"
                    value={lawyerInfo.upazila}
                    required
                    select
                    SelectProps={{ native: true }}
                    //value={commInfo.committeeType}
                    variant="outlined"
                    size="small"
                    onChange={handleChangeLaw}
                  >
                    {" "}
                    <option>- নির্বাচন করুন -</option>
                    <option value={10}>মিরপুর</option>
                    <option value={20}>তুরাগ</option>
                  </TextField>
                  {formErrors.upazila.length > 0 && (
                    <span style={{ color: "red" }}>{formErrors.upazila}</span>
                  )}
                </Grid>
                <Grid item xs={12} md={4} sm={12}>
                  <TextField
                    fullWidth
                    label="ইউনিয়ন/ওয়ার্ড"
                    name="union"
                    value={lawyerInfo.union}
                    required
                    select
                    SelectProps={{ native: true }}
                    variant="outlined"
                    size="small"
                    onChange={handleChangeLaw}
                  >
                    {" "}
                    <option>- নির্বাচন করুন -</option>
                    <option value={10}>ওয়ার্ড-3</option>
                    <option value={20}>ওয়ার্ড-9</option>
                  </TextField>
                  {formErrors.union.length > 0 && (
                    <span style={{ color: "red" }}>{formErrors.union}</span>
                  )}
                </Grid>
                <Grid item xs={12} md={4} sm={12}>
                  <TextField
                    fullWidth
                    label="পোস্ট অফিস"
                    name="postOfc"
                    value={lawyerInfo.postOfc}
                    required
                    select
                    SelectProps={{ native: true }}
                    variant="outlined"
                    size="small"
                    onChange={handleChangeLaw}
                  >
                    {" "}
                    <option>- নির্বাচন করুন -</option>
                    <option value={10}>1216</option>
                    <option value={20}>1000</option>
                  </TextField>
                  {formErrors.postOfc.length > 0 && (
                    <span style={{ color: "red" }}>{formErrors.postOfc}</span>
                  )}
                </Grid>
                <Grid item xs={12} md={8} sm={12}>
                  <TextField
                    required
                    id="village"
                    name="addDetails"
                    value={lawyerInfo.addDetails}
                    type="text"
                    label="বাড়ি নং, রাস্তা নং, গ্রাম/মহল্লা লিখুন"
                    fullWidth
                    size="small"
                    variant="outlined"
                    onChange={handleChangeLaw}
                  />
                  {formErrors.addDetails.length > 0 && (
                    <span style={{ color: "red" }}>
                      {formErrors.addDetails}
                    </span>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <div style={{ marginTop: "4%" }}>
            {/* <WitnessForm></WitnessForm> */}
            <Title
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Typography variant="h6">সাক্ষীর তথ্য</Typography>
            </Title>
            <Grid container spacing={2} px={2}>
              <TableContainer>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ width: "25%", p: "3px" }}>
                        এনআইডি
                      </TableCell>
                      <TableCell sx={{ width: "10%", p: "3px" }}>
                        জন্ম তারিখ
                      </TableCell>
                      <TableCell sx={{ width: "25%", p: "3px" }}>নাম</TableCell>
                      <TableCell sx={{ width: "25%", p: "3px" }}>
                        ঠিকানা
                      </TableCell>
                      <TableCell sx={{ width: "10%", p: "3px" }}>
                        পক্ষ
                      </TableCell>
                      <TableCell
                        sx={{ width: "5%", p: "5px", textAlign: "center" }}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleAddClick}
                          size="small"
                        >
                          <AddIcons sx={{ display: "block" }} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  {inputList.map((input, index) => {
                    return (
                      <>
                        <TableBody>
                          <TableRow key={index}>
                            <TableCell sx={{ width: "25%", p: "3px" }}>
                              <TextField
                                required
                                name="nid"
                                value={input.nid}
                                onChange={(event) =>
                                  handleInputChange(index, event)
                                }
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
                            </TableCell>
                            <TableCell sx={{ width: "10%", p: "3px" }}>
                              <TextField
                                fullWidth
                                size="small"
                                type="date"
                                defaultValue="yyyy/mm/dd"
                                name="dob"
                                value={input.dob}
                                onChange={(event) =>
                                  handleInputChange(index, event)
                                }
                                InputLabelProps={{
                                  shrink: true,
                                }}
                              />
                            </TableCell>
                            <TableCell sx={{ width: "25%", p: "3px" }}>
                              <TextField
                                required
                                name="name"
                                value={input.name}
                                onChange={(event) =>
                                  handleInputChange(index, event)
                                }
                                fullWidth
                                size="small"
                                autoComplete="given-name"
                                variant="outlined"
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <AccountCircle />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </TableCell>
                            <TableCell sx={{ width: "25%", p: "3px" }}>
                              <TextField
                                required
                                name="detailAddress"
                                value={input.detailAddress}
                                onChange={(event) =>
                                  handleInputChange(index, event)
                                }
                                fullWidth
                                size="small"
                                autoComplete="given-name"
                                variant="outlined"
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <AddLocationIcon />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </TableCell>
                            <TableCell sx={{ width: "10%", p: "3px" }}>
                              <Stack direction="row" spacing={1}>
                                <Typography>বর</Typography>
                                <AntSwitch
                                  inputProps={{ "aria-label": "ant design" }}
                                />
                                <Typography>কনে</Typography>
                              </Stack>
                            </TableCell>
                            <TableCell>
                              {inputList.length !== 1 && (
                                <Button
                                  variant="contained"
                                  onClick={() => handleRemoveClick(index)}
                                  color="error"
                                  sx={{ textAlign: "center" }}
                                >
                                  <RemoveIcon sx={{ display: "block" }} />
                                </Button>
                              )}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </>
                    );
                  })}
                </Table>
              </TableContainer>
            </Grid>
          </div>
          <Button
            variant="contained"
            color="secondary"
            sx={{ mr: 1 }}
            onClick={handleOnsubmitData}
            startIcon={<SaveIcon />}
          >
            {" "}
            জমা দিন
          </Button>
        </Paper>
      </Container>
    </>
  );
};
export default LawyerWitness;
