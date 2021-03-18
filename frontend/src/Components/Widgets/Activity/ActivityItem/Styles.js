import styled from "styled-components";

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: stretch;
    align-items: center;
    padding: 10px 10px 0px 10px;
`;

const IconHolder = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const IconLine = styled.div`
    background-color: #68AF87;
    width: 4px;
    height: 100%;
`;

const InfoHolder = styled.div`
    flex: 1;
    margin-left: 20px;
`;

const Timestamp = styled.small`
    color: #68AF87;
    margin-bottom: 2px;
`;

const ActivityDescription = styled.p`
    margin-top: 2px;
`;

const InfoIcon = {
    color: "#68AF87",
};

const style = {
    Wrapper,
    IconHolder,
    IconLine,
    InfoHolder,
    Timestamp,
    ActivityDescription,
    InfoIcon
}

export default style;