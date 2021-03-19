import styles from "./Styles";
import CheckIcon from '@material-ui/icons/Check';

export default function ChatSidebarMemberCard({ messageAndMember }) {
    const hasRead = messageAndMember.message.read;
    // const messageAndMember = {
    //     "member": {
    //         "name": "Johnny",
    //         "profile_pic": `${process.env.PUBLIC_URL}/assets/images/profile_page.png`
    //     },
    //     "message": {
    //         "content": "Hey! Did you get the chance to review my work?",
    //         "timestamp": "02/12/21",
    //         "read": true,
    //     },
    // };
    return (
        <styles.Wrapper>
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
