import { withStyles } from "@mui/styles";
import { Component } from "react";
import { styleSheet } from "./styles";
import { Button, Grid, TextField, Typography, } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import PersonIcon from '@mui/icons-material/Person';
import ProductService from '../../Service/ProductService'
import GDSESnackBar from "../../common/SnakBar/index";

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {

            productData: {
                title: '',
                price: '',
                description: '',
                image: '',
                category: ''
            },

            categoryTypes: [
                {
                    type: 'Small'
                },
                {
                    type: 'Medium'
                },
                {
                    type: 'Large'
                }
            ],

            alert: false,
            message: '',
            severity: '',

            data: [],
        }
    }

    //Load All Data
    loadData = async () => {
        let res = await ProductService.fetchProduct();

        if (res.status === 200) {
            this.setState({
                data: res.data.data
            });
        }
        console.log(this.state.data)    // print customers array

    };

    //Data Add
    submitProduct = async () => {
        let formData = this.state.productData;

        let res = await ProductService.postProduct(formData);
        if (res.status === 200) {
            this.setState({
                alert: true,
                message: 'Product Successfully Added',
                severity: 'success',
            });
            this.clearFields();
            //this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error'
            });
        }

    };

    //Data Delete
    deleteProduct = async (id) => {
        let params = {
            id: id
        }
        let res = await ProductService.deleteProduct(params);
        console.log(res)

        if (res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            //this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'error'
            });
        }
    };

    //Update
    updateProduct = (data) => {
        console.log(data)

        this.setState({
            productData: {
                title: data.title,
                price: data.price,
                description: data.description,
                image: data.image,
                category: data.category
            },
        });
    };

    //Get A Single Product
    getAsingleProduct = async (id) => {
        let params = {
            id: id
        }
        let res = await ProductService.fetchAsingleProduct(params);
        console.log(res)

        if (res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            //this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'error'
            });
        }
    };

    //Get Product Categories
    getAllProductCategories = async () => {
        let res = await ProductService.fetchLimitGetAllProducts();

        if (res.status === 200) {
            this.setState({
                data: res.data.data
            });
        }
        console.log(this.state.data)

    };

    clearFields = () => {
        this.setState({
            productData: {
                title: '',
                price: '',
                description: '',
                image: '',
                category: ''
            },
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <>
                <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitProduct}>
                    <Grid className={classes.product_container}>
                        <Grid container className="pt-2" spacing={2}>
                            <Grid item lg={12} xs={12} sm={12} md={12}
                                style={{
                                    alignItems: 'center',
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: 'center',
                                    backgroundColor: '#fffff',
                                }}>
                                <Typography variant="h4" style={{ margin: '20px 0 60px 0', color: 'black', }}>Product
                                    Manage</Typography>
                            </Grid>
                            <Grid width="100%" container direction="row" justifyContent="center" alignItems="center">
                                <Grid item xs={12} sm={12} md={12} lg={6} style={{ margin: '20px 0 10px 0' }} container
                                    justifyContent="center" alignItems="center">
                                    <TextValidator
                                        id="outlinedbasic"
                                        //placeholder="D00-001"
                                        variant="outlined"
                                        size="small"
                                        style={{ width: '40vw' }}
                                        label="Title"
                                        value={this.state.productData.title}
                                        onChange={(e) => {
                                            let formData = this.state.productData
                                            formData.title = e.target.value
                                            this.setState({ formData })
                                        }}
                                        validators={['required']}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={6} style={{ margin: '20px 0 10px 0' }} container
                                    justifyContent="center" alignItems="center"
                                >
                                    <TextValidator
                                        id="outlinedbasic"
                                        //placeholder="D00-001"
                                        variant="outlined"
                                        size="small"
                                        style={{ width: '40vw' }}
                                        label="Price"
                                        value={this.state.productData.price}
                                        onChange={(e) => {
                                            let formData = this.state.productData
                                            formData.price = e.target.value
                                            this.setState({ formData })
                                        }}
                                        validators={['required']}
                                    />
                                </Grid>
                            </Grid>
                            <Grid width="100%" container direction="row" justifyContent="space-evenly"
                                alignItems="center">
                                <Grid item xs={12} sm={12} md={12} lg={6} style={{ margin: '30px 0 40px 0' }} container
                                    justifyContent="center" alignItems="center"
                                >
                                    <Autocomplete
                                        onChange={(e, value, r) => {
                                        
                                            let formData = this.state.productData
                                            formData.category = value.type
                                            this.setState({formData})
                                        
                                        }}
                                        getOptionLabel={
                                            (option) => option.type
                                        }
                                        style={{ width: '40vw' }}
                                        id="controllable-states-demo"
                                        options={this.state.categoryTypes}
                                        size="small"
                                        renderInput={(params) => <TextField {...params} label="Category" />}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={6} style={{ margin: '30px 0 40px 0' }} container
                                    justifyContent="center" alignItems="center"
                                >
                                    <TextValidator

                                        id="outlined-multiline-flexible"
                                        //placeholder="D00-001"
                                        variant="outlined"
                                        multiline
                                        maxRows={4}
                                        style={{ width: '40vw' }}
                                        label="Description"
                                        value={this.state.productData.description}
                                        onChange={(e) => {
                                            let formData = this.state.productData
                                            formData.description = e.target.value
                                            this.setState({ formData })
                                        }}
                                        validators={['required']}
                                    />
                                </Grid>
                            </Grid>
                            <Grid width="100%" container direction="row" justifyContent="flex-start" alignItems="center">
                                <div className={classes.img_div}>
                                    <PersonIcon style={{ color: 'D9D9D9', fontSize: '180px' }} />
                                </div>
                                <div><input

                                    style={{ display: 'none' }}
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file01"
                                    multiple
                                    type="file"
                                // onChange={(e) => {
                                //     this.setState({
                                //         frontImage: e.target.files[0],
                                //         frontView : URL.createObjectURL(e.target.files[0])
                                //     })
                                // }}
                                />
                                    <label htmlFor="contained-button-file01">
                                        <Button variant="contained" size="small" component="span"
                                            style={{ margin: '40px 0 0 20px', backgroundColor: 'white', color: 'black' }}
                                        >
                                            Choose Image
                                        </Button>
                                    </label>

                                </div>
                            </Grid>
                            <Grid width="100%" container direction="row" justifyContent="flex-end" alignItems="flex-end">
                                <Button
                                variant="contained"
                                color="error" 
                                style={{ margin: '20px 0 30px 0', width: '120px' }}
                                onClick={() => {
                                    this.clearFields();
                                }}
                                >Clear</Button>
                                <Button
                                    style={{
                                        margin: '20px 60px 30px 20px',
                                        width: '120px'
                                    }}
                                    variant="contained"
                                    type="submit"

                                >Save</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </ValidatorForm>
                <GDSESnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({ alert: false })
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />
            </>
        )
    }
}

export default withStyles(styleSheet)(Product)