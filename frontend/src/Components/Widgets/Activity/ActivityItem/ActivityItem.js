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

                </styles.Timestamp>
                <styles.ActivityDescription>
                    
                </styles.ActivityDescription>
            </styles.InfoHolder>
        </styles.Wrapper>
    )
}
