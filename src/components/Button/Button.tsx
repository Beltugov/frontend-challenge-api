import React from 'react';
import styles from "./Button.module.css"

const Button = ({title, asc, selected, onClick}) => {
    return (
        <button className={styles.repoListBtn} onClick={onClick}>
            <div>{title}</div>
            {selected &&
                <svg className={asc ? styles.rotate : ""} data-name="1-Arrow Up"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={28}>
                    <path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z"/>
                </svg>
            }
        </button>
    );
};

export default Button;