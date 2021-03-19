import styles from "./Style";
import { Link } from "react-router-dom";
import IndividualTask from "../IndividualTask/IndividualTask";

export default function TaskList({ tasks, /** isMemberSpecific */ }) {
    /**
     * TODO
     * If the ``isMemberSpecific`` prop is true,
     * don't display "View All Tasks", because the passed in ``tasks``
     * will be all of the tasks of a member.
     */
    return (
        <styles.Wrapper>
            <h2>Recent Projects</h2>
            {tasks.map((task) => {
                return (
                    <Link exact to={`/tasks/${task.id}`}>
                        <IndividualTask task={task} />
                    </Link>
                )
            })}
            <Link exact to="/tasks"><h2>View All Tasks</h2></Link>
        </styles.Wrapper>

    )
}