
import React, { useEffect, useState } from "react";
import Pagination from "../commonUI/Pagination";
import styles from './Applicant.module.css';

const Applicant = (props) => 
{
    const [email, name,skills] = props.data;
    return(
        <div className={styles.Applicant}>
            
            <div className={styles.row}>
                <span className={styles.circle}>{name[0]}</span>
                
                <div>
                    <p className={styles.title}>{name}</p>
                    <span className={styles.desc}>{email}</span>
                </div>
            </div>

            <div className={styles.row}>
                <p className={styles.title}>Skills</p>
                <span className={styles.desc}>{skills}</span>
            </div>
        </div>
        
    )
}

export default Applicant;