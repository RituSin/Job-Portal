
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { homeAction } from "../../store/home-slice";
import Pagination from "../commonUI/Pagination";
import Applicants from "./Applicants";
import NoApplicant from "./NoApplicant";
import styles from './ViewApplicants.module.css';

const ViewApplicants = () => 
{
    const dispatch = useDispatch();
    const [candidates, setCandidates] = useState({
        data : [{
        email:"",
        name:"",
        skills: "",
        id:-1
        }],
        noOfCandidate: 0,
        jobsPerPage: 3,
        currentPage: 1,
        startIndex: 0,
        lastIndex: -1,

    });

    useEffect(() => {
        fetchData();
    }, [])
    
    const fetchData = () => {
        fetch(`https://jobs-api.squareboat.info/api/v1/recruiters/jobs/${window.sessionStorage.getItem('jobId')}/candidates`, {
                headers:{
                    Authorization: `${window.sessionStorage.getItem("token")}`
                }
            })
            .then(res => res.json())
            .then(response => {
                console.log("candidate sresponse",response);
                
                
                if(response.success)
                {

                    // let lastIndex;
    
                    const data =  response.data;
                    const noOfCandidate = data.length;
    
                    
                    // lastIndex = TotalJobs.length > 3 ? 2 : TotalJobs.length - 1;
                    // const isRightDisable =  TotalJobs.length > 3 ? false : true;
                    // console.log(lastIndex)
                    
                    // let jobs = [];
                    // if(TotalJobs.length > 3){
                    //     jobs = TotalJobs.slice(0,3);
                    // }          
    
                    setCandidates(prevState => {
                        return {...prevState, 
                            data, 
                            noOfCandidate
                        }
                    });
                }
            })
            .catch(e => console.log(e))
    }

    const onPageChangeHandler = () => {

    }
    return(
        <div className={styles["viewCandidates-container"]}>
            <div className={styles.viewCandidates}>
                <div className={styles.header}>
                    <h1>Applicants for this job</h1>
                    <span onClick={() => dispatch(homeAction.home())} style={{cursor: 'pointer'}}><b>x</b></span>
                </div>
                
                <p>Total {candidates.noOfCandidate} applications</p>
                
                {candidates.noOfCandidate > 0 ?
                 
                 <div className={styles.scroll}>
                    <div className={styles.Candidates}>
                        <Applicants candidates={candidates.data}/>
                    </div>
                </div>
                :
                <NoApplicant/>
                }                
               
                

                {candidates.noOfCandidate > 4 && 
                <Pagination
                pageNum={candidates.currentPage}
                onPageLeftHandler={onPageChangeHandler}
                onPageRightHandler={onPageChangeHandler}
                isLeftDisable={candidates.isLeftDisable}
                isRightDisable={candidates.isRightDisable}/>}
            </div>
        </div>
        
    )
}

export default ViewApplicants;