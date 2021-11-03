
import React from "react";
import Pagination from "../commonUI/Pagination";
import Jobs from "../jobs/Jobs";
import Applicant from "./Applicant";
import styles from './Applicants.module.css';

const Applicants = (props) => 
{
    
    return(
        <div className={styles.Applicants} >
            {
                props.candidates.map(item => (
                    <Applicant key={item.id} data={[item.email, item.name, item.skills]} id={item.id}/>
                ))
            }
        </div>
        
    )
}

export default Applicants;