
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authAction } from "../../store/auth-slice";
import { landingAction } from "../../store/landing-slice";
import styles from './LandingForm.module.css';

const ForgotPassword = () => 
{
    const dispatch = useDispatch();
    const [email, setEmail] = useState();

    const onChangeHandler = (e) => {
        setEmail(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        fetch(
            `https://jobs-api.squareboat.info/api/v1/auth/resetpassword?email=${email}`
        )
        .then(res => res.json())
        .then(response => {
            console.log(response);
            if(response.success)
            {
                window.sessionStorage.setItem("passtoken", response.data.token);
                dispatch(landingAction.resetPassword());
            }
           
        })
        .catch(e => console.log(e))
    
    }

    return(
        <React.Fragment>
            <h1>Forgot your password?</h1>

            <p>Enter the email associated with your account and we’ll send you instructions to reset your password.</p>
            
            <form  onSubmit={onSubmitHandler}>
                <div className={styles.row}>
                    <label for="email">Email address:</label>
                    <input type="email" id="email" name="email" value={email} onChange={onChangeHandler} placeholder="Enter your email" />                
                </div>
                
               <input type="submit" value="Submit" />
            </form>
        </React.Fragment>
    )
}

export default ForgotPassword;