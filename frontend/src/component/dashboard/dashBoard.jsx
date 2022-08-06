import Box from "@mui/joy/Box";
import React from "react";
import Grid from "@mui/joy/Grid";
import Cards from "./cards/cards";

export default function DashBoard() {
    return (
        <Box sx={{width:"100%",height:"100%",display:'flex',alignItems:"center",justifyContent:"center"}}>
            <Grid container spacing={0} sx={{width:"90%",height:"90%",display:"flex"}}>
                <Grid item xs={6} sx={{height:"50%",display:"flex",alignItems:"center",justifyContent:"center"}}><Cards label="Products"/></Grid>
                <Grid item xs={6} sx={{height:"50%",display:"flex",alignItems:"center",justifyContent:"center"}}><Cards label="Cart"/></Grid>
                <Grid item xs={6} sx={{height:"50%",display:"flex",alignItems:"center",justifyContent:"center"}}><Cards label="Users"/></Grid>
            </Grid>
        </Box>
    )
}