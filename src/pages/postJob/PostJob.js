
import React from "react";
import styles from './PostJob.module.css';

const PostJob = () => 
{
    return(
        <div className={styles["Postjob-container"]}>
            <div className={styles.Postjob}>
                <h1>Post a Job</h1>

                <form action="/action_page.php">
                    <div className={styles.row}>
                        <label for="title">Job title*</label>
                        <input type="text" id="title" name="title" placeholder="Enter job title" />                
                    </div>
                    
                    <div className={styles.row}>
                        <label for="description">Description*</label>
                        <textarea id="description" name="description" placeholder="Enter job description"></textarea>
                    </div>

                    <div className={styles.row}>
                        <label for="location">Location*</label>
                        <input type="text" id="location" name="location" placeholder="Enter location" />                
                    </div>

                    <input type="submit" value="Post" />
                </form>
            </div>
        </div>
        
    )
}

export default PostJob;