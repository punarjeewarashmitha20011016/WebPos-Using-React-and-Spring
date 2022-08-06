import Box from "@mui/joy/Box";
import React from "react";
import Grid from "@mui/material/Grid";
import TxtField from "../common/textFields/txtField";
import CommonComboBox from "../common/comboBox/comboBox";
import Input from '@mui/material/Input';
import CommonBtn from "../common/button";

export default function ManageProducts(props) {
    return (
        <Box style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Grid container spacing={0} style={{width: "100%", height: "100%"}}>
                <Grid container item xs={12} style={{height: "10%"}}>
                    <h1 style={{marginLeft: "3%"}}>Manage Products</h1>
                </Grid>
                <Grid container item xs={12} style={{
                    height: "90%",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position:'relative'
                }}>
                    <Grid container item xs={11} style={{height: "90%"}}>
                        <Grid item xs={6} style={{height: "20%",display:'flex',alignItems:"center",justifyContent:"center"}}>
                            <TxtField
                                style={{display:"flex",width:"80%"}}
                                label='Title'
                            />
                        </Grid>
                        <Grid item xs={6} style={{height: "20%",display:'flex',alignItems:"center",justifyContent:"center"}}>
                            <TxtField
                                style={{display:"flex",width:"80%"}}
                                label='Price'
                            />
                        </Grid>
                        <Grid item xs={6} style={{height: "20%",display:'flex',alignItems:"center",justifyContent:"center"}}>
                            <CommonComboBox
                                style={{display:"flex",width:"80%"}}
                                label="Category"
                            />
                        </Grid>
                        <Grid item xs={6} style={{height: "20%",display:'flex',alignItems:"center",justifyContent:"center"}}>
                            <TxtField
                                style={{display:"flex",width:"80%"}}
                                label='Description'
                            />
                        </Grid>
                        <Grid container item xs={12} style={{height: "20%"}}>
                            <Grid item xs={4} style={{height: "100%",display:'flex',alignItems:"center",justifyContent:"center"}}>
                                <Input
                                    type="file"
                                    style={{display:'flex',marginLeft:"5%"}}
                                />
                            </Grid>
                            <Grid item xs={2} style={{height: "100%",display:'flex',alignItems:"center",justifyContent:"start"}}>
                                <img
                                    src=""
                                    style={{display:'flex',marginLeft:"5%",width:"65%",height:"80%",border:"1px solid black"}}
                                />
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} style={{height: "20%",display:'flex',alignItems:"center",justifyContent:"center"}}>
                            <Grid item xs={6}>
                            </Grid>
                            <Grid container item xs={6} style={{height: "100%",display:'flex',alignItems:"center",justifyContent:"center"}}>
                                <Grid item xs={6} style={{height: "100%",display:'flex',alignItems:"center",justifyContent:"end"}}>
                                    <CommonBtn
                                        variant="contained"
                                        label='Clear'
                                        size="medium"
                                        style={{width: "60%", display: 'flex',marginRight:"3%"}}
                                        color='warning'
                                    />
                                </Grid>
                                <Grid item xs={6} style={{height: "100%",display:'flex',alignItems:"center",justifyContent:"start"}}>
                                    <CommonBtn
                                        variant="contained"
                                        label='Save'
                                        size="medium"
                                        style={{width: "60%", display: 'flex',marginLeft:"3%"}}
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