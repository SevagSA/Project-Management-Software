import styles from "./Styles"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function SidebarNavItem({itemTitle, icon}) {
    return (
        <div>
            <styles.SidebarNavItemButton>
                {icon}
                <styles.ItemTitle>{itemTitle}</styles.ItemTitle>
                <ArrowForwardIosIcon />
            </styles.SidebarNavItemButton>
        </div>
    )
}
