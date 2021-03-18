import styles from "./Styles";
import InfoIcon from '@material-ui/icons/Info';

export default function ActivityItem({activity}) {
    return (
        <styles.Wrapper>
            <styles.IconHolder>
                <InfoIcon style={styles.InfoIcon}/>
                <styles.IconLine />
            </styles.IconHolder>
            <styles.InfoHolder>
                <styles.Timestamp>
                    13:34
                </styles.Timestamp>
                <styles.ActivityDescription>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
                </styles.ActivityDescription>
            </styles.InfoHolder>
        </styles.Wrapper>
    )
}
