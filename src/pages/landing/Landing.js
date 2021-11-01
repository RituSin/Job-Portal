

import React from "react";
import { useSelector } from "react-redux";
import ForgotPassword from "./ForgotPassword";
import styles from  './Landing.module.css';
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import Signup from "./Signup";
const Landing = () => 
{

    const isLogin = useSelector(state => state.landing.login)
    const isSignup = useSelector(state => state.landing.signup);
    const isforgotPass = useSelector(state => state.landing.forgotPassword);
    const isResetPass = useSelector(state => state.landing.resetPassword);

    return(
        <div className={styles["Landing-container"]}>
            {isLogin && <Login />}
            {isSignup && <Signup/>}
            {isforgotPass && <ForgotPassword />}
            {isResetPass && <ResetPassword/>}
        </div>
    )
}

export default Landing;

