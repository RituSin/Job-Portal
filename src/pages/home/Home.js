
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Jobs from "../jobs/Jobs";
import PostJob from "../postJob/PostJob";
import ViewApplicants from "../viewApplicants/ViewApplicants";
import Breadcrumb from "./Breadcrumb";
import styles from './Home.module.css';

const Home = () => 
{
    const jobs = useSelector(state => state.home.home);
    const postjob = useSelector(state => state.home.postjob);
    const viewApplicant = useSelector(state => state.home.viewApplicant);


    return(
        <div className={styles["Home-container"]}>
            <Breadcrumb/>

            {jobs && <Jobs/>}
            {postjob && <PostJob />}
            {viewApplicant && <ViewApplicants />}
            
        </div>
    )
}

export default Home;