import styled from "styled-components";

const SidebarNavWrapper = styled.aside`
    height: 100%;
    width: 200px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #1735bd;
    overflow-x: hidden;
    padding-top: 20px;

`;

const SidebarNavProfileHolder = styled.div`
    min-height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProfilePic = styled.img`
    border-radius: 50%;
    width: 60%;
    height: 60%;
`;

const User = styled.p`
    color: white;
`;

const styles = {
    SidebarNavWrapper,
    SidebarNavProfileHolder,
    ProfilePic,
    User
};

export default styles;