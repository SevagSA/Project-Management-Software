import styles from "./Styles";
import { Link } from "react-router-dom";

export default function IndividualTask({task}) {
    return (
        <Link exact to={`/tasks/${task.id}`}>
            <styles.Wrapper>
                <styles.TaskTitle>{task.title}</styles.TaskTitle>
                <p>{task.description}</p>
                <small>PM: {task.PM}</small>
                <styles.TaskStatus status={task.status}>
                    {task.status}</styles.TaskStatus>
            </styles.Wrapper>
        </Link>
    )
}
