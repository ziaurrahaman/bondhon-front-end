import React from 'react';
import {
    Grid,
    Avatar,
    Container,
    Paper,
    Typography,
    TextField,
    InputAdornment,
    Divider,
    Tooltip,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Badge,
} from "@mui/material";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AbcIcon from '@mui/icons-material/Abc';
import SettingsCellIcon from '@mui/icons-material/SettingsCell';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import EditIcon from '@mui/icons-material/Edit';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import Title from "../../shared/others/Title";

const profile = () => {
    return (
        <>
            <Container>
                <Grid container spacing={2}>

                    <Grid item xs={12} md={4} sm={12}>

                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/bandhan.jpg"
                                alt="green iguana"
                            />
                            <CardContent sx={{ textAlign: 'center', p: '10px' }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    মোঃ জিয়াউর রহমান
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    <b>জাতীয় আইডি নং-</b> ৭৮৪৯৮৫৭৪
                                    <br /><b>নিবন্ধন নং-</b> ৩৪৫৬৭৮
                                    <br /><b>মোবাইল নং-</b> ০১৮২৯-০৪২৬৯৯
                                    <br /><b>ইমেইল-</b> ‍saifur1985bd@gmail.com
                                    <br /><b>এরিয়া-</b> ‍ইউনিয়ন/ওয়ার্ড: ১-৫, উপজেলা/থানা: দারুল সালাম থানা, জেলা: ঢাকা
                                </Typography>
                            </CardContent>
                            <Grid
                                item
                                xs={12}
                                md={12}
                                sm={12}
                                mx={3}
                                my={2}
                                sx={{ textAlign: "center" }}
                            >
                                <Tooltip title="এডিট করুন">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{ mr: 1 }}
                                        startIcon={<EditIcon />}
                                    >
                                        {" "}
                                        এডিট করুন
                                    </Button>
                                </Tooltip>
                            </Grid>
                        </Card>

                    </Grid>

                    <Grid item xs={12} md={8} sm={12}>
                        <Paper
                            sx={{ my: { xs: 2, md: 4 }, p: { xs: 1, md: 2 } }}
                            elevation={3}
                            square
                            style={{ marginTop: "1.5%" }}
                        >
                            <Title>
                                <Typography variant="h6">এডিট তথ্য</Typography>
                            </Title>
                            <Grid container spacing={2} px={2}>

                                <Grid item xs={12} sm={12} md={6}>
                                    <TextField
                                        required
                                        name="nid"
                                        label="জাতীয় আইডি নং"
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
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <TextField
                                        label="জন্ম তারিখ"
                                        fullWidth
                                        size="small"
                                        type="date"
                                        defaultValue="2021-12-27"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <TextField
                                        required
                                        name="name"
                                        label="নাম"
                                        fullWidth
                                        size="small"
                                        autoComplete="given-name"
                                        variant="outlined"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircleIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <TextField
                                        required
                                        name="regNo"
                                        label="নিবন্ধন নং"
                                        fullWidth
                                        size="small"
                                        autoComplete="given-name"
                                        variant="outlined"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AbcIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <TextField
                                        required
                                        name="mobNo"
                                        label="মোবাইল নং"
                                        fullWidth
                                        size="small"
                                        autoComplete="given-name"
                                        variant="outlined"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <SettingsCellIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <TextField
                                        required
                                        name="email"
                                        label="ইমেইল"
                                        fullWidth
                                        size="small"
                                        autoComplete="given-name"
                                        variant="outlined"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AlternateEmailIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <TextField
                                        required
                                        name="area"
                                        label="এরিয়া"
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
                                    <Tooltip title="এডিট করুন">
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            sx={{ mr: 1 }}
                                            startIcon={<UpgradeIcon />}
                                        >
                                            {" "}
                                            আপডেট করুন
                                        </Button>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default profile
