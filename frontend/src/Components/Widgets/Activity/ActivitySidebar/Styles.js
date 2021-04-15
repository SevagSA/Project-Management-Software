import styled from "styled-components";

const Wrapper = styled.aside`
    background-color: white;
    flex: .30;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 20px;
`;

const InfoDiv = styled.div`
    margin-bottom: 30px;
    border-bottom: 1px solid grey;
    display: flex;
    flex-direction: column;
`;

const InfoItem = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ContactBtn = styled.button`
    background-color: #1727b3;
    border: none;
    color: white;
    width: 100%;
    height: 35px;
    font-size: 18px;
    border-radius: 10px;
    cursor: pointer;
`;

const styles = {
    Wrapper,
    InfoDiv,
    InfoItem,
    ContactBtn
}

export default styles;