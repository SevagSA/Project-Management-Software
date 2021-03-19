import styles from "./Styles";
import { tasks } from "../../DummyData";
import { Link } from "react-router-dom";
import SmallSquare from "../Widgets/SmallSquare/SmallSquare";
import TaskList from "../Widgets/Task/TaskList/TaskList";
import ActivityWidget from "../Widgets/Activity/ActivityWidget/ActivityWidget";

export default function Home() {
    const inProgressCount = tasks.filter(e => e.status === "In progress").length;
    const completedCount = tasks.filter(e => e.status === "Completed").length;
    const notStartedCount = tasks.filter(e => e.status === "Not started").length;
    const onHoldCount = tasks.filter(e => e.status === "On hold").length;

    return (
        <div>
            <h1>Home</h1>
            <styles.WidgetWrapper>
                <SmallSquare numOfTasks={inProgressCount} status="in progress" />
                <SmallSquare numOfTasks={completedCount} status="completed" />
                <SmallSquare numOfTasks={notStartedCount} status="not started" />
                <SmallSquare numOfTasks={onHoldCount} status="on hold" />
            </styles.WidgetWrapper>
            <styles.WidgetWrapper>
                <ActivityWidget />
                <TaskList tasks={tasks} />
            </styles.WidgetWrapper>
        </div>
    )
}
