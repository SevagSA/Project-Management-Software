import SmallSquare from "../Widgets/SmallSquare/SmallSquare";
import TaskList from "../Widgets/Task/TaskList/TaskList";
import styles from "./Styles";
import {tasks} from "../../DummyData";
export default function Home() {

    return (
        <div>
            <h1>Home</h1>
            <styles.WidgetWrapper>
                <SmallSquare numOfTasks={1} status="in progress" />
                <SmallSquare numOfTasks={13} status="completed" />
                <SmallSquare numOfTasks={6} status="Not started" />
                <SmallSquare numOfTasks={2} status="on hold" />
            </styles.WidgetWrapper>
            <styles.WidgetWrapper>
                <TaskList tasks={tasks} />
            </styles.WidgetWrapper>
        </div>
    )
}
