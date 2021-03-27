import styles from "./Styles";
import { useState } from "react";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

export default function Notification() {
    const [showMenu, setShowMenu] = useState(false)

    const handleIconClick = () => {
        setShowMenu(!showMenu)
    }
    return (
        <div>
            <NotificationsNoneIcon
                onClick={handleIconClick}
                style={styles.NotificationIconStyle} />
            { showMenu ?
                (
                    <styles.Menu>
                        {/* Django: fetch from API, loop, create NotificationItem */}
                        <styles.NotificationItem> Notification 1 Notification 1 Notification 1Notification 1Notification 1Notification 1Notification 1 </styles.NotificationItem>
                        <styles.NotificationItem> Notification 2 </styles.NotificationItem>
                        <styles.NotificationItem> Notification 3 </styles.NotificationItem>
                        <styles.NotificationItem> Notification 3 </styles.NotificationItem>
                        <styles.NotificationItem> Notification 2 </styles.NotificationItem>
                        <styles.NotificationItem> Notification 3 </styles.NotificationItem>
                        <styles.NotificationItem> Notification 3 </styles.NotificationItem>
                        <styles.NotificationItem> Notification 2 </styles.NotificationItem>
                        <styles.NotificationItem> Notification 3 </styles.NotificationItem>
                        <styles.NotificationItem> Notification 3 </styles.NotificationItem>
                        <styles.NotificationItem> Notification 2 </styles.NotificationItem>
                        <styles.NotificationItem> Notification 3 </styles.NotificationItem>
                        <styles.NotificationItem> Menu item 3 </styles.NotificationItem>
                    </styles.Menu>
                )
                : null
            }
        </div>
    )
}
