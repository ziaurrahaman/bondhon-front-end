import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Container, Paper } from '@mui/material';
import Title from "../../shared/others/Title";
import VisibilityIcon from '@mui/icons-material/Visibility';

function createData(groomname, bridename, nikahnama, certificate) {
    return { groomname, bridename, nikahnama, certificate};
}

const rows = [
    createData('মোঃ জিয়াউর রহমান - ২৩৪৫৬৭৬৭৮৮ - ১৭/০৭/১৯৮৫', 'মোঃ জিয়াউর রহমান - ২৩৪৫৬৭৬৭৮৮ - ১৭/০৭/১৯৮৫', 500120, 500120001),
];

const marriageReport = () => {
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
                        <Typography variant="h6">বিবাহ সম্পন্নের তথ্য</Typography>
                    </Title>
                    <TableContainer>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead >
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold' }}>বরের নাম - এনআইডি - জন্ম তারিখ</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>কনের নাম - এনআইডি - জন্ম তারিখ</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>নিকাহনামা নং</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>সনদপত্র নং</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>নথিপত্র</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">{row.groomname}</TableCell>
                                        <TableCell >{row.bridename}</TableCell>
                                        <TableCell >{row.nikahnama}</TableCell>
                                        <TableCell >{row.certificate}</TableCell>
                                        <TableCell ><a href="#"><VisibilityIcon color="primary"/></a></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Container>
        </>
    )
}

export default marriageReport
