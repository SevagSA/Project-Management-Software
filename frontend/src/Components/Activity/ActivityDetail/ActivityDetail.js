import { useParams } from "react-router-dom";
import styles from "./Styles";
import { tasks } from "../../../DummyData";
import IndividualActivity from "../../Widgets/Activity/IndividualActivity/IndividualActivity";
import ActivityWidget from "../../Widgets/Notification/NotificationWidget/NotificationWidget";
import ActivitySidebar from "../../Widgets/Activity/ActivitySidebar/ActivitySidebar";

export default function ActivityDetail() {
    const { id } = useParams();
    /** TODO Change */
    const activity = tasks.find(task => task.id === id);
    return (
        <styles.Wrapper>
            {/* TODO Change */}
            <styles.ActivityInfoSection>
                {/* How will you determine isTask in this scenario? */}
                <IndividualActivity activity={activity} />
                <ActivityWidget />
            </styles.ActivityInfoSection>
            <ActivitySidebar activity={activity} />
        </styles.Wrapper>
    )
}
