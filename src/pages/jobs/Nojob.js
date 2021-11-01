
import React from "react";
import styles from './Job.module.css';

const Nojob = () => 
{
    const onPostJob = () => 
    {
        history.push("/home/post-job");
    }
    return(
        <div className={styles.job}>            
            <p>Your posted jobs will show here!</p>
            <button onClick={onPostJob}>Post a Job</button>
        </div>
    )
}

export default Nojob;