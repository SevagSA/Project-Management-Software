import {useState} from "react";
import styles from "./Styles";
import {tasks, status} from "../../../DummyData";
import TaskSearchResultCard from "../TaskSearchResultCard/TaskSearchResultCard";

export default function ViewTasks() {
    const [searchResults, setSearchResults] = useState(tasks);

    const searchTaskByTitle = (e) => {
        const query = e.target.value.toLowerCase();
        const result = tasks.filter(e => e.title.toLowerCase().includes(query));
        setSearchResults(result);
    };


    const searchTaskByPM = (e) => {
        const query = e.target.value.toLowerCase();
        const result = tasks.filter(e => e.PM.toLowerCase().includes(query));
        setSearchResults(result);
    };

    const searchTaskByStatus = (e) => {
        const query = e.target.value;
        const result = tasks.filter(e => e.status === (query));
        setSearchResults(result);
    };

    return (
        <styles.Wrapper>

            <styles.SearchDiv>
                <styles.ResultCountHolder>
                    <styles.ResultCount>
                    {searchResults.length} {searchResults.length > 1 ?"Tasks" : "Task"}
                    </styles.ResultCount>
                </styles.ResultCountHolder>

                <styles.SearchFieldHolder>
                    <styles.SearchQueryInput
                        type="search"
                        onChange={searchTaskByTitle}
                        placeholder="Search by task title" />
                    <styles.SearchQueryInput
                        type="search"
                        onChange={searchTaskByPM}
                        placeholder="Search by PM name" />
                    <styles.SearchFilterBy onChange={searchTaskByStatus}>
                    <option value="" selected disabled hidden>Search by Status</option>
                    {status.map(e => {
                        return (
                            <option key={e} value={e}>{e}</option>
                        )
                    })}
                    </styles.SearchFilterBy>
                </styles.SearchFieldHolder>
            </styles.SearchDiv>

            <styles.ResultDiv>
                {searchResults ? 
                    searchResults.map(task => {
                        return (
                            <TaskSearchResultCard task={task}/>
                        )
                    })
                : tasks.map(task => {
                    return <TaskSearchResultCard task={task}/>
                })}
            </styles.ResultDiv>
        </styles.Wrapper>
    )
}
