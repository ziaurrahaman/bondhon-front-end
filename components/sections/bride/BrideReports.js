import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import Title from "../../shared/others/Title";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { brideeReportUrl } from "../../../url/ApiList";
import axios from "axios";
const GroomReport = () => {
  let rows = [];
  const [groomRows, setGroomRows] = React.useState([]);
  React.useEffect(() => {
    createRowsForGroom();
  }, []);
  function createData(name, nid, dob, mob) {
    return { name, nid, dob, mob };
  }

  async function createRowsForGroom() {
    const result = await axios.get(brideeReportUrl);
    setGroomRows(result.data.data);
    // console.log(`hdsfh${result.data}`);
  }

  console.log("Groom array=============", groomRows);
  //   const rows = [
  //     createData("মোঃ জিয়াউর রহমান", "২৩৪৫৬৭৬৭৮৮", "১৭/০৭/১৯৮৫", "01829-041655"),
  //     createData("সজল গাজী", "৩৪৫৪৫৬৭৭৮৯", "১৭/০৭/১৯৮৭", "01829-041688"),
  //     createData("মোঃ আরিফুল হক", "১২৩৪৬৭৭৮৯", "১৭/০৭/১৯৯০", "01829-041600"),
  //   ];
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
            <Typography variant="h6">বরের তথ্য</Typography>
          </Title>
          <TableContainer px={2}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>বরের নাম</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>এনআইডি</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>জন্ম তারিখ</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>মোবাইল নং</TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    বিস্তারিত
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {groomRows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.nid}</TableCell>
                    <TableCell>{row.dob}</TableCell>
                    <TableCell>{row.mobile_no}</TableCell>
                    <TableCell align="center">
                      <a href="#">
                        <VisibilityIcon color="primary" />
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </>
  );
};

export default GroomReport;
