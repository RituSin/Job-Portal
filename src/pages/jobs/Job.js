
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { homeAction } from "../../store/home-slice";
import styles from './Job.module.css';

const Job = (props) => 
{
    const [title, description, location] = props.jobDetail;
    //console.log("detail = ", title, description, location);
    const dispatch = useDispatch();

    const onClickHandler = () => {
        window.sessionStorage.setItem("jobId", props.id)
        dispatch(homeAction.viewApplicant())
    }
    
    return(
        <div className={styles.job} onClick={() => onClickHandler() }>            
            <h3>{title}</h3>

            <p>{description}</p>
        
            <div>
                <p>{location}</p>
                <input type="button" value="View Applications" />
            </div>
        </div>
    )
}

export default Job;