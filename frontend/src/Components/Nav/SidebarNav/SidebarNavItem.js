import {SidebarNavItemWrapper} from "./Styles"
import HomeIcon from '@material-ui/icons/Home';

export default function SidebarNavItem() {
    return (
        <div>
            <SidebarNavItemWrapper>
                {/* icon */}
                <p>Home</p>
                <HomeIcon />
            </SidebarNavItemWrapper>
        </div>
    )
}
