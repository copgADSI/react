import React from 'react'
import { FaSpinner } from 'react-icons/fa';
import styles from './SpinnerLoading.component.css'

export  function Spinner() {
    return (
        <div className={styles.divSpinner} >
           <FaSpinner size={60}  />
        </div>
    )
}


