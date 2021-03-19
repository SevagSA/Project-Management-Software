import styles from "./Styles";
import ChatSidebarMemberCard from "../ChatSidebarMemberCard/ChatSidebarMemberCard";

export default function ChatSidebar() {
    /** An obj of the latest message the current user has had
    * with another member. All members that have messaged with
    * the current user will have this object. This is used to
    * display in the chat sidbar
    */
    const messageAndMember = {
        "member": {
            "name": "Johnny",
            "profile_pic": `${process.env.PUBLIC_URL}/assets/images/profile_page.png`
        },
        "message": {
            "content": "Hey! Did you get the chance to review my work?",
            "timestamp": "02/12/21",
            "read": true,
        },
    };
    return (
        <styles.Wrapper>
            {/* TODO: for current_users_friends, <ChatSidebarMemberCard /> */}
            <ChatSidebarMemberCard messageAndMember={messageAndMember} />
            <ChatSidebarMemberCard messageAndMember={messageAndMember} />
            <ChatSidebarMemberCard messageAndMember={messageAndMember} />
            <ChatSidebarMemberCard messageAndMember={messageAndMember} />
            <ChatSidebarMemberCard messageAndMember={messageAndMember} />
            <ChatSidebarMemberCard messageAndMember={messageAndMember} />
            <ChatSidebarMemberCard messageAndMember={messageAndMember} />
            <ChatSidebarMemberCard messageAndMember={messageAndMember} />
            <ChatSidebarMemberCard messageAndMember={messageAndMember} />
            <ChatSidebarMemberCard messageAndMember={messageAndMember} />
            <ChatSidebarMemberCard messageAndMember={messageAndMember} />
            <ChatSidebarMemberCard messageAndMember={messageAndMember} />
            <ChatSidebarMemberCard messageAndMember={messageAndMember} />
        </styles.Wrapper>
    )
}
