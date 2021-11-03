
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authAction } from "../../store/auth-slice";
import { landingAction } from "../../store/landing-slice";
import styles from './LandingForm.module.css';

const ResetPassword = () => 
{
    const dispatch = useDispatch();
    const [data, setdata] = useState({
        password:"",
        confirmPassword:"",
        token:window.sessionStorage.getItem("passtoken")
    });

    const onChangeHandler = (e) => {
        const val = e.target.value;
        setdata(prevState => {
            return {...prevState, [e.target.name]: val.trim()}
        });
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if(data.password != data.confirmPassword){
            alert("Password mismatch");
            return;
        }
        
        fetch(
            `https://jobs-api.squareboat.info/api/v1/auth/resetpassword`,
            {
                method:"POST",
                body: JSON.stringify(data),
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
                //window.sessionStorage.setItem("passtoken", response.data.token);
                dispatch(landingAction.login());
            }
           
        })
        .catch(e => console.log(e))
    
    }

    return(
        <React.Fragment>
            <h1>Forgot your password?</h1>

            <p>Enter your new password below.</p>
            
            <form onSubmit={onSubmitHandler}>
                <div className={styles.row}>
                    <label for="password">New Password:</label>
                    <input type="password" id="password" name="password" value={data.password} onChange={onChangeHandler} placeholder="Enter your password" />                
                </div>
                
                <div className={styles.row}>
                    <label for="confirmPassword">Confirm New Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" value={data.confirmPassword} onChange={onChangeHandler} placeholder="Enter your password" />                
                </div>
               <input type="submit" value="Reset" />
            </form>
        </React.Fragment>
    )
}

export default ResetPassword;