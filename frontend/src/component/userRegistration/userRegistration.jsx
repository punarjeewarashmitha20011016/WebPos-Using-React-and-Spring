import React from "react";
import Box from "@mui/material/Box";
import "./userRegistration.css"
import Grid from "@mui/material/Grid";
import TxtField from "../common/textFields/txtField";
import CommonBtn from "../common/button";
import CommonTable from "../common/table/table";

export default function UserRegistration() {
    let dataList = [];
    return (
        <Box className="boxContainerInUserRegistration">
            <Grid
                container spacing={0}
                sx={{height: '100%', width: "100%"}}
            >
                <Grid item xs={12} sx={{
                    height: "10%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    position: "relative"
                }}>
                    <h1
                        style={{paddingLeft: "2%"}}
                    >User Registration</h1>
                </Grid>
                <Grid
                    item xs={12}
                    sx={{
                        position: "relative",
                        height: "50%",
                        display: 'flex',
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Grid
                        container
                        item
                        xs={11}
                        spacing={0.5}
                        sx={{height: "100%"}}
                    >
                        <Grid
                            item
                            xs={6}
                        >
                            <TxtField
                                variant="outlined"
                                label='First Name'
                                style={{width: "100%"}}
                                size="small"
                            />
                        </Grid>

                        <Grid
                            item
                            xs={6}
                        >
                            <TxtField
                                variant="outlined"
                                label='Last Name'
                                style={{width: "100%"}}
                                size="small"
                            />
                        </Grid>

                        <Grid
                            item
                            xs={6}
                        >
                            <TxtField
                                variant="outlined"
                                label='Email'
                                style={{width: "100%"}}
                                size="small"
                            />
                        </Grid>

                        <Grid
                            item
                            xs={6}
                        >
                            <TxtField
                                variant="outlined"
                                label='User Name'
                                style={{width: "100%"}}
                                size="small"
                            />
                        </Grid>

                        <Grid
                            item
                            xs={6}
                        >
                            <TxtField
                                variant="outlined"
                                label='Password'
                                style={{width: "100%"}}
                                type='password'
                                size="small"
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <TxtField
                                variant="outlined"
                                label='City'
                                style={{width: "100%"}}
                                size="small"
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <TxtField
                                variant="outlined"
                                label='Street'
                                style={{width: "100%"}}
                                size="small"
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <TxtField
                                variant="outlined"
                                label='Street No'
                                style={{width: "100%"}}
                                size="small"
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <TxtField
                                variant="outlined"
                                label='Zip Code'
                                style={{width: "100%"}}
                                size="small"
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <TxtField
                                variant="outlined"
                                label='Lat Value'
                                style={{width: "100%"}}
                                size="small"
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <TxtField
                                variant="outlined"
                                label='Long Value'
                                style={{width: "100%"}}
                                size="small"
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <TxtField
                                variant="outlined"
                                label='Mobile Number'
                                style={{width: "100%"}}
                                size="small"
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
                                <Grid item xs={8}
                                      sx={{display: 'flex', alignItems: "center", justifyContent: "end"}}></Grid>
                                <Grid item xs={2} sx={{display: 'flex', alignItems: "center", justifyContent: "end"}}>
                                    <CommonBtn
                                        variant="contained"
                                        label='Clear'
                                        size="medium"
                                        color="warning"
                                        style={{width: "80%", display: "flex"}}
                                    />
                                </Grid>
                                <Grid item xs={2}
                                      sx={{display: 'flex', alignItems: "center", justifyContent: "center"}}>
                                    <CommonBtn
                                        variant="contained"
                                        label='Save'
                                        size="medium"
                                        style={{width: "80%", display: 'flex'}}
                                        color='primary'
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}
                      sx={{
                          position: "relative",
                          height: "40%",
                          display: 'flex',
                          alignItems: "center",
                          justifyContent: "center",
                      }}
                >
                    <CommonTable
                        width='100%'
                        height='100%'
                        /*rows = list*/
                        tblRows={['First Name', 'Last Name', 'Email','User Name',"Password","City","Street","Street No","Zip Code","Lat Value","Long Value","Mobile No"]}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}