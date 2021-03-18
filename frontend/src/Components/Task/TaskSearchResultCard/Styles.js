import styled from "styled-components";

const Wrapper = styled.div`
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    margin: 20px;
    padding: 10px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
`;

const Status = styled.div`
    color: white;
    padding: 5px;
    border-radius: 10px;
    font-size: 10px;
    background-color: 
    ${props => {
        if(props.status === "Completed"){
            return "green";
        } else if(props.status === "In progress") {
            return "blue";
        } else if(props.status === "Not started") {
            return "#a18600";
        } else if(props.status === "On hold") {
            return "brown";
        }
    }}
`;

const TaskTitle = styled.h4`
    margin-bottom: 0px;
`;

const Ul = styled.ul`
    padding: 0px;
    margin-top: 0px;
`;

const Li = styled.li`
    display: inline;
    margin-right: 5px;
    font-size: 14px;
`;
const PM = styled.p`
    margin: 3px 0px 0px 0px;
    font-weight: bold;
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
    fontSize: "16px",
};

const styles = {
    Wrapper,
    Status,
    TaskTitle,
    Ul,
    Li,
    PM,
    TaskDetailBtn,
    ArrowIcon
}

export default styles;