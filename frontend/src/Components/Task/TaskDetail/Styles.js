import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    height: 90vh;
`;

const TaskInfoSection = styled.div`
    background-color: blue;
    flex: .70;
    display: flex;
    flex-direction: column;
`;
const Sidebar = styled.aside`
    background-color: pink;
    flex: .30;
`;

const styles = {
    Wrapper,
    TaskInfoSection,
    Sidebar
};

export default styles;