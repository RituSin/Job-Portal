
import React from "react";
import Pagination from "../commonUI/Pagination";
import styles from './Applicant.module.css';

const Applicant = () => 
{
    return(
        <div className={styles.Applicant}>
            
            <div className={styles.row}>
                <span className={styles.circle}>E</span>
                
                <div>
                    <p className={styles.title}>Eliza Lucas</p>
                    <span className={styles.desc}>abc123@gmail.com</span>
                </div>
            </div>

            <div className={styles.row}>
                <p className={styles.title}>Skills</p>
                <span className={styles.desc}>Coding, designing, graphics, website, app ui</span>
            </div>
        </div>
        
    )
}

export default Applicant;