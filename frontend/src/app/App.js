import React from "react";
import LoginPage from "../pages/login/login";
import {Route, Routes} from "react-router-dom";
import UserRegistrationPage from "../pages/userRegistration/userRegistration";
import '../index.css'
import NavBar from "../component/navBar/navBar";
import DashboardPage from "../pages/dashboard/dashBoard";
import ManageProductsPage from "../pages/manageProducts/manageProducts";
import PlaceOrderPage from "../pages/placeOrder/placeOrder";

function App() {
    return (
        <div className="container">
            <div id='navBarContainer' className="navBarContainer">
                <NavBar/>
            </div>
            <div id="contentContainer" className="content">
                <Routes>
                    <Route exact path="/" element={<LoginPage/>}/>
                    <Route exact path="/userRegistration" element={<UserRegistrationPage/>}/>
                    <Route exact path="/dashboard" element={<DashboardPage/>}/>
                    <Route exact path="/manageProducts" element={<ManageProductsPage/>}/>
                    <Route exact path="/placeOrder" element={<PlaceOrderPage/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
