
import React from "react";
import styles from './LandingForm.module.css';

const ResetPassword = () => 
{
    return(
        <React.Fragment>
            <h1>Forgot your password?</h1>

            <p>Enter your new password below.</p>
            
            <form action="/action_page.php">
                <div className={styles.row}>
                    <label for="password">New Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" />                
                </div>
                
                <div className={styles.row}>
                    <label for="password">Confirm New Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" />                
                </div>
               <input type="submit" value="Reset" />
            </form>
        </React.Fragment>
    )
}

export default ResetPassword;