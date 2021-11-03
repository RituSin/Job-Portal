
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

    const onChangeHandler = (e) =>
    {
        const value = e.target.value;
        setFormData((prevState) => {
            return {...prevState, [e.target.name] : value.trim()}
        }); 
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
       
        //console.log("final",formData)
        
        fetch(
            'https://jobs-api.squareboat.info/api/v1/auth/login',
            {
                method: "POST", 
                body: JSON.stringify(formData),
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
        .then(res => res.json())
        .then(response => {
            console.log(response);
            if(response.success)
            {
                window.sessionStorage.setItem("token", response.data.token);
                window.sessionStorage.setItem("name", response.data.name);
                dispatch(authAction.login());
            }
            else{
                setErr(true);
            }
        })
        .catch(e => console.log(e))
    
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
                    <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value={formData.email} 
                    placeholder="Enter your email"
                    onChange={onChangeHandler} />                
                </div>
                <div className={styles.row}>
                    <label for="password">Password:</label>
                    <span className={styles.blue} onClick={onForgotPasswordHandler}>Forgot your password?</span>
                    <input 
                    type="password" 
                    id="password" 
                    name="password"  
                    required
                    value={formData.password} 
                    placeholder="Enter your password"
                    onChange={onChangeHandler}/>
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