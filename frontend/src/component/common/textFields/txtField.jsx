import {TextField} from "@mui/material";
import React from "react";

export default function TxtField(props) {
    const {classes, variant, label, id, type, size, style, disabled} = props;
    return (
        <TextField
            id={id}
            label={label}
            variant={variant}
            type={type}
            size={size}
            style={style}
            disabled={disabled}
        />
    )
}