import SidebarNavItem from "../SidebarNavItem/SidebarNavItem"
import {
    SidebarNavWrapper,
    SidebarNavProfileHolder,
    ProfileImg
} from "./Styles";


import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CreateIcon from '@material-ui/icons/Create';


export default function SidebarNav() {
    return (
        <SidebarNavWrapper>
            <SidebarNavProfileHolder> 
                <ProfileImg src={`${process.env.PUBLIC_URL}/assets/images/profile_page.png`} />
                <p>John Doe | Admin</p>
            </SidebarNavProfileHolder>
            <SidebarNavItem itemTitle={"Home"} icon={<HomeIcon />}/>
            <SidebarNavItem itemTitle={"Messaging"} icon={<ChatIcon />} />
            <SidebarNavItem itemTitle={"View Tasks"} icon={<AssignmentIcon />}/>
            <SidebarNavItem itemTitle={"Create Task"} icon={<CreateIcon />}/>
        </SidebarNavWrapper>
    )
}
