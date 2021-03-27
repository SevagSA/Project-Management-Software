import styles from "./Styles";
import CheckIcon from '@material-ui/icons/Check';


export default function ChatSidebarMemberCard({ messageAndMember, clickHandler }) {
    const hasRead = messageAndMember.message.read;
    return (
        <styles.Wrapper onClick={clickHandler}>
            <span chatroomid={messageAndMember.chatRoomId}></span>
            <styles.ProfilePic src={messageAndMember.member.profile_pic} />
            <styles.ContentHolder>
                <styles.ChatTitle>{messageAndMember.member.name}</styles.ChatTitle>
                <styles.LatestMessage>
                    {messageAndMember.message.content}
                </styles.LatestMessage>
            </styles.ContentHolder>
            <styles.ChatInfoHolder>
                <styles.ChatTimestamp>
                    {messageAndMember.message.timestamp}
                </styles.ChatTimestamp>
                <CheckIcon style={{ color: (hasRead ? "green" : "grey") }} />
            </styles.ChatInfoHolder>
        </styles.Wrapper>
    )
}
