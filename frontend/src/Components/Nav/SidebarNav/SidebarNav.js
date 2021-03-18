import SidebarNavItem from "../SidebarNavItem/SidebarNavItem"
import {SidebarNavWrapper, SidebarNavProfileHolder, ProfileImg} from "./Styles";
import profile_picture from "frontend/src/images/profile_picture.png"


import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CreateIcon from '@material-ui/icons/Create';


export default function SidebarNav() {
    return (
        <SidebarNavWrapper>
            <SidebarNavProfileHolder>
                <ProfileImg />
            </SidebarNavProfileHolder>
            <SidebarNavItem itemTitle={"Home"} icon={<HomeIcon />}/>
            <SidebarNavItem itemTitle={"Messaging"} icon={<ChatIcon />} />
            <SidebarNavItem itemTitle={"View Tasks"} icon={<AssignmentIcon />}/>
            <SidebarNavItem itemTitle={"Create Task"} icon={<CreateIcon />}/>
        </SidebarNavWrapper>
    )
}
