import React from "react";
import Box from "@mui/material/Box";
import "./userRegistration.css"
import Grid from "@mui/material/Grid";
import TxtField from "../common/textFields/txtField";
import CommonBtn from "../common/button";
import { withStyles } from "@mui/styles";
import { styled } from '@mui/material/styles';

export default function UserRegistration() {
    return (
        <Box className="boxContainerInUserRegistration">
            <Grid
                container spacing={0}
                sx={{display: 'flex', height: '100%', width: "100%"}}
            >
                <Grid item xs={12} sx={{
                    height: "10%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start"
                }}>
                    <h1
                        style={{paddingLeft: "2%"}}
                    >User Registration</h1>
                </Grid>
                <Grid
                    item xs={12}
                    sx={{height: "90%", display: 'flex', alignItems: "center", justifyContent: "center"}}
                >
                    <Grid
                        container
                        item
                        xs={11}
                        spacing={3}
                        sx={{height: "90%"}}
                    >
                        <Grid
                            item
                            xs={6}
                        >
                            <TxtField
                                variant="outlined"
                                label='First Name'
                                width="100%"
                            />
                        </Grid>

                        <Grid
                            item
                            xs={6}
                        >
                            <TxtField
                                variant="outlined"
                                label='Email'
                                width="100%"
                            />
                        </Grid>

                        <Grid
                            item
                            xs={6}
                        >
                            <TxtField
                                variant="outlined"
                                label='User Name'
                                width="100%"
                            />
                        </Grid>

                        <Grid
                            item
                            xs={6}
                        >
                            <TxtField
                                variant="outlined"
                                label='Password'
                                width="100%"
                                type='password'
                            />
                        </Grid>

                        <Grid
                            item
                            xs={6}
                        >
                            <TxtField
                                variant="outlined"
                                label='Street'
                                width="100%"
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <TxtField
                                variant="outlined"
                                label='Street No'
                                width="100%"
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <TxtField
                                variant="outlined"
                                label='Zip Code'
                                width="100%"
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <TxtField
                                variant="outlined"
                                label='Lat Value'
                                width="100%"
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <TxtField
                                variant="outlined"
                                label='Long Value'
                                width="100%"
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <TxtField
                                variant="outlined"
                                label='Mobile Number'
                                width="100%"
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                        >
                            <Grid
                                container
                                spacing={2}
                                item
                                xs={12}
                            >
                                <Grid item xs={8} sx={{display:'flex',alignItems:"center",justifyContent:"end"}}></Grid>
                                <Grid item xs={2} sx={{display:'flex',alignItems:"center",justifyContent:"end"}}>
                                    <CommonBtn
                                        variant="contained"
                                        label='Clear'
                                        size="large"
                                        color="warning"
                                        style={{width:"80%",display:"flex"}}
                                    />
                                </Grid>
                                <Grid item xs={2} sx={{display:'flex',alignItems:"center",justifyContent:"center"}}>
                                    <CommonBtn
                                        variant="contained"
                                        label='Save'
                                        size="large"
                                        style={{width:"80%",display:'flex'}}
                                        color='primary'
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}