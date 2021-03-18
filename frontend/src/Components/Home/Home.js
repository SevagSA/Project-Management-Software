import SmallSquare from "../Widgets/SmallSquare/SmallSquare";
import TaskList from "../Widgets/Task/TaskList/TaskList";
import {WidgetWrapper} from "./Styles";
import {tasks} from "../../DummyData";
export default function Home() {

    return (
        <div>
            <h1>Home</h1>
            <WidgetWrapper>
                <SmallSquare numOfTasks={1} status="in progress" />
                <SmallSquare numOfTasks={13} status="completed" />
                <SmallSquare numOfTasks={6} status="Not started" />
                <SmallSquare numOfTasks={2} status="on hold" />
            </WidgetWrapper>
            <WidgetWrapper>
                <TaskList tasks={tasks} />
            </WidgetWrapper>
        </div>
    )
}
