
import React from "react";
import Pagination from "../commonUI/Pagination";
import Jobs from "../jobs/Jobs";
import Applicant from "./Applicant";
import styles from './Applicants.module.css';

const Applicants = () => 
{
    return(
        <div className={styles.Applicants}>
            <Applicant/>
            <Applicant/>
            <Applicant/>
            <Applicant/>
            <Applicant/>
            <Applicant/>
            <Applicant/>
        </div>
        
    )
}

export default Applicants;