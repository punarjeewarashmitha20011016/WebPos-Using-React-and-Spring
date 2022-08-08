import {TextField} from "@mui/material";
import React from "react";
import validate from "../../../util/validator"



export default function TxtField(props) {
    const {classes, variant, label, id, type, size, style, listToValidate, disabled, handleChange} = props;
    return (
        <TextField
            id={id}
            label={label}
            variant={variant}
            type={type}
            size={size}
            style={style}
            disabled={disabled}
            onChange={handleChange}
        />
    )
}