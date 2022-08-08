import Box from "@mui/joy/Box";
import React, {Component} from "react";
import Grid from "@mui/material/Grid";
import TxtField from "../common/textFields/txtField";
import CommonComboBox from "../common/comboBox/comboBox";
import Input from '@mui/material/Input';
import CommonBtn from "../common/button";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";

export default class ManageProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                title: '',
                price: '',
                category: '',
                description: '',
                image: ''
            },
            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'save',
            btnColor: 'primary'
        }
    }

    submitItem = async () => {
        let formData = this.state.formData;

        if (this.state.btnLabel === "save") {
            /*let res = await CustomerService.postCustomer(formData);

            console.log(res)    //print the promise

            if (res.status === 201) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success'
                });
                this.clearFields();
                this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }*/
        } else {
            /*let res = await CustomerService.putCustomer(formData);
            if (res.status === 200) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success',
                    btnLabel: 'save',
                    btnColor: 'primary'
                });
                this.clearFields();
                this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }*/
        }
    };

    render() {
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
                        position: 'relative'
                    }}>
                        <Grid container item xs={12} style={{height: "80%"}}>
                            <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitItem()}
                                           style={{
                                               width: "100%",
                                               height: "100%",
                                               display: "flex",
                                               alignItems: "center",
                                               justifyContent: "center"
                                           }}
                            >
                                <Grid container item xs={12}
                                      style={{height: "80%"}}>
                                    <Grid item xs={6} style={{
                                        height: "20%",
                                        position:"relative"
                                    }}>
                                        <TextValidator
                                            id="outlinedbasic"
                                            placeholder="Title"
                                            variant="outlined"
                                            size='large'
                                            style={{width:"80%",inset:"0 0 0 0",margin:"auto",position:"absolute"}}
                                            value={this.state.formData.title}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.title = e.target.value
                                                this.setState({formData})
                                            }}
                                            validators={['required', 'matchRegexp:^[A-z ]{4,}$']}
                                        />
                                    </Grid>
                                    <Grid item xs={6} style={{
                                        height: "20%",
                                        position:"relative",
                                    }}>
                                        <TextValidator
                                            id="outlinedbasic"
                                            placeholder="Price"
                                            variant="outlined"
                                            size='large'
                                            style={{width:"80%",inset:"0 0 0 0",margin:"auto",position:"absolute"}}
                                            value={this.state.formData.price}
                                            type='number'
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.price = e.target.value
                                                this.setState({formData})
                                            }}
                                            validators={['required', 'matchRegexp:^[0-9]{1,}$']}
                                        />
                                    </Grid>
                                    <Grid item xs={6} style={{
                                        height: "20%",
                                        display: 'flex',
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                        <CommonComboBox
                                            style={{display: "flex", width: "80%"}}
                                            label="Category"
                                        />
                                    </Grid>
                                    <Grid item xs={6} style={{
                                        height: "20%",
                                        position:"relative",
                                    }}>
                                        <TextValidator
                                            id="outlinedbasic"
                                            placeholder="Description"
                                            variant="outlined"
                                            size='large'
                                            style={{width:"80%",inset:"0 0 0 0",margin:"auto",position:"absolute"}}
                                            value={this.state.formData.description}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.description = e.target.value
                                                this.setState({formData})
                                            }}
                                            validators={['required', 'matchRegexp:^[A-z0-9 ]{3,}$']}
                                        />
                                    </Grid>
                                    <Grid container item xs={12} style={{height: "20%"}}>
                                        <Grid item xs={4} style={{
                                            height: "100%",
                                            display: 'flex',
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <Input
                                                type="file"
                                                style={{display: 'flex', marginLeft: "5%"}}
                                            />
                                        </Grid>
                                        <Grid item xs={2} style={{
                                            height: "100%",
                                            display: 'flex',
                                            alignItems: "center",
                                            justifyContent: "start"
                                        }}>
                                            <img
                                                src=""
                                                style={{
                                                    display: 'flex',
                                                    marginLeft: "5%",
                                                    width: "65%",
                                                    height: "80%",
                                                    border: "1px solid black"
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </ValidatorForm>
                        </Grid>
                        <Grid container item xs={12}
                              style={{height: "20%", display: 'flex', alignItems: "center", justifyContent: "center"}}>
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
                                        label='Clear'
                                        size="medium"
                                        style={{width: "60%", display: 'flex', marginRight: "3%"}}
                                        color='warning'
                                    />
                                </Grid>
                                <Grid item xs={6} style={{
                                    height: "100%",
                                    display: 'flex',
                                    alignItems: "center",
                                    justifyContent: "start"
                                }}>
                                    <CommonBtn
                                        variant="contained"
                                        label='Save'
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
}