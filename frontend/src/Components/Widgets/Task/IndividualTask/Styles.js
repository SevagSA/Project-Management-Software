import styled from "styled-components";

const Wrapper = styled.div`
    background-color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    margin-bottom: 2px;
    padding: 10px;
`;

const TaskTitle = styled.h4`
    margin: 0;
`;

const TaskStatus = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 5%;
    color: white;
    padding: 3px;
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

const styles = {
    Wrapper,
    TaskTitle,
    TaskStatus
};

export default styles;