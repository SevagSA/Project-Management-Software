import styles from "./Styles";
import { useState } from "react";
import ChatView from "../ChatView/ChatView";
import ChartSidebar from "../ChatSidebar/ChatSidebar";

export default function ChatRoom() {
    const [chatRoomId, setChatRoomId] = useState(null);

    const handleSidebarCardClick = (e) => {
        setChatRoomId(e.currentTarget.firstChild.getAttribute("chatroomid"));
    }

    return (
        <styles.Wrapper>
            <ChartSidebar cardClickHandler={handleSidebarCardClick} />
            <ChatView chatRoomId={chatRoomId} />
        </styles.Wrapper>
    )
}