import styles from "./Styles";
import { useState } from "react";
import ChatSidebarMemberCard from "../ChatSidebarMemberCard/ChatSidebarMemberCard";
import { messagesAndMembers, members } from "../../../DummyData"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';


export default function ChatSidebar({ cardClickHandler }) {
    const [showMenu, setShowMenu] = useState(false);

    const handleIconClick = () => {
        setShowMenu(!showMenu)
    }

    return (
        <styles.Wrapper>
            <styles.PageOverlay active={showMenu}></styles.PageOverlay>
            <styles.SidebarTitleAndAddIcon>
                <h2>Your contacts</h2>
                <AddCircleOutlineIcon
                    onClick={handleIconClick}
                    style={styles.AddContactIcon} />

                {showMenu ?
                    (
                        <styles.CreateChatRoomMenu>
                            <CancelIcon style={styles.CancelIcon} onClick={handleIconClick} />
                            {/* Django: fetch from API, loop, create NotificationItem */}
                            <h1>Create a chat room</h1>
                            <styles.ChatRoomMenuMemberList>
                                {
                                    /* Django: fetch all memebers, if selects member that already has chat with,
                                    return/render that chatRoom */
                                }
                                {members.map(member => {
                                    return (
                                        <styles.AddMemberCard>
                                            <styles.MemeberImg src={member.profile_pic} />
                                            <styles.MemberName>Member's name</styles.MemberName>
                                            <AddCircleOutlineIcon style={styles.AddContactIcon} />
                                        </styles.AddMemberCard>
                                    )
                                })}
                            </styles.ChatRoomMenuMemberList>
                        </styles.CreateChatRoomMenu>
                    )
                    : null
                }

            </styles.SidebarTitleAndAddIcon>
            {/* TODO: for current_users_friends, <ChatSidebarMemberCard /> */}
            <styles.MemberCardHolder>
                {messagesAndMembers.map(messageAndMember => {
                    return (

                        <ChatSidebarMemberCard key={messageAndMember.chatRoomId}
                            messageAndMember={messageAndMember} clickHandler={cardClickHandler} />
                    )
                })}
            </styles.MemberCardHolder>
        </styles.Wrapper>
    )
}
