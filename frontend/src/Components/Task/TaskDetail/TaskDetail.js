import { useParams } from "react-router-dom";
import styles from "./Styles";
import {tasks} from "../../../DummyData";
import IndividualTask from "../../Widgets/Task/IndividualTask/IndividualTask";
import ActivityWidget from "../../Widgets/Activity/ActivityWidget/ActivityWidget";
import TaskSidebar from "../../Widgets/Task/TaskSidebar/TaskSidebar";

export default function TaskDetail() {
    const { id } = useParams();
    const task = tasks.find(task => task.id === id);
    return (
        <styles.Wrapper>
            <styles.TaskInfoSection>
                <IndividualTask task={task}/>
                <ActivityWidget />
            </styles.TaskInfoSection>
            <TaskSidebar task={task}/>
        </styles.Wrapper>
    )
}
