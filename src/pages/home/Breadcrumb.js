
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { homeAction } from "../../store/home-slice";
import styles from './Breadcrumb.module.css';

const Breadcrumb = () => 
{
    const dispatch = useDispatch();

    const postjob = useSelector(state => state.home.postjob);
    const viewApplicant = useSelector(state => state.home.viewApplicant);

    return(
        <ul className={styles.breadcrumb}>
            <li><a href="#" onClick={() => dispatch(homeAction.home())}>Home</a></li>
            { postjob && <li><a href="" onClick={() => dispatch(homeAction.postjob())}>Post a job</a></li>}
            {viewApplicant && <li><a href="" onClick={() => dispatch(homeAction.viewApplicant())}>View Applicants</a></li>}
        </ul>
    )
}

export default Breadcrumb;