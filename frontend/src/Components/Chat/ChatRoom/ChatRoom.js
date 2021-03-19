import styles from "./Styles";
import ChatView from "../ChatView/ChatView";
import ChartSidebar from "../ChatSidebar/ChatSidebar";

export default function ChatRoom() {
    return (
        <styles.Wrapper>
            <ChartSidebar />
            <ChatView />
        </styles.Wrapper>
    )
}