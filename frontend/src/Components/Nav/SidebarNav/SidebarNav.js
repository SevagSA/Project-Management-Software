import SidebarNavItem from "../SidebarNavItem/SidebarNavItem"
import styles from "./Styles";
import { Link } from "react-router-dom";

import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CreateIcon from '@material-ui/icons/Create';


export default function SidebarNav() {
    return (
        <styles.SidebarNavWrapper>
            <styles.SidebarNavProfileHolder>
                <styles.ProfilePic src={`${process.env.PUBLIC_URL}/assets/images/profile_page.png`} />
                <styles.Username>John Doe | Admin</styles.Username>
            </styles.SidebarNavProfileHolder>
            <Link exact to="/"><SidebarNavItem itemTitle={"Home"} icon={<HomeIcon />} /></Link>
            <Link exact to="/chat"><SidebarNavItem itemTitle={"Chat"} icon={<ChatIcon />} /></Link>
            <Link exact to="/tasks"><SidebarNavItem itemTitle={"View Tasks"} icon={<AssignmentIcon />} /></Link>
            <Link exact to="/create-task"><SidebarNavItem itemTitle={"Create Task"} icon={<CreateIcon />} /></Link>
        </styles.SidebarNavWrapper>
    )
}
