import { withStyles } from "@mui/styles";
import { styleSheet } from "./styles";
import { Component } from "react";
import {
  Autocomplete,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import EditIcon from "@mui/icons-material/Edit";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import GDSESnackBar from "../../common/SnakBar/index";
import userService from "../../Service/UserService";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {
        id: "",
        email: "",
        username: "",
        password: "",
        name: {
          firstname: "",
          lastname: "",
        },
        address: {
          city: "",
          street: "",
          number: "",
          zipcode: "",
          geolocation: {
            lat: "",
            long: "",
          },
        },
        phone: "",
      },

      alert: false,
      message: "",
      severity: "",

      data: [],
    };
  }

  //Load All Data
  loadData = async () => {
    let res = await userService.fetchUser();

    if (res.status === 200) {
      console.log(res.data);
      this.setState({
        data: res.data,
      });
    }
  };

  //Data Add
  submitUser = async () => {
    let formData = this.state.userData;

    let res = await userService.postUser(formData);
    if (res.status === 200) {
      this.setState({
        alert: true,
        message: "User Successfully Added",
        severity: "success",
      });
      this.clearFields();
      this.loadData();
    } else {
      this.setState({
        alert: true,
        message: res.response.data.message,
        severity: "error",
      });
    }
  };

  deleteUser = async (id) => {
    console.log("Delete Id : ", id);
    let params = {
      id: id,
    };
    let res = await userService.deleteUser(params);
    console.log(res);

    if (res.status === 200) {
      this.setState({
        alert: true,
        message: res.data.message,
        severity: "success",
      });
      //this.loadData();
    } else {
      this.setState({
        alert: true,
        message: res.data.message,
        severity: "error",
      });
    }
  };

  getAsingleUser = async (id) => {
    let params = {
      id: id,
    };
    let res = await userService.fetchAsingleUser(params);
    console.log(res);

    if (res.status === 200) {
      this.setState({
        alert: true,
        message: res.data.message,
        severity: "success",
      });
      //this.loadData();
    } else {
      this.setState({
        alert: true,
        message: res.data.message,
        severity: "error",
      });
    }
  };

  getAllUser = async () => {
    let res = await userService.fetchLimitGetAllUser();

    if (res.status === 200) {
      this.setState({
        data: res.data.data,
      });
    }
    console.log(this.state.data);
  };

  updateUser = async (row) => {
    let res = await userService.putUser(row);
    if (res.status === 200) {
      this.setState({
        data: row,
        alert: true,
        message: "User Successfully Updated",
        severity: "success",
      });
      this.clearFields();
      this.loadData();
    } else {
      this.setState({
        alert: true,
        message: res.response.data.message,
        severity: "error",
      });
    }
  };

  clearFields = () => {
    this.setState({
      userData: {
        email: "",
        username: "",
        password: "",
        name: {
          firstname: "",
          lastname: "",
        },
        address: {
          city: "",
          street: "",
          number: "",
          zipcode: "",
          geolocation: {
            lat: "",
            long: "",
          },
        },
        phone: "",
      },
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitUser}>
          <Grid className={classes.customer_container}>
            <Grid container className="pt-2" spacing={2}>
              <Grid
                item
                lg={12}
                xs={12}
                sm={12}
                md={12}
                style={{
                  height: "15vh",
                  alignItems: "center",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  backgroundColor: "#ffffff",
                }}
              >
                <Typography
                  variant="h4"
                  style={{ margin: "30px 0 60px 0", color: "black" }}
                >
                  User Registration
                </Typography>
              </Grid>
              <Grid
                width="100%"
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{ height: "10vh" }}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={6}
                  style={{ margin: "20px 0 5px 0" }}
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  <TextValidator
                    id="outlinedbasic"
                    placeholder=""
                    variant="outlined"
                    size="small"
                    style={{ width: "40vw" }}
                    label="First Name"
                    value={this.state.userData.name.firstname}
                    onChange={(e) => {
                      let formData = this.state.userData;
                      formData.name.firstname = e.target.value;
                      this.setState({ formData });
                    }}
                    validators={["required"]}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={6}
                  style={{ margin: "20px 0 5px 0" }}
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  <TextValidator
                    id="outlinedbasic"
                    placeholder=""
                    variant="outlined"
                    size="small"
                    style={{ width: "40vw" }}
                    label="Last Name"
                    value={this.state.userData.name.lastname}
                    onChange={(e) => {
                      let formData = this.state.userData;
                      formData.name.lastname = e.target.value;
                      this.setState({ formData });
                    }}
                    validators={["required"]}
                  />
                </Grid>
              </Grid>
              <Grid
                width="100%"
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                style={{ height: "10vh" }}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={6}
                  style={{ margin: "10px 0 5px 0" }}
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  <TextValidator
                    id="outlinedbasic"
                    placeholder=""
                    variant="outlined"
                    size="small"
                    style={{ width: "40vw" }}
                    label="Email"
                    value={this.state.userData.email}
                    onChange={(e) => {
                      let formData = this.state.userData;
                      formData.email = e.target.value;
                      this.setState({ formData });
                    }}
                    validators={["required"]}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={6}
                  style={{ margin: "10px 0 5px 0" }}
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  <TextValidator
                    id="outlined-multiline-flexible"
                    placeholder="10"
                    variant="outlined"
                    size="small"
                    maxRows={4}
                    style={{ width: "40vw" }}
                    label="User Name"
                    value={this.state.userData.username}
                    onChange={(e) => {
                      let formData = this.state.userData;
                      formData.username = e.target.value;
                      this.setState({ formData });
                    }}
                    validators={["required"]}
                  />
                </Grid>
              </Grid>
              <Grid
                width="100%"
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                style={{ height: "10vh" }}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={6}
                  style={{ margin: "10px 0 5px 0" }}
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  <TextValidator
                    id="outlinedbasic"
                    placeholder=""
                    variant="outlined"
                    size="small"
                    style={{ width: "40vw" }}
                    label="Password"
                    value={this.state.userData.password}
                    onChange={(e) => {
                      let formData = this.state.userData;
                      formData.password = e.target.value;
                      this.setState({ formData });
                    }}
                    validators={["required"]}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={6}
                  style={{ margin: "10px 0 5px 0" }}
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  <TextValidator
                    id="outlined-multiline-flexible"
                    placeholder="10"
                    variant="outlined"
                    size="small"
                    maxRows={4}
                    style={{ width: "40vw" }}
                    label="City"
                    value={this.state.userData.address.city}
                    onChange={(e) => {
                      let formData = this.state.userData;
                      formData.address.city = e.target.value;
                      this.setState({ formData });
                    }}
                    validators={["required"]}
                  />
                </Grid>
              </Grid>
              <Grid
                width="100%"
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                style={{ height: "10vh" }}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={6}
                  style={{ margin: "10px 0 5px 0" }}
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  <TextValidator
                    id="outlinedbasic"
                    placeholder=""
                    variant="outlined"
                    size="small"
                    style={{ width: "40vw" }}
                    label="Street"
                    value={this.state.userData.address.street}
                    onChange={(e) => {
                      let formData = this.state.userData;
                      formData.address.street = e.target.value;
                      this.setState({ formData });
                    }}
                    validators={["required"]}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={6}
                  style={{ margin: "10px 0 5px 0" }}
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  <TextValidator
                    id="outlined-multiline-flexible"
                    placeholder="10"
                    variant="outlined"
                    size="small"
                    maxRows={4}
                    style={{ width: "40vw" }}
                    label="Street No"
                    value={this.state.userData.address.number}
                    onChange={(e) => {
                      let formData = this.state.userData;
                      formData.address.number = e.target.value;
                      this.setState({ formData });
                    }}
                    validators={["required"]}
                  />
                </Grid>
              </Grid>
              <Grid
                width="100%"
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                style={{ height: "10vh" }}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={6}
                  style={{ margin: "10px 0 5px 0" }}
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  <TextValidator
                    id="outlinedbasic"
                    placeholder=""
                    variant="outlined"
                    size="small"
                    style={{ width: "40vw" }}
                    label="Zip Code"
                    value={this.state.userData.address.zipcode}
                    onChange={(e) => {
                      let formData = this.state.userData;
                      formData.address.zipcode = e.target.value;
                      this.setState({ formData });
                    }}
                    validators={["required"]}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={6}
                  style={{ margin: "10px 0 5px 0" }}
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  <TextValidator
                    id="outlined-multiline-flexible"
                    placeholder="10"
                    variant="outlined"
                    size="small"
                    maxRows={4}
                    style={{ width: "40vw" }}
                    label="Lat Value"
                    value={this.state.userData.address.geolocation.lat}
                    onChange={(e) => {
                      let formData = this.state.userData;
                      formData.address.geolocation.lat = e.target.value;
                      this.setState({ formData });
                    }}
                    validators={["required"]}
                  />
                </Grid>
              </Grid>
              <Grid
                width="100%"
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                style={{ height: "10vh" }}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={6}
                  style={{ margin: "10px 0 5px 0" }}
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  <TextValidator
                    id="outlinedbasic"
                    placeholder=""
                    variant="outlined"
                    size="small"
                    style={{ width: "40vw" }}
                    label="Long Value"
                    value={this.state.userData.address.geolocation.long}
                    onChange={(e) => {
                      let formData = this.state.userData;
                      formData.address.geolocation.long = e.target.value;
                      this.setState({ formData });
                    }}
                    validators={["required"]}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={6}
                  style={{ margin: "10px 0 5px 0" }}
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  <TextValidator
                    id="outlined-multiline-flexible"
                    placeholder="10"
                    variant="outlined"
                    size="small"
                    maxRows={4}
                    style={{ width: "40vw" }}
                    label="Mobile No"
                    value={this.state.userData.phone}
                    onChange={(e) => {
                      let formData = this.state.userData;
                      formData.phone = e.target.value;
                      this.setState({ formData });
                    }}
                    validators={["required"]}
                  />
                </Grid>
              </Grid>
              <Grid
                width="100%"
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-end"
                style={{ height: "20vh" }}
              >
                <Button
                  variant="contained"
                  color="error"
                  style={{ margin: "20px 0 100px 0", width: "120px" }}
                  onClick={() => {
                    this.clearFields();
                  }}
                >
                  Clear
                </Button>
                <Button
                  variant="contained"
                  style={{ margin: "20px 60px 100px 20px", width: "120px" }}
                  type="submit"
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </ValidatorForm>
        <Grid>
          <TableContainer
            component={Paper}
            style={{
              height: "45vh",
              width: "95vw",
              margin: "0 5px 0 20px",
              backgroundColor: "#eeeff1",
            }}
          >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">First Name</TableCell>
                  <TableCell align="left">Last Name</TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left">User Name</TableCell>
                  <TableCell align="left">Password</TableCell>
                  <TableCell align="left">City</TableCell>
                  <TableCell align="left">Street</TableCell>
                  <TableCell align="left">Street No</TableCell>
                  <TableCell align="left">Zip Code</TableCell>
                  <TableCell align="left">Lat Value</TableCell>
                  <TableCell align="left">Long Value</TableCell>
                  <TableCell align="left">Mobile No</TableCell>
                  <TableCell align="left">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.data.map((row) => (
                  <TableRow>
                    <TableCell align="left">{row.name.firstname}</TableCell>
                    <TableCell align="left">{row.name.lastname}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.username}</TableCell>
                    <TableCell align="left">{row.password}</TableCell>
                    <TableCell align="left">{row.address.city}</TableCell>
                    <TableCell align="left">{row.address.street}</TableCell>
                    <TableCell align="left">{row.address.number}</TableCell>
                    <TableCell align="left">{row.address.zipcode}</TableCell>
                    <TableCell align="left">
                      {row.address.geolocation.lat}
                    </TableCell>
                    <TableCell align="left">
                      {row.address.geolocation.long}
                    </TableCell>
                    <TableCell align="left">{row.phone}</TableCell>
                    <TableCell align="left">
                      <Tooltip title="Edit">
                        <IconButton
                          onClick={(e) => {
                            let form = this.state.userData;
                            form.id = row.id;
                            console.log("Form = ", form);
                            this.updateUser(form);
                          }}
                        >
                          <EditIcon color="primary" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton
                          onClick={(e) => {
                            this.deleteUser(row.id);
                          }}
                        >
                          <DeleteIcon color="error" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <GDSESnackBar
            open={this.state.alert}
            onClose={() => {
              this.setState({ alert: false });
            }}
            message={this.state.message}
            autoHideDuration={3000}
            severity={this.state.severity}
            variant="filled"
          />
        </Grid>
      </>
    );
  }
}

export default withStyles(styleSheet)(User);
