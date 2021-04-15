import styles from "./Styles";

export default function IndividualActivity({ activity }) {

    /**
     * TODO:
     * If the acitivy is a task, have a link to the parent
     * project. If it's a project, have a link to all child
     * tasks.
     */

    /**
     * TODO
     * Based on the type of activity (check w/activity.isTask),
     * you will need to call some attributes differently
     * e.g. PM.
     * Also, make sure to indentify the user the type of
     * activity this is (task and project).
     */


    return (
        <styles.Wrapper>
            <styles.ActivityTitle>{activity.title}</styles.ActivityTitle>
            <p>{activity.description}</p>
            <small>PM: {activity.PM}</small>
            <styles.ActivityStatus status={activity.status}>
                {activity.status}</styles.ActivityStatus>
        </styles.Wrapper>
    )
}
