import React, {createRef, useEffect, useRef} from 'react';
import repositories from "../../store/repositories";
import RepoBlock from "../RepoBlock/RepoBlock";
import {observer} from "mobx-react";
import style from "./RepoList.module.css"

const RepoList = observer(() => {
    const lastItem = createRef()
    const observerLoader = useRef<IntersectionObserver | null>(null);

    const removeElement = (elem) => {
        repositories.list = repositories.list.filter((value)=> value.id !== elem.id)
    }

    useEffect(() => {
        observerLoader.current?.disconnect();
        observerLoader.current = new IntersectionObserver((entries) => entries[0].isIntersecting && repositories.fetchData(repositories.sort, repositories.order, repositories.page +1))
        if (lastItem.current) {
            observerLoader.current?.observe(lastItem.current as Element);
        }
    }, [lastItem]);

    return (
        <div className={style.list}>
            {repositories.list.map((elem, index, array) => (
                <div key={index} ref={(index === array.length - 1) ? lastItem : null}>
                    <RepoBlock elem={elem} onClick={() => removeElement(elem)}/>
                </div>
            ))}
            {repositories.isLoading && <div>Loading...</div> }
        </div>
    );
});

export default RepoList;