
import React from "react";
import Pagination from "../commonUI/Pagination";
import Job from "./Job";
import styles from './Jobs.module.css';

const Jobs = () => 
{
    return(
        <div className={styles["Jobs-container"]}>            
            <h1>Jobs posted by you</h1>

            <div className={styles.jobs}>
                <Job/>
                <Job/>
                <Job/>
                <Job/>
                <Job/>
                <Job/>
                <Job/>
            </div>

            <Pagination />
            
        </div>
    )
}

export default Jobs;