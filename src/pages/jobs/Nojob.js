
import React from "react";
import { useDispatch } from "react-redux";
import { homeAction } from "../../store/home-slice";
import styles from './NoJob.module.css';

const Nojob = () => 
{
    const dispatch = useDispatch();
    return(
        <div className={styles.nojob}>            
            <p>Your posted jobs will show here!</p>
            <button onClick={() => dispatch(homeAction.postjob())}>Post a Job</button>
        </div>
    )
}

export default Nojob;