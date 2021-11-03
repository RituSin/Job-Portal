
import React, { useEffect, useState } from "react";
import Pagination from "../commonUI/Pagination";
import Job from "./Job";
import styles from './Jobs.module.css';
import Nojob from "./Nojob";

const Jobs = () => 
{
    const [jobData, setJobData] = useState({
        jobs:[],
        TotalJobs:[],
        noOfJobs:0,
        jobsPerPage: 3,
        currentPage: 0,
        startIndex: 0,
        lastIndex: -1,
        isLeftDisable:true,
        isRightDisable:false
    });

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        // 'https://jobs-api.squareboat.info/api/v1/jobs?'
        //'https://jobs-api.squareboat.info/api/v1/recruiters/jobs'
        fetch('https://jobs-api.squareboat.info/api/v1/jobs?', {
            headers:{
                Authorization: `${window.sessionStorage.getItem("token")}`
            }
        })
        .then(res => res.json())
        .then(response => {
            console.log("response",response);
            
            
            if(response.success)
            {
                let lastIndex;

                const TotalJobs =  response.data;
                const noOfJobs = TotalJobs.length;

                
                lastIndex = TotalJobs.length > 3 ? 2 : TotalJobs.length - 1;
                const isRightDisable =  TotalJobs.length > 3 ? false : true;
                console.log(lastIndex)
                
                let jobs = [];
                if(TotalJobs.length > 3){
                    jobs = TotalJobs.slice(0,3);
                }          

                setJobData(prevState => {
                    return {...prevState, 
                        jobs, 
                        TotalJobs,
                        noOfJobs,
                        lastIndex, 
                        currentPage: 1, 
                        isRightDisable}
                });
            }
        })
        .catch(e => console.log(e))
    
    }

   
    const onPageChangeHandler = (isLeft) => {
        let currentPage = jobData.currentPage;
        let isRightDisable = jobData.isRightDisable;
        let isLeftDisable = jobData.isLeftDisable;
        let startIndex = jobData.startIndex;
        let lastIndex = jobData.lastIndex;
        let jobs = [];        
        const totalJobs = jobData.TotalJobs;

        startIndex = isLeft ? startIndex - jobData.jobsPerPage : startIndex + jobData.jobsPerPage;
        lastIndex = isLeft ? lastIndex - jobData.jobsPerPage : lastIndex + jobData.jobsPerPage;
        
        isRightDisable = !isLeft && (lastIndex >= jobData.noOfJobs - 1) ? true : false;
        isLeftDisable = isLeft && (startIndex <= 0) ? true : false;

        currentPage = isLeft ?  currentPage - 1 : currentPage + 1;
        
        jobs = !isLeft && (lastIndex >= jobData.noOfJobs - 1) ? jobs = totalJobs.slice(startIndex) : totalJobs.slice(startIndex, lastIndex+1);
       
         console.log(jobData.TotalJobs)
        //console.log("->",jobs,currentPage+1, startIndex, lastIndex, isRightDisable)

        setJobData(prevState => {
            return {...prevState, 
                jobs: jobs,
                currentPage: currentPage, 
                startIndex, 
                lastIndex: lastIndex,
                isRightDisable,
                isLeftDisable
            }
        })

    }
    return(
        <div className={styles["Jobs-container"]}>            
            <h1>Jobs posted by you</h1>

            {
                jobData.lastIndex == -1 ?
                <Nojob/>
                :
                <div className={styles.jobs}>
                {
                    jobData.jobs.map((job, index) => (
                        <Job key={job.id} 
                        id={job.id}
                        jobDetail={[job.title, job.description, job.location]}
                        />
                    ))
                }
                </div>  
            }
            
            { jobData.lastIndex != -1 && 
            <Pagination 
            pageNum={jobData.currentPage}
            onPageLeftHandler={onPageChangeHandler}
            onPageRightHandler={onPageChangeHandler}
            isLeftDisable={jobData.isLeftDisable}
            isRightDisable={jobData.isRightDisable}/>}

            
            
        </div>
    )
}

export default Jobs;