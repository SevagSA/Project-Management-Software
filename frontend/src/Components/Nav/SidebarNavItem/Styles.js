import styled from "styled-components";

const SidebarNavItemButton = styled.button`
    display: flex;
    margin-bottom: 2px;
    flex-direction: row;
    align-items: center;
    font-size: 18px;
    justify-content: start;
    border: none;
    width: 100%;
    cursor: pointer;
`;

const ItemTitle = styled.p`
    flex: 1;
    text-align: left;
    margin-left: 8px;
`;

export {SidebarNavItemButton, ItemTitle};