import styles from "./Styles";

export default function Message({ message }) {
    return (
        // Django: sent={message.sender === request.user.email}
        <styles.Wrapper sent={message.sender === "Johnny"}>
            {message.message}
        </styles.Wrapper>
    )
}
