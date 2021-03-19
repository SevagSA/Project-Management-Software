import styled from "styled-components";

const Wrapper = styled.div`
    flex: 1;
    position: relative;
    margin: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 25px;
`;

const TaskStatus = styled.p`
    text-transform: uppercase;
    font-size: 12px;
    color: grey;
`;

const TaskDetailBtn = styled.button`
    position: absolute;
    bottom: 5px;
    background-color: #1727b3;
    border: none;
    color: white;
    padding: 5px;
    right: 5px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
`;

const ArrowIcon = {
    fontSize: "13px",
};

const styles = {
    Wrapper,
    TaskStatus,
    ArrowIcon,
    TaskDetailBtn
}

export default styles;