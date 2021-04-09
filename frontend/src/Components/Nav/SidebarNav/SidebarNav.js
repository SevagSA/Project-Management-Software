import SidebarNavItem from "../SidebarNavItem/SidebarNavItem"
import styles from "./Styles";
import { Link } from "react-router-dom";

import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CreateIcon from '@material-ui/icons/Create';
import PersonIcon from '@material-ui/icons/Person';


export default function SidebarNav() {
    return (
        <styles.SidebarNavWrapper>
            <styles.SidebarNavProfileHolder>
                <styles.ProfilePic src={`${process.env.PUBLIC_URL}/assets/images/profile_page.png`} />
                <styles.User>John Doe | Admin</styles.User>
            </styles.SidebarNavProfileHolder>
            <Link exact to="/"><SidebarNavItem itemTitle={"Home"} icon={<HomeIcon />} /></Link>
            <Link exact to="/chat"><SidebarNavItem itemTitle={"Chat"} icon={<ChatIcon />} /></Link>
            <Link exact to="/tasks"><SidebarNavItem itemTitle={"View Tasks"} icon={<AssignmentIcon />} /></Link>
            <Link exact to="/members"><SidebarNavItem itemTitle={"View Members"} icon={<PersonIcon />} /></Link>
            <Link exact to="/create-task"><SidebarNavItem itemTitle={"Create Task"} icon={<CreateIcon />} /></Link>
        </styles.SidebarNavWrapper>
    )
}
