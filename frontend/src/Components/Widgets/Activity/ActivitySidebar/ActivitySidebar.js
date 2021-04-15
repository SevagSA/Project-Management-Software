import styles from "./Styles";

export default function ActivitySidebar({ activity }) {

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
            <h4>Overview</h4>

            <styles.InfoDiv>
                <styles.InfoItem>
                    <p>Project Manager</p>
                    <p>{activity.PM}</p>
                </styles.InfoItem>

                <styles.InfoItem>
                    <p>Staff</p>
                    <p>Tony, Margos, Alex</p>
                </styles.InfoItem>
            </styles.InfoDiv>

            <styles.InfoDiv>
                <styles.InfoItem>
                    <p>Start</p>
                    <p>14/03/21</p>
                </styles.InfoItem>

                <styles.InfoItem>
                    <p>End</p>
                    <p>14/05/21</p>
                </styles.InfoItem>
            </styles.InfoDiv>

            <styles.InfoDiv>
                <styles.InfoItem>
                    <p>Status</p>
                    <p>{activity.status}</p>
                </styles.InfoItem>
            </styles.InfoDiv>
            <styles.ContactBtn>
                Contact Project Manager
            </styles.ContactBtn>
        </styles.Wrapper>
    )
}
