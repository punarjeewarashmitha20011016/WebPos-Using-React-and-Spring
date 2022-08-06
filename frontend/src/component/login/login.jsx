import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "./login.css"
import TxtField from "../common/textFields/txtField";
import CommonBtn from "../common/button";

export default function Login(props) {
    return (
        <Box
            className="boxContainerInLogin">
            <Grid
                container
                spacing={0}
                sx={{position: "relative", display: 'flex', width: '100%', height: "100%"}}>
                <Grid item xs={12} sx={{
                    position: "relative",
                    textAlign: 'center',
                    height: '20%',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: 'center'
                }}>
                    <h1>Login</h1>
                </Grid>
                <Grid item xs={12} sx={{
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: 'center',
                    height: '15%'
                }}>
                    <TxtField
                        varient='outlined'
                        label="Enter Your User Name"
                        width='80%'
                        className='textField'
                        type='text'
                    />
                </Grid>
                <Grid item xs={12} sx={{
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: 'center',
                    height: '15%'
                }}>
                    <TxtField
                        varient='outlined'
                        label="Enter Your Password"
                        width='80%'
                        className='textField'
                        type='password'
                    />
                </Grid>
                <Grid item xs={12} sx={{
                    position: "relative",
                    textAlign: 'center',
                    height: '30%',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: 'center'
                }}>
                    <CommonBtn
                        variant='outlined'
                        label='Login'
                        size='large'
                        color='primary'
                        style={{width: "40%"}}
                    />
                </Grid>
                <Grid item xs={12} sx={{
                    position: "relative",
                    textAlign: 'center',
                    height: '20%',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: 'start'
                }}>
                    <p
                        style={{paddingLeft: '10px'}}
                    >Create new user account ?
                        <span>
                                <a href="/userRegistration"
                                   style={{textDecoration: "none", paddingLeft: "10px"}}
                                >
                                    click here
                                </a>
                            </span>
                    </p>
                </Grid>
            </Grid>
        </Box>
    )
}
