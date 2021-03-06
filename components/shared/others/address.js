import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Title from "./Title";
import userInput from "../../hooks/userInput";
import MaleIcon from "@mui/icons-material/Male";
import InputAdornment from "@mui/material/InputAdornment";

const Address = (props) => {
  const [addressType, setAddressType] = useState("");
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");
  const [union, setUnion] = useState("");

  const handleAddTypeChange = (event) => {
    setAddressType(event.target.value);
  };

  const handleDivisionChange = (event) => {
    setDivision(event.target.value);
  };

  const handleDistrictChange = (event) => {
    setDistrict(event.target.value);
  };

  const handleUpazilaChange = (event) => {
    setUpazila(event.target.value);
  };

  const handleUnionChange = (event) => {
    setUnion(event.target.value);
  };

  const {
    value: selectedAddressType,
    hasError: addressTypeInputHasError,
    isValid: enteredAddressTypeIsValid,
    valueChangeHandler: enteredAddressTypeChangeHandler,
    inputBlurHandler: addressInputOnBlurHandler,
    reset: addressTtypeInputReset,
  } = userInput((value) => value.trim() !== "");
  const {
    value: enteredHouseRoadVillage,
    hasError: houseRoadVillageInputHasError,
    isValid: enteredHouseRoadVillageIsValid,
    valueChangeHandler: enteredHouseRoadVillageChangeHandler,
    inputBlurHandler: houseRoadVillageInputOnBlurHandler,
    reset: houseRoadVillageInputReset,
  } = userInput((value) => value.trim() !== "");
  const {
    value: selectedDistrict,
    hasError: districtInputHasError,
    isValid: enteredDistrictIsValid,
    valueChangeHandler: enteredDistrictChangeHandler,
    inputBlurHandler: districtInputOnBlurHandler,
    reset: districtInputReset,
  } = userInput((value) => value.trim() !== "");
  const {
    value: selectedUpazila,
    hasError: upazilaInputHasError,
    isValid: enteredUpazilaIsValid,
    valueChangeHandler: enteredUpazilaChangeHandler,
    inputBlurHandler: upazilaInputOnBlurHandler,
    reset: upazilaInputReset,
  } = userInput((value) => value.trim() !== "");
  const {
    value: selectedUnionWord,
    hasError: unionWordInputHasError,
    isValid: enteredUnionWordIsValid,
    valueChangeHandler: enteredUnionWordChangeHandler,
    inputBlurHandler: unionWordInputOnBlurHandler,
    reset: unionWordInputReset,
  } = userInput((value) => value.trim() !== "");
  const {
    value: selectedPostOffice,
    hasError: postOfficeInputHasError,
    isValid: enteredPostOfficeIsValid,
    valueChangeHandler: enteredPostOfficeChangeHandler,
    inputBlurHandler: postOfficeInputOnBlurHandler,
    reset: postOfficeInputReset,
  } = userInput((value) => value.trim() !== "");

  return (
    <>
      <Title>
        <Typography variant="h6">{props.title}</Typography>
      </Title>
      <Grid container spacing={3} px={2}>
        <Grid item xs={12} md={4} sm={12}>
          <TextField
            fullWidth
            label="????????????????????? ?????????"
            name="addressType"
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
            <option>- ???????????????????????? ???????????? -</option>
            <option value={10}>????????????????????? ??????????????????</option>
            <option value={20}>????????????????????? ??????????????????</option>
          </TextField>
          {addressTypeInputHasError && (
            <span style={{ color: "red" }}>????????????????????? ????????? ???????????????????????? ????????????</span>
          )}
          {/* <TextField
            fullWidth
            label="????????????????????? ?????????"
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
            <option>- ???????????????????????? ???????????? -</option>
            <option value={10}>????????????????????? ??????????????????</option>
            <option value={20}>????????????????????? ??????????????????</option>
          </TextField> */}
        </Grid>
        <Grid item xs={12} md={4} sm={12}>
          <TextField
            fullWidth
            label="????????????"
            name="district"
            //onChange={handleChange}
            required
            select
            SelectProps={{ native: true }}
            //value={commInfo.committeeType}
            variant="outlined"
            size="small"
            value={selectedDistrict}
            onChange={enteredDistrictChangeHandler}
            onBlur={districtInputOnBlurHandler}
          >
            {" "}
            <option>- ???????????????????????? ???????????? -</option>
            <option value={10}>????????????</option>
            <option value={20}>??????????????????????????????</option>
          </TextField>
          {districtInputHasError && (
            <span style={{ color: "red" }}>???????????? ???????????????????????? ????????????</span>
          )}
          {/* <TextField
            fullWidth
            label="????????????"
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
            <option>- ???????????????????????? ???????????? -</option>
            <option value={10}>????????????</option>
            <option value={20}>??????????????????????????????</option>
          </TextField> */}
          {/* {addressTypeInputHasError && (
            <span style={{ color: "red" }}>??????????????? ???????????? ???????????????????????? ????????????</span>
          )} */}
          {/* <TextField
            fullWidth
            label="????????????"
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
            <option>- ???????????????????????? ???????????? -</option>
            <option value={10}>????????????</option>
            <option value={20}>??????????????????????????????</option>
          </TextField> */}
        </Grid>

        <Grid item xs={12} md={4} sm={12}>
          <TextField
            fullWidth
            label="??????????????????/????????????"
            name="upazila"
            //onChange={handleChange}
            required
            select
            SelectProps={{ native: true }}
            //value={commInfo.committeeType}
            variant="outlined"
            size="small"
            value={selectedUpazila}
            onChange={enteredUpazilaChangeHandler}
            onBlur={upazilaInputOnBlurHandler}
          >
            {" "}
            <option>- ???????????????????????? ???????????? -</option>
            <option value={10}>??????????????????</option>
            <option value={20}>???????????????</option>
          </TextField>
          {upazilaInputHasError && (
            <span style={{ color: "red" }}>??????????????????/???????????? ???????????????????????? ????????????</span>
          )}
          {/* <TextField
            fullWidth
            label="??????????????????/????????????"
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
            <option>- ???????????????????????? ???????????? -</option>
            <option value={10}>??????????????????</option>
            <option value={20}>???????????????</option>
          </TextField> */}
        </Grid>
        <Grid item xs={12} md={4} sm={12}>
          {/* <TextField
            fullWidth
            label="?????????????????????/??????????????????"
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
            <option>- ???????????????????????? ???????????? -</option>
            <option value={10}>??????????????????-3</option>
            <option value={20}>??????????????????-9</option>
          </TextField> */}

          <TextField
            fullWidth
            label="?????????????????????/??????????????????"
            name="unionWord"
            //onChange={handleChange}
            required
            select
            SelectProps={{ native: true }}
            //value={commInfo.committeeType}
            variant="outlined"
            size="small"
            value={selectedUnionWord}
            onChange={enteredUnionWordChangeHandler}
            onBlur={unionWordInputOnBlurHandler}
          >
            {" "}
            <option>- ???????????????????????? ???????????? -</option>
            <option value={10}>??????????????????-3</option>
            <option value={20}>??????????????????-9</option>
          </TextField>
          {unionWordInputHasError && (
            <span style={{ color: "red" }}>?????????????????????/??????????????????</span>
          )}
        </Grid>
        <Grid item xs={12} md={4} sm={12}>
          <TextField
            fullWidth
            label="??????????????? ????????????"
            name="postOffice"
            //onChange={handleChange}
            required
            select
            SelectProps={{ native: true }}
            //value={commInfo.committeeType}
            variant="outlined"
            size="small"
            value={selectedPostOffice}
            onChange={enteredPostOfficeChangeHandler}
            onBlur={postOfficeInputOnBlurHandler}
          >
            {" "}
            <option>- ???????????????????????? ???????????? -</option>
            <option value={10}>1216</option>
            <option value={20}>1000</option>
          </TextField>
          {postOfficeInputHasError && (
            <span style={{ color: "red" }}>??????????????? ???????????? ???????????????????????? ????????????</span>
          )}
          {/* <TextField
            fullWidth
            label="??????????????? ????????????"
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
            <option>- ???????????????????????? ???????????? -</option>
            <option value={10}>1216</option>
            <option value={20}>1000</option>
          </TextField> */}
        </Grid>
        <Grid item xs={12} md={4} sm={12}>
          <TextField
            required
            id="houseRoadVillage"
            name="houseRoadVillage"
            label="?????????"
            fullWidth
            size="small"
            variant="outlined"
            value={enteredHouseRoadVillage}
            onChange={enteredHouseRoadVillageChangeHandler}
            onBlur={houseRoadVillageInputOnBlurHandler}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MaleIcon />
                </InputAdornment>
              ),
            }}
          />
          {houseRoadVillageInputHasError && (
            <span style={{ color: "red" }}>
              ???????????? ??????, ?????????????????? ??????, ???????????????/?????????????????? ???????????????
            </span>
          )}
          {/* <TextField
            required
            id="village"
            name="village"
            type="text"
            label="???????????? ??????, ?????????????????? ??????, ???????????????/?????????????????? ???????????????"
            fullWidth
            size="small"
            variant="outlined"
          /> */}
        </Grid>
      </Grid>
    </>
  );
};

export default Address;
