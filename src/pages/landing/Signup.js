
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from './LandingForm.module.css';
import {landingAction} from '../../store/landing-slice';
import { registerData } from "../../store/auth-action";

const Signup = () => 
{
    const dispatch = useDispatch();
    const [isCandidate, setCandidate] = useState(false); 

    const [formData, setFormData] = useState({
        email:"",
        userRole: 0,
        password: "",
        confirmPassword: "",
        name: "",
        skills: ""
    });
 

    const onChangeHandler = (e) => {
        let value = e.target.value;

        if(e.target.name == "userRole"){
            value = isCandidate ? 1 : 0;
        }
        
        setFormData((prevState) => {
            return {...prevState, [e.target.name] : value.trim()}
        });
    }

    const onSubmitHandler = (e) => 
    {
        e.preventDefault();

        //console.log("final",formData)
        if(formData.password != formData.confirmPassword){
            alert("Password does not match");
            return;
        }

        const val = isCandidate ? 1 : 0;
        setFormData(prevState => {
            return {...prevState, userRole: val }
        })
        
        fetch(
            'https://jobs-api.squareboat.info/api/v1/auth/register',
            {
                method: "POST", 
                body: JSON.stringify(formData),
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
        .then(res => res.json())
        .then(response => {
            console.log(response);
            if(response.success)
            {
                window.sessionStorage.setItem("token", response.data.token);
                setFormData({
                    email:"",
                    userRole: 0,
                    password: "",
                    confirmPassword: "",
                    name: "",
                    skills: ""
                });
            }
        })
        .catch(e => console.log(e))
    }

     
    return(
        <React.Fragment>
            <h1>Signup</h1>
            
            <form onSubmit={onSubmitHandler}>
                <div className={styles.row}>
                    <label for="im">I'm a*</label>

                    <div className={styles.row}>
                        <input 
                        type="button" 
                        value="Recruiter"
                        name="userRole"
                        style={ !isCandidate ? {backgroundColor: "#43AFFF"}: null}
                        onClick={() => setCandidate(false)}/> 

                        <input 
                        type="button" 
                        value="Candidate" 
                        name="userRole"
                        style={ isCandidate ? {backgroundColor: "#43AFFF"}: null}
                        onClick={() => setCandidate(true)}/>
                    </div>
                                    
                </div>

                <div className={styles.row}>
                    <label for="name">Full Name*</label>
                    <input type="text" id="name" name="name" value={formData.name} placeholder="Enter your full name" onChange={onChangeHandler} required/>                
                </div>

                <div className={styles.row}>
                    <label for="email">Email address*</label>
                    <input type="email" id="email" name="email" value={formData.email} placeholder="Enter your email" onChange={onChangeHandler} required/>                
                </div>

                <div className={styles.row}>
                    <div className={styles.password}>
                        <label for="password">Password*</label>
                        <input type="password" id="password" name="password" value={formData.password} required onChange={onChangeHandler}  placeholder="Enter your password"/>
                    </div>

                    <div className={styles.password}>
                        <label for="password">Password*</label>
                        <input type="password" id="password" name="confirmPassword" value={formData.confirmPassword} required onChange={onChangeHandler} placeholder="Enter your password"/>
                    </div>
                </div>
               
                <div className={styles.row}>
                    <label for="skill">Skills:</label>
                    <input type="text" id="skill" name="skills" onChange={onChangeHandler} value={formData.skills} placeholder="Enter your comma seperated skills" />                
                </div>
               <input type="submit" value="Signup" />
            </form>

            <div className={styles.createAccount} onClick={() => dispatch(landingAction.login())}>
                <p>Have an account? <span className={styles.blue}>Login</span> </p>
            </div>
        </React.Fragment>
    )
}

export default Signup;