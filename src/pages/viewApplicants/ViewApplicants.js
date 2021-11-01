
import React from "react";
import Pagination from "../commonUI/Pagination";
import Applicants from "./Applicants";
import styles from './ViewApplicants.module.css';

const ViewApplicants = () => 
{
    return(
        <div className={styles["viewCandidates-container"]}>
            <div className={styles.viewCandidates}>
                <div className={styles.header}>
                    <h1>Applicants for this job</h1>
                    <span><b>x</b></span>
                </div>
                
                <p>Total 0 applications</p>
                
                <div className={styles.scroll}>
                    <div className={styles.Candidates}>
                        <Applicants/>
                    </div>
                </div>
                

                <Pagination/>
            </div>
        </div>
        
    )
}

export default ViewApplicants;