import Box from "@mui/joy/Box";
import React from "react";
import Grid from "@mui/material/Grid";
import TxtField from "../common/textFields/txtField";
import CommonComboBox from "../common/comboBox/comboBox";
import CommonBtn from "../common/button";
import CommonTable from "../common/table/table";

export default function PlaceOrder(props) {
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
                <Grid item xs={12} style={{height: "10%",display:'flex',alignItems:"center",justifyContent:"start"}}>
                    <h2 style={{marginLeft: "3%",display:'flex',height:"50%"}}>Manage Products</h2>
                </Grid>
                <Grid container item xs={12} style={{
                    height: "90%",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                }}>
                    <Grid container item xs={11} style={{height: "50%"}}>
                        <Grid item xs={6}
                              style={{height: "20%", display: 'flex', alignItems: "center", justifyContent: "center"}}>
                            <TxtField
                                style={{display: "flex", width: "80%"}}
                                label='User Name'
                            />
                        </Grid>
                        <Grid item xs={6}
                              style={{height: "20%", display: 'flex', alignItems: "center", justifyContent: "center"}}>
                            <CommonComboBox
                                style={{display: "flex", width: "80%"}}
                                label="Product Title"
                            />
                        </Grid>
                        <Grid item xs={6}
                              style={{height: "20%", display: 'flex', alignItems: "center", justifyContent: "center"}}>
                            <TxtField
                                style={{display: "flex", width: "80%"}}
                                label='Item Qty'
                                type="number"
                            />
                        </Grid>
                        <Grid item xs={6}
                              style={{height: "20%", display: 'flex', alignItems: "center", justifyContent: "center"}}>
                            <TxtField
                                style={{display: "flex", width: "80%"}}
                                label='Qty On Hand'
                                type="number"
                            />
                        </Grid>
                        <Grid item xs={6}
                              style={{height: "20%", display: 'flex', alignItems: "center", justifyContent: "center"}}>
                            <TxtField
                                style={{display: "flex", width: "80%"}}
                                label='Discount'
                                type="number"
                            />
                        </Grid>
                        <Grid item xs={6} style={{
                            height: "20%",
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <TxtField
                                style={{display: "flex", width: "80%"}}
                                label='Total'
                                type="number"
                            />
                        </Grid>
                        <Grid item xs={6} style={{
                            height: "20%",
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <CommonBtn
                                variant="contained"
                                label="Clear Cart"
                                style={{width: "50%", backgroundColor: "red"}}
                            />
                        </Grid>
                        <Grid item xs={6} style={{
                            height: "20%",
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <CommonBtn
                                variant="contained"
                                label="Add To Cart"
                                style={{width: "50%"}}
                                color="primary"
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}
                          style={{
                              height: "40%",
                              display: 'flex',
                              alignItems: "start",
                              justifyContent: "center",
                              border: "1px solid black"
                          }}>
                        <CommonTable
                            tblRows={["Order Id", "Item Title", "ItemQty","Qty On Hand","Discount","Total"]}
                        />
                    </Grid>

                    <Grid container item xs={12}
                          style={{height: "10%", display: 'flex', alignItems: "center", justifyContent: "center"}}>
                        <Grid item xs={6}>
                        </Grid>
                        <Grid container item xs={6} style={{
                            height: "100%",
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Grid item xs={6} style={{
                                height: "100%",
                                display: 'flex',
                                alignItems: "center",
                                justifyContent: "end"
                            }}>
                                <CommonBtn
                                    variant="contained"
                                    label='Discard'
                                    size="medium"
                                    style={{width: "60%", display: 'flex', marginRight: "3%", backgroundColor: "red"}}
                                />
                            </Grid>
                            <Grid item xs={6} style={{
                                height: "100%",
                                display: 'flex',
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <CommonBtn
                                    variant="contained"
                                    label='Place Order'
                                    size="medium"
                                    style={{width: "60%", display: 'flex', marginLeft: "3%"}}
                                    color='primary'
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}