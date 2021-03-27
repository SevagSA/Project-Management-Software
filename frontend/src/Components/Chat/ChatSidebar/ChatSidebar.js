import styles from "./Styles";
import ChatSidebarMemberCard from "../ChatSidebarMemberCard/ChatSidebarMemberCard";
import { messagesAndMembers } from "../../../DummyData"

export default function ChatSidebar({ cardClickHandler }) {
    /** An obj of the latest message the current user has had
    * with another member. All members that have messaged with
    * the current user will have this object. This is used to
    * display in the chat sidbar
    */
    return (
        <styles.Wrapper>
            {/* TODO: for current_users_friends, <ChatSidebarMemberCard /> */}
            {messagesAndMembers.map(messageAndMember => {
                return (

                    <ChatSidebarMemberCard key={messageAndMember.chatRoomId}
                        messageAndMember={messageAndMember} clickHandler={cardClickHandler} />
                )
            })}
        </styles.Wrapper>
    )
}
