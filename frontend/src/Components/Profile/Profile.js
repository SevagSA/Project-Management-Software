import styles from "./Styles";
import { tasks } from "../../DummyData";
import ProfileCard from "../Widgets/ProfileCard/ProfileCard";
import TaskList from "../Widgets/Task/TaskList/TaskList";
import ActivityWidget from "../Widgets/Activity/ActivityWidget/ActivityWidget";

export default function Profile(/**{ member }*/) {
    // for now, the logic to filter tasks that the member is associated
    // with is not implemented:
    // 1. There's not User object.
    // 2. Will be handled by Django
    return (
        <styles.Wrapper>
            <ProfileCard />
            <styles.ProfileContentHolder>
                <ActivityWidget />
                <TaskList tasks={tasks} /**isMemberSpecific={true}*/ />
            </styles.ProfileContentHolder>
        </styles.Wrapper>
    )
}
