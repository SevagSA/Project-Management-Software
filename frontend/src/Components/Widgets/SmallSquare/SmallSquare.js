import styles from "./Styles";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


export default function SmallSquare({status, numOfTasks}) {
    return (
        <styles.Wrapper>
            <styles.TaskStatus>tasks {status}</styles.TaskStatus>
            <p>{numOfTasks}</p>
            <Link exact to={`/tasks?status=${status}`}>
            <styles.TaskDetailBtn>
                View &quot;{status}&quot; tasks
                <ArrowForwardIosIcon style={styles.ArrowIcon}/>
            </styles.TaskDetailBtn>
            </Link>
        </styles.Wrapper>
    )
}