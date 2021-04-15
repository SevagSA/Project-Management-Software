import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    height: 90vh;
`;

const ActivityInfoSection = styled.div`
    flex: .70;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;

const styles = {
    Wrapper,
    ActivityInfoSection,
};

export default styles;