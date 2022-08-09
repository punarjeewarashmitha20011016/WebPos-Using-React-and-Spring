import React, {Component} from "react";
import "./userRegistration.css"
import CommonBtn from "../common/button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import CommonTable from "../common/table/table";
import UserService from '../../services/user/userService'
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import $ from 'jquery'
export default class UserRegistration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                id: "",
                firstName: '',
                lastName: '',
                email: '',
                userName: '',
                password: '',
                city: '',
                street: '',
                streetNo: '',
                zipCode: '',
                latValue: '',
                longValue: '',
                mobileNo: ''
            },
            alert: false,
            message: '',
            severity: '',

            data: [],
            usersData: this.fetchUsers(),
            btnLabel: 'save',
            btnColor: 'primary',
            commonTableRef: React.createRef(),
            tableRows: [],
        }
    }

    /*submitUser = async () => {
        let formData = this.state.formData;

        if (this.state.btnLabel === "save") {
            /!*let res = await CustomerService.postCustomer(formData);

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
            }*!/
        } else {
            /!*let res = await CustomerService.putCustomer(formData);
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
            }*!/
        }
    };*/

    render() {
        return (
            <Box className="boxContainerInUserRegistration">
                <Grid
                    container spacing={0}
                    sx={{height: '100%', width: "100%"}}
                >
                    <Grid item xs={12} sx={{
                        height: "10%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        position: "relative"
                    }}>
                        <h1
                            style={{paddingLeft: "2%"}}
                        >User Registration</h1>
                    </Grid>
                    <Grid
                        item xs={12}
                        sx={{
                            position: "relative",
                            height: "50%",
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <ValidatorForm ref="form" className="pt-2"
                                       style={{
                                           width: "100%",
                                           height: "100%",
                                           display: "flex",
                                           alignItems: "center",
                                           justifyContent: "center"
                                       }}
                        >
                            <Grid
                                container
                                item
                                xs={11}
                                spacing={2}
                                sx={{height: "70%", display: "flex"}}
                            >
                                <Grid
                                    item
                                    xs={3}
                                >
                                    <TextValidator
                                        id="outlinedbasic"
                                        placeholder="Id"
                                        variant="outlined"
                                        size="small"
                                        style={{width: '100%'}}
                                        value={this.state.formData.id}
                                        onChange={(e) => {
                                            let formData = this.state.formData
                                            formData.id = e.target.value
                                            this.setState({formData})
                                        }}
                                        validators={['required', 'matchRegexp:^[0-9]{1,}$']}
                                    />
                                </Grid>

                                <Grid
                                    item
                                    xs={3}
                                >
                                    <TextValidator
                                        id="outlinedbasic"
                                        placeholder="First Name"
                                        variant="outlined"
                                        size="small"
                                        style={{width: '100%'}}
                                        value={this.state.formData.firstName}
                                        onChange={(e) => {
                                            let formData = this.state.formData
                                            formData.firstName = e.target.value
                                            this.setState({formData})
                                        }}
                                        validators={['required', 'matchRegexp:^[A-z ]{4,}$']}
                                    />
                                </Grid>

                                <Grid
                                    item
                                    xs={3}
                                >
                                    <TextValidator
                                        id="outlinedbasic"
                                        placeholder="Last Name"
                                        variant="outlined"
                                        size="small"
                                        style={{width: '100%'}}
                                        value={this.state.formData.lastName}
                                        onChange={(e) => {
                                            let formData = this.state.formData
                                            formData.lastName = e.target.value
                                            this.setState({formData})
                                        }}
                                        validators={['required', 'matchRegexp:^[A-z ]{4,}$']}
                                    />
                                </Grid>

                                <Grid
                                    item
                                    xs={3}
                                >
                                    <TextValidator
                                        id="outlinedbasic"
                                        placeholder="Email"
                                        variant="outlined"
                                        size="small"
                                        style={{width: '100%'}}
                                        value={this.state.formData.email}
                                        onChange={(e) => {
                                            let formData = this.state.formData
                                            formData.email = e.target.value
                                            this.setState({formData})
                                        }}
                                        validators={['required', 'isEmail']}
                                    />
                                </Grid>

                                <Grid
                                    item
                                    xs={3}
                                >
                                    <TextValidator
                                        id="outlinedbasic"
                                        placeholder="User Name"
                                        variant="outlined"
                                        size="small"
                                        style={{width: '100%'}}
                                        value={this.state.formData.userName}
                                        onChange={(e) => {
                                            let formData = this.state.formData
                                            formData.userName = e.target.value
                                            this.setState({formData})
                                        }}
                                        validators={['required', 'matchRegexp:^[A-z0-9 ]{3,}$']}
                                    />
                                </Grid>

                                <Grid
                                    item
                                    xs={3}
                                >
                                    <TextValidator
                                        id="outlinedbasic"
                                        placeholder="Password"
                                        variant="outlined"
                                        size="small"
                                        style={{width: '100%'}}
                                        value={this.state.formData.password}
                                        type='password'
                                        onChange={(e) => {
                                            let formData = this.state.formData
                                            formData.password = e.target.value
                                            this.setState({formData})
                                        }}
                                        validators={['required', 'matchRegexp:^[A-z /?&%$#@,.]{3,}$']}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={3}
                                >
                                    <TextValidator
                                        id="outlinedbasic"
                                        placeholder="City"
                                        variant="outlined"
                                        size="small"
                                        style={{width: '100%'}}
                                        value={this.state.formData.city}
                                        onChange={(e) => {
                                            let formData = this.state.formData
                                            formData.city = e.target.value
                                            this.setState({formData})
                                        }}
                                        validators={['required', 'matchRegexp:^[A-z ]{3,}$']}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={3}
                                >
                                    <TextValidator
                                        id="outlinedbasic"
                                        placeholder="Street No"
                                        variant="outlined"
                                        size="small"
                                        style={{width: '100%'}}
                                        value={this.state.formData.streetNo}
                                        onChange={(e) => {
                                            let formData = this.state.formData
                                            formData.streetNo = e.target.value
                                            this.setState({formData})
                                        }}
                                        validators={['required', 'matchRegexp:^[A-z0-9 /-]{1,}$']}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={3}
                                >
                                    <TextValidator
                                        id="outlinedbasic"
                                        placeholder="Zip Code"
                                        variant="outlined"
                                        size="small"
                                        style={{width: '100%'}}
                                        value={this.state.formData.zipCode}
                                        type='number'
                                        onChange={(e) => {
                                            let formData = this.state.formData
                                            formData.zipCode = e.target.value
                                            this.setState({formData})
                                        }}
                                        validators={['required', 'matchRegexp:^[0-9]{1,}$']}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={3}
                                >
                                    <TextValidator
                                        id="outlinedbasic"
                                        placeholder="Lat Value"
                                        variant="outlined"
                                        size="small"
                                        style={{width: '100%'}}
                                        type='number'
                                        value={this.state.formData.latValue}
                                        onChange={(e) => {
                                            let formData = this.state.formData
                                            formData.latValue = e.target.value
                                            this.setState({formData})
                                        }}
                                        validators={['required', 'matchRegexp:^[0-9]{1,}$']}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={3}
                                >
                                    <TextValidator
                                        id="outlinedbasic"
                                        placeholder="Long Value"
                                        variant="outlined"
                                        size="small"
                                        style={{width: '100%'}}
                                        value={this.state.formData.longValue}
                                        type='number'
                                        onChange={(e) => {
                                            let formData = this.state.formData
                                            formData.longValue = e.target.value
                                            this.setState({formData})
                                        }}
                                        validators={['required', 'matchRegexp:^[0-9]{1,}$']}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={3}
                                >
                                    <TextValidator
                                        id="outlinedbasic"
                                        placeholder="Mobile Number"
                                        variant="outlined"
                                        size="small"
                                        style={{width: '100%'}}
                                        type='number'
                                        value={this.state.formData.mobileNo}
                                        onChange={(e) => {
                                            let formData = this.state.formData
                                            formData.mobileNo = e.target.value
                                            this.setState({formData})
                                        }}
                                        validators={['required', 'matchRegexp:^[0-9]{10}$']}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                >
                                    <TextValidator
                                        id="outlinedbasic"
                                        placeholder="Street"
                                        variant="outlined"
                                        size="small"
                                        style={{width: '100%'}}
                                        value={this.state.formData.street}
                                        onChange={(e) => {
                                            let formData = this.state.formData
                                            formData.street = e.target.value
                                            this.setState({formData})
                                        }}
                                        validators={['required', 'matchRegexp:^[A-z0-9 /-]{4,}$']}
                                    />
                                </Grid>
                            </Grid>
                        </ValidatorForm>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sx={{
                            position: "relative",
                            height: "10%",
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Grid
                            container
                            spacing={2}
                            item
                            xs={12}
                        >
                            <Grid item xs={8}></Grid>
                            <Grid item xs={2}
                                  sx={{display: 'flex', alignItems: "center", justifyContent: "end"}}>
                                <CommonBtn
                                    variant="contained"
                                    label='Clear'
                                    size="medium"
                                    color="warning"
                                    style={{width: "80%", display: "flex"}}
                                    id="clearBtnUserId"
                                />
                            </Grid>
                            <Grid item xs={2}
                                  sx={{display: 'flex', alignItems: "center", justifyContent: "center"}}>
                                <CommonBtn
                                    variant="contained"
                                    label='Save'
                                    size="medium"
                                    style={{width: "80%", display: 'flex'}}
                                    color='primary'
                                    id="saveBtnUserId"
                                    disabled={undefined}
                                    onClick={async (e) => {
                                        /*await this.fetchUsers()
                                        console.log(this.state.message)*/
                                        await this.postUsers()
                                        await this.fetchUsers();
                                    }}
                                />

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}
                          sx={{
                              position: "relative",
                              height: "40%",
                              display: 'flex',
                              alignItems: "center",
                              justifyContent: "center",
                          }}
                    >
                        <CommonTable
                            width='100%'
                            height='100%'
                            /*rows = list*/
                            tblRows={['First Name', 'Last Name', 'Email', 'User Name', "Password", "City", "Street", "Street No", "Zip Code", "Lat Value", "Long Value", "Mobile No"]}
                            id='userTableId'
                            ref={this.state.commonTableRef}
                            dataList={this.state.tableRows}
                        />
                    </Grid>
                </Grid>
            </Box>
        )
    }

    fetchUsers = async () => {
        let response = await UserService.fetchUsers();
        console.log("response = " + response.data[0].address.city)
        console.log("length = " + response.data.length)
        let users = response.data;
        console.log("Response Data = " + response.data)
        let usersData = this.state.usersData
        usersData = users;
        console.log("Users Data = " + usersData)

        await this.setState({
            usersData: usersData
        }, function () {
            console.log("State = " + this.state.usersData)
        })
        console.log('working')
        this.setDataToTableRowsInUser();
    }

    postUsers = async () => {
        let response = await UserService.postUser(this.state.formData);
    }
    putUsers = async () => {
        let response = await UserService.postUser(this.state.formData, this.state.formData.id);
    }
    deleteUsers = async () => {
        let response = await UserService.postUser(this.state.formData.id);
    }

    setDataToTableRowsInUser = async () => {
        console.log('setDataToTableRowsInUser')
        let tableRows = [];

        const StyledTableCell = styled(TableCell)(({theme}) => ({
            [`&.${tableCellClasses.head}`]: {
                backgroundColor: theme.palette.common.black,
                color: theme.palette.common.white,
            },
            [`&.${tableCellClasses.body}`]: {
                fontSize: 14,
            },
        }));

        const StyledTableRow = styled(TableRow)(({theme}) => ({
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
            // hide last border
            '&:last-child td, &:last-child th': {
                border: 0,
            },
        }));

        let data = this.state.usersData;
        for (let i = 0; i < data.length; i++) {
            console.log('data ================================================== '+data.toLocaleString())
            /*let row = <StyledTableRow id='styledTableRow'></StyledTableRow>*/
            console.log("data[i].id = "+data[i].name.firstname);
            let row = <tr></tr>;
            let col1 = <td>{data[i].id}</td>
            let col2 = <td>{data[i].name.firstname}</td>
            let col3 = <td>{data[i].name.lastname}</td>
            let col4 = <td>{data[i].email}</td>
            let col5 = <td>{data[i].username}</td>
            let col6 = <td>{data[i].password}</td>
            let col7 = <td>{data[i].address.city}</td>
            let col8 = <td>{data[i].address.street}</td>
            let col9 = <td>{data[i].address.number}</td>
            let col10 = <td>{data[i].address.zipcode}</td>
            let col11 = <td>{data[i].address.geolocation.lat}</td>
            let col12 = <td>{data[i].address.geolocation.long}</td>
            let col13 = <td>{data[i].phone}</td>
            console.log("Row = "+$(row).children())
            $(row).append(col1)
            $(row).append(col2)
            $(row).append(col3)
            $(row).append(col4)
            $(row).append(col5)
            $(row).append(col6)
            $(row).append(col7)
            $(row).append(col8)
            $(row).append(col9)
            $(row).append(col10)
            $(row).append(col11)
            $(row).append(col12)
            $(row).append(col13)
            tableRows.push(row);
            this.setState({
                tableRows:tableRows
            })
            console.log("Rows = "+tableRows)
        }
        console.log('data = '+data[0])

        return tableRows;
    }
}


