import {TextField} from "@mui/material";
import React from "react";

export default function TxtField(props) {
    const {classes,variant,label,id,width,type} = props;
    return (
        <TextField
            id={id}
            label={label}
            variant={variant}
            sx={{width:{width}}}
            type={type}
        />
    )
}