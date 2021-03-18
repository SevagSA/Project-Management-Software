import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    height: 90vh;
`;

const TaskInfoSection = styled.div`
    flex: .70;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
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