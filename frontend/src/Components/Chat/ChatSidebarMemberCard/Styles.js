import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    height: 100px;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 0px 10px;
    border-bottom: 1px solid #e8e8e8;
    cursor: pointer;
`;

const ProfilePic = styled.img`
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
`;

const ContentHolder = styled.div`
    flex: 1;
`;

const ChatTitle = styled.h4`
    font-weight: 500;
    margin-bottom: 0px;
`;

const LatestMessage = styled.p`
    margin-top: 3px;
    font-size: 14px;
    color: #616161;
`;

const ChatInfoHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ChatTimestamp = styled.p`
    color: #616161;
    font-size: 14px;
`;


const styles = {
    Wrapper,
    ProfilePic,
    ContentHolder,
    ChatTitle,
    LatestMessage,
    ChatInfoHolder,
    ChatTimestamp,
}

export default styles;