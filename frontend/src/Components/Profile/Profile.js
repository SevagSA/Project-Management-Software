import styles from "./Styles";
import { tasks } from "../../DummyData";
import ProfileCard from "../Widgets/ProfileCard/ProfileCard";
import ActivityList from "../Widgets/Activity/ActivityList/ActivityList";
import ActivityWidget from "../Widgets/Notification/NotificationWidget/NotificationWidget";

export default function Profile(/**{ member }*/) {
    // for now, the logic to filter tasks that the member is associated
    // with is not implemented:
    // 1. There's no User object.
    // 2. Will be handled by Django
    return (
        <styles.Wrapper>
            <ProfileCard />
            <styles.ProfileContentHolder>
                <ActivityWidget />
                <ActivityList activities={tasks}  /**isMemberSpecific={true}*/ />
            </styles.ProfileContentHolder>
        </styles.Wrapper>
    )
}
