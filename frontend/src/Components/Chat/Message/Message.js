import styles from "./Styles";

export default function Message({ message }) {
    return (
        // Django: sent={message.sender === request.user.username}
        <styles.Wrapper sent={message.sender === "Johnny"}>
            {message.message}
        </styles.Wrapper>
    )
}
