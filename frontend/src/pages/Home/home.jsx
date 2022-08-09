import {withStyles} from "@mui/styles";
import {Component} from "react";
import {styleSheet} from "./styles";
import {Grid,} from "@mui/material";
import Cards from "../../common/cards/cards";


class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {classes} = this.props;
        return (
            <>
                <Grid className={classes.container}>
                    <Grid className={classes.bodyContainer}>
                        <Grid className={classes.cardBodyContainer}>
                            <Grid className={classes.card}>
                                <Grid style={{width: '25vw', height: '35vh', backgroundColor: '#A5BECC"',}}><Cards
                                    label="Products" count="60"/></Grid>
                            </Grid>
                            <Grid className={classes.card}>
                                <Grid style={{width: '25vw', height: '35vh', backgroundColor: '#A5BECC"',}}><Cards
                                    label="Carts" count="12"/></Grid>
                            </Grid>
                        </Grid>
                        <Grid className={classes.cardBodyContainer}>
                            <Grid className={classes.card}>
                                <Grid style={{width: '25vw', height: '35vh', backgroundColor: '#A5BECC"',}}><Cards
                                    label="Users" count="43"/></Grid>
                            </Grid>
                            <Grid className={classes.card}></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default withStyles(styleSheet)(Home)