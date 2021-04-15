import { useState, useEffect } from "react";
import styles from "./Styles";
import { tasks, status } from "../../../DummyData";
import { useLocation } from "react-router-dom";
import ActivitySearchResultCard from "../ActivitySearchResultCard/ActivitySearchResultCard";

// This is the search view. "ViewActivity" might not be the best name.
export default function ViewActivity() {
    const [searchResults, setSearchResults] = useState(/** TODO Change */tasks);
    const [statusURLParam, setStatusURLParam] = useState(new URLSearchParams(useLocation().search).get("status"));
    const [isTaskState, setIsTaskState] = useState(false)

    const activity_name = isTaskState ? "task" : "project";
    const activity_plural_name = isTaskState ? "tasks" : "projects";

    const searchActivityByTitle = (e) => {
        const query = e.target.value.toLowerCase();
        const result = /** TODO Change */ tasks.filter(e => e.title.toLowerCase().includes(query));
        setSearchResults(result);
    };

    const searchActivityByPM = (e) => {
        const query = e.target.value.toLowerCase();
        const result = /** TODO Change */ tasks.filter(e => e.PM.toLowerCase().includes(query));
        setSearchResults(result);
    };

    const searchActivityByStatus = (e = null, statusURLParam = null) => {
        if (e === null && statusURLParam === null) {
            return;
        }
        let query;
        if (e === null) {
            query = statusURLParam.toLowerCase();
        } else if (statusURLParam === null) {
            query = e.target.value.toLowerCase();
        }
        const result = /** TODO Change */ tasks.filter(e => e.status.toLowerCase() === (query));
        setSearchResults(result);
    };

    useEffect(() => {
        if (statusURLParam !== null) {
            searchActivityByStatus(null, statusURLParam);
        }
    }, [statusURLParam])

    return (
        <styles.Wrapper>

            <styles.SearchDiv>
                <styles.ResultCountHolder>
                    <styles.ResultCount>
                        {searchResults.length} {" "}
                        {searchResults.length > 1 ? activity_plural_name : activity_name}
                    </styles.ResultCount>
                </styles.ResultCountHolder>

                <styles.SearchFieldHolder>
                    <styles.SearchQueryInput
                        type="search"
                        onChange={searchActivityByTitle}
                        placeholder={`Search ${activity_name} by title`} />
                    <styles.SearchQueryInput
                        type="search"
                        onChange={searchActivityByPM}
                        placeholder="Search by PM name" />
                    <styles.SearchFilterBy onChange={searchActivityByStatus}>
                        <option value="" selected disabled hidden>Search by Status</option>
                        {status.map(e => {
                            return (
                                <option key={e} value={e}>{e}</option>
                            )
                        })}
                    </styles.SearchFilterBy>
                    <styles.SearchQueryInput
                        type="button"
                        onClick={() => { setIsTaskState(!isTaskState) }}
                        value={`Search for ${activity_plural_name}`} />
                </styles.SearchFieldHolder>
            </styles.SearchDiv>

            <styles.ResultDiv>
                {searchResults.map(acitivity => {
                    {/* TODO Change */ }
                    return (
                        <ActivitySearchResultCard activity={acitivity} />
                    )
                })}
            </styles.ResultDiv>
        </styles.Wrapper>
    )
}
