import styled from "styled-components";

const SidebarNavWrapper = styled.aside`
    height: 100%;
    width: 200px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #f7f7f7;
    overflow-x: hidden;
    padding-top: 20px;

`;

const SidebarNavProfileHolder = styled.div`
    height: 150px;
`;

const ProfileImg = styled.image`
    border: 20px;
`;

export {SidebarNavWrapper, SidebarNavProfileHolder, ProfileImg};