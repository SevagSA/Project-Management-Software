import styles from "./Styles";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function TaskSearchResultCard({task}) {
    return (
        <styles.Wrapper>
            <styles.Status status={task.status}>{task.status}</styles.Status>
            <styles.TaskTitle>{task.title}</styles.TaskTitle>
            <small>12/03/21</small>
            <p>{task.description}</p>
            <small><u>Staff</u></small>
            <styles.PM>PM: {task.PM}</styles.PM>
            <styles.Ul>
                {task.staff.map(e => {
                    return <styles.Li>{e}</styles.Li>
                })}
            </styles.Ul>
            <Link exact to={`tasks/${task.id}`}>
                <styles.TaskDetailBtn>
                    View Task
                    <ArrowForwardIosIcon style={styles.ArrowIcon} />
                </styles.TaskDetailBtn>
            </Link>
        </styles.Wrapper>
    )
}
