
import React from "react";
import styles from './Pagination.module.css';

const Pagination = (props) => 
{
    const onPageRightHandler = () => {
        if(props.isRightDisable){
            return;
        }        
        props.onPageRightHandler(false);
    }

    const onPageLeftHandler = () => {
        if(props.isLeftDisable){
            return;
        }        
        props.onPageLeftHandler(true);
    }
    return(
        <div className={styles.pagination}>            
            <span  onClick={onPageLeftHandler}>&#9666;</span>
            <span>{props.pageNum} </span>
            <span onClick={onPageRightHandler}>&#9656;</span>
        </div>
    )
}

export default Pagination;