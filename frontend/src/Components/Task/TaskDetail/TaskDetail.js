import { useParams } from "react-router-dom";
import styles from "./Styles";
import {tasks} from "../../../DummyData";
import LargeInfoRectangle from "../../Widgets/LargeInfoRectangle/LargeInfoRectangle";
import ActivityWidget from "../../Widgets/ActivityWidget/ActivityWidget";

export default function TaskDetail() {
    const { id } = useParams();
    const task = tasks.find(task => task.id === id);
    return (
        <styles.Wrapper>
            <styles.TaskInfoSection>
                Task info section
                <LargeInfoRectangle />
                <ActivityWidget />
            </styles.TaskInfoSection>
            <styles.Sidebar>
                Sidebar
            </styles.Sidebar>
        </styles.Wrapper>
    )
}
