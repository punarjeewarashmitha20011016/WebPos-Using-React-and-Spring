import React from "react";
import LoginPage from "../pages/login/login";
import {Route, Routes} from "react-router-dom";
import UserRegistrationPage from "../pages/userRegistration/userRegistration";
import '../index.css'

function App() {
    return (
        <div className="container">
            <Routes>
                <Route exact path="/" element={<LoginPage/>}/>
                <Route exact path="/userRegistration" element={<UserRegistrationPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
