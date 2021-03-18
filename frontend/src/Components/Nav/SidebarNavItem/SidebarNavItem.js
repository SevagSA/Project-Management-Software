import {SidebarNavItemButton, ItemTitle} from "./Styles"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function SidebarNavItem({itemTitle, icon}) {
    return (
        <div>
            <SidebarNavItemButton>
                {icon}
                <ItemTitle>{itemTitle}</ItemTitle>
                <ArrowForwardIosIcon />
            </SidebarNavItemButton>
        </div>
    )
}
