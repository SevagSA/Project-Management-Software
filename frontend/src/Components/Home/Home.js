import styles from "./Styles";
import { tasks } from "../../DummyData";
import SmallSquare from "../Widgets/SmallSquare/SmallSquare";
import ActivityList from "../Widgets/Activity/ActivityList/ActivityList";
import ActivityWidget from "../Widgets/Notification/NotificationWidget/NotificationWidget";

export default function Home() {
    const inProgressCount = tasks.filter(e => e.status === "In progress").length;
    const completedCount = tasks.filter(e => e.status === "Completed").length;
    const notStartedCount = tasks.filter(e => e.status === "Not started").length;
    const onHoldCount = tasks.filter(e => e.status === "On hold").length;

    return (
        <div>
            <h1>Home</h1>
            <styles.WidgetWrapper>
                {/* TODO fetch options from Django (setting.py) */}
                <SmallSquare numOfTasks={inProgressCount} status="in progress" />
                <SmallSquare numOfTasks={completedCount} status="completed" />
                <SmallSquare numOfTasks={notStartedCount} status="not started" />
                <SmallSquare numOfTasks={onHoldCount} status="on hold" />
            </styles.WidgetWrapper>
            <styles.WidgetWrapper>
                <ActivityWidget />
                <ActivityList activities={tasks} />
            </styles.WidgetWrapper>
        </div>
    )
}
