import styles from "./Styles";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


export default function SmallSquare({status, numOfTasks}) {
    return (
        <styles.Wrapper>
            <styles.TaskStatus>tasks {status}</styles.TaskStatus>
            <p>{numOfTasks}</p>
            <ArrowForwardIosIcon style={styles.ArrowIcon}/>
        </styles.Wrapper>
    )
}