import styled from "styled-components";

const Wrapper = styled.div`
    flex: 0.70;
    display: flex;
    flex-direction: column;
`;

const InfoBar = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    flex: 0.10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    background-color: #1735bd;
    color: white;
`;

const ChatTitleAndActiveStatus = styled.div``;

const ChatTitle = styled.h3`
    margin-bottom: 1px
`;

const ActiveStatus = styled.p`
    margin-top: 1px;
    color: lightgray;
`;

const ActionButtonHolder = styled.div``;

const InfoIconStyles = {
    fontSize: "40px",
    cursor: "pointer",
};

const Chat = styled.div`
    flex: 0.85;
    overflow: scroll;
`;

const ChatInputForm = styled.form`
    flex: 0.09;
    background-color: blue;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ChatTextInput = styled.textarea`
    flex: 0.80;
    resize: vertical;
    font-size: 18px;
    font-family: 'Helvetica', 'Arial', sans-serif;
`;

const ImageUploadInput = styled.input`
    flex: 0.09;
    background
`;

const ChatSubmitInput = styled.input`
    flex: 0.05;
`;


const styles = {
    Wrapper,
    InfoBar,
    ChatTitle,
    ActionButtonHolder,
    InfoIconStyles,
    ActiveStatus,
    ChatTitleAndActiveStatus,
    Chat,
    ChatInputForm,
    ChatTextInput,
    ImageUploadInput,
    ChatSubmitInput,
}

export default styles;