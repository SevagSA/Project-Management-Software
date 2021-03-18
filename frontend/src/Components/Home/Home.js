import SmallSquare from "../Widgets/SmallSquare/SmallSquare";
import TaskList from "../Widgets/Task/TaskList/TaskList";
import {WidgetWrapper} from "./Styles";

export default function Home() {
    // dumy data until Django is setup
    const tasks = [
        {
            "id": "1",
            "title": "Frontend sprint",
            "status": "Completed",
            "description": "Lorem ipsum dolor sit amet.",
            "PM": "Johnny"
        },
        {
            "id": "2",
            "title": "Frontend sprint2",
            "status": "In progress",
            "description": "Lorem ipsum dolor sit amet.2",
            "PM": "Johnny2"
        },
        {
            "id": "3",
            "title": "Frontend sprint3",
            "status": "Not started",
            "description": "Lorem ipsum dolor sit amet.3",
            "PM": "Johnny3"
        },
        {
            "id": "4",
            "title": "Frontend sprint4",
            "status": "On hold",
            "description": "Lorem ipsum dolor sit amet.4",
            "PM": "Johnny4"
        },

    ];
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
