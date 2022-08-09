import React from "react";
import {Grid, Typography} from "@material-ui/core";
import {useStyle} from "../pages/AdminDshboard/bodyComponents/BodyStyle";


export const PageHeader = ({label, pageTitle}) => {
    const classes = useStyle();
    return (
        <Grid container >
            <Grid item xs = {12} sm = {12} >
                <Typography variant = 'body2' className = {classes.pageTitle} > {label} < /Typography>
                {/*<Typography variant='h5' className={classes.pageSubTitle}> {pageTitle} </Typography>*/}
            </Grid>
        </Grid>
    );
}

