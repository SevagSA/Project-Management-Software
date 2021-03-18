import styles from "./Styles";

export default function TaskSidebar({task}) {
    return (
        <styles.Wrapper>
            <h4>Overview</h4>

            <styles.InfoDiv>
                <styles.InfoItem>
                    <p>Project Manager</p>
                    <p>{task.PM}</p>
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
                    <p>{task.status}</p>
                </styles.InfoItem>
            </styles.InfoDiv>
            <styles.ContactBtn>
                Contact Project Manager
            </styles.ContactBtn>
        </styles.Wrapper>
    )
}
