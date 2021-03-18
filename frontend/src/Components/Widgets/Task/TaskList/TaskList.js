import styles from "./Style";
import { Link } from "react-router-dom";
import IndividualTask from "../IndividualTask/IndividualTask";

export default function TaskList({tasks}) {
    return (
        <styles.Wrapper>
            <h2>Recent Projects</h2>
            {tasks.map((task) => <IndividualTask task={task} />)}
            <Link exact to="/tasks"><h2>View All Tasks</h2></Link>
        </styles.Wrapper>

    )
}