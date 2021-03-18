import styles from "./Styles";
import {tasks} from "../../../DummyData";
import TaskSearchResultCard from "../TaskSearchResultCard/TaskSearchResultCard";

export default function ViewTasks() {
    const projectManagers = tasks.map(e => e.PM);
    return (
        <styles.Wrapper>

            <styles.SearchDiv>
                <styles.ResultCountHolder>
                    <styles.ResultCount>35 Tasks</styles.ResultCount>  
                </styles.ResultCountHolder>

                <styles.SearchFieldHolder>
                    <styles.SearchQueryInput
                        type="search" placeholder="Search by task title" />
                    <styles.SearchQueryInput
                        type="search" placeholder="Search by PM name" />
                    <styles.SearchFilterBy>
                    {projectManagers.map(e => {
                        return (
                            <option key={e} value={e}>{e}</option>
                        )
                    })}
                    </styles.SearchFilterBy>
                </styles.SearchFieldHolder>
            </styles.SearchDiv>

            <styles.ResultDiv>
                {/* for taskResult, return TaskSearchResultCard */}
                    <TaskSearchResultCard task={tasks[0]}/>
                    <TaskSearchResultCard task={tasks[1]}/>
                    <TaskSearchResultCard task={tasks[2]}/>
                    <TaskSearchResultCard task={tasks[3]}/>
                    <TaskSearchResultCard task={tasks[1]}/>
                    <TaskSearchResultCard task={tasks[2]}/>
                    <TaskSearchResultCard task={tasks[3]}/>
                    <TaskSearchResultCard task={tasks[1]}/>
                    <TaskSearchResultCard task={tasks[0]}/>
                    <TaskSearchResultCard task={tasks[0]}/>
                    <TaskSearchResultCard task={tasks[0]}/>
                    <TaskSearchResultCard task={tasks[0]}/>
                    <TaskSearchResultCard task={tasks[0]}/>
                    <TaskSearchResultCard task={tasks[0]}/>
                    <TaskSearchResultCard task={tasks[0]}/>
                    <TaskSearchResultCard task={tasks[0]}/>
            </styles.ResultDiv>
        </styles.Wrapper>
    )
}
