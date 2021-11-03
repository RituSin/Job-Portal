
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { homeAction } from "../../store/home-slice";
import styles from './PostJob.module.css';

const PostJob = () => 
{
    const dispatch = useDispatch();
    const [jobDetails, setJobDetails] = useState({
        title: "",
        description: "",
        location: ""
    })

    const onChangeHandler = (e) =>
    {
        const value = e.target.value;
        setJobDetails((prevState) => {
            return {...prevState, [e.target.name] : value.trim()}
        }); 
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const token = window.sessionStorage.getItem('token');
        //console.log(token)
        fetch(
            'https://jobs-api.squareboat.info/api/v1/jobs/',
            {
                method: "POST", 
                body: JSON.stringify(jobDetails),
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization" : `${token}`
                }
            }
        )
        .then(res => res.json())
        .then(response => {
            //console.log(response);
            if(response.success)
            {
                setJobDetails({
                    title: "",
                    description: "",
                    location: ""
                })
                dispatch(homeAction.home());
            }
        })
        .catch(e => console.log(e))
    
    }

    return(
        <div className={styles["Postjob-container"]}>
            <div className={styles.Postjob}>
                <h1>Post a Job</h1>

                <form onSubmit={onSubmitHandler}>
                    <div className={styles.row}>
                        <label for="title">Job title*</label>
                        <input 
                        type="text" 
                        id="title" 
                        name="title" 
                        placeholder="Enter job title"
                        value={jobDetails.title}
                        onChange={onChangeHandler} />                
                    </div>
                    
                    <div className={styles.row}>
                        <label for="description">Description*</label>
                        <textarea 
                        id="description" 
                        name="description" 
                        placeholder="Enter job description"
                        value={jobDetails.description}
                        onChange={onChangeHandler}></textarea>
                    </div>

                    <div className={styles.row}>
                        <label for="location">Location*</label>
                        <input 
                        type="text" 
                        id="location" 
                        name="location" 
                        placeholder="Enter location"
                        value={jobDetails.location}
                        onChange={onChangeHandler} />                
                    </div>

                    <input type="submit" value="Post" />
                </form>
            </div>
        </div>
        
    )
}

export default PostJob;