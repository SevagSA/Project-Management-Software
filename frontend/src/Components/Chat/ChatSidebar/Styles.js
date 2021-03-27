import styled from "styled-components";

const Wrapper = styled.div`
    flex: 0.30;
    border-right: 1px solid;
`;

const SidebarTitleAndAddIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;
`;

const AddContactIcon = {
    cursor: "pointer",
    fontSize: "30px",
}

const MemberCardHolder = styled.div`
    overflow: scroll;
    height: 92%;
`;

const CreateChatRoomMenu = styled.div`
    position: absolute;
    left: 36vw;
    top: 20vh;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 50vw;
    height: 50vh;
    z-index: 1;
`;

const PageOverlay = styled.div`
    height: 100%;
    width: 0%;
    position: absolute; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.8);
    ${({ active }) => active && `
        width: 100%;
    `}
`;

const CancelIcon = {
    cursor: "pointer",
    position: "absolute",
    right: "30px",
    fontSize: "30px",
}

const ChatRoomMenuMemberList = styled.div`
    margin: 30px 0px;
    overflow: scroll;
`;

const AddMemberCard = styled.div`
    display: flex;
    background: #f1f1f1;
    align-items: center;
    padding: 0px 10px;
    padding-bottom: 20px;
    border-bottom: 1px solid;
    margin-bottom: 10px;
`;

const MemeberImg = styled.img`
    width: 50px;
    border-radius: 50%;
    margin-right: 13px;
`;

const MemberName = styled.h3`
    flex: 1;
`;

const styles = {
    Wrapper,
    SidebarTitleAndAddIcon,
    AddContactIcon,
    MemberCardHolder,
    CreateChatRoomMenu,
    PageOverlay,
    CancelIcon,
    ChatRoomMenuMemberList,
    AddMemberCard,
    MemeberImg,
    MemberName
}

export default styles;