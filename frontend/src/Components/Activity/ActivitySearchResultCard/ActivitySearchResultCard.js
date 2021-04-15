import styles from "./Styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function ActivitySearchResultCard({ activity }) {
    const [isTask, setIsTask] = useState(activity.isTask)
    const activity_name = isTask ? "task" : "project";
    const activity_plural_name = isTask ? "tasks" : "projects"

    /**
     * TODO
     * Based on the type of activity (check w/isTask),
     * you will need to call some attributes differently
     * e.g. PM.
     * Also, make sure to indentify the user the type of
     * activity this is (task and project).
     * If it's a task, have a link to the parent project.
     */

    return (
        <styles.Wrapper>
            <styles.Status status={activity.status}>{activity.status}</styles.Status>
            <styles.ActivityTitle>{activity.title}</styles.ActivityTitle>
            <small>12/03/21</small>
            <p>{activity.description}</p>
            <small><u>Staff</u></small>
            <styles.PM>PM: {activity.PM}</styles.PM>
            <styles.Ul>
                {activity.staff.map(e => {
                    return <styles.Li>{e}</styles.Li>
                })}
            </styles.Ul>
            <Link exact to={`activities/${activity.id}`}>
                <styles.ActivityDetailBtn>
                    View activity <ArrowForwardIosIcon style={styles.ArrowIcon} />
                </styles.ActivityDetailBtn>
            </Link>
        </styles.Wrapper>
    )
}
