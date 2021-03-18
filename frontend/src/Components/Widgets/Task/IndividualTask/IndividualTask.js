import styles from "./Styles";

export default function IndividualTask({task}) {
    return (
        <styles.Wrapper>
            <styles.TaskTitle>{task.title}</styles.TaskTitle>
            <p>{task.description}</p>
            <small>PM: {task.PM}</small>
            <styles.TaskStatus status={task.status}>
                {task.status}</styles.TaskStatus>
        </styles.Wrapper>
    )
}
