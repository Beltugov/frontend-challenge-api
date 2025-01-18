import {useEffect} from 'react'
import './App.module.css'
import RepoList from "./components/RepoList/RepoList";
import styles from "./App.module.css"
import Button from "./components/Button/Button";
import repositories from "./store/repositories";
import {observer} from "mobx-react";

const App = observer(() => {
    useEffect(() => {
        repositories.fetchData()
    }, [])

    return (
        <div className={styles.main}>
            <h1>Javascript repositories list</h1>
            <div className={styles.listAction}>
                <Button title={"Updated"} asc={repositories.order === "asc"} selected={repositories.sort === "updated"}
                        onClick={() => {
                            repositories.list = []
                            repositories.fetchData("updated", repositories.order === "asc" ? "desc" : "asc")
                        }}/>
                <Button title={"Stars"} asc={repositories.order === "asc"} selected={repositories.sort === "stars"}
                        onClick={() => {
                            repositories.list = []
                            repositories.fetchData("stars", repositories.order === "asc" ? "desc" : "asc")
                        }}/>
            </div>
            <RepoList/>
        </div>
    )
})

export default App
