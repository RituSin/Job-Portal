
import React, { useState } from "react";
import styles from './LandingForm.module.css';
import {authAction} from '../../store/auth-slice';
import {landingAction} from '../../store/landing-slice';
import { useDispatch } from "react-redux";

const Login = () => 
{
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email:"",
        password: ""
    });

    const [err, setErr] = useState(false);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(authAction.login());
    }

    const onOpenSignUpHandler = () => 
    {
        dispatch(landingAction.signup());
    }

    const onForgotPasswordHandler = () => 
    {
        dispatch(landingAction.forgotPassword());
    }


    return(
        <React.Fragment>
            <h1>Login</h1>

            <form onSubmit={onSubmitHandler}>
                <div className={styles.row}>
                    <label for="email">Email address:</label>
                    <input type="email" id="email" name="email" value={formData.email} placeholder="Enter your email" />                
                </div>
                <div className={styles.row}>
                    <label for="password">Password:</label>
                    <span className={styles.blue} onClick={onForgotPasswordHandler}>Forgot your password?</span>
                    <input type="password" id="password" name="password"  value={formData.email} placeholder="Enter your password"/>
                </div>
                {err && <span className={styles.error}>Incorrect email address or password.</span>}
               <input type="submit" value="Submit" />
            </form>

            <div className={styles.createAccount} onClick={onOpenSignUpHandler}>
                <p>New to MyJobs? <span className={styles.blue}>Create an account</span> </p>
            </div>
        </React.Fragment>
    )
}

export default Login;