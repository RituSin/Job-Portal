

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../store/auth-slice";
import { homeAction } from "../../store/home-slice";
import { landingAction } from "../../store/landing-slice";
import styles from './Header.module.css';

const Header = () => 
{
  const name = window.sessionStorage.getItem("name");
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const isforgotPass = useSelector(state => state.landing.forgotPassword);

  const onTooltipButtonClick = () => {
    const tooltip = document.getElementById("tooltip");
    const btn =  document.getElementById("tooltipButton");
    if(btn.focus)
    {
      tooltip.style.opacity = 1;
    }
  }

  const onLogoutTooltipClick = () => {
    window.sessionStorage.removeItem("name");
    window.sessionStorage.removeItem("token");
    const tooltip = document.getElementById("tooltip");

    dispatch(authAction.logout());
    tooltip.style.opacity=0;
  }

  const onPostJob = () => 
  {
     dispatch(homeAction.postjob());
  }

  const onLoginHanlder = () => 
  {
    dispatch(landingAction.login());
  }

  return(
      <header>
          <h1><span style={{color:"white"}}>My</span>Jobs</h1>

          {isforgotPass && !isAuth && 
            <button type="button" onClick={onLoginHanlder}>
              Login/Signup
            </button>
          }

          {isAuth && window.sessionStorage.getItem('token')&& 
          
          <div className={styles.loginprofile}>
            <input type="button" value="Post a Job" onClick={onPostJob} />
            <span className={styles.circle}>{name[0].toUpperCase()}</span>
            <span className={styles.tooltipButton} id="tooltipButton" onClick={onTooltipButtonClick}> &#9660; </span>
            <p className={styles.tooltip} id="tooltip" onClick={onLogoutTooltipClick}>Logout</p>
          </div>
          }
        </header>
    )
}

export default Header;