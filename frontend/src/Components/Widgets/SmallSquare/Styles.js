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

const ArrowIcon = {
    position: "absolute",
    right: "5",
    bottom: "5",
    fontSize: "16px",
};

const styles = {
    Wrapper,
    TaskStatus,
    ArrowIcon
}

export default styles;