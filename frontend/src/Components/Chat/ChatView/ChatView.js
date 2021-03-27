import styles from "./Styles";
import { useState, useEffect } from "react";
import { chatRooms } from "../../../DummyData"
import Message from "../Message/Message";
import InfoIcon from '@material-ui/icons/Info';

export default function ChatView({ chatRoomId }) {
    // by default, return the first chatRoom
    const [chatRoom, setChatRoom] = useState(
        chatRooms.find(e => { return e.chatRoomId == 1 }));
    /**
     * With Django, you would return the entire chat room
     * (with all messages) from an API request. For now, 
     * just return the messageAndMember which contains only
     * the latest message.
     */
    useEffect(() => {
        setChatRoom(chatRooms.find(e => {
            console.log(chatRoomId === null ? 1 : chatRoomId);
            return e.chatRoomId == (chatRoomId === null ? 1 : chatRoomId)
        }))
    });
    return (
        <styles.Wrapper>
            <styles.InfoBar>
                <styles.ChatTitleAndActiveStatus>
                    {/* Django: return the memeber that != request.user */}
                    <styles.ChatTitle>{chatRoom.members[0].name}</styles.ChatTitle>
                    <styles.ActiveStatus>Active</styles.ActiveStatus>
                </styles.ChatTitleAndActiveStatus>
                <styles.ActionButtonHolder>
                    <InfoIcon style={styles.InfoIconStyles} />
                </styles.ActionButtonHolder>
            </styles.InfoBar>
            <styles.Chat>
                {chatRoom.messages.map(message => {
                    return <Message message={message} />
                })}
            </styles.Chat>
            <styles.ChatInputForm>
                <styles.ChatTextInput />
                <styles.ImageUploadInput type="file" />
                <styles.ChatSubmitInput type="submit" />
            </styles.ChatInputForm>
        </styles.Wrapper>
    )
}
