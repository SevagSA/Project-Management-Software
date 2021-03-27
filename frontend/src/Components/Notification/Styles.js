import styled from "styled-components";

const NotificationIconStyle = {
    fontSize: "40px",
    cursor: "pointer",
}

const Menu = styled.div`
    position: absolute;
    right: 40px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 400px;
    z-index: 1;
    overflow: scroll;
`;

const NotificationItem = styled.a`
    margin-bottom: 30px;
    padding-bottom: 10px;
    line-height: 1.6;
    border-bottom: 1px solid;
`;

const styles = {
    NotificationIconStyle,
    Menu,
    NotificationItem
}

export default styles;