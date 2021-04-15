import styles from "./Styles";
import InfoIcon from '@material-ui/icons/Info';

export default function NotificationItem({notification}) {
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
                
                <styles.NotificationDescription>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
                </styles.NotificationDescription>
            </styles.InfoHolder>
        </styles.Wrapper>
    )
}
