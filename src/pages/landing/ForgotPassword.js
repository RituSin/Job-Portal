
import React from "react";
import styles from './LandingForm.module.css';

const ForgotPassword = () => 
{
    return(
        <React.Fragment>
            <h1>Forgot your password?</h1>

            <p>Enter the email associated with your account and we’ll send you instructions to reset your password.</p>
            
            <form action="/action_page.php">
                <div className={styles.row}>
                    <label for="email">Email address:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" />                
                </div>
                
               <input type="submit" value="Submit" />
            </form>
        </React.Fragment>
    )
}

export default ForgotPassword;