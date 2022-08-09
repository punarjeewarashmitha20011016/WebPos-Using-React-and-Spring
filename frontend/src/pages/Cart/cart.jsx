import { withStyles } from "@mui/styles";
import { Component } from "react";
import { styleSheet } from "./styles";
import { Autocomplete, Button, Grid, TextField, Typography } from "@mui/material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import CartService from "../../Service/CartService"

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {

            cartData: {
                userId: '',
                date: '',
                products: [
                    {
                        productId: '',
                        quantity: ''
                    }
                ]
            },

            user: [
                // {
                //     email: '',
                //     username: '',
                //     password: '',
                //     name: {
                //         firstname: '',
                //         lastname: ''
                //     },
                //     address: {
                //         city: '',
                //         street: '',
                //         number: '',
                //         zipcode: '',
                //         geolocation: {
                //             lat: '',
                //             long: ''
                //         }
                //     },
                //     phone: ''
                // }
                {
                    address: {
                        geolocation: {
                            lat: "-37.3159",
                            long: "81.1496"
                        },
                        city: "kilcoole",
                        street: "new road",
                        number: 7682,
                        zipcode: "12926-3874"
                    },
                    id: 1,
                    email: "john@gmail.com",
                    username: "johnd",
                    password: "m38rmF$",
                    name: {
                        firstname: "john",
                        lastname: "doe"
                    },
                    phone: "1-570-236-7033",
                    __v: 0
                },
                {
                    address: {
                        geolocation: {
                            lat: "-37.3159",
                            long: "81.1496"
                        },
                        city: "kilcoole",
                        street: "Lovers Ln",
                        number: 7267,
                        zipcode: "12926-3874"
                    },
                    id: 2,
                    email: "morrison@gmail.com",
                    username: "mor_2314",
                    password: "83r5^_",
                    name: {
                        firstname: "david",
                        lastname: "morrison"
                    },
                    phone: "1-570-236-7033",
                    __v: 0
                },
            ],

            productTitles: [

                // {
                //     title: '',
                //     price: '',
                //     description: '',
                //     image: '',
                //     category: ''
                // }

                {
                    id: 1,
                    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                    price: 109.95,
                    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                    category: "men's clothing",
                    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                    rating: {
                        rate: 3.9,
                        count: 120
                    }
                },
                {
                    id: 2,
                    title: "Mens Casual Premium Slim Fit T-Shirts ",
                    price: 22.3,
                    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                    category: "men's clothing",
                    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                    rating: {
                        rate: 4.1,
                        count: 259
                    }
                },
                {
                    id: 3,
                    title: "Mens Cotton Jacket",
                    price: 55.99,
                    description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
                    category: "men's clothing",
                    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
                    rating: {
                        rate: 4.7,
                        count: 500
                    }
                },
            ],
        }
    }

    loadData = async () => {
        let res = await CartService.fetchCart();

        if (res.status === 200) {
            this.setState({
                data: res.data.data
            });
        }
        console.log(this.state.data)    // print customers array

    };

    //Data Add
    submitCart = async () => {

        let formData = this.state.cartData;

        let res = await CartService.postCart(formData);
        if (res.status === 200) {
            this.setState({
                alert: true,
                message: 'Cart Successfully Added',
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
    deleteCart = async (id) => {
        let params = {
            id: id
        }
        let res = await CartService.deleteCart(params);
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

    clearFields = () => {
        this.setState({
            cartData: {
                userId: '',
                date: '',
                products: [
                    {
                        productId: '',
                        quantity: ''
                    }
                ]
            },
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <>
                <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitCart}>
                    <Grid className={classes.cart_container}>
                        <Grid container className="pt-2" spacing={2}>
                            <Grid item lg={12} xs={12} sm={12} md={12}
                                style={{
                                    height: '20vh',
                                    alignItems: 'center',
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: 'center',
                                    backgroundColor: '#ffffff'
                                }}>
                                <Typography variant="h4" style={{ margin: '30px 0 60px 0', color: 'black', }}>Cart
                                    Manage</Typography>
                            </Grid>
                            <Grid width="100%" container direction="row" justifyContent="center" alignItems="center" style={{ height: '15vh' }}>
                                <Grid item xs={12} sm={12} md={12} lg={6} style={{ margin: '20px 0 10px 0' }} container
                                    justifyContent="center" alignItems="center">
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={this.state.user}
                                        sx={{ width: 300 }}
                                        renderInput={(params) => <TextField {...params} label="User Name" />}
                                        getOptionLabel={
                                            (option) => option.username
                                        }
                                        onChange={(e, value) => {
                                            console.log(value.id)
                                            let formData = this.state.cartData
                                            formData.products.p = value.id
                                            this.setState({ formData });
                                        }}
                                        size="small"
                                        style={{ width: '40vw' }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={6} style={{ margin: '20px 0 10px 0' }} container
                                    justifyContent="center" alignItems="center"
                                >
                                    <TextValidator
                                        id="outlinedbasic"
                                        //placeholder=""
                                        variant="outlined"
                                        size="small"
                                        style={{ width: '40vw' }}
                                        type="date"

                                        value={this.state.cartData.date}
                                        onChange={(e) => {
                                            let formData = this.state.cartData
                                            formData.date = e.target.value
                                            this.setState({ formData })
                                        }}
                                        validators={['required']}
                                    />
                                </Grid>
                            </Grid>
                            <Grid width="100%" container direction="row" justifyContent="space-evenly"
                                alignItems="center" style={{ height: '15vh' }}>
                                <Grid item xs={12} sm={12} md={12} lg={6} style={{ margin: '30px 0 40px 0' }} container
                                    justifyContent="center" alignItems="center"
                                >
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={this.state.productTitles}
                                        sx={{ width: 300 }}
                                        renderInput={(params) => <TextField {...params} label="Product Title" />}
                                        getOptionLabel={
                                            (option) => option.title
                                        }
                                        onChange={(e, value) => {
                                            console.log(value.id)
                                            let formData = this.state.cartData
                                            formData.userId = value.id
                                            this.setState({ formData });
                                        }}
                                        size="small"
                                        style={{ width: '40vw' }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={6} style={{ margin: '30px 0 40px 0' }} container
                                    justifyContent="center" alignItems="center"
                                >
                                    <TextValidator

                                        id="outlined-multiline-flexible"
                                        //placeholder="10"
                                        variant="outlined"
                                        size="small"
                                        maxRows={4}
                                        style={{ width: '40vw' }}
                                        label="Qty"
                                        value={this.state.cartData.products.quantity}
                                        onChange={(e) => {
                                            let formData = this.state.cartData.products
                                            formData.quantity = e.target.value
                                            this.setState({ formData })
                                        }}
                                        validators={['required']}
                                    />
                                </Grid>
                            </Grid>
                            <Grid width="100%" container direction="row" justifyContent="flex-end" alignItems="flex-end" style={{ height: '50vh' }}>
                                <Button variant="contained" color="error" style={{ margin: '20px 0 100px 0', width: '120px' }}>Clear</Button>
                                <Button
                                    variant="contained"
                                    style={{ margin: '20px 60px 100px 20px', width: '120px' }}
                                    type="submit"
                                >Save
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </ValidatorForm>
            </>
        );
    }
}

export default withStyles(styleSheet)(Cart)