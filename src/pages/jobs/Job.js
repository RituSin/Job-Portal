
import React from "react";
import { useDispatch } from "react-redux";
import { homeAction } from "../../store/home-slice";
import styles from './Job.module.css';

const Job = () => 
{
    const dispatch = useDispatch();

    return(
        <div className={styles.job} onClick={() => dispatch(homeAction.viewApplicant())}>            
            <h3>UI UX Designer</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…</p>
        
            <div>
                <p>Bengaluru</p>
                <input type="button" value="View Applications" />
            </div>
        </div>
    )
}

export default Job;