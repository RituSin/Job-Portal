
import React from "react";
import styles from './Pagination.module.css';

const Pagination = () => 
{
    return(
        <div className={styles.pagination}>            
            <span>&#9666;</span>
            <span>1 </span>
            <span>&#9656;</span>
        </div>
    )
}

export default Pagination;