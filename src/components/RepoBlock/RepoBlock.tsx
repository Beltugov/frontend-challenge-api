import React from 'react';
import styles from "./RepoBlock.module.css"

const RepoBlock = ({elem, onClick}) => {
    return (
        <div className={styles.block}>
            <div className={styles.repoInfo}>
                <div className={styles.repoOwner}>
                    <img src={elem.owner.avatar_url} alt="avatar" width={80}/>
                    <div>User: {elem.owner.login}</div>
                </div>
                <div>Title: {elem.name}</div>
                <div>Description: {elem.description}</div>
                <div>URL: <a href={elem.html_url} target={"_blank"}> {elem.html_url}</a></div>
                <div>Stars: {elem.stargazers_count}</div>
            </div>
            <button className={styles.repoAction} onClick={onClick}>Delete</button>
        </div>
    );
};

export default RepoBlock;