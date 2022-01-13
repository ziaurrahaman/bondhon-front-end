import React, { useState } from "react";
import { TextField, Grid, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Switch, Stack, InputAdornment, } from "@mui/material";
import Title from "../../shared/others/Title";
import AddIcons from "@mui/icons-material/Add";
import RemoveIcon from '@mui/icons-material/Remove';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { styled } from '@mui/material/styles';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

const WitnessForm = () => {
  const [inputList, setInputList] = useState([
    { name: "", nid: "", dob: "", address: "" },
  ]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { name: "", nid: "", dob: "", address: "" }]);
  };


  return (
    <div className="override">
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
                <TableCell sx={{ width: "25%", p: "3px" }}>
                  নাম
                </TableCell>
                <TableCell sx={{ width: "25%", p: "3px" }}>
                  ঠিকানা
                </TableCell>
                <TableCell sx={{ width: "10%", p: "3px" }}>
                  পক্ষ
                </TableCell>
                <TableCell sx={{ width: "5%", p: "5px", textAlign: "center" }}>
                  <Button variant="contained" color="primary" onClick={handleAddClick} size="small" >
                    <AddIcons sx={{ display: "block" }} />
                  </Button>
                </TableCell>
              </TableRow>
            </TableHead>
            {inputList.map((x, i) => {
              return (
                <>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{ width: "25%", p: "3px" }}>
                        <TextField
                          required
                          name="nid"
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
                          defaultValue="2021-12-27"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ width: "25%", p: "3px" }}>
                        <TextField
                          required
                          name="Name"                          
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
                          name="location"
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
                        <Stack direction="row" spacing={1} >
                          <Typography>বর</Typography>
                          <AntSwitch inputProps={{ 'aria-label': 'ant design' }} />
                          <Typography>কনে</Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        {inputList.length !== 1 && (
                          <Button
                            variant="contained"
                            onClick={() => handleRemoveClick(i)}
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
  );
};

export default WitnessForm;
