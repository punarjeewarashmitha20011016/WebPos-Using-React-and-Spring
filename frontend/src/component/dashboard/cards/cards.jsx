import React from "react";

export default function Cards(props) {
    const{label}=props;
    return (
        <div style={{display: "flex", flexDirection: 'column', width: "90%", height: "90%",backgroundColor:"#A7ABB2",alignItems:"center",justifyContent:"center"}}>
            <div style={{display:'flex',width:"100%",height:"50%",alignItems:"center",justifyContent:"center"}}><h1 sx={{display:'flex'}}>{label}</h1></div>
            <div style={{display:'flex',width:"100%",height:"50%",alignItems:"center",justifyContent:"center"}}><h2>Hello</h2></div>
        </div>
    )
}