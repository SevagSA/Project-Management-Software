import styles from "./Style";
import { Link } from "react-router-dom";
import IndividualActivity from "../IndividualActivity/IndividualActivity";

export default function ActivityList({ activities, /** isMemberSpecific */ }) {
    /**
     * TODO
     * If the ``isMemberSpecific`` prop is true,
     * don't display "View All Activities", because the passed in
     * ``activities`` will be all of the activities of a member.
     */
    return (
        <styles.Wrapper>
            <h2>Recent Activities</h2>
            {activities.map((/** TODO Change */ activity) => {
                return (
                    <Link exact to={`/activities/${activity.id}`}>
                        <IndividualActivity activity={activity} />
                    </Link>
                )
            })}
            <Link exact to="/activities"><h2>View All</h2></Link>
        </styles.Wrapper>

    )
}